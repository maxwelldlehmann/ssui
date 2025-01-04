<script lang="ts">
	import '$lib/main.css';
	import '$lib/reset.css';
	import IconButton from '$lib/forms/IconButton.svelte';
	export let title = 'SSUI';
	export let logo = '/favicon.png';
	let menuOpen = true;
</script>

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
