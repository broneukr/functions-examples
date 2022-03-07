export async function onRequest({ request,env }) {
    const res = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await res.json();
    const info = JSON.stringify(data.value);
    const id = data.id

    console.log(data.id)

    // push value to kv store, use id as key and value as value 
    await env.jokes.put(id,info);
    console.log("here ")
    return new Response(info, null, 2);
  }