import { promises as fs } from 'fs';

const nimi = await fs.readFile('./data/nimi-ale-pona.json', 'utf-8');
// const jprogr = await fs.readFile('./data/jprogr.json', 'utf-8');

// Definitions to remain unchanged because normalization messes things up
const keepDefinitions = ['a', 'li', 'n', 'o', 'san', 'su', 'yupekosi'];

const dictionary = JSON.parse(nimi).map((entry) => {
	// Create a new structure
	const word = {
		name: entry.word,
		// synonyms: [],
		definition: {
			official: entry.definition
			// alternative: "",
		},
		// see: [],
		// Make categories "pre", "pu" and "post"
		category: entry.category.replace('-pu', '')
	};

	// Split words with synonyms as part of name
	if (word.name.includes(',')) {
		const names = word.name.split(', ');
		word.name = names.shift();
		word.synonyms = names;
	}

	// Break out references to other words
	for (const [match, see] of word.definition.official.matchAll(/{see ([^}]*)}/g)) {
		word.see = see.split(/[,:\/]/).map((v) => v.trim());
		word.definition.official = word.definition.official.replace(/{see [^}]*}/g, '');
	}

	// Break out alternatives and normalize definition into array
	const alt = word.definition.official.includes('| ALT');
	if (alt) {
		const [definition, alternatives] = word.definition.official.split('| ALT');
		word.definition.official = definition;
		word.definition.alternative = alternatives
			.split(/[,;]/)
			.map((v) => v.trim())
			.join(', ');
	}

	// Normalize definitions
	if (!keepDefinitions.includes(word.name)) {
		word.definition.official = word.definition.official
			.replace('{', '(')
			.replace('}', ')')
			.trim()
			.split(/[,;]/)
			.map((v) => v.trim())
			.join(', ');

		if (word.definition.official[0] === '') {
			delete word.definition;
		}
	}

	return word;
});

// JSON.parse(jprogr).map((entry) => {

// });

// Write to outfile
const pretty = false;
fs.writeFile('./static/dictionary.json', JSON.stringify(dictionary, null, pretty ? 2 : 0));
