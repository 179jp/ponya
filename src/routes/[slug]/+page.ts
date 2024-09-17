import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		console.log(params);
		const post = await import(`../../posts/${params.slug}.svx`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
