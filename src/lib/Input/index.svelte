<script>
	import { tick } from 'svelte'
	import { goto } from '$app/navigation'

	export let query = ''
	let placeholder = ''

	function translate() {
		goto('/t/?q=' + encodeURIComponent(query))
	}
	
	// Set the placeholder in code as a workaround to get multiline text,
	// and after loading to prevent flashing of unformatted text
	async function setPlaceholder() {
		await tick()
		placeholder = 'toki!\n\nThis tool is for looking up the meaning of words in a Toki Pona text.\n\nClick here to enter or paste some Toki Pona, then press the button.\n\nYou can then move the mouse cursor over the words to see their meanings.'
	}
	setPlaceholder()
</script>

<textarea class="input" bind:value={query} placeholder={placeholder}></textarea>

<button class="btn" on:click={translate} disabled={query.length === 0}>o lukin</button>

<style>
.input {
	width: 30vw;
	height: 30vh;
	padding: 1em;
	font-size: 1em;
	border: 1px solid var(--primary-color);
	border-radius: 4px;
}

.input:focus::placeholder {
	color: transparent;
}

button {
	margin-top: 2em;
}
</style>
