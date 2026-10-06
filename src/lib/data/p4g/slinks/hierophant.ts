import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '#lib/data/p4g/routes.ts';

export const hierophant = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Hierophant',
		value: 'hierophant'
	},
	name: 'Ryotaro Dojima',
	location: 'Dojima residence, night',
	unlock: 'Automatically after the protagonist moves in.',
	availability:
		'Nighttime on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday; day and night on rainy days.',
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
			requirements: 'Expression 2 (Eloquent).',
			choices: [
				{
					prompt: 'So... What have you been doing after school?',
					options: [
						{ text: 'Working.', points: 3 },
						{ text: 'Hanging with friends.', points: 2 }
					]
				},
				{
					prompt: "But it's not as if we have much in common... except for the murders.",
					options: [
						{ text: 'Tell me about yourself.', points: 3 },
						{ text: 'Not good at talking?', points: 2 }
					]
				},
				{
					prompt: "You're more like a very young brother to me than a son.",
					options: [
						{ text: "That's stretching it.", points: 3 },
						{ text: 'Should I call you big bro?', points: 3 }
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
					prompt: "Plus... I'm not fit to be her family.",
					options: [
						{ text: "Fit or not, you're family.", points: 3 },
						{ text: "I don't get it.", points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: 'Expression 3 (Persuasive).',
			choices: [
				{
					prompt: "All we've got is instant, though. How do you take it?",
					options: [
						{ text: 'Black.', points: 3 },
						{ text: 'With cream.', points: 3 },
						{ text: 'Cream and sugar.', points: 3 },
						{ text: 'Surprise me.', points: 3 }
					]
				},
				{
					prompt: "Go watch TV with Nanako. I'll bring it to you when it's ready.",
					options: [
						{ text: "You don't have to do that.", points: 3 },
						{ text: 'Thank you.', points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: "Oh... Sorry, I wasn't talking about you.",
					options: [
						{ text: 'Can I help?', points: 3 },
						{ text: 'Working at home?', points: 2 }
					]
				},
				{
					prompt: "It's late. Go to sleep.",
					options: [
						{ text: 'Are you okay?', points: 3 },
						{ text: 'But Nanako...', points: 3 },
						{ text: 'What was that about?', points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: 'Expression 4 (Touching).',
			choices: [
				{
					prompt: "Let's stop there.",
					options: [
						{ text: "Then let's go outside.", points: 3 },
						{ text: "Let's not.", points: 2 },
						{ text: "Even if it's about family?", points: 2 }
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
					prompt: 'I can do that anytime.',
					options: [{ text: 'This is more important, huh?', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'Sorry, but my hands are full here.',
					options: [{ text: 'Want some coffee?', points: 3 }]
				},
				{
					prompt: 'Do you understand why?',
					options: [
						{ text: "Because you're a coward.", points: 3 },
						{ text: 'Because of Nanako.', points: 2 },
						{ text: "Because her killer's loose.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: 'Er... Sorry about making you go along with this today.',
					options: [
						{ text: 'It was fun.', points: 3 },
						{ text: "I don't mind.", points: 2 },
						{ text: 'Ask me next time.', points: 2 }
					]
				},
				{
					prompt: "That's why I used revenge as an excuse to spend time away from her...",
					options: [
						{ text: 'Was it hard?', points: 3 },
						{ text: "You've stopped running?", points: 3 },
						{ text: 'Do you regret it now?', points: 2 }
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
					prompt: 'This is your personal mug. Write your name on it later.',
					options: [
						{ text: 'Thank you.', points: 3 },
						{ text: "My name? That's okay...", points: 3 },
						{ text: 'What am I using now?', points: 2 }
					]
				},
				{
					prompt: 'Sorry, but take care of Nanako.',
					options: [
						{ text: "Go get 'em.", points: 3 },
						{ text: 'Be careful.', points: 3 },
						{ text: 'Leave it to me.', points: 3 }
					]
				}
			],
			unlocks: ['Kohryu fusion', 'Coffee Mug']
		}
	]
});
