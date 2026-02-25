export async function onRequest(context) {
  const url = new URL(context.request.url);
  // Alleen de hoofddomein pages.dev doorverwijzen, NIET preview-branches
  if (url.hostname === 'geprompt.pages.dev') {
    return Response.redirect('https://geprompt.nl' + url.pathname, 301);
  }
  return await context.next();
}
