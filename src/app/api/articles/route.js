export async function GET(request) {

  const articles = await fetch('https://api.deschide.local/')
  console.log(request)
  return new Response('Hello, Articles API!')
}