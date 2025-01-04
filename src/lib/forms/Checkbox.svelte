<script>
	export let checked = false;
	export let label = 'Not set';
</script>

<label class="checkbox">
	<input type="checkbox" bind:checked />
	<span>{label}</span>
</label>

<style>
	input {
		color: purple;
	}
</style>
