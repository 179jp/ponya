<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section class="f1">
	<div class="featureHeader">
		<h1>過剰にモノを並べて表現する</h1>
		<p class="neueHaas-thin">Express things by arranging them<br />excessively on the web.</p>
	</div>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.f1 {
		padding: 0 0.5em 4em 0.5em;
	}
	.featureHeader {
		overflow: hidden;
		padding: 2em 0 0;
		position: relative;
		width: 100%;
	}
	.featureHeader h1 {
		display: inline-block;
		font-size: clamp(1.5rem, calc(1.5rem + 1vw), 2rem);
		height: 500px;
		position: absolute;
		top: 0;
		left: 0;
		rotate: -90deg;
		transform-origin: right top;
		translate: -1.6em -0.4em;
		writing-mode: vertical-rl;
	}

	.posts {
	}
</style>
