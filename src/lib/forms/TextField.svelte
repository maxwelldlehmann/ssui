<script lang="ts">
	let {
		value = $bindable(''),
		label = 'Label not set',
		placeholder = '',
		disabled = false,
		readonly = false,
		required = false,
		invalid = false,
		error = '',
		...inputProps
	} = $props();
	let touched = $state(false);
	let focused = $state(false);
	value === null || value === undefined ? (value = '') : (label = label);
	let errorText = $derived(required && value?.length === 0 ? 'This field is required' : error);
</script>

<div class="text-field">
	<label
		class="container"
		class:validDot={invalid || (required === true && value?.length === 0)}
		class:error={touched && (errorText || invalid) ? true : false}
		><span class="label-text">{label}{required ? '*' : ''}</span>
		<input
			type="text"
			bind:value
			{placeholder}
			{disabled}
			{readonly}
			{required}
			class:invalid
			onblur={() => {
				touched = true;
				focused = false;
			}}
			onfocus={() => (focused = true)}
			{...inputProps}
		/>
	</label>
	{#if focused && (errorText || invalid)}
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
	.error {
		border-color: var(--text-error);
		color: var(--text-error);
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
