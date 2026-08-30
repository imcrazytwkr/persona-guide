import type { SocialLink } from '$lib/types';

export const devil: SocialLink = {
	game: 'p5r',
	arcana: 'devil',
	name: 'Ichiko Ohya',
	romanNumeral: 'XV',
	location: 'Crossroads Bar, Shinjuku',
	unlock:
		'After gaining access to Shinjuku, visit Crossroads and talk to Ohya (you will have met her earlier in the story).',
	availability: 'Nights every day, including rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['Rumor-filled Scoop']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: '...You have any photos or videos of it?',
					options: [{ text: 'Mishima might...', points: 2 }]
				},
				{
					prompt: "Why are you coming to a bar if you can't even drink alcohol?",
					options: [{ text: "It's for the article.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt:
						"I have a theory that they're all minors, and their leader is some simpleton dying from boredom...",
					options: [{ text: "You shouldn't make assumptions.", points: 2 }]
				},
				{
					prompt: "That's why I can't quit... and why I'll never give up.",
					options: [{ text: 'Was she falsely accused?', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "We're totally dating, aren't we, sweetie?",
					options: [
						{ text: 'Of course we are.', points: 2 },
						{ text: "Don't tell anybody.", points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): I'll write you a solid article on the Phantom Thieves.",
					options: [
						{ text: 'Leave it to me.', points: 2 },
						{ text: 'That was our deal.', points: 2 }
					]
				}
			],
			unlocks: ['Shocking Scoop']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt:
						"I'm going to prove Kayo's innocence though. That's why I'm conducting my own private investigation now.",
					options: [
						{ text: "That's unforgivable.", points: 3 },
						{ text: 'That sounds like defamation.', points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R): For me digging up your records and such without asking, I mean...',
					options: [{ text: "I don't mind it.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "Ugh, my chief's such a shithead...",
					options: [{ text: 'He must not like you.', points: 2 }]
				},
				{
					prompt: 'Maybe Kayo really was the culprit.',
					options: [{ text: 'You should trust in her.', points: 2 }]
				},
				{
					prompt:
						"Dammit, that incident is all my fault... That's why I've gotta get to the bottom of it!",
					options: [
						{ text: "That's the spirit.", points: 2 },
						{ text: "You're a great journalist.", points: 2 }
					]
				},
				{
					prompt:
						"Phone (P5R): I'm only able to meet my insane quota because of the info you give me on the Phantom Thieves.",
					options: [{ text: "I'll dig up some more for you.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: 'What should I do? Should I go knock him out?!',
					options: [
						{ text: "Let's think of another way.", points: 3 },
						{ text: "Don't let him provoke you.", points: 3 },
						{ text: 'Calm down.', points: 2 }
					]
				},
				{
					prompt: 'I wish I was better at controlling my emotions. Like you are.',
					options: [
						{ text: "You're charming as you are.", points: 3 },
						{ text: 'You should work on that.', points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): I'll do whatever it takes to find her...!",
					options: [{ text: "That's the spirit.", points: 2 }]
				}
			],
			unlocks: ['Outrageous Scoop']
		},
		{
			rank: 8,
			requirements:
				'Complete the Mementos request Fighting for Truth in Journalism (unlocked during this rank), then return to Ohya.',
			choices: [
				{
					prompt: 'Say something.',
					options: [{ text: 'You seem tired.', points: 2 }]
				},
				{
					prompt:
						"Not just about Kayo's current state... but about what happened to her that night too.",
					options: [
						{ text: "That's not like you.", points: 3 },
						{ text: 'You need to pursue the truth.', points: 3 },
						{ text: "I'll go with you.", points: 3 }
					]
				},
				{
					prompt: "Phone (P5R): From now on, I'm always gonna chase the truth.",
					options: [
						{ text: 'Good luck.', points: 2 },
						{ text: 'Be careful.', points: 2 }
					]
				}
			],
			unlocks: ['Mementos request: Fighting for Truth in Journalism']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "I'd get crushed if I tried to take them on without being fully prepared...",
					options: [{ text: "You're not giving up, are you?", points: 2 }]
				},
				{
					prompt: "I'm sure I'll get targeted... so to be safe, you shouldn't come here again.",
					options: [
						{ text: "I can't leave you.", points: 3 },
						{ text: 'I want to help.', points: 3 }
					]
				},
				{
					prompt: 'That couple act...',
					options: [
						{ text: 'I took it seriously.', points: 0 },
						{ text: "I didn't take it seriously.", points: 0 }
					]
				},
				{
					prompt: 'Only if "I took it seriously":',
					options: [
						{ text: 'I love you, Ichiko.', points: 0 },
						{ text: "I'm just kidding.", points: 0 }
					]
				},
				{
					prompt: 'Phone (P5R if romanced):',
					options: [
						{ text: 'I wanted to hear your voice.', points: 2 },
						{ text: "Please don't dump me.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Legendary Scoop', 'Beelzebub fusion']
		}
	]
};
