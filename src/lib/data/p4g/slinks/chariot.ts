import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '#lib/data/p4g/routes.ts';

export const chariot = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Chariot',
		value: 'chariot'
	},
	name: 'Chie Satonaka',
	location: 'Yasogami High classroom building, 1F',
	unlock: 'Automatically after Chie joins the party.',
	availability: 'Daytime on Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday.',
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
					prompt: "Still, now's the time to train right?",
					options: [{ text: 'Right.', points: 3 }]
				},
				{
					prompt: '...No?',
					options: [
						{ text: "I'm cool with it.", points: 3 },
						{ text: 'I guess so...', points: 2 }
					]
				}
			],
			unlocks: ['Rebellion']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'But me, I totally lose it... Kinda funny, huh?',
					options: [
						{ text: "It's cute.", points: 3 },
						{ text: "It's very feminine.", points: 3 },
						{ text: "It's hilarious.", points: 3 }
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
					prompt: 'W-Well...',
					options: [
						{ text: 'Quit bagging on her.', points: 3 },
						{ text: 'None of your business.', points: 2 }
					]
				},
				{
					prompt: '> What should you do...?',
					options: [
						{ text: 'Crack a joke', points: 3 },
						{ text: "Hold Chie's hand", points: 3 },
						{ text: 'Badmouth Takeshi', points: 2 }
					]
				}
			],
			unlocks: ['Ice Boost']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Mmmm... The meat and rice just flow through my veins...',
					options: [
						{ text: 'Wolfing it down, huh?', points: 3 },
						{ text: 'Looks delicious.', points: 3 },
						{ text: 'You look so happy.', points: 3 }
					]
				},
				{
					prompt: "I hope she's not straining herself. Makes you worry, huh?",
					options: [
						{ text: "I'll look out for her.", points: 3 },
						{ text: "Yukiko isn't that weak.", points: 3 },
						{ text: 'I worry more for you.', points: 3 }
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
					prompt: 'What cowards, ganging up on the weak like that!',
					options: [{ text: 'Exactly.', points: 3 }]
				},
				{
					prompt: "We'll grab'em and make them apologize! Right, Leader?",
					options: [{ text: 'Of course.', points: 3 }]
				}
			],
			unlocks: ['Revolution']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: 'I charged in by myself... Caused you trouble...',
					options: [{ text: "It's no trouble.", points: 3 }]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'I feel like I missed the point...',
					options: [
						{ text: "There's still time.", points: 3 },
						{ text: "That's the first step.", points: 3 },
						{ text: "It's hard to face yourself.", points: 3 }
					]
				}
			],
			unlocks: ['Bufula']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: '...Was that stupid of me?',
					options: [
						{ text: 'It all turned out okay.', points: 3 },
						{ text: 'You protected that kid.', points: 3 }
					]
				},
				{
					prompt: '> ...The mood is right. What should you do...?',
					options: [
						{ text: 'Will you be my girlfriend?', points: 0, routeFlag: 'romance' },
						{ text: "I'm counting on you.", points: 0, routeFlag: 'friendship' }
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
					prompt: "I mean... we'll always be friends!",
					route: 'friendship',
					options: [{ text: 'Of course.', points: 3 }]
				},
				{
					prompt: 'Oh, w-well, how did the room you had back home look?',
					route: 'romance',
					options: [
						{ text: 'It was messier.', points: 3 },
						{ text: 'It was about the same.', points: 3 }
					]
				},
				{
					prompt: 'I was thinking... maybe both of us together...',
					route: 'romance',
					options: [{ text: 'That sounds good.', points: 3 }]
				}
			],
			unlocks: ['Second Awakening', 'Futsunushi fusion', 'Evade Fire', 'Wristbands']
		}
	]
});
