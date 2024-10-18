import { createVerifiedFetch, VerifiedFetch } from "@helia/verified-fetch";
import { GatewayBase } from "@lib/config";
import { CSSProperties } from "react";
import { useAsyncRetry } from "react-use";

let verifiedFetch: VerifiedFetch;

export function IpfsImage(p: { className?: string; style?: CSSProperties; cid: string }) {
  const res = useAsyncRetry(async () => {
    if (!verifiedFetch) verifiedFetch = await createVerifiedFetch({ gateways: [GatewayBase, "https://gw.crust-gateway.com", "https://gw.crust-gateway.xyz"] });
    const response = await verifiedFetch(p.cid.startsWith("ipfs://") ? p.cid : `ipfs://${p.cid}`, {});
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }, [p.cid]);
  return (
    <div className={p.className} style={p.style}>
      {Boolean(res.value) && <img className={p.className} style={p.style} src={res.value} />}
      {res.loading && <div className={`${p.className} bg-slate-500 animate-pulse`} style={p.style} />}
    </div>
  );
}
