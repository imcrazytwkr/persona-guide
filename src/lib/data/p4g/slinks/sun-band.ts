import { defineSocialLink } from '$lib/types';
import type { RouteKey } from '../routes';

export const sunBand = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Sun (band)',
		value: 'sun-band'
	},
	name: 'Ayane Matsunaga',
	location: 'Yasogami High music room',
	unlock: 'Join the school band. Mutually exclusive with Sun (drama).',
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
					prompt: 'I wish I had as much talent as you.',
					options: [
						{ text: 'You do have talent.', points: 3 },
						{ text: 'Effort is what matters.', points: 2 }
					]
				},
				{
					prompt: '> Cleanup looks like a big task for just one person...',
					options: [
						{ text: 'Help out', points: 3 },
						{ text: 'Watch', points: 2 }
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
					prompt:
						"I think I'll stick around and practice. I was out so long, I didn't even touch my trombone.",
					options: [
						{ text: 'Forget about it today.', points: 3 },
						{ text: 'You want me to help?', points: 2 }
					]
				},
				{
					prompt:
						'Because there are lots of other things I can do for the club. Scheduling, accounting, cleaning up...',
					options: [{ text: "That's a great attitude.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "Shoot... I still can't play the part I was messing up last time.",
					options: [{ text: "Why don't you give up?", points: 3 }]
				},
				{
					prompt:
						"It'd be nice to be able to play outside, but I'd embarrass myself if I went alone...",
					options: [
						{ text: 'Want me to help out?', points: 3 },
						{ text: 'Alright, follow me!', points: 3 }
					]
				},
				{
					prompt: "Oh... I'm distracting you from your own practice, aren't I...",
					options: [
						{ text: "No, you're not.", points: 3 },
						{ text: 'Just hang in there.', points: 2 }
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
					prompt: "I can't... I can't do it...",
					options: [
						{ text: "Don't worry, you can do it!", points: 3 },
						{ text: "It's okay to mess up.", points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: '> Ayane is weeping...',
					options: [{ text: 'Hold her', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: '> What should you do...?',
					options: [
						{ text: 'Reveal your feelings for her', points: 0, routeFlag: 'romance' },
						{ text: 'Change the subject.', points: 0, routeFlag: 'friendship' }
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
					prompt: '> Ayane looks at the ground nervously.',
					route: 'romance',
					options: [
						{ text: 'Wanna go grab some food?', points: 3 },
						{ text: 'Wanna go out and have fun?', points: 3 },
						{ text: 'Wanna come to my house?', points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Asura fusion', 'Handmade Ticket']
		}
	]
});
