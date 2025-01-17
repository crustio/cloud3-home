import { AxiosResponse } from "axios";
import { IS_DEV, IS_TEST } from "./env";
import { W3BucketMetadata } from "./type";
import { DomainRef } from "./hooks/useConfigDomain";

export function genUrl(path: `/${string}`) {
  let base = `https://api.${DomainRef.value}`;
  if (IS_DEV) base = `https://beta-api.${DomainRef.value}`;
  if (IS_TEST) base = `https://test-api.${DomainRef.value}`;
  return `${base}${path}`;
}

export function pinUrl(path: `/${string}`) {
  let base = `https://pin.${DomainRef.value}`;
  if (IS_DEV) base = `https://beta-pin.${DomainRef.value}`;
  if (IS_TEST) base = `https://test-pin.${DomainRef.value}`;
  return `${base}${path}`;
}

export interface Res<T> {
  code: number;
  message: string;
  data: T;
}

export function getResData<T>(res: AxiosResponse<Res<T>>): T {
  if (res.data.code === 200) return res.data.data as T;
  throw { _type: "ResError", ...res.data };
}

export interface GenIPNS {
  ipnsId: string;
  uuid: string;
}

export interface MintState {
  ipnsId: string;
  mintState: number; // 6: success;
  metadata?: W3BucketMetadata;
  metadataCid: string;
  metadataTxHash: string;
  mintTxHash: string;
  tokenId: string;
}

export interface BucketDTO {
  ipnsId: string;
  metadata: W3BucketMetadata;
  metadataCid: string;
  metadataTxHash: string;
  mintTxHash: string;
  tokenId: string;
  fileCount: number;
  maxStorageSize: number;
  usedStorageSize: number;
  mintTimestamp: number;
}
