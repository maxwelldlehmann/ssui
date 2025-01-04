<script>
	import { page } from '$app/stores';

	export let label = 'Home';
	export let link = '/';
</script>

<a href={link} class={$page.url.pathname === link ? 'active-link' : ''}>{label}</a>

<style>
	a {
		width: 100%;
		color: var(--text-secondary);
		text-decoration: none;
		height: auto;
		display: flex;
		align-items: center;
		padding: 8px 0 8px 8px;
		border-left: 4px solid transparent;
		font-size: 16px;
	}
	.active-link {
		border-left: 4px solid #54a6f3;
		background-color: rgba(255, 255, 255, 0.07);
	}
	a:hover {
		background-color: rgba(255, 255, 255, 0.05);
		cursor: pointer;
	}
</style>
