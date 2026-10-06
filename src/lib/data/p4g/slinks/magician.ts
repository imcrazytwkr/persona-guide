import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '#lib/data/p4g/routes.ts';

export const magician = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Magician',
		value: 'magician'
	},
	name: 'Yosuke Hanamura',
	location: 'Yasogami High classroom building, 1F',
	unlock: 'Automatically after Yosuke joins the party.',
	availability: 'Daytime on Monday, Thursday, Friday, Saturday, and Sunday.',
	routes: [],
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
					prompt: "Sorry about that. You know me, I'm infamous around here.",
					options: [
						{ text: 'It must be tough.', points: 3 },
						{ text: 'Why are you infamous?', points: 2 }
					]
				}
			],
			unlocks: ['Trafuri']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Wait a minute... Am I starting to sound like Teddie?',
					options: [
						{ text: "Hmm, you're looking hairier.", points: 3 },
						{ text: "Teddie's cute.", points: 2 }
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
					prompt: "Phew, I'm beat... I'm not the complaints department...",
					options: [{ text: "You're incredible.", points: 3 }]
				},
				{
					prompt: 'I have to do what I can...',
					options: [{ text: "That's the spirit!", points: 2 }]
				}
			],
			unlocks: ['Dekaja']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'So...? You keep the goods under your futon?',
					options: [
						{ text: 'Of course.', points: 3 },
						{ text: 'Huh?', points: 3 },
						{ text: "What, don't you?", points: 2 }
					]
				},
				{
					prompt: 'So, you ever invited a girl in here?',
					options: [
						{ text: 'I will soon.', points: 3 },
						{ text: 'I have.', points: 2 }
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
					prompt: "But hey, I'm glad you were there! Thanks.",
					options: [
						{ text: 'No problem.', points: 3 },
						{ text: 'It was fun.', points: 3 },
						{ text: 'Tell me next time!', points: 2 }
					]
				},
				{
					prompt: "So... there's no need to bother with outsiders.",
					options: [
						{ text: "Man, you're mature.", points: 3 },
						{ text: "You're right.", points: 2 }
					]
				}
			],
			unlocks: ['Auto-Sukukaja']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: 'I just blurted out a buncha crap, huh?',
					options: [
						{ text: 'You were just upset.', points: 3 },
						{ text: 'Feel better now?', points: 3 },
						{ text: 'I know how it is.', points: 3 }
					]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 8,
			requirements: '',
			choices: [],
			unlocks: ['Diarama']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: '......',
					options: [{ text: 'Cheer up.', points: 3 }]
				},
				{
					prompt:
						"Just being born, living your life... Before you know it, you're already special to someone.",
					options: [{ text: "You're right.", points: 3 }]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Second Awakening', 'Mada fusion', 'Evade Elec', "Buddy's Bandage"]
		}
	]
});
