import type { SocialLink } from '$lib/types';

export const faith: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Faith',
		value: 'faith'
	},
	name: 'Sumire Yoshizawa',
	location: 'Kichijoji',
	unlock: 'Unmissable event on the 5/30 field trip.',
	availability:
		'Lunchtime during school and after school. In June, September, October, and November she is available only on Wednesday. In July, August, and December she is also occasionally available on Thursday and Sunday.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['+5 HP']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt:
						"It's all about the harmony between the internal and external oblique muscles... I can't get enough of it!",
					options: [
						{ text: "We're just getting started.", points: 2 },
						{ text: "I'm so done with this.", points: 2 }
					]
				},
				{
					prompt:
						"I'm actually not doing so great at the moment, so I'm not sure I could manage anything too strenuous.",
					options: [{ text: 'Next time, then.', points: 2 }]
				},
				{
					prompt:
						"I was so relieved, I suddenly got really hungry... and then my stomach wouldn't stop growling in my meeting.",
					options: [{ text: 'Impressive.', points: 2 }]
				}
			],
			unlocks: ['Tumbling', '+5 HP']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: "And I figured something out! It's this!",
					options: [{ text: 'Making bento?', points: 3 }]
				},
				{
					prompt:
						'I made this specifically with your body type in mind, and knowing how much you exercise... Do you want it?',
					options: [
						{ text: "I'm touched!", points: 2 },
						{ text: 'It looks delicious.', points: 2 }
					]
				},
				{
					prompt: "Let's dig in!",
					options: [
						{ text: 'Is that all for you?', points: 3 },
						{ text: 'That seems a little much.', points: 2 }
					]
				},
				{
					prompt: '<protagonist>-senpai? You okay? Your eyes are glazing over...',
					options: [{ text: "It's definitely unique.", points: 2 }]
				},
				{
					prompt:
						"I'm so embarrassed... I thought it was so great when I presented it to you, and now...",
					options: [
						{ text: 'You could try again sometime?', points: 3 },
						{ text: 'It happens.', points: 3 },
						{ text: 'Just keep at it.', points: 3 }
					]
				}
			],
			unlocks: ['+5 HP']
		},
		{
			rank: 4,
			requirements: 'Must complete Rank 4 before 12/22 to continue the social link.',
			choices: [
				{
					prompt:
						"I've been wanting to come here for a while, but I never had the chance to drop by.",
					options: [{ text: "You're looking to buy?", points: 2 }]
				},
				{
					prompt: 'What do you think?',
					options: [
						{ text: 'A pretty modern look.', points: 3 },
						{ text: 'I look so aloof in these.', points: 2 }
					]
				},
				{
					prompt:
						"But your input's been really helpful so far! Would you mind poking around with me for a bit longer?",
					options: [
						{ text: 'Of course.', points: 2 },
						{ text: "Let's keep going.", points: 2 }
					]
				},
				{
					prompt: "I don't know how to describe it. It just seems perfect for my dad somehow.",
					options: [{ text: 'Good choice.', points: 2 }]
				},
				{
					prompt:
						"The more I thought about it, the more... empty I felt. Like I wasn't even me anymore.",
					options: [{ text: 'Everyone deals with that.', points: 2 }]
				},
				{
					prompt: 'And having your support makes me even more determined to make that happen.',
					options: [{ text: "We'll work at it together.", points: 2 }]
				},
				{
					prompt: 'And it suits him even better than I imagined! He was so happy with them!',
					options: [
						{ text: "I'm glad to hear that.", points: 2 },
						{ text: 'You should be more confident.', points: 2 }
					]
				}
			],
			unlocks: ['Chaînés Hook', '+5 HP']
		},
		{
			rank: 5,
			requirements:
				"- Must complete Rank 4 before 12/22 to continue.\n- Can't go beyond Rank 5 until after 12/22.",
			choices: [
				{
					prompt: "Probably didn't expect to be meeting me at the batting center, huh?",
					options: [{ text: "It's a surprise, yeah.", points: 2 }]
				},
				{
					prompt: 'What do you think? That could work, right?',
					options: [
						{ text: "Go ahead. I'll watch.", points: 3 },
						{ text: 'It is a good idea.', points: 2 }
					]
				},
				{
					prompt: 'I did it, Senpai! I hit the ball!',
					options: [
						{ text: 'Congratulations.', points: 3 },
						{ text: 'I saw!', points: 3 },
						{ text: "How's that feel?", points: 2 }
					]
				},
				{
					prompt: "I'd forgotten how it felt to work that hard on someone else's behalf...",
					options: [
						{ text: "That's important.", points: 3 },
						{ text: "Don't forget how that feels.", points: 2 }
					]
				},
				{
					prompt:
						"It's nice to dip into sports aside from gymnastics. Was there anything else you wanted to try, Senpai?",
					options: [
						{ text: 'Swimming.', points: 3 },
						{ text: 'Gymnastics.', points: 3 },
						{ text: 'Running.', points: 2 }
					]
				}
			],
			unlocks: ['+5 HP']
		},
		{
			rank: 6,
			requirements: 'Locked until 1/13. Locked out forever if Rank 5 was not reached before then.',
			choices: [
				{
					prompt: '...But this is the real me, I guess.',
					options: [{ text: 'You have to face it.', points: 3 }]
				}
			],
			unlocks: ['Follow Up', 'Fitness Talk', '+5 HP']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: '*Siiigh...*',
					options: [{ text: 'You okay?', points: 3 }]
				},
				{
					prompt: "I'll always be someone less than Kasumi. I'm just worthless after all...",
					options: [{ text: "That isn't true.", points: 3 }]
				},
				{
					prompt: 'Senpai, will you go out with me again?',
					options: [
						{ text: 'Of course.', points: 3 },
						{ text: 'I could watch you forever.', points: 3 },
						{ text: 'Another love confession?', points: 3 }
					]
				},
				{
					prompt:
						"It didn't seem like you were struggling at all, though. You might be just as tough as Kasumi... Amazing.",
					options: [{ text: 'I love a good challenge.', points: 3 }]
				}
			],
			unlocks: ['Harisen Recovery', '+5 HP']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: "I see. Well, I guess it's important to have a balanced diet...?",
					options: [{ text: 'Walk up to Sumire', points: 3 }]
				},
				{
					prompt: "I don't even know if I'm worth showing off, let alone how to do it...",
					options: [
						{ text: 'Try to stay positive.', points: 3 },
						{ text: "I'm here for you.", points: 3 },
						{ text: "It'll work out.", points: 3 }
					]
				},
				{
					prompt: 'Um, what do you think?',
					options: [
						{ text: 'It looks great.', points: 3 },
						{ text: 'You look really cute.', points: 3 },
						{ text: "I'm in love.", points: 3 }
					]
				},
				{
					prompt: "Even if you didn't like it... I don't think that'd change how I feel about it.",
					options: [
						{ text: "That's how it should be.", points: 3 },
						{ text: 'Sounds like progress.', points: 3 }
					]
				},
				{
					prompt: 'B-By the way, where do you like to get your clothes from, Senpai?',
					options: [
						{ text: 'The resale shop.', points: 3 },
						{ text: 'Online.', points: 3 }
					]
				}
			],
			unlocks: ['Endure', '+5 HP']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "Sorry for dropping in on you like this. I hope it's not too much trouble.",
					options: [
						{ text: "It's no problem.", points: 3 },
						{ text: "We'll call it holiday hours.", points: 3 }
					]
				},
				{
					prompt: 'And if you wouldn’t mind, I’d like you to be there when I do... Is that okay?',
					options: [
						{ text: 'Definitely.', points: 3 },
						{ text: 'Of course.', points: 3 }
					]
				},
				{
					prompt: 'I talked about wanting you to see me, and how that helped me stop worrying?',
					options: [{ text: 'Of course I do.', points: 3 }]
				},
				{
					prompt: 'Even as worthless as I am, I hope I still helped Kasumi somehow...',
					options: [
						{ text: 'I know you did.', points: 3 },
						{ text: "You're not worthless.", points: 3 },
						{ text: 'This is a new beginning.', points: 3 }
					]
				},
				{
					prompt: "Th-There's something I need to tell you, Senpai!",
					options: [{ text: 'Go ahead.', points: 3 }]
				},
				{
					prompt: 'Um, but... The last thing I want to do is make you uncomfortable, so...',
					options: [
						{ text: "Let's stay friends, okay?", points: 0, routeFlag: 'friendship' },
						{ text: 'I love you too.', points: 0, routeFlag: 'romance' }
					]
				},
				{
					prompt: 'Oh... what am I saying...?',
					route: 'romance',
					options: [
						{ text: 'Calm down.', points: 3 },
						{ text: 'Take your time.', points: 3 }
					]
				},
				{
					prompt: 'I-I—um—you—',
					route: 'romance',
					options: [
						{ text: 'So? Any different?', points: 3 },
						{ text: 'You are so red right now.', points: 3 },
						{ text: "You're so cute.", points: 3 }
					]
				},
				{
					prompt:
						"It feels as if I'm constantly riding a rollercoaster... I don't know what to do!",
					route: 'romance',
					options: [{ text: 'Get used to it.', points: 3 }]
				},
				{
					prompt: "Just watch me and I promise I'll keep improving!",
					route: 'friendship',
					options: [
						{ text: 'Show me your best.', points: 3 },
						{ text: "I can't wait to see it.", points: 3 },
						{ text: 'You can always rely on me.', points: 3 }
					]
				},
				{
					prompt:
						"I really feel like I've matured. And I'm really glad for your part in that, Senpai.",
					route: 'friendship',
					options: [
						{ text: "I'm glad to hear that.", points: 3 },
						{ text: "I'll always have your back.", points: 3 }
					]
				}
			],
			unlocks: ['Protect', '+5 HP']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt: "I genuinely can't thank you enough.",
					route: 'friendship',
					options: [
						{ text: 'You did all the work.', points: 3 },
						{ text: "We're not done yet.", points: 3 },
						{ text: "It's been my pleasure.", points: 3 }
					]
				},
				{
					prompt: "...as well as discovering what's most important to me while performing.",
					route: 'romance',
					options: [
						{ text: 'What do you mean?', points: 3 },
						{ text: 'Is it someone you love?', points: 3 }
					]
				},
				{
					prompt:
						"That's why I want to turn this world back to how it used to be. I want to keep my promise with her.",
					options: [
						{ text: "I'm counting on you.", points: 3 },
						{ text: "Don't get ahead of yourself.", points: 3 },
						{ text: "We're our world's champions.", points: 3 }
					]
				}
			],
			unlocks: ['Second Awakening', 'Maria fusion', '+5 HP']
		}
	]
};
