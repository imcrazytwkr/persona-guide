import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const devil = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Devil',
		value: 'devil'
	},
	name: 'Sayoko Uehara',
	location: 'Hospital, night',
	unlock: 'Volunteer at the hospital at night.',
	availability: 'Nighttime on Wednesday, Thursday, and Friday; day and night on rainy days.',
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
					prompt:
						"Would you like to study with me? Perhaps a subject that they don't teach in school, if you catch my drift...?",
					options: [
						{ text: 'What do you mean?', points: 2 },
						{ text: "I'm not interested.", points: 2 }
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
					prompt: '...So why are you working at a job like this?',
					options: [
						{ text: 'For the money.', points: 3 },
						{ text: 'To be closer to you.', points: 2 },
						{ text: 'To have something to do.', points: 2 }
					]
				},
				{
					prompt: 'Speaking of which... Say, do you have a girlfriend?',
					options: [
						{ text: 'I do.', points: 2 },
						{ text: 'Right in front of me.', points: 2 }
					]
				},
				{
					prompt: "Do you see what I'm getting at?",
					options: [
						{ text: 'Stop it!', points: 3 },
						{ text: 'No...', points: 2 }
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
					prompt: "...Don't ask what happened here.",
					options: [
						{ text: '...Okay.', points: 2 },
						{ text: "I'd rather not know.", points: 2 },
						{ text: "...I can't stay in here.", points: 2 }
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
					prompt: "That was the first time anyone ever called me a 'slutty bitch' to my face...",
					options: [{ text: "It's like a soap opera.", points: 2 }]
				},
				{
					prompt: 'What am I living for...?',
					options: [
						{ text: 'Comfort her', points: 3 },
						{ text: 'Cheer her up', points: 2 }
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
					prompt: '> Sayoko looks a bit pale. She also seems to be very tired.',
					options: [
						{ text: 'Hang in there.', points: 3 },
						{ text: 'You should get some rest...', points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Beelzebub fusion', 'Hospital ID']
		}
	]
});
