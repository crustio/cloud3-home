import { BucketDTO } from "@lib/http";
import { GatewayBase2, SupportChain } from "./../config";

import algoWallet from "@lib/algorand/algoWallet";
import algodClient from "@lib/algorand/algodClient";
import { W3BucketMetadata } from "@lib/type";
import axios from "axios";
import { sumBy } from "lodash";
import { useAsync } from "react-use";
import { useAccount } from "wagmi";
import { useW3BucketAbi } from "./useW3BucketAbi";

export async function getFileHistory(ipns: string) {
  try {
    const cid = (
      await axios.get<{ Path: string }>(
        `${GatewayBase2}/api/v0/name/resolve?arg=${ipns}`
      )
    ).data;
    const fileList = (
      await axios.get<any[]>(`${GatewayBase2}/${cid.Path}`)
    ).data;
    return fileList;
  } catch (error) {
    return [];
  }
}

export function useBuckets() {
  const { address, chain } = useAccount();
  const w3b = useW3BucketAbi();
  const isAlgoConnected = algoWallet.isConnected();
  return useAsync(async () => {
    try {
      if (w3b && address && chain && SupportChain.find(item => item.id == chain.id)) {
        const count = parseInt((await w3b.balanceOf(address)).toString());
        const items: BucketDTO[] = [];
        for (let index = 0; index < count; index++) {
          const tokenId = await w3b.tokenOfOwnerByIndex(
            address,
            BigInt(index)
          );
          const tokenUri = await w3b.tokenURI(tokenId);
          const metadata = (
            await axios.get<W3BucketMetadata>(
              tokenUri.replace("ipfs://", `${GatewayBase2}/ipfs/`)
            )
          ).data;
          const ipns = metadata.file_history.replace("ipns://", "");
          const fileList = await getFileHistory(ipns);

          // const fileList = (
          //     await axios.get<>(metadata.file_history.)
          // )
          const trait = metadata.attributes.find(
            (item) => item.trait_type === "CapcityInGb"
          );
          const used = sumBy(fileList, "size");
          items.push({
            ipnsId: metadata.file_history.replace("ipns://", ""),
            metadata,
            metadataCid: tokenUri.replace("ipfs://", ""),
            maxStorageSize: new Number(trait).valueOf() * 1024 * 1024 * 1024,
            usedStorageSize: used,
            metadataTxHash: "",
            mintTxHash: "",
            tokenId: tokenId.toString(),
            mintTimestamp: 0,
            fileCount: fileList.length,
          });
        }
        return items;
      } else if (isAlgoConnected) {
        return getAlgoBuckets();
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  }, [address, chain, isAlgoConnected]);
}

export async function getAlgoBuckets() {
  const account = await algodClient.accountInformation(algoWallet.account);
  const items: BucketDTO[] = [];
  for (const asset of account['assets']) {
    if (asset['amount'] === 0) continue;
    const tokenId = asset['asset-id'];
    const tokenInfo = await algodClient.getAssetByID(tokenId);
    const tokenUri = tokenInfo['params']['url'];
    const metadata = (
      await axios.get<W3BucketMetadata>(
        tokenUri.replace("ipfs://", `${GatewayBase2}/ipfs/`)
      )
    ).data;
    const ipns = metadata.file_history.replace("ipns://", "");
    const fileList = await getFileHistory(ipns);

    // const fileList = (
    //     await axios.get<>(metadata.file_history.)
    // )
    const trait = metadata.attributes.find(
      (item) => item.trait_type === "CapcityInGb"
    );
    const used = sumBy(fileList, "size");
    items.push({
      ipnsId: metadata.file_history.replace("ipns://", ""),
      metadata,
      metadataCid: tokenUri.replace("ipfs://", ""),
      maxStorageSize: new Number(trait).valueOf() * 1024 * 1024 * 1024,
      usedStorageSize: used,
      metadataTxHash: "",
      mintTxHash: "",
      tokenId: tokenId.toString(),
      mintTimestamp: 0,
      fileCount: fileList.length,
    });
  }
  return items;
}