<script lang="ts">
	let { onClick, icon = 'menu', children } = $props();
</script>

<button class="container" onclick={onClick}>
	<img src={'/icons/' + icon + '.svg'} alt={icon + ' icon'} />
	{@render children?.()}
</button>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 4rem;
		height: 4rem;
		border-radius: 100%;
		border: none;
		background-color: transparent;
	}
	.container:hover {
		cursor: pointer;
		background-color: var(--hover);
	}
	.container:active {
		background-color: var(--active);
	}
	img {
		width: 3rem;
		height: 3rem;
	}
</style>
