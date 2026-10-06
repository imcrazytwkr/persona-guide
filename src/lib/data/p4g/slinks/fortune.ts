import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const fortune = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Fortune',
		value: 'fortune'
	},
	name: 'Naoto Shirogane',
	location: 'Yasogami High practice building, 1F',
	unlock: 'Automatically after Naoto joins the party. Romance requires a Rank 6 dialogue choice.',
	availability: 'Daytime on Monday, Tuesday, Wednesday, and Saturday; day and night on rainy days.',
	routes: ['friendship', 'romance'],
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['Assist']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: "I'd chalk it up as a prank.",
					options: [{ text: "That's no fun.", points: 3 }]
				},
				{
					prompt:
						"I don't know about those, but my belongings aren't of any particular value, so...",
					options: [
						{ text: 'You should be careful.', points: 3 },
						{ text: 'Remember that card...?', points: 3 }
					]
				}
			],
			unlocks: ['Invigorate 1']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: '> Naoto is holding a sealed letter...',
					options: [
						{ text: 'A challenge for a duel?', points: 3 },
						{ text: 'That card business again...?', points: 3 }
					]
				}
			],
			unlocks: ['Follow Up']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: '> Naoto is holding a card...',
					options: [{ text: "That 'card' again?", points: 3 }]
				},
				{
					prompt: 'But... to ignore it only makes me angry!',
					options: [
						{ text: 'Good luck.', points: 3 },
						{ text: "Let's catch him together.", points: 3 }
					]
				}
			],
			unlocks: ['Mind Charge']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: '*sigh* "What should I do...?"',
					options: [{ text: 'Burn it.', points: 3 }]
				},
				{
					prompt: "'Eating letters with a red face'...? This is...",
					options: [{ text: 'A mailbox.', points: 3 }]
				},
				{
					prompt: 'Grampa had this? Why did he keep it...?',
					options: [{ text: 'Good, you got it back.', points: 3 }]
				},
				{
					prompt: "I, er... I think I'll let this play out... And, umm, if possible...",
					options: [
						{ text: "I guess I'll help.", points: 3 },
						{ text: "Let's do it.", points: 3 },
						{ text: "You're on your own.", points: 0, effect: 'reverse' }
					]
				}
			],
			unlocks: ['Recover']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'Why you, though...?',
					options: [
						{ text: 'Because I looked reliable.', points: 3 },
						{ text: 'Because I looked useless.', points: 3 }
					]
				},
				{
					prompt:
						"'When the banks close, the fruit tree grows. By the large seven at the third is the spot I chose...'",
					options: [{ text: 'The numbers are important.', points: 3 }]
				},
				{
					prompt: '......',
					options: [
						{ text: "Your gender doesn't matter.", points: 3 },
						{ text: "I'm glad you're a girl.", points: 0, routeFlag: 'romance' }
					]
				}
			],
			unlocks: ['Invigorate 2']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: "Perhaps the 'minus' part is important...",
					options: [{ text: "Subtract '40' and '4'?", points: 3 }]
				},
				{
					prompt: "I feel that... I'm undergoing a change.",
					options: [{ text: "Don't be afraid.", points: 3 }]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'We may be able to catch him in the act.',
					options: [
						{ text: 'You seem happy.', points: 3 },
						{ text: "Don't put yourself at risk.", points: 3 },
						{ text: 'I feel kinda sad.', points: 3 }
					]
				},
				{
					prompt: '> The man brandished a knife!',
					options: [
						{ text: 'Protect Naoto', points: 0, routeFlag: 'romance' },
						{ text: 'Run with Naoto', points: 0, routeFlag: 'friendship' },
						{ text: 'Fight back', points: 0, routeFlag: 'friendship' }
					]
				},
				{
					prompt: '"Why...!?"',
					options: [
						{ text: 'Because I love you.', points: 0, routeFlag: 'romance' },
						{ text: "Because we're friends.", points: 0, routeFlag: 'friendship' }
					]
				}
			],
			unlocks: ['Heat Riser']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "A place I'd be fond of...?",
					options: [{ text: 'Somewhere high.', points: 3 }]
				},
				{
					prompt: "Next, what I 'can't stand' to do. There are several possibilities, but...",
					options: [{ text: 'Throwing things away?', points: 3 }]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt: 'What about you?',
					route: 'friendship',
					options: [
						{ text: 'It was exciting.', points: 3 },
						{ text: 'It was a cinch.', points: 2 },
						{ text: 'I was about to give up.', points: 2 }
					]
				},
				{
					prompt: "Now you're my assistant!",
					route: 'friendship',
					options: [
						{ text: 'I want to be your partner.', points: 3 },
						{ text: "You're MY assistant.", points: 3 },
						{ text: 'Leave it to me!', points: 2 }
					]
				},
				{
					prompt: 'What about you?',
					route: 'romance',
					options: [
						{ text: 'Is it that interesting?', points: 3 },
						{ text: "Why don't you sit down?", points: 3 },
						{ text: "I can't relax...", points: 2 }
					]
				}
			],
			unlocks: ['Second Awakening', 'Norn fusion', 'Invigorate 3', 'Detective Badge']
		}
	]
});
