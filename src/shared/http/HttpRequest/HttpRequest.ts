import { enumConst } from "@/shared/const/const";

export interface TransmissionConfig {
  username?: string;
  password?: string;
}

export type RpcResponse<T> = {
  result: T;
  jsonrpc: string;
  id: string;
  error?: { code: number; message: string };
};

let sessionId: string | null = null;

export async function connectToTransmission<T>(
  method: string,
  args?: Record<string, any>
): Promise<T> {
  const res = await fetch(enumConst.BASE_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(sessionId && { 'X-Transmission-Session-Id': sessionId }),
    },
    body: JSON.stringify({ 
      id: "webui",
      jsonrpc : "2.0",
      method, 
      params: args 
    }),
  });

  if (res.status === 409) {
    const newSessionId = res.headers.get('X-Transmission-Session-Id');
    if (!newSessionId) throw new Error('No session id');
    sessionId = newSessionId;

    return connectToTransmission<T>(method, args);
  }

  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

  const data: RpcResponse<T> = await res.json();

  if (data.error) throw new Error(data.error.message);

  return data.result;
}