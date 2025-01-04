<script lang="ts">
	import Layout from '$lib/layouts/Layout.svelte';
	import NavItem from '$lib/layouts/NavItem.svelte';
</script>

<Layout>
	<div slot="nav">
		<NavItem />
		<NavItem label="Text" link="/text" />
	</div>

	<slot />
</Layout>
