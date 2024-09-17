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
	<meta name="theme-color" content="#75675f" />
</svelte:head>

<article class={data.meta.colorTheme}>
	<div class="article_img">
		<img src={data.meta.photo} alt={data.meta.photoDec} />
	</div>

	<hgroup class="hg">
		<p class="hg_d neueHaas-thin">{formatDate(data.meta.date)}</p>
		<div class="hg_m">
			<h1 class="hg_t">{data.meta.title}</h1>
			<p class="hg_l">{data.meta.lead.join('\n')}</p>
		</div>
		<ul class="hg_c neueHaas-mid">
			<li class="hg_u">https://ponya.xyz/{data.slug}</li>
			<li class="hg_u">author | {data.meta.author}</li>
		</ul>
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
	article {
		padding: 0 0 var(--size-fluid-8);
	}
	.hg {
		display: flex;
		flex-direction: column;
		height: var(--height-fluid-11);
		margin: 0 0 var(--size-fluid-4);
		position: relative;
		z-index: 1;
	}
	.hg_d {
		font-size: var(--font-size-fluid-1);
	}
	.hg_m {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-around;
		height: var(--height-fluid-6);
		margin: var(--size-fluid-6) 0;
		width: 50%;
	}
	.hg_t {
		align-items: center;
		display: flex;
		font-size: var(--font-size-fluid-4);
		writing-mode: vertical-rl;
		font-feature-settings: 'vpal';
	}
	.hg_l {
		font-size: var(--font-size-fluid-1);
		writing-mode: vertical-rl;
		font-feature-settings: 'vpal';
		white-space: pre-wrap;
	}
	.hg_c {
		align-items: flex-end;
		color: rgb(var(--bkg-color));
		display: flex;
		flex-direction: column;
		font-size: var(--font-size-fluid-00);
		padding: var(--size-fluid-2);
	}
	.article_img {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: -1;
	}
	.article_img img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}

	.prose {
		background: rgba(var(--bkg-color), 0.7);
		backdrop-filter: blur(7px);
		padding: var(--size-fluid-6) 0;
	}
</style>
