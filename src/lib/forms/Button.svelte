<script lang="ts">
	export let disabled: boolean = false;
	export let secondary: boolean = false;
</script>

<button class={`button ${secondary ? 'secondary' : 'primary'}`} {disabled} on:click><slot /></button
>

<style>
	.primary {
		background-color: var(--primary);
		color: var(--text-primary);
	}
	.secondary {
		background-color: var(--paper);
		color: var(--text-primary);
	}
	.button {
		border: none;
		border-radius: var(--border-radius);
		padding: 1rem 2rem;
		font-size: 1.5rem;
		cursor: pointer;
	}
	.button:disabled {
		background-color: var(--border);
		color: var(--text-secondary);
		cursor: not-allowed;
	}
	.button:hover {
		filter: brightness(1.25);
	}
	.button:active {
		filter: brightness(0.75);
	}
</style>
