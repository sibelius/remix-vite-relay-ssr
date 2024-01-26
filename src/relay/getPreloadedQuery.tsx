import { networkFetch } from './network';
import { ConcreteRequest, Variables } from 'relay-runtime';

const getRequestEsm = (request: ConcreteRequest) => {
  if (request.default) {
    return request.default;
  }

  return request;
}

export async function getPreloadedQuery(
  request: ConcreteRequest,
  variables: Variables,
) {
  const safeRequest = getRequestEsm(request);

  // fix this
  const headers = {
  //   Cookie: ctx.req.headers.cookie,
  }

  const response = await networkFetch(safeRequest.params, variables, headers);
  return {
    params: safeRequest.params,
    variables,
    response,
  };
}
