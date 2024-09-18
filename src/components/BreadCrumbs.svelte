<script lang="ts">
	export let data;
	const pages = data.slice(0, -1);
	const lastPage = data.slice(-1)[0];
</script>

<ol class="breadCrumbs ja-san-serif" vocab="https://schema.org/" typeof="BreadcrumbList">
	{#each pages as item, i}
		<li property="itemListElement" typeof="ListItem">
			<a property="item" typeof="WebPage" href={item.url}>
				<span property="name">{item.name}</span>
			</a>
			<meta property="position" content={i + 1} />
		</li>
	{/each}
	<li property="itemListElement" typeof="ListItem">
		<span property="name">{lastPage.name}</span>
		<meta property="position" content={pages.length + 1} />
	</li>
</ol>

<style>
	.breadCrumbs {
		display: flex;
		flex-direction: column-reverse;
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: var(--size-fluid-1);
	}

	.breadCrumbs li {
		display: flex;
		align-items: center;
		gap: var(--size-fluid-2);
	}

	.breadCrumbs li:last-child::after {
		content: '';
	}

	.breadCrumbs a {
		color: var(--color-surface-4);
		display: flex;
		text-decoration: none;
		gap: var(--size-fluid-1);
	}

	.breadCrumbs a:hover {
		text-decoration: underline;
	}

	.breadCrumbs a::before {
		content: '→';
	}
</style>
