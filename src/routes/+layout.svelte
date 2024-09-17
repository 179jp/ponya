<script lang="ts">
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import '../css/normalize.css';
	import '../css/props.colors.css';
	import '../css/props.fonts.css';
	import '../css/props.sizes.css';
	import '../css/app.css';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
