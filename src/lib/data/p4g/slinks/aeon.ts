import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const aeon = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Aeon',
		value: 'aeon'
	},
	name: 'Marie',
	location: 'Velvet Room',
	unlock:
		'Talk to Marie in the Velvet Room. Rank 5 is gated until 7/24. Hard stop after Adachi / Ameno-sagiri until the Hollow Forest.',
	availability: 'Daytime on Wednesday, Saturday, and Sunday.',
	routes: ['friendship', 'romance'],
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
			choices: [],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Hey, what do you do in the city?',
					options: [
						{ text: 'Play around.', points: 3 },
						{ text: 'People-watch.', points: 3 },
						{ text: "There's nothing to do.", points: 3 }
					]
				},
				{
					prompt: 'Huh...? Me too?',
					options: [
						{ text: "Let's hurry.", points: 3 },
						{ text: "You're not going?", points: 3 }
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
					prompt: "You don't get tired of it?",
					options: [
						{ text: "It's fun.", points: 3 },
						{ text: "It's pretty much my duty.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: 'Unavailable until 7/24.',
			choices: [],
			unlocks: []
		},
		{
			rank: 6,
			requirements: 'Spend additional time with Marie before this rank will advance.',
			choices: [
				{
					prompt: '...Will this help?',
					options: [
						{ text: "It's made of bamboo.", points: 3 },
						{ text: 'Is it sold somewhere?', points: 3 }
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
					prompt: "...That doesn't make sense. What are they going to use them for?",
					options: [
						{ text: "They're works of art.", points: 3 },
						{ text: "They're antiques.", points: 3 }
					]
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
					prompt: 'Hey, can we make more? More memories...',
					options: [
						{ text: "I'll help.", points: 3 },
						{ text: "It's up to you.", points: 3 },
						{ text: "Don't forget 'em.", points: 3 }
					]
				},
				{
					prompt: '...Why?',
					options: [
						{ text: 'Because I love you.', points: 0, routeFlag: 'romance' },
						{ text: "Because you're my friend.", points: 0, routeFlag: 'friendship' }
					]
				},
				{
					prompt: '"...I won\'t believe just words."',
					options: [
						{ text: 'Hug her', points: 0, routeFlag: 'romance' },
						{ text: "Don't hug her", points: 0, routeFlag: 'friendship' }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: 'Spend additional time with Marie before this rank will advance.',
			choices: [
				{
					prompt:
						"I wouldn't have been able to do that on my own. I only realized that because of you.",
					route: 'friendship',
					options: [{ text: 'It was fun.', points: 3 }]
				},
				{
					prompt: '> Marie is looking around your room...',
					route: 'romance',
					options: [
						{ text: "What's wrong?", points: 3 },
						{ text: 'Bored?', points: 3 },
						{ text: "Don't snoop around.", points: 3 }
					]
				},
				{
					prompt: "Memories so fun, I won't care about the past anymore.",
					route: 'romance',
					options: [
						{ text: 'Leave it to me.', points: 3 },
						{ text: "Lots of memories won't do it.", points: 3 }
					]
				}
			],
			unlocks: ['Kaguya fusion', 'Old Bamboo Comb']
		}
	]
});
