import type { SocialLink } from '$lib/types';

export const priestess: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Priestess',
		value: 'priestess'
	},
	name: 'Makoto Niijima',
	location: 'Student Council Office or school gates',
	unlock:
		'- After clearing the Bank Palace, find Makoto in front of the Student Council Office at school.\n- Knowledge 3 (Scholarly)',
	availability: 'Daytime on Tuesday, Thursday, Saturday and Sunday; day and night on rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: "I've had all kinds of new experiences today… and it's even been a little fun.",
					options: [
						{ text: "Let's go again sometime.", points: 3 },
						{ text: "It's a new you.", points: 3 },
						{ text: 'The red-light district next?', points: 3 }
					]
				}
			],
			unlocks: ['Shadow Calculus']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: 'I heard there were quite a few brothels as well.',
					options: [{ text: "You're very well informed.", points: 2 }]
				},
				{
					prompt: "If you hadn't been there to rescue me, I...",
					options: [
						{ text: 'You should have known better.', points: 2 },
						{ text: 'That was dangerous.', points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R): I guess nothing beats practical experience.',
					options: [{ text: "Couldn't agree more.", points: 3 }]
				}
			],
			unlocks: ['Baton Pass']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: "What's up with that, Miss Prez?",
					options: [{ text: 'You have the wrong idea.', points: 2 }]
				},
				{
					prompt: 'She thought I was a robot...',
					options: [
						{ text: "Don't let it get to you.", points: 2 },
						{ text: 'You can change.', points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R): She even has a bunch of Buchimaru-kun emoticons!',
					options: [{ text: 'Sounds like you two get along.', points: 3 }]
				}
			],
			unlocks: ['Brainiac Talk']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt:
						"So, my class had a practice entrance exam... and my score was significantly lower than last time. I'm concerned...",
					options: [{ text: "That's unlike you.", points: 2 }]
				},
				{
					prompt:
						"I sent her a picture... and it's apparently the same brand they use in the nurse's office at school.",
					options: [
						{ text: 'Why do you use it?', points: 3 },
						{ text: "That's adorable.", points: 2 }
					]
				},
				{
					prompt: 'I had completely forgotten about that dream, to be honest...',
					options: [
						{ text: 'I like a woman in uniform.', points: 2 },
						{ text: "That's an amazing goal.", points: 3 }
					]
				}
			],
			unlocks: ['Follow Up']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'She even sent me a picture of their date at Destinyland.',
					options: [
						{ text: "That's annoying.", points: 2 },
						{ text: 'He sounds suspicious.', points: 3 }
					]
				},
				{
					prompt: "This time, um... you'll have to play the role of my boyfriend.",
					options: [
						{ text: 'I got this.', points: 3 },
						{ text: 'Only if I can take it seriously.', points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R): What should we do…?',
					options: [{ text: 'Try to reach out to her.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: 'Charm 5 (Debonair)',
			choices: [
				{
					prompt: "Are you seriously datin'?",
					options: [
						{ text: 'We just started.', points: 2 },
						{ text: 'Love comes in many forms.', points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R): I want to ignore him, but I shouldn’t for Eiko’s sake…',
					options: [{ text: "Tell him you're on a date.", points: 2 }]
				}
			],
			unlocks: ['Harisen Recovery']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt:
						"I'm not sure any of that would have happened if not for the incident with my father...",
					options: [
						{ text: "That's a horrible story.", points: 3 },
						{ text: 'Was it tough without him?', points: 2 },
						{ text: 'He was a noble man.', points: 3 }
					]
				},
				{
					prompt: 'Trying to bring justice and order to the world around him.',
					options: [
						{ text: "That's admirable.", points: 3 },
						{ text: "I'm sure he was happy.", points: 3 }
					]
				},
				{
					prompt: 'And more importantly, how do I want to live...?',
					options: [
						{ text: 'Do you have an answer?', points: 2 },
						{ text: 'You can figure that out now.', points: 2 }
					]
				},
				{
					prompt: 'Wanna hav a double wedding?',
					options: [
						{ text: "I'm game if you are.", points: 2 },
						{ text: 'Refuse her, please.', points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R): Can we keep this up until I can make a call one way or the other?',
					options: [
						{ text: 'Of course.', points: 2 },
						{ text: "It's the role I always hoped for.", points: 3 }
					]
				}
			],
			unlocks: ['Shadow Factorization']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'So he calls you his special princess... What do you think, Joker?',
					options: [
						{ text: 'He says that to all the girls.', points: 2 },
						{ text: "That's how he ropes you in.", points: 2 }
					]
				},
				{
					prompt: "She needs to realize that. You're going to help, right?",
					options: [
						{ text: 'Absolutely.', points: 3 },
						{ text: 'What are you going to do?', points: 2 },
						{ text: 'Eh, she deserves him.', points: 2 }
					]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 9,
			requirements:
				'Get information on the host Tsukasa by talking twice to the man outside the Shinjuku bookstore.',
			choices: [
				{
					prompt: 'I dare you!',
					options: [
						{ text: 'Get away from her!', points: 3 },
						{ text: "Your fight's with me.", points: 3 },
						{ text: "I'm calling the cops.", points: 3 }
					]
				},
				{
					prompt: 'People noticed what happened...',
					options: [
						{ text: 'We should get out of here.', points: 2 },
						{ text: 'Follow me.', points: 0 }
					]
				},
				{
					prompt: "I can't believe I actually hit one of my friends..",
					options: [{ text: 'That was the right move.', points: 2 }]
				},
				{
					prompt: 'How did you ever find somewhere like this...? You know so much.',
					options: [
						{ text: "I'm a regular here.", points: 3 },
						{ text: "It's a popular meeting spot.", points: 3 },
						{ text: 'Not as much as you.', points: 2 }
					]
				},
				{
					prompt: "I can't learn about romance by myself...",
					options: [
						{ text: "You'll find someone someday. (Friendship)", points: 3 },
						{ text: "I'll be your study partner. (Romance)", points: 0 }
					]
				},
				{
					prompt: 'Do you... like me?',
					options: [
						{ text: 'I do. (Romance)', points: 3 },
						{ text: "That's not what I meant. (Friendship)", points: 0 }
					]
				},
				{
					prompt: 'Phone (P5R, Romance)',
					options: [{ text: "I'd do anything for you.", points: 2 }]
				},
				{
					prompt: 'Phone (P5R, Friendship)',
					options: [
						{ text: 'No problem at all.', points: 2 },
						{ text: 'No big deal.', points: 2 }
					]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Cybele fusion', 'Second Awakening (Anat)']
		}
	]
};
