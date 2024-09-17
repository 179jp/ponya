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
		padding-top: var(--size-fluid-5);
		width: 100%;
	}
</style>
