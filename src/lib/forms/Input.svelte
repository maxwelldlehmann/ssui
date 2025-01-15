<script lang="ts">
	let {
		value = $bindable(),
		label = 'Label not set',
		placeholder = '',
		disabled = false,
		readonly = false,
		required = false,
		type = 'text',
		error = { text: '', invalid: false },
		...others
	}: {
		value: string | number | boolean;
		label: string;
		type:
			| 'text'
			| 'number'
			| 'password'
			| 'email'
			| 'date'
			| 'datetime-local'
			| 'time'
			| 'tel'
			| 'search'
			| 'url'
			| 'time'
			| 'week'
			| 'month';
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		required?: boolean;
		error?: { text: string; invalid: boolean };
	} = $props();
	let touched = $state(false);
	let focused = $state(false);
	let errorText = $derived(required && !value ? 'This field is required' : error.text);
</script>

<div class="text-field">
	<label
		class="container"
		class:validDot={error.invalid || (required === true && !value)}
		class:error={touched && (error.text || error.invalid) ? true : false}
		><span class="label-text">{label}{required ? '*' : ''}</span>
		<input
			bind:value
			{placeholder}
			{disabled}
			{readonly}
			{required}
			class:error.invalid
			onblur={() => {
				touched = true;
				focused = false;
			}}
			onfocus={() => (focused = true)}
			{...others}
		/>
	</label>
	{#if (focused && errorText) || error.text}
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
