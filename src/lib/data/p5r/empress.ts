import type { SocialLink } from '$lib/types';

export const empress: SocialLink = {
	game: 'p5r',
	arcana: 'empress',
	name: 'Haru Okumura',
	romanNumeral: 'III',
	location: 'School rooftop after school; school gates on Sundays',
	unlock:
		'After 10/30, find and chat to her on the school rooftop. On Sundays, she hangs out at the school gates.',
	availability:
		'After school except Sunday and rainy days. On Sundays she hangs out at the school gates.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: 'Post-Rank 1',
					options: [
						{ text: 'Sounds good.', points: 3 },
						{ text: 'That was our deal.', points: 3 },
						{ text: "Thanks. I'm counting on you.", points: 3 }
					]
				}
			],
			unlocks: ['Cultivation']
		},
		{
			rank: 2,
			requirements: 'Proficiency 5 (Transcendent)',
			choices: [
				{
					prompt: 'Choice 1',
					options: [
						{ text: 'Are you opening a cafe?', points: 3 },
						{ text: 'You like coffee?', points: 3 },
						{ text: 'Are you starting a farm?', points: 2 }
					]
				},
				{
					prompt: 'Choice 2',
					options: [{ text: 'He sounds suspicious.', points: 3 }]
				},
				{
					prompt: 'Choice 3',
					options: [
						{ text: 'This is a complex issue.', points: 3 },
						{ text: 'You might be wrong.', points: 2 },
						{ text: 'Maybe you should fire him.', points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R)',
					options: [{ text: 'Any choice', points: 3 }]
				}
			],
			unlocks: ['Baton Pass']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 1',
					options: [
						{ text: "A phantom thief wouldn't worry.", points: 2 },
						{ text: "They won't find out.", points: 3 },
						{ text: "It'll be okay, I promise.", points: 3 }
					]
				},
				{
					prompt: 'Choice 2',
					options: [{ text: "I don't want to go with you.", points: 2 }]
				},
				{
					prompt: 'Choice 3',
					options: [
						{ text: 'I have.', points: 2 },
						{ text: 'Not yet.', points: 3 },
						{ text: 'Too many times to count.', points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R)',
					options: [{ text: 'Smart Response.', points: 3 }]
				}
			],
			unlocks: ['Follow Up']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 1',
					options: [
						{ text: "That's pricey.", points: 2 },
						{ text: 'It must be amazing.', points: 3 }
					]
				},
				{
					prompt: 'Choice 2',
					options: [
						{ text: "I can't let you do that.", points: 3 },
						{ text: 'Let me cover the bill.', points: 2 },
						{ text: 'Cheers.', points: 3 }
					]
				},
				{
					prompt: 'Choice 3',
					options: [
						{ text: 'You mean... poop!?', points: 3 },
						{ text: 'I can taste the elephant.', points: 3 },
						{ text: 'Excuse me while I vomit.', points: 3 }
					]
				},
				{
					prompt: 'Choice 4',
					options: [{ text: "Let's ask him.", points: 3 }]
				},
				{
					prompt: 'Choice 5',
					options: [{ text: "I'm not really sure.", points: 3 }]
				},
				{
					prompt: 'Phone (P5R)',
					options: [
						{ text: "I don't mind.", points: 2 },
						{ text: "Let's get coffee again sometime.", points: 3 }
					]
				}
			],
			unlocks: ['Celeb Talk']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 1',
					options: [
						{ text: "Somebody's telling the truth.", points: 3 },
						{ text: 'Trust no one.', points: 2 }
					]
				},
				{
					prompt: 'Choice 2',
					options: [{ text: 'There has to be another way.', points: 3 }]
				},
				{
					prompt: 'Choice 3',
					options: [
						{ text: "That doesn't matter now.", points: 2 },
						{ text: "I don't think so.", points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R)',
					options: [
						{ text: 'Are you okay?', points: 2 },
						{ text: 'Pinch yourself.', points: 3 }
					]
				}
			],
			unlocks: ['Selective Breeding']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 1',
					options: [
						{ text: "That's fascinating.", points: 3 },
						{ text: "You're so studious.", points: 2 },
						{ text: 'Can you make some for me?', points: 3 }
					]
				},
				{
					prompt: 'Choice 2',
					options: [{ text: 'I had no idea.', points: 3 }]
				},
				{
					prompt: 'Choice 3',
					options: [
						{ text: 'That would be bad.', points: 3 },
						{ text: 'Black like coffee?', points: 3 }
					]
				},
				{
					prompt: 'Choice 5',
					options: [{ text: 'Be strong, Haru.', points: 3 }]
				},
				{
					prompt: 'Phone (P5R)',
					options: [{ text: 'You can talk to me anytime.', points: 3 }]
				}
			],
			unlocks: ['Harisen Recovery']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 2',
					options: [
						{ text: 'That sounds really tough...', points: 2 },
						{ text: 'What do you want to do?', points: 3 }
					]
				},
				{
					prompt: 'Choice 3',
					options: [
						{ text: 'What does Takakura-san think?', points: 3 },
						{ text: 'There has to be a way.', points: 3 },
						{ text: 'You should tell him that.', points: 3 }
					]
				},
				{
					prompt: 'Choice 4',
					options: [
						{ text: "That's the spirit.", points: 3 },
						{ text: 'You can do it, Haru.', points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R)',
					options: [
						{ text: "I'll always have your back.", points: 3 },
						{ text: 'So what\'s this "magic item"?', points: 2 }
					]
				}
			],
			unlocks: ['Soil Improvement']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 1',
					options: [{ text: 'The soil?', points: 3 }]
				},
				{
					prompt: 'Choice 2',
					options: [
						{ text: "It'll help him understand you.", points: 3 },
						{ text: "He's going to love it.", points: 3 }
					]
				},
				{
					prompt: 'Choice 3',
					options: [
						{ text: "I'll be cheering for you.", points: 3 },
						{ text: "You're amazing, Haru.", points: 3 },
						{ text: 'Are you sure you can do that?', points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R)',
					options: [
						{ text: "It's in your nature to nurture.", points: 2 },
						{ text: 'I want some too.', points: 3 }
					]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: 'Choice 2',
					options: [
						{ text: "I'm sure you'll do great.", points: 3 },
						{ text: "It'll be fine.", points: 2 },
						{ text: "Give it all you've got, Haru.", points: 3 }
					]
				},
				{
					prompt: 'Choice 3',
					options: [
						{ text: "You're very welcome.", points: 3 },
						{ text: 'You did amazing.', points: 3 }
					]
				},
				{
					prompt: 'Choice 4',
					options: [
						{ text: 'He saw us as good friends. (Friendship)', points: 0 },
						{ text: 'I like you too, Haru. (Romance)', points: 0 }
					]
				},
				{
					prompt: 'Phone (P5R, Friendship)',
					options: [{ text: 'You sound so happy.', points: 3 }]
				},
				{
					prompt: 'Phone (P5R, Romance)',
					options: [
						{ text: 'I wanted to hear your voice.', points: 3 },
						{ text: 'I miss you.', points: 3 }
					]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Mother Harlot fusion', 'Second Awakening (Astarte)']
		}
	]
};
