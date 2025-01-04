<script lang="ts">
	// let content: string = ''
	type textTypes =
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'body'
		| 'body2'
		| 'caption'
		| 'tooltip';
	export let size: textTypes = 'body';
</script>

<p class={size + ' text '}>
	<slot />
</p>

<style>
	.text {
		margin: 0;
		padding: 0;
		color: var(--color, --text-primary);
	}
	.h1 {
		font-size: 6rem;
		font-weight: 500;
	}
	.h2 {
		font-size: 5rem;
		font-weight: 500;
	}
	.h3 {
		font-size: 4rem;
		font-weight: 500;
	}
	.h4 {
		font-size: 3rem;
		font-weight: 600;
	}
	.h5 {
		font-size: 2rem;
		font-weight: 700;
	}
	.h6 {
		font-size: 1.5rem;
		font-weight: 800;
	}
	.body {
		font-size: 2rem;
		font-weight: 500;
	}
	.body2 {
		font-size: 1.75rem;
		font-weight: 400;
	}
	.caption {
		font-size: 1.5;
	}
	.tooltip {
		font-size: 1.25rem;
	}
</style>
