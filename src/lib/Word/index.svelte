<script>
	export let word
	
	let definition = (word.definition.official || word.definition.alternative)
</script>

<dfn class="part nimi" data-info="{definition}">{ word.verbatim }</dfn>

<style>
.nimi {
	position: relative;
	font-style: normal;
	cursor: pointer;
}

.nimi::after {
	content: attr(data-info);
	display: inline;
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	max-width: 25em;
	width: 15em;
	width: -moz-max-content;
	font-size: calc(1em / 2);
	line-height: 1.5em;
	padding: 0.5em 0.8em;
	background: rgba(42, 42, 42, 0.97);
	border-radius: 4px;
	border-top-left-radius: 2px;
	box-shadow: 0 0 5px 0 rgb(42, 42, 42);
	color: var(--pure-white);
	pointer-events: none; /* This prevents the box from apearing when hovered. */
	/* transition: opacity 250ms, top 250ms; */
}

.nimi::before {
	content: '';
	display: block;
	position: absolute;
	opacity: 0;
	left: 1px;
	width: 0;
	height: 0;
	border: solid transparent 8px;
	border-bottom-color: rgba(42, 42, 42, 0.97);
	pointer-events: none; /* This prevents the box from apearing when hovered. */
	/* transition: opacity 250ms, top 250ms; */
}

.nimi:hover {
	z-index: 2; /* Keeps the info boxes on top of other elements */
	color: var(--accent-color);
	text-decoration: underline;
}

.nimi:hover::before,
.nimi:hover::after {
	opacity: 1;
}

.nimi:hover::before {
	top: calc(1em - 8px + 5px);
}

.nimi:hover::after {
	top: calc((1em * 2) + 8px + 5px);
}
</style>
