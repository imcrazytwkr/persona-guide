import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '#lib/data/p4g/routes.ts';

export const moon = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Moon',
		value: 'moon'
	},
	name: 'Ai Ebihara',
	location: 'Yasogami High, after school',
	unlock: 'After joining a sports club. To romance Ai, refuse to be her boyfriend at Rank 6.',
	availability: 'Daytime on Wednesday, Thursday, and Friday.',
	routes: ['normal', 'falseRomance'],
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
					prompt:
						"Hmm, doesn't look like they've gotten anything new in. I already have all this...",
					options: [{ text: "We'll have to come back.", points: 3 }]
				},
				{
					prompt: 'Buy me an ice latte.',
					options: [
						{ text: 'Buy it yourself.', points: 3 },
						{ text: "Let's split one.", points: 2 }
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
					prompt: 'What should we do instead?',
					options: [
						{ text: 'Come shopping with me.', points: 3 },
						{ text: "Let's just chill.", points: 3 }
					]
				},
				{
					prompt: "Looking at it from your perspective, I'd say you got pretty lucky.",
					options: [{ text: 'Not exactly...', points: 3 }]
				},
				{
					prompt: '> Ai rejected him without a second thought...',
					options: [{ text: 'That was downright cruel...', points: 0, effect: 'reverse' }]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: '> The conversation is getting more and more vulgar...',
					options: [{ text: 'Stop them', points: 3 }]
				},
				{
					prompt: '......',
					options: [{ text: "Let's go.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Th-Thank you for that, last time...',
					options: [{ text: 'What are you talking about?', points: 3 }]
				},
				{
					prompt: "Do you think maybe I'm his type? O-Or do you think he hates... people like me?",
					options: [
						{ text: 'Have a little confidence.', points: 3 },
						{ text: '......', points: 3 }
					]
				},
				{
					prompt: "All I need you to do is... ask him what's his type. That's it.",
					options: [{ text: 'Not gonna happen!', points: 0, effect: 'reverse' }]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'Haha, just kidding...',
					options: [{ text: "I'll be your boyfriend.", points: 0, routeFlag: 'falseRomance' }]
				},
				{
					prompt: '"Hey... Why don\'t you and I just go out?"',
					options: [{ text: 'Sounds good.', points: 0, routeFlag: 'falseRomance' }]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			route: 'normal',
			choices: [
				{
					prompt: "I'm sorry. I don't mean to keep making you hang out with me...",
					options: [{ text: "I don't mind.", points: 3 }]
				},
				{
					prompt: 'I wonder why...',
					options: [
						{ text: "Because we're friends.", points: 3 },
						{ text: 'You have a crush on me.', points: 3 },
						{ text: "Because I'm special to you.", points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			route: 'falseRomance',
			choices: [
				{
					prompt:
						"Hey, why don't you pick out some clothes for me? What do you think I'd look good in?",
					options: [{ text: 'Sexy clothes.', points: 3 }]
				},
				{
					prompt: "Isn't that right, <protagonist>?",
					options: [{ text: 'Yep.', points: 3 }]
				},
				{
					prompt: "...Do you think I'm pretty?",
					options: [{ text: 'Of course you are.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			route: 'normal',
			choices: [
				{
					prompt:
						'He was just... a normal, good guy. I guess what I felt was kind of a fleeting thing.',
					options: [
						{ text: 'Happens all the time.', points: 3 },
						{ text: 'You can be so cruel.', points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			route: 'falseRomance',
			choices: [
				{
					prompt: '<protagonist>... Do you love me?',
					options: [{ text: 'Of course...', points: 3 }]
				},
				{
					prompt: 'You need me, right?',
					options: [{ text: 'Naturally...', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			route: 'normal',
			choices: [
				{
					prompt: 'Uh... Sorry, was that unnecessary?',
					options: [
						{ text: 'Thank you.', points: 3 },
						{ text: 'That was reckless of you...', points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			route: 'falseRomance',
			choices: [
				{
					prompt: "I'm so worthless...",
					options: [
						{ text: "That's not true.", points: 3 },
						{ text: "Then let's find your value.", points: 3 },
						{ text: 'You decide your own worth.', points: 3 }
					]
				},
				{
					prompt: 'Is there any way... that we could just be friends?',
					options: [
						{ text: 'Sure.', points: 3 },
						{ text: 'We need time apart.', points: 0, effect: 'break' }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			route: 'normal',
			choices: [
				{
					prompt: '> What will you do...?',
					options: [
						{ text: 'Accept her', points: 0, routeFlag: 'romance' },
						{ text: 'Reject her', points: 0, routeFlag: 'friendship' }
					]
				}
			],
			unlocks: ['Sandalphon fusion', 'Compact']
		},
		{
			rank: 10,
			requirements: '',
			route: 'falseRomance',
			choices: [
				{
					prompt:
						"Still... I'm not good at being alone. I know it's a lot to ask, but... will you stay by my side?",
					options: [
						{ text: 'Of course I will.', points: 0 },
						{ text: "I'll do my best...", points: 0 },
						{ text: "You're strong enough now.", points: 0 }
					]
				}
			],
			unlocks: ['Sandalphon fusion', 'Compact']
		}
	]
});
