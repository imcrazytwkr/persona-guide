import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const hanged = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Hanged Man',
		value: 'hanged'
	},
	name: 'Naoki Konishi',
	location: 'Samegawa Flood Plain',
	unlock: 'After the Midnight Channel appearances begin.',
	availability: 'Daytime on Monday, Tuesday, Wednesday, and Thursday.',
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
						"I usually eat here a lot because it's so close to our place, but for some reason, I haven't eaten here recently.",
					options: [
						{ text: 'Too busy?', points: 3 },
						{ text: 'Tired of the food?', points: 3 },
						{ text: 'Because of the murder?', points: 2 }
					]
				},
				{
					prompt: "I mean... What exactly is an 'admirable life,' anyway?",
					options: [
						{ text: 'Contributing to society.', points: 3 },
						{ text: 'Making your parents happy.', points: 3 },
						{ text: "I don't know.", points: 3 }
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
					prompt: "> Naoki is laughing like he's having a good time...",
					options: [
						{ text: 'Ask him to tell another story', points: 3 },
						{ text: 'Tell your own tale of failure', points: 3 },
						{ text: 'Tell an American joke', points: 3 }
					]
				},
				{
					prompt: '> Naoki is biting his lip...',
					options: [
						{ text: "I'll go tell them off.", points: 3 },
						{ text: "You're not saying anything?", points: 3 }
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
					prompt: '> Naoki looks distressed...',
					options: [
						{ text: 'Talk back to the lady', points: 3 },
						{ text: 'Flatter the lady', points: 3 }
					]
				},
				{
					prompt: "I'm sorry... It's a little awkward to be around me, huh?",
					options: [{ text: "It's not your fault.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: '......',
					options: [{ text: "That's a good idea.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'Am I really that pitiable...?',
					options: [
						{ text: "You're not the only one.", points: 3 },
						{ text: 'I know what they mean.', points: 3 }
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
					prompt: 'I wanted to apologize for that.',
					options: [
						{ text: "I don't mind.", points: 3 },
						{ text: 'Last time?', points: 3 }
					]
				},
				{
					prompt:
						"How do I get out from that...? What would be best for me, for Sis...? I just don't know.",
					options: [{ text: 'Take action.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'Yosuke-san sure is nosy. Oh wait, so are you...',
					options: [
						{ text: "Don't lump me in with him.", points: 3 },
						{ text: "We can't just ignore you.", points: 3 }
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
						"Because I wasn't able to cry like the actors on TV, I thought that maybe I didn't actually like Sis...",
					options: [
						{ text: "That's not true.", points: 3 },
						{ text: 'People are different.', points: 3 },
						{ text: "You're just inept.", points: 3 }
					]
				},
				{
					prompt: '> Naoki is biting his lip...',
					options: [
						{ text: 'She can hear you.', points: 3 },
						{ text: 'Just let it all out, Naoki.', points: 3 },
						{ text: 'It was out of your hands.', points: 2 }
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
					prompt: "It's all thanks to you.",
					options: [
						{ text: "I didn't do anything.", points: 3 },
						{ text: "That's right. Be grateful.", points: 3 }
					]
				}
			],
			unlocks: ['Attis fusion', 'Junes Receipt']
		}
	]
});
