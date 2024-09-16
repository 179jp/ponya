<script lang="ts">
	import Header from '../components/Header.svelte';
	import Footer from './Footer.svelte';

	import 'open-props/normalize';

	import '../css/app.css';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
