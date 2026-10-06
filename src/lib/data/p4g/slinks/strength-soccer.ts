import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const strengthSoccer = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Strength (soccer)',
		value: 'strength-soccer'
	},
	name: 'Daisuke Nagase',
	location: 'Yasogami High classroom building 1F emergency exit',
	unlock:
		'As early as 4/19, join the Soccer Team at the classroom building emergency exit. Mutually exclusive with Strength (basketball).',
	availability: 'Daytime on Tuesday, Thursday, Saturday, and Sunday.',
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
					prompt: 'Still, it went pretty fast with three people.',
					options: [{ text: 'Thanks for the help.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: 'No dialogue.',
			choices: [],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: 'Whatever... Girls are a pain in the ass, right, <protagonist>?',
					options: [{ text: 'Right on.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: "> Kou is also beaming like it's all thanks to him...",
					options: [
						{ text: 'Thanks, guys...', points: 3 },
						{ text: "I'm just getting warmed up.", points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: '"I have to do some family stuff today, though. Would next time be okay?"',
					options: [
						{ text: 'Anything for you guys.', points: 3 },
						{ text: 'No problem.', points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: '"Tell you what, we\'ll talk over mapo rice. My treat!"',
					options: [{ text: 'Sounds good.', points: 3 }]
				},
				{
					prompt: '"You think it could be related...?"',
					options: [{ text: 'Could be...', points: 3 }]
				},
				{
					prompt: '"What do you think?"',
					options: [{ text: "We've got a problem.", points: 3 }]
				},
				{
					prompt: '> Kou is looking at you expectantly...',
					options: [{ text: 'Count me in.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: '> Their quarrel starts to escalate...',
					options: [{ text: 'Stop them', points: 3 }]
				},
				{
					prompt: '"You can be pretty sincere when you want to, Daisuke."',
					options: [{ text: "That's his charm.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "I wonder if she's as stuck in the past as I am...",
					options: [
						{ text: 'Could be.', points: 3 },
						{ text: "I don't know.", points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Zaou-Gongen fusion', 'Spike Brush']
		}
	]
});
