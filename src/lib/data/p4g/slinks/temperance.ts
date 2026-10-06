import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const temperance = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Temperance',
		value: 'temperance'
	},
	name: 'Eri Minami',
	location: 'Yasogami High, daycare',
	unlock: 'Join the daycare volunteer work.',
	availability: 'Daytime on Monday, Friday, and Saturday.',
	routes: [],
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: '...Do you like children?',
					options: [
						{ text: 'I hate kids.', points: 3 },
						{ text: "I'm on the fence.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'I guess he wants to see his father.',
					options: [
						{ text: 'Probably.', points: 2 },
						{ text: "I don't know.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "Doesn't that make you feel better? Isn't that a wonderful idea?",
					options: [{ text: "You're right...", points: 3 }]
				},
				{
					prompt: 'Honestly, though... I just want to go back to the city.',
					options: [{ text: 'Just let it go.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "I don't know what a child wants...",
					options: [{ text: 'Featherman R.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: "I wonder if he's afraid of me.",
					options: [
						{ text: "You're both afraid.", points: 3 },
						{ text: "He's not afraid of you.", points: 2 }
					]
				},
				{
					prompt: "He must hate the fact I'm here.",
					options: [{ text: "That's not true.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "I'm sorry about the other day. Were you hurt?",
					options: [
						{ text: "I'm fine.", points: 3 },
						{ text: "I'm not that weak.", points: 3 }
					]
				},
				{
					prompt: "He's actually a sweet boy...",
					options: [
						{ text: 'Yeah, he is.', points: 3 },
						{ text: "You're a doting parent now.", points: 3 }
					]
				},
				{
					prompt: '...What took me so long, huh?',
					options: [
						{ text: 'Yeah.', points: 3 },
						{ text: "It's never too late.", points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt:
						"So, today's the last day he'll be here. When Yuuta's done with school, we'll spend time together at the house.",
					options: [
						{ text: "It's for the best.", points: 3 },
						{ text: "I'll be lonely here.", points: 3 }
					]
				}
			],
			unlocks: ['Vishnu fusion', 'Clover Bookmark']
		}
	]
});
