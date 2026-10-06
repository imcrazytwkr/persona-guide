import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const sunDrama = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Sun (drama)',
		value: 'sun-drama'
	},
	name: 'Yumi Ozawa',
	location: 'Yasogami High drama club',
	unlock: 'Join the drama club. Mutually exclusive with Sun (band).',
	availability: 'Daytime on Monday, Tuesday, and Thursday; day and night on rainy days.',
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
			choices: [
				{
					prompt: '...But I do want us to take it seriously, so give it a shot, okay?',
					options: [{ text: "I'll give it my all!", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: '...Was I wrong when I said that?',
					options: [
						{ text: 'No.', points: 3 },
						{ text: 'It was how you said it.', points: 2 }
					]
				},
				{
					prompt: '...Anywhere but at home.',
					options: [
						{ text: 'Is something wrong?', points: 3 },
						{ text: "I'll help.", points: 2 }
					]
				},
				{
					prompt: 'Just forget about this, okay?',
					options: [
						{ text: 'Okay.', points: 3 },
						{ text: "I can't forget.", points: 3 }
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
					prompt: '<Protagonist>-kun... Why are you...?',
					options: [
						{ text: 'Just passing by.', points: 3 },
						{ text: 'I was worried about you.', points: 2 },
						{ text: 'I got hurt...', points: 2 }
					]
				},
				{
					prompt: "It's all because of my parents. They're both holding me back.",
					options: [{ text: 'Take care of yourself, too.', points: 3 }]
				},
				{
					prompt: "It's not like you have anything to do with what's happening in my life.",
					options: [
						{ text: 'Yes, I do.', points: 3 },
						{ text: "That's right, I don't.", points: 2 }
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
					prompt: "...I just came from Dad's--that man's room...",
					options: [{ text: 'How is your mom?', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: "...He's so stupid.",
					options: [{ text: "He's a kind father.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: "I... I just don't know what's going on...",
					options: [
						{ text: 'Comfort her', points: 3 },
						{ text: 'Cry with her', points: 3 }
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
					prompt: "What did they mean by 'bear fruit'...?",
					options: [
						{ text: 'Take your time and think.', points: 3 },
						{ text: "Don't stress over it.", points: 3 },
						{ text: 'Do what you can.', points: 3 }
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
						"I'll turn around, so if you're going to reject me, just leave the room and I won't have to see you go...",
					options: [
						{ text: 'Hug her', points: 0, routeFlag: 'romance' },
						{ text: 'Leave', points: 0, routeFlag: 'friendship' }
					]
				}
			],
			unlocks: ['Asura fusion', 'Annotated Script']
		}
	]
});
