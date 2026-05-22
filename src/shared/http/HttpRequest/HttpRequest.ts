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

let sessionId: string | null = null;

export async function connectToTransmission<T>(
  method: string,
  args?: Record<string, any>
): Promise<RpcResponse<T>> {
  const res = await fetch(enumConst.BASE_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(sessionId && { 'X-Transmission-Session-Id': sessionId }),
    },
    body: JSON.stringify({ method, arguments: args }),
  });

  if (res.status === 409) {
    const newSessionId = res.headers.get('X-Transmission-Session-Id');
    if (!newSessionId) throw new Error('No session id');
    sessionId = newSessionId;
    return connectToTransmission<T>(method, args);
  }

  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  const data: RpcResponse<T> = await res.json();

  if (data.result !== 'success') throw new Error(data.result);

  return data;
}