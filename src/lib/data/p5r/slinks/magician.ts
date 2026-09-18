import type { SocialLink } from '$lib/types';

export const magician: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Magician',
		value: 'magician'
	},
	name: 'Morgana',
	location: 'Leblanc',
	unlock: 'Automatically on 4/15.',
	availability: 'Ranks up automatically with story events. No hangouts.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['Infiltration Tools']
		},
		{
			rank: 2,
			requirements: 'Automatically after you steal your first treasure.',
			choices: [],
			unlocks: []
		},
		{
			rank: 3,
			requirements: 'Automatically after you raid your second palace.',
			choices: [],
			unlocks: ['Follow Up']
		},
		{
			rank: 4,
			requirements: 'Automatically on 6/20.',
			choices: [],
			unlocks: ['Kitty Talk']
		},
		{
			rank: 5,
			requirements: 'Automatically after the third palace.',
			choices: [],
			unlocks: ['Pickpocket']
		},
		{
			rank: 6,
			requirements: 'Automatically on 7/25.',
			choices: [],
			unlocks: ['Ace Tools']
		},
		{
			rank: 7,
			requirements: 'Automatically on 8/29.',
			choices: [],
			unlocks: ['Harisen Recovery']
		},
		{
			rank: 8,
			requirements: 'Automatically on 9/17.',
			choices: [],
			unlocks: ['Endure']
		},
		{
			rank: 9,
			requirements: 'After the fifth palace.',
			choices: [],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: 'Automatically on 11/23.',
			choices: [],
			unlocks: ['Second Awakening (Mercurius)', 'Futsunushi fusion']
		}
	]
};
