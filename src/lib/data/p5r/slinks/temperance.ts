import type { SocialLink } from '$lib/types';

export const temperance: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Temperance',
		value: 'temperance'
	},
	name: 'Sadayo Kawakami',
	location: 'Leblanc (yellow phone)',
	unlock:
		'- On 5/24, go to the maid-request event with Ryuji. Afterward, talk to Kawakami in the 2F hallway for her number, then call her from the yellow phone in Leblanc.\n- Guts 3 (Staunch)',
	availability:
		'Friday and Saturday nights (also rainy nights). Call from the yellow phone in Leblanc (5,000 yen until Rank 9). Must be maxed by November 18.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt:
						"It'll be our wittle secret, just for Becky and Master, okay? Can you keep a secret?",
					options: [
						{ text: 'Yeah, I get it.', points: 3 },
						{ text: 'I will if you will.', points: 2 },
						{ text: 'Please stop talking like that.', points: 2 }
					]
				}
			],
			unlocks: ['Slack Off']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: "But then, doesn't it pain your heart to see such a cute maid all dirty?",
					options: [{ text: 'It does.', points: 2 }]
				},
				{
					prompt: "You weren't expecting to do anything weird with me, were you?",
					options: [{ text: 'Absolutely not!', points: 2 }]
				},
				{
					prompt: 'I really wanna do a lot more cleaning for you... Is that okay, Master?',
					options: [
						{ text: 'You have the wrong number.', points: 2 },
						{ text: 'Uh, what the hell?', points: 2 },
						{ text: 'Is this the hard sell?', points: 2 }
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
					prompt: "The high-end cup noodles really do make a difference, don't they?",
					options: [
						{ text: 'Yeah, they do.', points: 2 },
						{ text: 'Do some real cooking.', points: 2 }
					]
				},
				{
					prompt: "I heard they might even cut the teachers' salaries... I'm so sick of it...",
					options: [{ text: "I'll request you more often.", points: 3 }]
				},
				{
					prompt: "...Seriously, though. You're still young, so you really need to eat properly...",
					options: [{ text: 'Thanks.', points: 2 }]
				}
			],
			unlocks: ['Housekeeping']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "But he said that he prioritizes 'younger' women!",
					options: [{ text: 'How rude.', points: 2 }]
				},
				{
					prompt: "I look pretty good as a maid, don't I?",
					options: [
						{ text: 'You need to love yourself.', points: 3 },
						{ text: 'Yes, you do.', points: 2 }
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
					prompt: "You know you're being used for money... and you still request me?",
					options: [
						{ text: "It's fun.", points: 2 },
						{ text: "Who's the Master here?", points: 2 }
					]
				},
				{
					prompt:
						"He threatened me... saying that I'd be dismissed if I continued to tutor Takase-kun.",
					options: [
						{ text: 'How terrible...', points: 2 },
						{ text: 'So, did you stop?', points: 2 }
					]
				},
				{
					prompt:
						"There's always this nice curry smell around the place. Do you get to eat that place's curry every day?",
					options: [{ text: 'You want some?', points: 2 }]
				}
			],
			unlocks: ['Free Time']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'Sorry... I need to take a break...',
					options: [{ text: 'Want to rest a bit?', points: 2 }]
				},
				{
					prompt: "I can't stop coughing...",
					options: [
						{ text: 'Are you all right?', points: 3 },
						{ text: 'You should go home.', points: 3 },
						{ text: 'Have you seen a doctor?', points: 2 }
					]
				},
				{
					prompt: 'If you neglect stuff like that, it makes you more likely to get sick.',
					options: [{ text: 'How are you feeling, though?', points: 3 }]
				}
			],
			unlocks: ['Super Housekeeping']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: 'I should be able to send it out tomorrow...',
					options: [
						{ text: "Don't pay them.", points: 3 },
						{ text: "Don't strain yourself.", points: 2 }
					]
				},
				{
					prompt: 'I guess transferring to our sister company is the only way...',
					options: [{ text: 'Think this through more.', points: 3, routeFlag: 'romance' }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: '...So this is just what I have to do.',
					options: [{ text: 'Is this really what you want?', points: 3 }]
				},
				{
					prompt:
						"That's why I'm going to quit both my teaching job and my maid job... What do you think?",
					options: [
						{ text: "If that's what you decided.", points: 3 },
						{ text: "You're running away.", points: 2 }
					]
				},
				{
					prompt: 'And that is my answer! ...Well, what do you think?',
					options: [
						{ text: 'Be confident in your answer.', points: 3 },
						{ text: "That's the right choice.", points: 3 },
						{ text: "You're asking a student?", points: 3 }
					]
				},
				{
					prompt:
						"But from now on, I'm going to protect you too. As your teacher, I will never betray you.",
					options: [
						{ text: 'I want to protect you.', points: 3 },
						{ text: "That's reassuring.", points: 3 }
					]
				},
				{
					prompt:
						"But I felt so stuck facing it alone. It's thanks to you that I actually figured out what I need to do.",
					options: [
						{ text: "You're welcome.", points: 2 },
						{ text: 'So much for being a maid.', points: 2 },
						{ text: "I'll do anything for you.", points: 2 }
					]
				}
			],
			unlocks: ['Mementos request: A Teacher Maid to Suffer']
		},
		{
			rank: 9,
			requirements: 'Complete Mementos request "A Teacher Maid to Suffer".',
			choices: [
				{
					prompt: "I bet I'll be an old woman by the time I achieve my dreams.",
					options: [{ text: 'Nonsense.', points: 3 }]
				},
				{
					prompt: 'Today marks the day I graduate from being your maid.',
					options: [
						{ text: 'What a bummer.', points: 3 },
						{ text: 'Thank you for your service.', points: 3 }
					]
				},
				{
					prompt: "Besides, won't you be lonely? Hm?",
					options: [
						{ text: 'Not really.', points: 2 },
						{ text: 'I want to keep seeing you.', points: 2, routeFlag: 'romance' }
					]
				},
				{
					prompt: "You don't want to give anybody the wrong idea. That could really hurt someone.",
					route: 'romance',
					options: [
						{ text: 'Got it.', points: 2 },
						{ text: 'I mean what I say.', points: 0, routeFlag: 'romance' }
					]
				},
				{
					prompt: "This situation isn't normal. I'm a teacher, and you're my student, you know?",
					route: 'romance',
					options: [
						{ text: "I'm a master; you're a maid.", points: 0, routeFlag: 'friendship' },
						{ text: "I'm a man; you're a woman.", points: 0, routeFlag: 'romance' }
					]
				},
				{
					prompt:
						'But somewhere along the way, I forgot about all that... Reigniting your original resolve is easier said than done.',
					route: 'friendship',
					options: [{ text: 'You can do it.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt:
						'I need to work hard so I can make up for all the times I let my students down in the past.',
					route: 'friendship',
					options: [
						{ text: "I'm glad to hear that.", points: 3 },
						{ text: "Sounds like you're busy.", points: 2 }
					]
				},
				{
					prompt:
						'I put up with the mess because you were my client, but you need to thoroughly clean in here!',
					route: 'friendship',
					options: [{ text: 'I will.', points: 2 }]
				},
				{
					prompt: "A new path where I'll never abandon any of my students...",
					options: [
						{ text: 'That sounds promising.', points: 3 },
						{ text: "I'll make sure of it.", points: 3 }
					]
				},
				{
					prompt: "I'll obey them, you know... even though I'm no longer a maid.",
					route: 'romance',
					options: [
						{ text: 'I want to rely on you.', points: 3 },
						{ text: 'I want you to rely on me.', points: 3 }
					]
				}
			],
			unlocks: ['Ardha fusion', 'Special Massage']
		}
	]
};
