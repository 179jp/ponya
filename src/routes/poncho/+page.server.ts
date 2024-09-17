import type { PonchoPost } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts/poncho');
	const posts: PonchoPost[] = await response.json();
	return { posts };
}
