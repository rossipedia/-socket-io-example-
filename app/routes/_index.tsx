import type { MetaFunction } from '@remix-run/node';
import { useContext } from 'react';
import { WSContext } from '~/ws.context';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const socket = useContext(WSContext);

  const ping = () => {
    socket?.emit('ping', 'Hello from the client!');
  };

  return (
    <div className="font-sans p-4 flex flex-col gap-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <div className="w-[200px] flex flex-col gap-2">
        Open your browser console to see the message from the server.
        <button
        className="bg-slate-300 border-solid border border-slate-500"
          onClick={() => {
            ping();
          }}
        >
          Send Ping
        </button>
      </div>
    </div>
  );
}
