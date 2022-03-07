export async function OnRequest({ request, env }) {
	console.log("here 2")
	const value = await env.jokes.get("\"o8a2hwedsl229fyvwikkxq\"");
	console.log("here 3 ")
	if (value === null) {
		return new Response('Value not found', { status: 404 });
	}
	

	return new Response(value);
}
