import type { SocialLink } from '$lib/types';

export const hierophant: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Hierophant',
		value: 'hierophant'
	},
	name: 'Sojiro Sakura',
	romanNumeral: 'V',
	location: 'Café Leblanc',
	unlock: 'Unlocks as the story progresses; hang out with Sojiro at Leblanc at night.',
	availability: 'Nighttime every day except Wednesday. Day and night on rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: "You know what I'm talking about, right?",
					options: [
						{ text: 'Got it.', points: 3 },
						{ text: 'That was our deal.', points: 2 },
						{ text: "It's the least I can do.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: "You know what I'm talking about, right?",
					options: [{ text: 'Making coffee.', points: 2 }]
				},
				{
					prompt: "Ugh... I don't know where he caught wind of this place.",
					options: [{ text: 'That guy seemed suspicious.', points: 2 }]
				},
				{
					prompt:
						"Besides, ladies love a guy who knows his coffee. This isn't such a bad deal for you.",
					options: [{ text: 'I want the ladies to love me.', points: 2 }]
				},
				{
					prompt:
						"Phone (P5R): Seems like you're a quick study, so I hope you've got the hang of it.",
					options: [{ text: 'Got it.', points: 2 }]
				}
			],
			unlocks: ['Coffee Basics', '+3 Kindness']
		},
		{
			rank: 3,
			requirements: 'Brew coffee at Leblanc once, then spend time with Sojiro on a later night.',
			choices: [
				{
					prompt: '...Are you listening to me? What grind are you supposed to use?',
					options: [{ text: 'Medium-fine.', points: 2 }]
				},
				{
					prompt:
						'Sorry, something just came up. We can keep going with the lessons some other time.',
					options: [{ text: 'Is it trouble?', points: 2 }]
				},
				{
					prompt:
						"Phone (P5R): But don't worry, I'll put you to work. We've got lots of time on our hands.",
					options: [
						{ text: "I'm ready to work.", points: 2 },
						{ text: 'Thank you in advance.', points: 2 }
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
						"That's because the acidity and the bean flavor profile all depend on the bean ratio. Pretty deep, huh?",
					options: [{ text: 'Tell me more.', points: 3 }]
				},
				{
					prompt: "It looks like Sojiro's in trouble. What should I do...?",
					options: [{ text: "Call Sojiro's phone.", points: 3 }]
				},
				{
					prompt: 'Phone (P5R): Just let him do his thing, and get on with the job. Got it?',
					options: [{ text: 'Understood.', points: 2 }]
				}
			],
			unlocks: ['Leblanc Curry', '+3 Kindness']
		},
		{
			rank: 5,
			requirements:
				"Available after 8/22 (Futaba's Palace deadline). Hierophant is locked at Rank 4 until then.",
			choices: [
				{
					prompt: 'And what about you?',
					options: [
						{ text: "I think I'm addicted!", points: 3 },
						{ text: "It wasn't bad.", points: 2 }
					]
				},
				{
					prompt:
						'I thought my pick-up lines were the best in town, but not a single one worked on her... Heh...',
					options: [
						{ text: "She wasn't normal, huh?", points: 3 },
						{ text: 'She was like Futaba?', points: 2 }
					]
				},
				{
					prompt:
						"That's why when I took her in, I vowed to keep this recipe alive until she could eat it again.",
					options: [{ text: 'It really paid off in the end.', points: 2 }]
				},
				{
					prompt: "Phone (P5R): It's only a problem when she asks for it three times a day.",
					options: [{ text: 'She needs a balanced diet.', points: 2 }]
				}
			],
			unlocks: ['+3 Kindness']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "By the way, what are your thoughts on So-chan's life of solitude?",
					options: [{ text: 'To each his own.', points: 2 }]
				},
				{
					prompt: "Doesn't quite seem to be the best environment for Futaba, now does it?",
					options: [
						{ text: 'Shut your mouth.', points: 3 },
						{ text: "You're wrong.", points: 2 }
					]
				},
				{
					prompt:
						"I don't even know how he managed to find me here... Maybe paying him was a mistake.",
					options: [{ text: 'Saving Futaba was no mistake.', points: 2 }]
				},
				{
					prompt:
						"Phone (P5R): Futaba's fast asleep... Didn't mean to get you tangled up in all this mess.",
					options: [{ text: 'If I can help somehow...', points: 2 }]
				}
			],
			unlocks: ['Coffee Mastery', '+3 Kindness']
		},
		{
			rank: 7,
			requirements: 'Kindness 5 (Angelic)',
			choices: [
				{
					prompt:
						'At the end of the day, the coffee and the curry people love so much are both just... excuses.',
					options: [{ text: 'You might be right.', points: 2 }]
				},
				{
					prompt:
						"Phone (P5R): And that's only because you helped us connect, so... thanks for that.",
					options: [{ text: 'Feel like a real dad now?', points: 2 }]
				}
			],
			unlocks: ['+3 Kindness']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: "How about you? Anything you'd wanna add to the menu?",
					options: [
						{ text: 'Something with curry.', points: 3 },
						{ text: 'You want my suggestion?', points: 2 }
					]
				},
				{
					prompt: "What a pain in the ass. Don't you have enough problems already?",
					options: [{ text: 'I was just protecting Futaba.', points: 3 }]
				}
			],
			unlocks: [
				'Mementos request: The Money-Grubbing Uncle',
				'Hierophant and Hermit (Futaba) locked until the request is complete'
			]
		},
		{
			rank: 9,
			requirements:
				'Complete Mementos request "The Money-Grubbing Uncle" (started by talking to Futaba).',
			choices: [
				{
					prompt: 'How is it... living with Sakura-san? Please, you can speak honestly.',
					options: [
						{ text: "It's great.", points: 3 },
						{ text: "It's a bit of a nag.", points: 2 }
					]
				},
				{
					prompt: '...Sojiro?',
					options: [
						{ text: 'You have a great daughter.', points: 3 },
						{ text: 'Congrats.', points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R): Getting all sentimental like this? At my age?',
					options: [
						{ text: 'You did great.', points: 3 },
						{ text: 'Futaba did great.', points: 3 },
						{ text: 'You two were already family.', points: 3 }
					]
				}
			],
			unlocks: ['Curry Tips']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Curry Mastery', 'Kohryu fusion', 'Kanda Church (if not already unlocked)']
		}
	]
};
