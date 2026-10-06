import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '#lib/data/p4g/routes.ts';

export const priestess = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Priestess',
		value: 'priestess'
	},
	name: 'Yukiko Amagi',
	location: 'Yasogami High 1F bulletin board; Yomenaido Bookstore on days off',
	unlock: 'Automatically on 5/17, the day Kanji is kidnapped.',
	availability: 'Daytime on Monday, Tuesday, Wednesday, Thursday, and Sunday.',
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
					prompt:
						'Sensei recommended this book to me because it has details on a bunch of different job licenses...',
					options: [
						{ text: 'Going to apply for one?', points: 2 },
						{ text: 'Sensei?', points: 2 }
					]
				},
				{
					prompt:
						'I was thinking something along the lines of an interior decorator... What do you think?',
					options: [
						{ text: 'Sounds good.', points: 3 },
						{ text: "What's that?", points: 2 }
					]
				}
			],
			unlocks: ['Mudo']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Even eggs come in so many varieties...',
					options: [{ text: 'Making dinner at the inn?', points: 3 }]
				},
				{
					prompt: "So I'm going to get some practice while I can!",
					options: [{ text: 'Good luck.', points: 3 }]
				},
				{
					prompt: 'W-Will you...?',
					options: [
						{ text: 'Count me in!', points: 3 },
						{ text: "I don't mind.", points: 2 }
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
					prompt: '> For some reason, an unusually pungent smell hangs in the air...',
					options: [
						{ text: "Let's eat!", points: 3 },
						{ text: "My stomach's kinda...", points: 3 },
						{ text: 'Did you taste it?', points: 3 }
					]
				},
				{
					prompt: '> Yukiko looks sad...',
					options: [{ text: "There's always next time.", points: 3 }]
				},
				{
					prompt: "Umm... I'm sorry to drag you around...",
					options: [
						{ text: "It's okay.", points: 3 },
						{ text: "I'm having fun.", points: 3 }
					]
				}
			],
			unlocks: ['Divine Grace']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt:
						'Then the furniture department. I want to look at the desks. Those and the lamps...',
					options: [{ text: "What's all this for?", points: 3 }]
				}
			],
			unlocks: ['Recover']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "I wrote down everything I need, so this shouldn't take that long.",
					options: [{ text: 'Gotten any better yet?', points: 3 }]
				},
				{
					prompt:
						"But it's not turning out quite like it does in the book, even though I'm following the directions.",
					options: [{ text: 'Keep practicing.', points: 3 }]
				},
				{
					prompt: 'Are they that worried about my cooking...?',
					options: [{ text: 'They care about you.', points: 3 }]
				}
			],
			unlocks: ['Amrita']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: "They all have the wrong idea... I'm really sorry...",
					options: [
						{ text: "They're not mistaken.", points: 3 },
						{ text: "It's okay.", points: 2 }
					]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'W-Was I scary?',
					options: [
						{ text: 'You were cool.', points: 3 },
						{ text: "You should've said more.", points: 2 }
					]
				}
			],
			unlocks: ['Mudoon']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: 'Are you going to wish for something too?',
					options: [
						{ text: 'For you...', points: 3 },
						{ text: 'For everyone...', points: 2 }
					]
				},
				{
					prompt: 'I-Is it okay... for me to ask...?',
					options: [
						{ text: "You're my classmate.", points: 0, routeFlag: 'friendship' },
						{ text: "You're my friend.", points: 0, routeFlag: 'friendship' },
						{ text: 'I really like you.', points: 0, routeFlag: 'romance' }
					]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt: "It's a charm from that shrine... To protect you.",
					route: 'friendship',
					options: [
						{ text: 'Thank you.', points: 3 },
						{ text: 'Relying on the gods?', points: 3 }
					]
				}
			],
			unlocks: ['Second Awakening', 'Scathach fusion', 'Evade Ice', 'Shrine Charm']
		}
	]
});
