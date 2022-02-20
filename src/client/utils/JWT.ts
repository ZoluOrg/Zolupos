export const parseJwt = (token:string) => {
	let base = token.split(".")[1];
	let payload = Buffer.from(base,"base64");
	return JSON.parse(payload.toString());	
}