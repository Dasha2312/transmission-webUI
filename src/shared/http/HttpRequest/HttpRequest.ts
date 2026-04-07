import { enumConst } from "@/shared/const/const";

export interface TransmissionConfig {
  username?: string;
  password?: string;
}

export type RpcRequest = {
  method: string;
  arguments?: Record<string, any>;
};

export type RpcResponse<T> = {
  result: string;
  arguments: T;
};

export async function connectToTransmission() {
  let sessionId: string | null = null;

  const baseRequest = async <T>(body: RpcRequest): Promise<RpcResponse<T>> => {
    const res = await fetch(enumConst.BASE_URL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(sessionId && { 'X-Transmission-Session-Id': sessionId }),
      },
      body: JSON.stringify(body),
    });

    if (res.status === 409) {
      const newSessionId = res.headers.get('X-Transmission-Session-Id');
      if (!newSessionId) throw new Error('No session id');
      sessionId = newSessionId;
      return baseRequest<T>(body);
    }

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data: RpcResponse<T> = await res.json();
    if (data.result !== 'success') throw new Error(data.result);

    return data;
  };

  const call = <T>(method: string, args?: Record<string, any>) =>
    baseRequest<T>({ method, arguments: args });

  const addTorrent = (torrent: string) => call('torrent-add', { filename: torrent });
  const getTorrents = () => call<{ torrents: any[] }>('torrent-get', { fields: ['id','name','status','percentDone'] });

  return { call, addTorrent, getTorrents };
}