export type Categories = 'sveltekit' | 'svelte';
export type Lead = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	titleEnglish: string;
	author: string;
	slug: string;
	description: string;
	lead: Lead[];
	date: string;
	categories: Categories[];
	colorTheme: string;
	photo: string;
	photoDec: string;
	published: boolean;
};

export type PonchoPost = {
	title: string;
	titleEnglish: string;
	author: string;
	slug: string;
	description: string;
	lead: Lead[];
	issueNumber: number;
	date: string;
	categories: Categories[];
	colorTheme: string;
	photo: string;
	photoDec: string;
	published: boolean;
};
