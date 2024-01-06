export const toDataURL2 = (
  url: string,
  name: string,
  isBackend: boolean = false
) =>
  fetch(url)
    .then((response: any) => {
      if (isBackend) {
        return response.arrayBuffer();
      } else {
        return response.blob();
      }
    })
    .then((res) => {
      if (isBackend) {
        // return Buffer.from(res)
        return res;
      } else {
        return new File([res], name);
      }
    })
    .catch((err) => {
      throw err;
    });
