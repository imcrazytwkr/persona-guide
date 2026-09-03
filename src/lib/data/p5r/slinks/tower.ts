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
		'On 9/4 Mishima texts about the Mementos request Winners Don’t Use Cheats. Pursue it to meet Shinya.',
	availability: 'Afternoons on Monday, Tuesday, and Thursday; Saturday daytime; also rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: 'Post-Rank 1',
					options: [{ text: "Call me when it's game time.", points: 3 }]
				}
			],
			unlocks: ['Down Shot']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 1',
					options: [
						{ text: "Don't compare me to you.", points: 3 },
						{ text: 'Sorry.', points: 2 }
					]
				},
				{
					prompt: 'Choice 2',
					options: [{ text: 'What a rude employee.', points: 2 }]
				},
				{
					prompt: 'Choice 3',
					options: [{ text: 'Do you admire them?', points: 2 }]
				},
				{
					prompt: 'Choice 4',
					options: [
						{ text: 'So do I.', points: 3 },
						{ text: "I'll let them know.", points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R):',
					options: [
						{ text: "I'll work hard.", points: 2 },
						{ text: 'So then I can beat you?', points: 2 }
					]
				}
			],
			unlocks: ['Bullet Hail']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 2',
					options: [{ text: "That's the spirit.", points: 2 }]
				},
				{
					prompt: 'Phone (P5R):',
					options: [{ text: 'Sure.', points: 2 }]
				}
			],
			unlocks: ['Warning Shot']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 1',
					options: [{ text: 'Dr. Takemi will help.', points: 2 }]
				},
				{
					prompt: 'Choice 2',
					options: [
						{ text: 'You seem happy.', points: 3 },
						{ text: "You're so kind.", points: 2 },
						{ text: 'Why free?', points: 2 }
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
					prompt: 'Choice 1',
					options: [{ text: 'Yeah, you tell him!', points: 2 }]
				},
				{
					prompt: 'Choice 2',
					options: [{ text: 'Get your revenge.', points: 2 }]
				},
				{
					prompt: 'Phone (P5R):',
					options: [
						{ text: "I'll be cheering you on.", points: 2 },
						{ text: 'Think you can take him?', points: 2 }
					]
				}
			],
			unlocks: ['Ammo Pouch']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 3',
					options: [
						{ text: 'I believe in you.', points: 3 },
						{ text: "That's good.", points: 2 }
					]
				},
				{
					prompt: 'Choice 4',
					options: [{ text: 'Not at all.', points: 3 }]
				},
				{
					prompt: 'Phone (P5R):',
					options: [{ text: "Of course I won't.", points: 2 }]
				}
			],
			unlocks: ['Cheap Shot']
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
					prompt: 'Choice 1',
					options: [
						{ text: "No, she's not.", points: 2 },
						{ text: 'Is that what you think?', points: 2 }
					]
				},
				{
					prompt: 'Choice 2',
					options: [
						{ text: 'I believe in them', points: 3 },
						{ text: "It'll all work out.", points: 2 }
					]
				}
			],
			unlocks: ['Electric Slug', 'Mementos request: A Mother’s Aggression']
		},
		{
			rank: 9,
			requirements: 'Complete the Mementos request A Mother’s Aggression.',
			choices: [
				{
					prompt: 'Choice 1',
					options: [
						{ text: "I'm glad to hear that.", points: 3 },
						{ text: 'Thank the Phantom Thieves.', points: 2 }
					]
				},
				{
					prompt: 'Choice 2',
					options: [
						{ text: "It means you've matured.", points: 3 },
						{ text: 'No, that makes sense.', points: 3 },
						{ text: 'A little bit, yeah.', points: 2 }
					]
				},
				{
					prompt: 'Choice 3',
					options: [{ text: 'He wants to win at all costs.', points: 0 }]
				},
				{
					prompt: 'Phone (P5R):',
					options: [{ text: 'Any choice', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Oda Special', 'Mada fusion']
		}
	]
};
