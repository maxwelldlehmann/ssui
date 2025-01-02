<script lang="ts">
	export let label: string | null | undefined = 'Label not set';
	export let value: string | null | undefined = '';
	export let placeholder: string = '';
	export let disabled: boolean = false; // Todo: Implement disabled
	export let readonly: boolean = false; // Todo: Implement readonly
	export let required: boolean = false; // Todo: Implement required fully
	export let invalid = false;
	export let error: string = '';
	value === null || value === undefined ? (value = '') : (label = label);
	$: errorText = required && value.length === 0 ? 'This field is required' : error;
</script>

<div>
	<label
		class="container"
		class:validDot={invalid || (required === true && value.length === 0) ? true : false}
		><span class="label-text">{label}{required ? '*' : ''}</span>
		<input bind:value {placeholder} {disabled} {readonly} {required} class:invalid type="text" />
	</label>
	{#if invalid || errorText}
		<span class="error-text">{errorText}</span>
	{/if}
</div>

<style>
	input {
		background-color: transparent;
		border: none;
		outline: none;
		color: var(--text-primary);
		font-size: 1.5rem;
	}
	label {
		color: var(--text-secondary);
		display: flex;
		flex-direction: column;
	}
	label:focus-within {
		color: var(--primary);
	}
	.container {
		border: 1px solid var(--border);
		border-radius: var(--border-radius);
		padding: 0.5rem 0.5rem;
		position: relative;
	}
	.container:focus-within {
		border-color: var(--primary);
	}
	.validDot::before {
		content: '';
		position: absolute;
		top: 4px;
		right: 4px;
		background-color: var(--text-error);
		width: 3px;
		height: 3px;
		border-radius: 50%;
	}
	.label-text {
		padding-left: 1.5px;
	}
	.error-text {
		color: var(--text-error);
		font-size: 1.25rem;
		padding: 0.25rem 0.75rem;
	}
</style>
