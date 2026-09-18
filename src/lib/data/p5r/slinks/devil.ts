import type { SocialLink } from '$lib/types';

export const devil: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Devil',
		value: 'devil'
	},
	name: 'Ichiko Ohya',
	location: 'Crossroads Bar, Shinjuku',
	unlock:
		'After gaining access to Shinjuku, visit Crossroads and talk to Ohya (you will have met her earlier in the story).',
	availability: 'Nights every day, including rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['Rumor-filled Scoop', '+3 Charm']
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
					prompt: "Anyway, why are you coming to a bar if you can't even drink alcohol?",
					options: [{ text: "It's for the article.", points: 2 }]
				}
			],
			unlocks: ['+3 Charm']
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
					options: [{ text: 'She was falsely accused?', points: 2 }]
				}
			],
			unlocks: ['Shocking Scoop', '+3 Charm']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "W-Wait... We're totally dating, aren't we, sweetie?",
					options: [
						{ text: 'Of course we are.', points: 2 },
						{ text: "Don't tell anybody.", points: 2 }
					]
				},
				{
					prompt:
						"And I'll repay you with the power of journalism, of course. I'll write you a solid article on the Phantom Thieves.",
					options: [
						{ text: 'Leave it to me.', points: 2 },
						{ text: 'That was our deal.', points: 2 }
					]
				}
			],
			unlocks: ['+3 Charm']
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
					prompt:
						"I'm sorry about earlier. Really. For me digging up your records and such without asking, I mean...",
					options: [{ text: "I don't mind it.", points: 2 }]
				}
			],
			unlocks: ['Unbelievable Scoop']
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
					prompt: '*gasp* Maybe Kayo really was the true culprit...',
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
						"I'm only able to meet my insane quota because of the info you give me on the Phantom Thieves.",
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
					prompt: 'What should I do? Should I go knock him out!?',
					options: [
						{ text: "Don't let him provoke you.", points: 3 },
						{ text: "Let's think of another way.", points: 3 },
						{ text: 'Calm down.', points: 2 }
					]
				},
				{
					prompt: 'I wish I was better at controlling my emotions. Like you are.',
					options: [
						{ text: "You're charming as you are.", points: 3, routeFlag: 'romance' },
						{ text: 'You should work on that.', points: 2 }
					]
				},
				{
					prompt: "But I finally got a lead on Kayo. I'll do whatever it takes to find her...!",
					options: [{ text: "That's the spirit.", points: 2 }]
				}
			],
			unlocks: ['Outrageous Scoop', '+3 Charm']
		},
		{
			rank: 8,
			requirements:
				'After the first scene, complete Mementos request "Fighting for Truth in Journalism", then return to Ohya.',
			choices: [
				{
					prompt: '...Well, say something.',
					options: [{ text: 'You seem tired.', points: 2 }]
				},
				{
					prompt:
						"Not just about Kayo's current state... but about what happened to her that night too.",
					options: [
						{ text: "That's not like you.", points: 3 },
						{ text: 'You need to pursue the truth.', points: 3 },
						{ text: "I'll go with you.", points: 3, routeFlag: 'romance' }
					]
				},
				{
					prompt: "I'm a journalist. From now on, I'm always gonna chase the truth.",
					options: [
						{ text: 'Good luck.', points: 2 },
						{ text: 'Be careful.', points: 2 }
					]
				}
			],
			unlocks: ['+3 Charm', 'Mementos request: Fighting for Truth in Journalism']
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
						{ text: "I can't leave you.", points: 3, routeFlag: 'romance' },
						{ text: 'I want to help.', points: 3 }
					]
				},
				{
					prompt: 'That couple act...',
					options: [
						{ text: 'I took it seriously.', points: 0, routeFlag: 'romance' },
						{ text: "I didn't take it seriously.", points: 0, routeFlag: 'friendship' }
					]
				},
				{
					prompt: 'I-I mean, um... seriously?',
					route: 'romance',
					options: [
						{ text: 'I love you, Ichiko.', points: 0, routeFlag: 'romance' },
						{ text: "I'm just kidding.", points: 0, routeFlag: 'friendship' }
					]
				},
				{
					prompt: '*hic* Ahhhh... Now that was a hell of a party...',
					options: [{ text: 'You alright?', points: 2 }]
				},
				{
					prompt:
						"Actually, do YOU have anything you wanna say to me instead? Cause now's the time.",
					route: 'romance',
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
			choices: [
				{
					prompt: '...I think it really captures the spirit of journalism.',
					options: [
						{ text: 'Is that entertainment?', points: 3 },
						{ text: "You're really earnest.", points: 2 }
					]
				},
				{
					prompt: "So, we're planning to throw in additional articles while we have the chance.",
					options: [
						{ text: "I'm glad to hear that.", points: 3 },
						{ text: "I'll read the next issue.", points: 3 }
					]
				},
				{
					prompt: 'Or...',
					route: 'romance',
					options: [
						{ text: "It's up to you.", points: 3 },
						{ text: 'I want to go to your place.', points: 3 }
					]
				}
			],
			unlocks: ['Beelzebub fusion', 'Legendary Scoop']
		}
	]
};
