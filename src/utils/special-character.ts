export const specialCharacterConverter= function (str: string) {
  return str
    .replace(/\&/g, "&amp;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;");
};