import type { SocialLink } from '$lib/types';

export const tower: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Tower',
		value: 'tower'
	},
	name: 'Shinya Oda',
	romanNumeral: 'XVI',
	location: 'Shibuya Arcade',
	unlock:
		'On 9/4 Mishima texts about the Mementos request "Winners Don’t Use Cheats". Pursue it to meet Shinya.',
	availability: 'Afternoons on Monday, Tuesday, and Thursday; Saturday daytime; also rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: "Hey, we should exchange IDs. It's not like I'm here every day, so...",
					options: [
						{ text: "Call me when it's game time.", points: 3 },
						{ text: 'Sure.', points: 1 },
						{ text: 'Do we have to?', points: 1 }
					]
				}
			],
			unlocks: ['Down Shot', '+3 Kindness']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: 'Thanks to you taking so long to figure it out...',
					options: [
						{ text: "Don't compare me to you.", points: 3 },
						{ text: 'Sorry...', points: 2 }
					]
				},
				{
					prompt: '*sigh*',
					options: [{ text: 'What a rude employee.', points: 2 }]
				},
				{
					prompt: '...I need to get really strong, like the Phantom Thieves.',
					options: [{ text: 'Do you admire them?', points: 2 }]
				},
				{
					prompt: 'I believe in the Phantom Thieves and their strength.',
					options: [
						{ text: 'So do I.', points: 3 },
						{ text: "I'll let them know.", points: 3 }
					]
				},
				{
					prompt: 'Everyone sucks at first, but you can get good if you do it every day!',
					options: [
						{ text: "I'll work hard.", points: 2 },
						{ text: 'So then I can beat you?', points: 2 }
					]
				}
			],
			unlocks: ['Bullet Hail', '+3 Kindness']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: "That's why I gotta get stronger!",
					options: [{ text: "That's the spirit.", points: 2 }]
				},
				{
					prompt: "Maybe we can go eat something again while we're at it?",
					options: [{ text: 'Sure.', points: 2 }]
				}
			],
			unlocks: ['Warning Shot', '+3 Kindness']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "You cheated, didn't you!?",
					options: [{ text: 'Yeah, you tell him!', points: 2 }]
				},
				{
					prompt: "You've gotta be kidding me...",
					options: [{ text: 'Get your revenge.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: "I mean, I couldn't do anything to him... There's just no way.",
					options: [
						{ text: 'It was pretty weird.', points: 3 },
						{ text: "He must've rigged it.", points: 3 }
					]
				},
				{
					prompt: "I'm definitely gonna demolish him!",
					options: [{ text: "I'm sure you can do it.", points: 2 }]
				},
				{
					prompt: "The strategy I used last time didn't work...",
					options: [
						{ text: 'You need a new strategy.', points: 3 },
						{ text: 'Are you going to give up?', points: 2 }
					]
				},
				{
					prompt: 'I gotta think of a new strategy by the next time I challenge him!',
					options: [
						{ text: "I'll be cheering you on.", points: 2 },
						{ text: 'Think you can take him?', points: 2 }
					]
				}
			],
			unlocks: ['Laced Bullets', '+3 Kindness']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "I won't do it again... I don't wanna be a bad guy.",
					options: [
						{ text: 'I believe in you.', points: 3 },
						{ text: "That's good.", points: 2 }
					]
				},
				{
					prompt: 'Um... do you... hate me now?',
					options: [{ text: 'Not at all.', points: 3 }]
				},
				{
					prompt: "<Protagonist>-san... Are you sure you aren't gonna hate me?",
					options: [{ text: "Of course I won't.", points: 2 }]
				}
			],
			unlocks: ['Cheap Shot', '+3 Kindness']
		},
		{
			rank: 7,
			requirements: '',
			choices: [],
			unlocks: ['+3 Kindness']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'So she IS bad after all...',
					options: [
						{ text: "No, she's not.", points: 2 },
						{ text: 'Is that what you think?', points: 2 }
					]
				},
				{
					prompt: "Do you think they'll actually be able to change her heart?",
					options: [
						{ text: 'Believe in them.', points: 3 },
						{ text: "It'll all work out.", points: 2 }
					]
				},
				{
					prompt: "That's why I wanna help the Phantom Thieves. I wanna stop my mom.",
					options: [
						{ text: "Let's save her.", points: 3 },
						{ text: "That's admirable.", points: 3 }
					]
				}
			],
			unlocks: ['Electric Slug', '+3 Kindness', 'Mementos request: A Mother’s Aggression']
		},
		{
			rank: 9,
			requirements: 'Complete Mementos request "A Mother’s Aggression".',
			choices: [
				{
					prompt: "She broke down crying and told me that she'll be a better mother from now on...",
					options: [
						{ text: "I'm glad to hear that.", points: 3 },
						{ text: 'Thank the Phantom Thieves.', points: 2 }
					]
				},
				{
					prompt:
						'Am I weird... for feeling happy about losing? I mean, all I cared about before was winning.',
					options: [
						{ text: 'No, that makes sense.', points: 3 },
						{ text: "It means you've matured.", points: 3 },
						{ text: 'A little bit, yeah.', points: 2 }
					]
				},
				{
					prompt: "I wonder why he's cheating...",
					options: [{ text: 'He wants to win at all costs.', points: 2 }]
				},
				{
					prompt:
						"I'm so glad she's back to her old self! I'm so thankful for the Phantom Thieves!",
					options: [
						{ text: 'Your wish came true.', points: 2 },
						{ text: 'You really think it was them?', points: 2 },
						{ text: 'You did a great job too.', points: 2 }
					]
				}
			],
			unlocks: ['+3 Kindness']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt:
						"I've got nothing left to teach you. You're an elite player now, <protagonist>-san.",
					options: [
						{ text: 'Thanks to my teacher.', points: 3 },
						{ text: 'Thanks to my hard work.', points: 2 }
					]
				},
				{
					prompt: "...I'm so happy right now.",
					options: [
						{ text: 'You made new friends.', points: 3 },
						{ text: 'You made things right.', points: 2 }
					]
				}
			],
			unlocks: ['Mada fusion', 'Oda Special', '+3 Kindness']
		}
	]
};
