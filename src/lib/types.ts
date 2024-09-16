export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	titleEnglish: string;
	author: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
