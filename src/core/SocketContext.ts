import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { connectWS } from '@utils/Socket';

export function useSocket(wsUrl: string, namespace?: string, token?: string) {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const socketIo = connectWS(wsUrl, namespace, token);
    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return socket;
}
