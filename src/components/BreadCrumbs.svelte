<script lang="ts">
	export let data;
	const pages = data.slice(0, -1);
	const lastPage = data.slice(-1)[0];
</script>

<ol class="breadCrumbs" vocab="https://schema.org/" typeof="BreadcrumbList">
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
		align-items: center;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		gap: var(--size-fluid-2);
		margin: 0;
		padding: 0 var(--size-fluid-1);
		list-style: none;
	}

	.breadCrumbs li {
		align-items: center;
		display: flex;
		font-size: var(--font-size-fluid-1);
	}

	.breadCrumbs li:last-child::after {
		content: '';
	}

	.breadCrumbs a {
		color: var(--color-surface-4);
		display: flex;
		font-size: var(--font-size-fluid-1);
		text-decoration: none;
		gap: var(--size-fluid-1);
		padding: 0.25em 0;
	}

	.breadCrumbs a:hover {
		text-decoration: underline;
	}

	.breadCrumbs a::before {
		content: '→';
		margin-right: var(--size-fluid-2);
	}
</style>
