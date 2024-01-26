import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import ReactRelay from 'react-relay';
import { createEnvironment } from '../src/relay/relayEnvironment';

const { RelayEnvironmentProvider } = ReactRelay;

const environment = createEnvironment();

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <RelayEnvironmentProvider environment={environment}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </RelayEnvironmentProvider>
      </body>
    </html>
  );
}
