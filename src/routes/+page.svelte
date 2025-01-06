<script>
	import Text from '$lib/forms/Text.svelte';
	import IconButton from '$lib/forms/IconButton.svelte';
	import Button from '$lib/forms/Button.svelte';
	import TextField from '$lib/forms/TextField.svelte';
	import Checkbox from '$lib/forms/Checkbox.svelte';
	import NumberField from '$lib/forms/NumberField.svelte';
</script>

<Text size="h2">Components Overview</Text>
<Text size="body2" --color="var(--text-secondary)"
	>This is a list of all the components that are available in this project.</Text
>
<br />
<Text size="h4">Text</Text>
<pre class="line-numbers language-html">
    <code class="language-html">
        &lt;Text size="body"&gt;Text here&lt;/Text&gt;
    </code>

</pre>
<Text size="body">
	<br />
	This component is used to display text in the application.</Text
>
<br /><br />
<Text size="h4">Button</Text>
<Button>Click Me</Button>
<Text size="body"
	>{`<Button>Click Me</Button>`}
	<br />
	This component is used to create a button in the application.</Text
>
<br /><br />
<Text size="h4">IconButton</Text>
<IconButton icon="menu" />
<Text size="body"
	>{`<IconButton icon="menu" />`}
	<br />
	This component is used to create an icon button in the application.</Text
>
<br /><br />
<Text size="h4">TextField</Text>
<TextField label="Input favorite color" required />
TTTTT
<Text size="body"
	>{`<TextField />`}
	<br />
	This component is used to create a text field in the application.</Text
>
<br /><br />
<Text size="h4">NumberField</Text>
<NumberField label="Input age" required />
TTTTT
<Text size="body"
	>{`<NumberField />`}
	<br />
	This component is used to create a text field in the application.</Text
>
<br /><br />
<Text size="h4">Checkbox</Text>
<Checkbox label="Accept terms and condidtions" />
<Text size="body"
	>{`<Checkbox />`}
	<br />
	This component is used to create a checkbox in the application.</Text
>
