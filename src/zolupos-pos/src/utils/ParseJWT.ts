import { Buffer } from "buffer";

export const parseJWT = (Token: string) => {
  let base = Token.split(".")[1];
  let payload = Buffer.from(base, "base64");
  return JSON.parse(payload.toString());
};
