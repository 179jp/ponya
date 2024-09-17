<script>
	export let src;
	export let caption;
</script>

<figure>
	<img {src} alt={caption} />
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	figure {
		margin: var(--size-fluid-4) 0;
		padding: 0;
		width: 100%;
	}

	img {
		display: block;
		width: 100%;
	}

	figcaption {
		font-size: var(--font-size-fluid-0);
		margin-top: var(--size-fluid-1);
		text-align: left;
		padding: 0 var(--size-fluid-2);
	}
</style>
