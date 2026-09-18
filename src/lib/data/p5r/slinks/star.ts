import type { SocialLink } from '$lib/types';

export const star: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Star',
		value: 'star'
	},
	name: 'Hifumi Togo',
	location: 'Kanda Church',
	unlock: '- From 6/25, visit Kanda Church and talk to Hifumi near the front.\n- Charm 3 (Suave)',
	availability: 'Nights at Kanda Church.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: "There's no obligation, of course...",
					options: [
						{ text: 'Lucky me.', points: 3 },
						{ text: 'Sure.', points: 2 },
						{ text: 'I guess we can.', points: 2 }
					]
				}
			],
			unlocks: ['Koma Sabaki', '+1 Knowledge']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt:
						"I tend to get very aggressive. It's as if I assume the role of a queen of a kingdom...",
					options: [{ text: "That's interesting.", points: 2 }]
				},
				{
					prompt: "Um, well, I'm doing a photoshoot for one...",
					options: [{ text: "But you don't want to, right?", points: 2 }]
				}
			],
			unlocks: ['+1 Knowledge']
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
					prompt:
						'But this hardly seems fair... How can I teach you properly when I’m this distressed...?',
					options: [{ text: 'Bring it on.', points: 2 }]
				}
			],
			unlocks: ['Uchikomi', '+1 Knowledge']
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
					prompt:
						"I hope this won't discourage you from spending time with me. Really, I would be delighted to do this again.",
					options: [
						{ text: "I'd love to.", points: 2 },
						{ text: 'Where shall we go next?', points: 2 }
					]
				}
			],
			unlocks: ['Book Town']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: '...I apologize. That must have been quite a shock.',
					options: [{ text: "She's scary.", points: 2 }]
				},
				{
					prompt: "But it's honestly quite difficult for me.",
					options: [{ text: 'You should stop then.', points: 2 }]
				},
				{
					prompt:
						"She didn't mean to offend you at all. I hope you'll accept my apology in her place.",
					options: [{ text: "You've got a lot to deal with...", points: 2 }]
				}
			],
			unlocks: ['Kakoi Kuzushi', '+1 Knowledge']
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
						{ text: 'Do you still like shogi?', points: 2 },
						{ text: 'Do what you love.', points: 2 }
					]
				},
				{
					prompt:
						'...You might make a fine priest yourself. Considering how good a listener you are, I mean.',
					options: [{ text: "You're imagining things.", points: 2 }]
				}
			],
			unlocks: ['+1 Knowledge', 'Sky Tower']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: '...I confess I am a bit scared, though.',
					options: [
						{ text: 'It may come down to luck.', points: 3 },
						{ text: "That's almost a relief.", points: 2 }
					]
				},
				{
					prompt:
						"But I'm sick of being treated like an idol. I have to show them what I'm made of!",
					options: [
						{ text: 'I believe in you.', points: 3 },
						{ text: 'Give it your all.', points: 2 }
					]
				}
			],
			unlocks: ['Narikin', '+1 Knowledge']
		},
		{
			rank: 8,
			requirements:
				'- Knowledge 5 (Erudite)\n- After the first scene, complete Mementos request "Upstaging the Stage Mother", then return to Hifumi.',
			choices: [
				{
					prompt:
						"That way, I can use the weekly magazine's popularity against them and instantly become famous.",
					options: [{ text: "That won't work.", points: 2 }]
				},
				{
					prompt: 'Perhaps they eavesdropped on our conversation?',
					options: [
						{ text: "I'm glad her heart changed.", points: 3 },
						{ text: 'Maybe...', points: 2 }
					]
				},
				{
					prompt:
						'I was just a little curious about your thoughts. Regarding my decision to reveal my fixed matches, that is.',
					options: [{ text: 'I support it.', points: 2 }]
				}
			],
			unlocks: ['+1 Knowledge', 'Mementos request: Upstaging the Stage Mother']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt:
						"However, I'm not going to give them the satisfaction. I'm going to win... with these very hands.",
					options: [{ text: 'Give it all you got.', points: 2 }]
				},
				{
					prompt: "I was so ashamed of myself. I didn't want to hurt the pieces any longer...",
					options: [{ text: 'A very queenly decision.', points: 3 }]
				},
				{
					prompt: '...So this is goodbye.',
					options: [
						{ text: 'I want to become stronger.', points: 0, routeFlag: 'friendship' },
						{ text: 'I want to stay by your side.', points: 0, routeFlag: 'romance' }
					]
				},
				{
					prompt: 'What do you mean by that...?',
					route: 'romance',
					options: [
						{ text: 'I want us to date.', points: 0, routeFlag: 'romance' },
						{ text: "We'll be friends forever.", points: 0, routeFlag: 'friendship' }
					]
				},
				{
					prompt: 'But I had you... and through our mutual revelations, I was saved. So thank you.',
					route: 'romance',
					options: [
						{ text: 'Anything for you.', points: 2 },
						{ text: 'It was all a big coincidence.', points: 2 },
						{ text: 'It was love at first sight.', points: 2 }
					]
				},
				{
					prompt:
						"That's why I can say with certainty. Today's loss was not a setback, but a glorious step forward.",
					route: 'friendship',
					options: [
						{ text: "That's a great way to see it.", points: 2 },
						{ text: "You're overthinking it.", points: 2 },
						{ text: "Let's win the next one.", points: 2 }
					]
				}
			],
			unlocks: ['Touryou']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt:
						"I quit the Ladies Professional Shogi Players' Association. I need to start over as an amateur.",
					options: [
						{ text: "You'll triumph in the end.", points: 3 },
						{ text: "Just don't lose.", points: 3 },
						{ text: "That's rough.", points: 2 }
					]
				}
			],
			unlocks: ['Lucifer fusion', 'Togo System']
		}
	]
};
