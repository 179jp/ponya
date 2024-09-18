<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<p>&copy; {new Date().getFullYear()} {config.title}</p>
</footer>

<style>
	footer {
		align-items: flex-end;
		display: flex;
		font-size: var(--font-size-fluid-00);
		padding-top: var(--size-fluid-2);
		width: 100%;
	}
</style>
