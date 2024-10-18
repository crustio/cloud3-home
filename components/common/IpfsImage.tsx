// import * as VF from "@helia/verified-fetch";
import { GatewayBase } from "@lib/config";
import { CSSProperties } from "react";
import { useAsyncRetry } from "react-use";

export function IpfsImage(p: { className?: string; style?: CSSProperties; cid: string }) {
  const res = useAsyncRetry(async () => {
    const gateways = [GatewayBase, "https://gw.crust-gateway.com", "https://gw.crust-gateway.xyz"];
    const mcid = p.cid.startsWith("ipfs://") ? p.cid.replace("ipfs://", "") : p.cid;
    const response = await Promise.race(gateways.map((gateway) => fetch(`${gateway}/ipfs/${mcid}`)));
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
