import type { SocialLink } from '$lib/types';

export const strength: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Strength',
		value: 'strength'
	},
	name: 'Caroline & Justine',
	romanNumeral: 'XI',
	location: 'Velvet Room',
	unlock: 'Unlocked automatically on 5/18.',
	availability: 'Any time the Velvet Room is accessible.',
	ranks: [
		{
			rank: 1,
			requirements: 'Bring Jack Frost with Mabufu.',
			choices: [],
			unlocks: ['Group Guillotine']
		},
		{
			rank: 2,
			requirements: 'Bring Ame no Uzume with Frei.',
			choices: [],
			unlocks: []
		},
		{
			rank: 3,
			requirements: 'Bring Flauros with Tarukaja.',
			choices: [],
			unlocks: ['Lockdown']
		},
		{
			rank: 4,
			requirements: 'Bring Phoenix with Counter.',
			choices: [],
			unlocks: []
		},
		{
			rank: 5,
			requirements: 'Bring Setanta with Rakukaja.',
			choices: [],
			unlocks: ['Special Treatment']
		},
		{
			rank: 6,
			requirements: 'Bring Neko Shogun with Dekaja.',
			choices: [],
			unlocks: []
		},
		{
			rank: 7,
			requirements: 'Bring Lachesis with Tetraja.',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements: 'Bring Hecatoncheires with Masukunda.',
			choices: [],
			unlocks: ['Guillotine Booster']
		},
		{
			rank: 9,
			requirements: 'Bring Bugs with Samarecarm.',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements: 'Bring Seth with High Counter.',
			choices: [],
			unlocks: ['Zaou-Gongen fusion', 'VIP Treatment']
		}
	]
};
