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
		<h1>過剰に要素を並べて表現する</h1>
		<p class="neueHaas-thin">Express things by arranging them<br />excessively on the web.</p>
	</div>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="post_wrap">
					<span class="post_day neueHaas-mid">{formatDate(post.date, 'medium', true)}</span>
					<p class="post_info">
						<span class="post_title">{post.title}</span>
						<span class="post_english neueHaas-thin">{post.titleEnglish}</span>
					</p>
				</a>
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

	.post {
		margin-top: 1em;
	}
	.post_wrap {
		color: #333;
		display: grid;
		gap: 0.5em;
		grid-template-columns: 2em 1fr;
		width: 100%;
		overflow: hidden;
	}
	.post_info {
		display: flex;
		flex-direction: column;
		padding-top: 1.5em;
		position: relative;
	}
	.post_title {
		font-size: clamp(1.25rem, calc(1.25rem + 1vw), 1.8rem);
		display: inline-block;
		height: 400px;
		position: absolute;
		top: 0;
		left: 0;
		rotate: -90deg;
		transform-origin: right top;
		translate: -1.6em -0.4em;
		writing-mode: vertical-rl;
	}
</style>
