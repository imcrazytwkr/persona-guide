import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '#lib/data/p4g/routes.ts';

export const strengthBasketball = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Strength (basketball)',
		value: 'strength-basketball'
	},
	name: 'Kou Ichijo',
	location: 'Yasogami High classroom building 1F emergency exit',
	unlock:
		'As early as 4/19, join the Basketball Team at the classroom building emergency exit. Mutually exclusive with Strength (soccer).',
	availability: 'Daytime on Tuesday, Thursday, and Saturday.',
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
					prompt: 'Hey <protagonist>, Aiya or Junes? You decide.',
					options: [
						{ text: 'Aiya.', points: 3 },
						{ text: 'Junes.', points: 3 },
						{ text: "Let's go home.", points: 2 }
					]
				},
				{
					prompt: 'Well, I do like me some sweets...',
					options: [{ text: "I'm jealous.", points: 2 }]
				},
				{
					prompt: 'You like sweets, <protagonist>? Want me to get you some, too?',
					options: [
						{ text: 'Sure.', points: 2 },
						{ text: "That's okay.", points: 2 }
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
					prompt: '"...I want you to help him out."',
					options: [{ text: 'Just tell me how.', points: 3 }]
				},
				{
					prompt: '"She calls it \'barbaric.\'"',
					options: [
						{ text: "But it's just a sport...", points: 2 },
						{ text: 'I can see that.', points: 2 }
					]
				},
				{
					prompt: '"So... I want you to help him out."',
					options: [
						{ text: 'Leave it to me.', points: 3 },
						{ text: 'What can I do?', points: 2 }
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
					prompt:
						'Just the other day I was greeting people at one of those high society gatherings. Can you imagine? Me, at one of those things?',
					options: [
						{ text: "It's hard to imagine.", points: 2 },
						{ text: 'I can see that.', points: 2 }
					]
				},
				{
					prompt: '> Kou tries to sound cheerful...',
					options: [
						{ text: "That's good for you.", points: 2 },
						{ text: 'Cheer up, man.', points: 2 }
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
					prompt: 'Hey. Practice over already?',
					options: [
						{ text: "You've got some nerve...", points: 2 },
						{ text: 'Something wrong?', points: 2 }
					]
				},
				{
					prompt: "But me, I'm feeling like I've sunk to the bottom of the ocean.",
					options: [
						{ text: 'You just need a rest.', points: 2 },
						{ text: "Let's go do something fun.", points: 2 }
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
					prompt: '"Right?"',
					options: [
						{ text: "You're right.", points: 3 },
						{ text: 'A real game? Impossible...', points: 3 },
						{ text: 'We gotta save Kou.', points: 2 }
					]
				},
				{
					prompt:
						'"I got some dirt on a bunch of other guys too, so we should have no problem getting together a full team."',
					options: [
						{ text: "You're quite a strategist.", points: 3 },
						{ text: 'What about yourself?', points: 3 },
						{ text: "Isn't that blackmail...?", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: '"I\'m kinda worried..."',
					options: [{ text: "Let's catch up to him.", points: 3 }]
				},
				{
					prompt: 'What are you two doing here?',
					options: [
						{ text: 'You alright?', points: 3 },
						{ text: 'Find anything out?', points: 3 }
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
					prompt:
						"And now that I don't have to wear that mask anymore... I guess it's time to step off the stage.",
					options: [{ text: "Don't jump to conclusions.", points: 3 }]
				},
				{
					prompt: '...What do you think?',
					options: [{ text: 'It was written recently?', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Zaou-Gongen fusion', 'Letter to Kou']
		}
	]
});
