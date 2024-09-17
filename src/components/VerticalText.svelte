<section class="v">
	<slot />
</section>

<style>
	.v {
		box-sizing: border-box;
		height: var(--height-fluid-8);
		overflow-x: auto;
		padding: 0 var(--size-fluid-6);
		width: 100%;

		font-size: var(--font-size-fluid-1);
		-ms-writing-mode: tb-rl;
		writing-mode: vertical-rl;
		font-feature-settings: 'vpal';
		text-align: justify;
		letter-spacing: 0.02em;
		line-height: var(--font-lineheight-4);
		white-space: pre-wrap;
	}
</style>
