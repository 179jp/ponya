<nav>
	<p class="siteLogo">
		<span class="po">ぽ</span><span class="nn">ん</span><span class="ya">や</span>
	</p>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
	}
	.siteLogo {
		color: var(--text-1);
		font-size: clamp(2rem, calc(1.5rem + 1vw), 3rem);
		height: 200px;
		position: absolute;
		top: 2em;
		right: -0.3em;
		writing-mode: vertical-rl;
	}
	.siteLogo span {
		display: inline-block;
	}
	.po {
		scale: 1 0.9;
	}
	.nn {
		font-size: 92%;
		translate: -0.14em -0.26em;
	}
	.ya {
		font-size: 91%;
		translate: 0.21em -0.54em;
	}
</style>
