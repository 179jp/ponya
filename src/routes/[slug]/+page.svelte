<script lang="ts">
	import { formatDate } from '$lib/utils';

	import '../../css/colorThemes.css';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class={data.meta.colorTheme}>
	<!-- Title -->
	<hgroup class="hg">
		<p class="hg_d neueHaas-thin">{formatDate(data.meta.date)}</p>
		<h1 class="hg_t">{data.meta.title}</h1>
		<ul class="hg_c neueHaas-thin">
			<li class="hg_u">url | /{data.slug}</li>
			<li class="hg_u">author | {data.meta.author}</li>
		</ul>
		<div class="hg_img">
			<img src={data.meta.photo} alt={data.meta.photoDec} />
		</div>
	</hgroup>

	<!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.hg {
		display: flex;
		flex-direction: column;
		height: var(--height-fluid-10);
		margin: 0 0 var(--size-fluid-4);
		padding-top: env(safe-area-inset-bottom);
		position: relative;
		z-index: 1;
	}
	.hg_d {
		font-size: var(--font-size-fluid-2);
	}
	.hg_t {
		align-items: center;
		display: flex;
		font-size: var(--font-size-fluid-4);
		height: var(--height-fluid-5);
	}
	.hg_c {
		align-items: flex-end;
		display: flex;
		flex-direction: column;
		font-size: var(--font-size-fluid-0);
		padding: var(--size-fluid-2);
	}
	.hg_img {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
	}
	.hg_img img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}
</style>
