export const toDataURL2 = (
  url: string,
  name: string,
  isBackend: boolean = false,
  fetchFunc?: Function
) => {
  let apiCaller: Function;
  let convertCall = false;
  if (typeof fetchFunc == "function") {
    apiCaller = fetchFunc;
    convertCall = true;
  } else {
    apiCaller = fetch;
  }
  return apiCaller(url)
    .then((response: any) => {
      if (convertCall) {
        return response;
      }
      if (isBackend) {
        return response.arrayBuffer();
      } else {
        return response.blob();
      }
    })
    .then((res: any) => {
      if (convertCall) {
        return res;
      }
      if (isBackend) {
        // return Buffer.from(res)
        return res;
      } else {
        return new File([res], name);
      }
    })
    .catch((err: any) => {
      throw err;
    });
};
