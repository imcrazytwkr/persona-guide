import type { SocialLink } from '$lib/types';

export const priestess: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Priestess',
		value: 'priestess'
	},
	name: 'Makoto Niijima',
	location: 'Shujin Academy 3F in front of the student council room; school gates on days off',
	unlock:
		'- After 6/24, talk to Makoto in front of the student council room.\n- Knowledge 3 (Scholarly)',
	availability: 'Daytime on Tuesday, Thursday, Saturday, and Sunday; day and night on rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: "I've had all kinds of new experiences today... and it's even been a little fun.",
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
			requirements: 'Unavailable when raining.',
			choices: [
				{
					prompt: 'I heard there were quite a few brothels as well.',
					options: [{ text: "You're very well informed.", points: 2 }]
				},
				{
					prompt: "If you hadn't been there to rescue me, I...",
					options: [
						{ text: 'That was dangerous.', points: 3 },
						{ text: 'You should have known better.', points: 2 }
					]
				},
				{
					prompt:
						'Today was exhausting, but I also learned a lot. I guess nothing beats practical experience.',
					options: [{ text: 'Couldn’t agree more.', points: 2 }]
				}
			],
			unlocks: []
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
						{ text: 'You can change.', points: 3 },
						{ text: "Don't let it get to you.", points: 2 }
					]
				},
				{
					prompt:
						'It was crazy to see a picture of her entire collection. She even has a bunch of Buchimaru-kun emoticons!',
					options: [{ text: 'Sounds like you two get along.', points: 2 }]
				}
			],
			unlocks: ['Black Belt Talk']
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
						{ text: "It's an amazing goal.", points: 3 },
						{ text: 'I like a woman in uniform.', points: 2 }
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
					prompt:
						"Since then, he's the only thing she'll talk about. She even sent me a picture of their date at Destinyland.",
					options: [
						{ text: 'He sounds suspicious.', points: 3 },
						{ text: "That's annoying.", points: 2 }
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
					prompt: 'But if it turns out he really is toying with Eiko... what should we do...?',
					options: [{ text: 'Try to reach out to her.', points: 2 }]
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
						{ text: 'Love comes in many forms.', points: 3 },
						{ text: 'We just started.', points: 2 }
					]
				},
				{
					prompt:
						"He uses these weird symbols - I have no idea what he's saying. I want to ignore him, but I shouldn't for Eiko's sake...",
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
						{ text: 'He was a noble man.', points: 3 },
						{ text: 'Was it tough without him?', points: 2 }
					]
				},
				{
					prompt:
						'That was how my father chose to live his life... Trying to bring justice and order to the world around him.',
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
					prompt: "'U serious abt <protagonist>-kun?' 'Wanna hav a double wedding?'",
					options: [
						{ text: "I'm game if you are.", points: 2 },
						{ text: 'Refuse her, please.', points: 2 }
					]
				},
				{
					prompt:
						"I don't trust Eiko's boyfriend yet, so... can we keep this up until I can make a call one way or the other?",
					options: [
						{ text: 'Of course..', points: 2 },
						{ text: "It's the role I always hoped for.", points: 2 }
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
					prompt: 'So he calls you his special princess... What do you think, <protagonist>-kun?',
					options: [
						{ text: 'He says that to all his girls.', points: 2 },
						{ text: "That's how he ropes you in.", points: 2 }
					]
				},
				{
					prompt: "She needs to realize that. You're going to help, right?",
					options: [
						{ text: 'Absolutely.', points: 3 },
						{ text: 'What are we going to do?', points: 2 },
						{ text: 'Eh, she deserves him.', points: 2 }
					]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 9,
			requirements:
				'In Shinjuku, talk to the irritated promoter in front of the bookstore and ask "Do you know a Tsukasa?" (unavailable when raining).',
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
						{ text: 'We should get out of here.', points: 3 },
						{ text: 'Follow me.', points: 3 }
					]
				},
				{
					prompt: "I can't believe I actually hit one of my friends...",
					options: [{ text: 'That was the right move.', points: 3 }]
				},
				{
					prompt: 'How did you ever find somewhere like this? You know so much.',
					options: [
						{ text: "I'm a regular here.", points: 3 },
						{ text: "It's a popular meeting spot.", points: 3 },
						{ text: 'Not as much as you.', points: 2 }
					]
				},
				{
					prompt: "I can't learn about romance by myself...",
					options: [
						{ text: "You'll find someone someday.", points: 3, routeFlag: 'friendship' },
						{ text: "I'll be your study partner.", points: 0, routeFlag: 'romance' }
					]
				},
				{
					prompt: 'Do you... like me?',
					route: 'romance',
					options: [
						{ text: 'I do.', points: 3, routeFlag: 'romance' },
						{ text: "That's not what I meant.", points: 0, routeFlag: 'friendship' }
					]
				},
				{
					prompt: "I'd probably never have pulled this off alone. Thank you so much.",
					route: 'friendship',
					options: [{ text: 'No problem at all.', points: 3 }]
				},
				{
					prompt: "I'd probably never have pulled this off alone. Thank you so much.",
					route: 'romance',
					options: [{ text: "I'd do anything for you.", points: 3 }]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt:
						'I think she knew it deep within her heart, and seeing him like that finally helped her realize.',
					options: [{ text: "That's incredible.", points: 3 }]
				},
				{
					prompt: 'I plan on doing the same as well.',
					options: [{ text: 'Are you stressing over exams?', points: 3 }]
				},
				{
					prompt: 'My dream... is to become a police commissioner. That is why I need to study.',
					options: [{ text: 'That sounds difficult.', points: 3 }]
				},
				{
					prompt:
						'Instead, I want to head an organization that will destroy the lawless and help rescue victims.',
					options: [
						{ text: 'What an admirable goal.', points: 3 },
						{ text: 'Your father would be proud.', points: 3 },
						{ text: "That's an amazing dream.", points: 2 }
					]
				},
				{
					prompt: 'Must have been difficult babysitting the uptight Miss President, right?',
					route: 'friendship',
					options: [
						{ text: 'We went through so much...', points: 3 },
						{ text: 'Maybe a bit.', points: 2 }
					]
				},
				{
					prompt:
						'*giggle* What a funny thought... Studying to become a head of police while working as a thief...',
					options: [{ text: 'Just be careful, okay?', points: 3 }]
				}
			],
			unlocks: ['Second Awakening (Anat)', 'Cybele fusion']
		}
	]
};
