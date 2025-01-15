<script lang="ts">
	// import '$lib/main.css';
	// import '$lib/reset.css';
	// import { Styles, CssReset } from '$lib/index.js';
	import IconButton from '$lib/forms/IconButton.svelte';
	export let title = 'SSUI';
	export let logo = '/favicon.png';
	export let menuOpen = true;
	import Styles from '$lib/layouts/Styles.svelte';
	import Menu from '$lib/icons/Menu.svelte';
</script>

<Styles />
<header>
	<IconButton
		icon="menu"
		onClick={() => {
			menuOpen = !menuOpen;
		}}
	/>
	<img src={logo} alt={logo} />
	<p class="title">{title}</p>
	<div>
		<slot name="header" />
	</div>
</header>

<div class="wrapper">
	{#if menuOpen}
		<nav>
			<slot name="nav" />
		</nav>
	{/if}
	<div class="content">
		<slot />
	</div>
</div>

<style>
	/* :root {
		--text-primary: #ffffff;
		--text-secondary: rgba(255, 255, 255, 0.75);
		--text-error: #ff6767;

		--primary: #4b88d8;
		--border: rgba(255, 255, 255, 0.5);
		--background: #121212;
		--base-font-size: 8px;
		--paper: rgba(255, 255, 255, 0.05);
		--active: rgba(255, 255, 255, 0.16);
		--hover: rgba(255, 255, 255, 0.09);
		--disabled: rgba(128, 128, 128, 0.2);
		--border-radius: 0.5rem;
		font-size: var(--base-font-size);
	}
	:global(body) {
		background-color: var(--background);
		color: var(--text-primary);
		font-family:
			'Roboto',
			'Segoe UI',
			system-ui,
			-apple-system,
			sans-serif;
		font-size: 2rem;
		margin: 0;
		padding: 0;
	} */
	header {
		background-color: #ffffff17;
		height: 48px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		padding: 8px;
		gap: 8px;
		box-shadow: 0 4px 4px black;
		z-index: -1000;
	}
	nav {
		display: flex;
		flex-direction: column;
		width: 164px;
		min-width: 164px;
		height: calc(100vh - 48px);
		border-right: 1px solid #5f5f5f;
		box-shadow:
			6px 0 4px -4px #222,
			-6px 0 4px -4px #222;
	}
	img {
		height: 24px;
		width: 24px;
	}
	.wrapper {
		display: flex;
	}
	.title {
		font-size: 16px;
		font-weight: 700;
		margin: 4px 0 0 0;
		padding: 0;
	}
	.content {
		padding: 16px 24px;
		width: 100%;
		overflow-y: auto;
		height: calc(100vh - 48px);
	}
	.icon-button:hover {
		border-radius: 100px;
		background-color: rgba(255, 255, 255, 0.09);
		cursor: pointer;
	}
</style>
