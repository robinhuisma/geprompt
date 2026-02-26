export async function onRequest(context) {
  const clientId = "Ov23liPMvYsKTnsmGfp8";
  const scope = "repo,user";
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`;
  return Response.redirect(authUrl, 301);
}
