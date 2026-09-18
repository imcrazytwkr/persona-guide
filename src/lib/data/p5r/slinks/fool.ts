import type { SocialLink } from '$lib/types';

export const fool: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Fool',
		value: 'fool'
	},
	name: 'Igor',
	location: 'Velvet Room',
	unlock: 'Automatically on 4/12.',
	availability: 'Ranks up automatically with story events. No hangouts.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['Wild Talk', 'Arcana Burst']
		},
		{
			rank: 2,
			requirements: 'Automatically after you infiltrate the first palace.',
			choices: [],
			unlocks: ['Third Eye']
		},
		{
			rank: 3,
			requirements: 'Automatically on 5/5.',
			choices: [],
			unlocks: ['Power Stock (Persona stock 8)']
		},
		{
			rank: 4,
			requirements: 'After the second palace.',
			choices: [],
			unlocks: []
		},
		{
			rank: 5,
			requirements: 'Automatically on 6/11.',
			choices: [],
			unlocks: ['Super Stock (Persona stock 10)']
		},
		{
			rank: 6,
			requirements: 'After the fourth palace.',
			choices: [],
			unlocks: ['High Arcana Burst']
		},
		{
			rank: 7,
			requirements: 'Automatically on 8/22.',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements: 'Automatically on 8/31.',
			choices: [],
			unlocks: ['Ultra Stock (Persona stock 12)']
		},
		{
			rank: 9,
			requirements: 'Automatically on 10/11.',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements: 'Automatically on 12/24.',
			choices: [],
			unlocks: ['Vishnu fusion', 'Max Arcana Burst']
		}
	]
};
