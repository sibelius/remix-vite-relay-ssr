import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import IndexQuery from "./__generated__/IndexQuery.graphql";
import { getPreloadedQuery } from "../../src/relay/getPreloadedQuery";
import { useLoaderData } from "@remix-run/react";
import ReactRelay from 'react-relay';

const { usePreloadedQuery, PreloadedQuery, graphql, useRelayEnvironment } = ReactRelay;

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const rootQuery = await getPreloadedQuery(IndexQuery, {});

  return json({
    rootQuery,
  });
};

export default function Index() {
  const loaderData = useLoaderData();

  const environment = useRelayEnvironment();

  const queryId = loaderData.rootQuery.params.id || loaderData.rootQuery.params.text;
  const params = loaderData.rootQuery.params;
  const variables = loaderData.rootQuery.variables;

  const rootQuery = {
    environment,
    fetchKey: queryId,
    fetchPolicy: "store-or-network",
    isDisposed: false,
    name: params.name,
    kind: "PreloadedQuery",
    variables,
  };

  const data = usePreloadedQuery(graphql`
  query IndexQuery {
    version
  }
`, rootQuery);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Version: {data.version}</h1>
    </div>
  );
}
