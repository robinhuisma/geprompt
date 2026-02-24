export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname.endsWith('.pages.dev')) {
    return Response.redirect('https://geprompt.nl' + url.pathname, 301);
  }
  return await context.next();
}
