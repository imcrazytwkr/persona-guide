import { defineSocialLink } from '$lib/types';
import type { RouteKey } from '../routes';

export const jester = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Jester / Hunger',
		value: 'jester'
	},
	name: 'Tohru Adachi',
	location: 'Junes during the day; Central Shopping District (gas station) at night',
	unlock:
		"After Yukiko's Castle (as early as 5/13). Rank 6 by 11/1 or the link locks. Unavailable while a victim is in the Midnight Channel.",
	availability:
		'Ranks 1–2 daytime, ranks 3–5 nighttime, rank 6 daytime. After rank 6, progresses with the story.',
	routes: ['normal', 'accomplice'],
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
					prompt: "And she'll talk your ear off if you let her... it's so annoying.",
					options: [{ text: 'That does sound annoying.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Oh, uh, sorry for using you like that. You were a big help.',
					options: [{ text: "Why don't you come over for real?", points: 2 }]
				},
				{
					prompt:
						"But Dojima-san's still at work, right? Does that mean it'll be just us? Isn't that weird?",
					options: [
						{ text: "I'm a good cook.", points: 3 },
						{ text: 'Nanako will be happy.', points: 2 }
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
					prompt: 'I bet Dojima-san tells you all the time what a great help you are!',
					options: [{ text: 'Nope.', points: 2 }]
				},
				{
					prompt: '"Wow! you\'re the best, Adachi-san!"',
					options: [
						{ text: 'That was a surprise.', points: 3 },
						{ text: 'You like magic tricks?', points: 2 }
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
					prompt: "Don't worry about that. We have to be efficient here.",
					options: [{ text: "You're right.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: 'Must reach Rank 6 by 11/1.',
			choices: [
				{
					prompt: "I like being alone. It's easy, and it lets me do whatever I want.",
					options: [{ text: "That's true.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: 'Automatically after completing Heaven.',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements: 'Automatically on 12/3.',
			choices: [
				{
					prompt: 'Should you tell your friends about your suspicions about Adachi as the culprit?',
					options: [
						{
							text: "Don't tell friends, protect Adachi",
							points: 0,
							routeFlag: 'accomplice'
						},
						{ text: 'Tell them about Adachi', points: 0, routeFlag: 'normal' }
					]
				},
				{
					prompt: "Are you sure you don't want to tell your friends...?",
					route: 'accomplice',
					options: [
						{ text: 'Protect Adachi', points: 0, routeFlag: 'accomplice' },
						{ text: 'Tell your friends', points: 0, routeFlag: 'normal' }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: 'After defeating Ameno-sagiri.',
			route: 'normal',
			choices: [
				{
					prompt: 'We have the same power, but things turned out so differently for us...',
					options: [
						{ text: "It's because I had my friends.", points: 0 },
						{ text: 'You can still start over.', points: 0 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: 'True Ending on 3/20.',
			route: 'normal',
			choices: [],
			unlocks: ['Magatsu-Izanagi fusion', "Adachi's Letter"]
		},
		{
			rank: 10,
			requirements: 'Accomplice ending.',
			route: 'accomplice',
			choices: [
				{
					prompt: 'This is probably the last day you can see Adachi...',
					options: [
						{ text: 'Go see Adachi', points: 0, routeFlag: 'accomplice' },
						{ text: 'Go home without seeing Adachi', points: 0 }
					]
				},
				{
					prompt: "Well, anyway, what's with the sudden visit? Can I help you with something?",
					options: [
						{ text: 'I came to say goodbye.', points: 0 },
						{ text: 'Did you do it?', points: 0, routeFlag: 'accomplice' }
					]
				},
				{
					prompt: 'What did you come here to do? Convince me to turn myself in?',
					options: [
						{ text: 'Yes.', points: 0 },
						{ text: 'No.', points: 0, routeFlag: 'accomplice' }
					]
				},
				{
					prompt: 'So... what? Are you trying to blackmail me?',
					options: [
						{ text: 'Yes.', points: 0 },
						{ text: 'No.', points: 0, routeFlag: 'accomplice' }
					]
				},
				{
					prompt: 'Well...? Are you going to keep playing detective?',
					options: [
						{ text: '......', points: 0 },
						{ text: "I'm on your side.", points: 0, routeFlag: 'accomplice' }
					]
				},
				{
					prompt: 'Do you understand what that means?',
					options: [
						{ text: 'Yes.', points: 0, routeFlag: 'accomplice' },
						{ text: 'I was just kidding.', points: 0 }
					]
				},
				{
					prompt: 'Will you burn the letter?',
					options: [
						{ text: 'Do nothing', points: 0 },
						{ text: 'Set fire to the letter', points: 0, routeFlag: 'accomplice' }
					]
				}
			],
			unlocks: ["Adachi's Number"]
		}
	]
});
