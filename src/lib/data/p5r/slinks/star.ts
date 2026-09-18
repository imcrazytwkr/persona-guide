import type { SocialLink } from '$lib/types';

export const star: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Star',
		value: 'star'
	},
	name: 'Hifumi Togo',
	location: 'Kanda Church',
	unlock:
		'- After completing Kaneshiro’s Palace. From 6/25, visit Kanda Church and talk to Hifumi near the front.\n- Charm 3 (Suave)',
	availability: 'Nights at Kanda Church.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: "Would you like to exchange IDs with me? There's no obligation, of course...",
					options: [
						{ text: 'Lucky me.', points: 3 },
						{ text: 'Sure.', points: 2 },
						{ text: 'I guess we can.', points: 2 }
					]
				}
			],
			unlocks: ['Koma Sabaki']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: "It's as if I assume the role of a queen of a kingdom.",
					options: [{ text: "That's interesting.", points: 2 }]
				},
				{
					prompt: "Um, well, I'm doing a photoshoot for one...",
					options: [{ text: "But you don't want to, right?", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: "Did you see it...? It was called 'The Venus of Shogi'...",
					options: [{ text: 'Describes you perfectly.', points: 2 }]
				},
				{
					prompt: "It's as if she wants to be the manager of a celebrity.",
					options: [{ text: 'Having a difficult time?', points: 2 }]
				},
				{
					prompt: 'Phone (P5R): How can I teach you properly when I’m this distressed...?',
					options: [{ text: 'Bring it on.', points: 2 }]
				}
			],
			unlocks: ['Uchikomi']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "She's my senior... I defeated her in a recent title match.",
					options: [
						{ text: "I didn't mind.", points: 2 },
						{ text: "Must've been the katsu curry.", points: 2 }
					]
				},
				{
					prompt: 'What do you think about them?',
					options: [{ text: "They're cool.", points: 2 }]
				},
				{
					prompt: 'Phone (P5R): Really, I would be delighted to do this again.',
					options: [
						{ text: "I'd love to.", points: 2 },
						{ text: 'Where shall we go next?', points: 2 }
					]
				}
			],
			unlocks: ['Book Town (if not already unlocked)']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'I apologize. That must have been quite a shock.',
					options: [{ text: "She's scary.", points: 2 }]
				},
				{
					prompt: "But it's honestly quite difficult for me.",
					options: [{ text: 'You should stop then.', points: 2 }]
				},
				{
					prompt:
						"Phone (P5R): She didn't mean to offend you at all. I hope you'll accept my apology in her place.",
					options: [{ text: "You've got a lot to deal with.", points: 2 }]
				}
			],
			unlocks: ['Kakoi Kuzushi']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt:
						"So now she's even more insistent on having me do more TV and magazine interviews than before...",
					options: [{ text: 'Is that frustrating?', points: 2 }]
				},
				{
					prompt:
						"Maybe I should stop playing shogi and just get a job... That way, my family won't get hurt again...",
					options: [
						{ text: 'Do what you love.', points: 2 },
						{ text: 'Do you still like shogi?', points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R): Considering how good a listener you are, I mean.',
					options: [{ text: "You're imagining things.", points: 2 }]
				}
			],
			unlocks: ['Sky Tower (if not already unlocked)']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: '..I confess I am a bit scared, though.',
					options: [
						{ text: 'It may all come down to luck.', points: 3 },
						{ text: "That's almost a relief.", points: 2 }
					]
				},
				{
					prompt: "I have to show them what I'm made of!",
					options: [
						{ text: 'I believe in you.', points: 3 },
						{ text: 'Give it your all.', points: 2 }
					]
				}
			],
			unlocks: ['Narikin']
		},
		{
			rank: 8,
			requirements:
				'- Knowledge 5 (Erudite)\n- Complete the Mementos request Upstaging the Stage Mother (unlocked during this rank), then return to Hifumi.',
			choices: [
				{
					prompt:
						'That way, I can use the weekly magazine’s popularity against them and instantly become famous.',
					options: [{ text: "That won't work.", points: 2 }]
				},
				{
					prompt: 'Perhaps they eavesdropped on our conversation?',
					options: [
						{ text: "I'm glad her heart changed.", points: 3 },
						{ text: 'Maybe...', points: 2 }
					]
				}
			],
			unlocks: ['Mementos request: Upstaging the Stage Mother']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "I'm going to win... with these very hands.",
					options: [{ text: 'Give it all you got.', points: 2 }]
				},
				{
					prompt: "I didn't want to hurt the pieces any longer..",
					options: [{ text: 'A very queenly decision.', points: 3 }]
				},
				{
					prompt: '...So this is goodbye.',
					options: [
						{ text: 'I want to become stronger.', points: 0 },
						{ text: 'I want to stay by your side.', points: 0 }
					]
				},
				{
					prompt: 'If "I want to stay by your side." selected:',
					options: [
						{ text: 'I want us to date.', points: 0 },
						{ text: "We'll be friends forever.", points: 0 }
					]
				},
				{
					prompt: 'Phone (P5R if not romanced):',
					options: [{ text: 'Any choice', points: 2 }]
				},
				{
					prompt: 'Phone (P5R if romanced):',
					options: [{ text: 'Any choice', points: 2 }]
				}
			],
			unlocks: ['Touryou']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Togo System', 'Lucifer fusion']
		}
	]
};
