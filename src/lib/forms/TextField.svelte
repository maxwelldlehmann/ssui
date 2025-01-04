<script lang="ts">
	export let label: string | null | undefined = 'Label not set';
	export let value: string | null | undefined = '';
	export let placeholder: string = '';
	export let disabled: boolean = false; // Todo: Implement disabled
	export let readonly: boolean = false; // Todo: Implement readonly
	export let required: boolean = false; // Todo: Implement required fully
	export let invalid = true;
	export let error: string = '';
	value === null || value === undefined ? (value = '') : (label = label);
	$: errorText = required && value.length === 0 ? 'This field is required' : error;
</script>

<div class="text-field">
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
		font-size: 2rem;
		padding: 0.5rem;
	}
	label {
		color: var(--text-secondary);
		display: flex;
		flex-direction: column;
	}
	label:focus-within {
		color: var(--primary);
	}
	.text-field {
		padding-top: 1rem;
		line-height: 1;
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
		top: 2px;
		left: 2px;
		background-color: var(--text-error);
		width: 3px;
		height: 3px;
		border-radius: 50%;
		z-index: 1;
	}
	.label-text {
		position: absolute;
		top: -1rem;
		left: 0rem;
		margin-left: 0.5rem;
		padding: 0 0.5rem;
		font-size: 1.5rem;
		background-color: var(--background);
	}
	.error-text {
		color: var(--text-error);
		font-size: 1.25rem;
		padding: 0rem 0.75rem;
	}
</style>
