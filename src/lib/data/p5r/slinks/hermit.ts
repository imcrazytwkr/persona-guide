import type { SocialLink } from '$lib/types';

export const hermit: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Hermit',
		value: 'hermit'
	},
	name: 'Futaba Sakura',
	location: 'Outside Leblanc',
	unlock: 'Unmissable nighttime event on 8/31.',
	availability:
		'Wednesday, Thursday, Saturday, and Sunday daytime. Stays indoors when it rains. Progress can be blocked by a Hierophant (Sojiro) side quest.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['Moral Support', 'Akihabara']
		},
		{
			rank: 2,
			requirements: '- Kindness 4 (Selfless)\n- Available after 9/2.',
			choices: [
				{
					prompt:
						"But online classes are better for studying! I wouldn't even have to leave the house.",
					options: [{ text: "That's a great idea.", points: 2 }]
				},
				{
					prompt: "...Do you think I'll be able to?",
					options: [
						{ text: 'If we work together.', points: 3 },
						{ text: 'Want me to help?', points: 2 }
					]
				},
				{
					prompt: "Do you think it'd make Sojiro happy?",
					options: [{ text: 'I bet it will.', points: 2 }]
				}
			],
			unlocks: ['Mementos Scan']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'I... I, I, I...',
					options: [{ text: 'I was about to come find you.', points: 3 }]
				},
				{
					prompt:
						'But then I thought about you while I was wandering around the store, and bam, a wild <protagonist> appeared!',
					options: [
						{ text: 'Good to see you again.', points: 3 },
						{ text: "You're the one who appeared.", points: 2 }
					]
				},
				{
					prompt: "But at this pace, I'll clear it in no time...! Right?",
					options: [{ text: "We'll both do our best.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: 'Can I use a Goho-M instead?',
					options: [
						{ text: "Let's do this together.", points: 3 },
						{ text: 'Nope.', points: 2 }
					]
				},
				{
					prompt: 'I guess dwelling on the past is just a bad habit of mine, huh?',
					options: [
						{ text: "I think it's cute.", points: 3 },
						{ text: 'Not at all.', points: 2 },
						{ text: 'Everyone does it.', points: 2 }
					]
				},
				{
					prompt:
						"I still think I'd run out of MP way too fast. The real world is a scary place...",
					options: [
						{ text: "We'll take it slow.", points: 2 },
						{ text: "I'll help you anytime.", points: 2 }
					]
				}
			],
			unlocks: ['Position Hack']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: "Maybe my luck stat's really high.",
					options: [
						{ text: "I think you're right.", points: 3 },
						{ text: 'Your... what?', points: 2 }
					]
				},
				{
					prompt: 'Nishima... Are you an NPC!?',
					options: [
						{ text: "He's the protagonist.", points: 3 },
						{ text: "What's an NPC?", points: 2 }
					]
				},
				{
					prompt:
						"I'm a completely different person now! No more getting scared of the police! C'mon, tell me I'm cool!",
					options: [{ text: 'You did great.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt:
						"But one day, she said something to me: 'Good morning.' She started saying it every day from then on.",
					options: [
						{ text: 'That must have been a shock.', points: 3 },
						{ text: 'Were you happy?', points: 2 }
					]
				},
				{
					prompt: 'I felt terrible, but she just kept yelling at me for reading it...',
					options: [{ text: "You didn't know any better.", points: 2 }]
				},
				{
					prompt:
						"I know I promised myself that I'd do this... but when I remember how angry Kana-chan got, I get so scared...",
					options: [{ text: 'Are you running away again?', points: 2 }]
				}
			],
			unlocks: ['Active Support']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt:
						"...Apparently, they're still having her model in strange clothes. They're even selling the pictures now...",
					options: [
						{ text: 'What horrible parents.', points: 2 },
						{ text: 'We have to put a stop to this.', points: 2 }
					]
				},
				{
					prompt: 'Please, help me save her!',
					options: [
						{ text: "I'll do it, for you.", points: 3 },
						{ text: "We'll show them the truth.", points: 3 },
						{ text: 'Give me some time.', points: 2 }
					]
				}
			],
			unlocks: ['Treasure Reboot', "Daughter's Just a Meal Ticket (Mementos request)"]
		},
		{
			rank: 8,
			requirements: 'Complete Mementos request "Daughter\'s Just a Meal Ticket".',
			choices: [
				{
					prompt: 'Long story short... we made up! I finally apologized to her.',
					options: [
						{ text: "That's incredible.", points: 3 },
						{ text: "I'm glad to hear that.", points: 3 },
						{ text: 'Did you stutter at all?', points: 2 }
					]
				},
				{
					prompt: "It's all because of you that I could do it, <protagonist>!",
					options: [
						{ text: 'You worked really hard too.', points: 3 },
						{ text: "You're making me blush...", points: 2 }
					]
				},
				{
					prompt: "And now I'm getting along with Kana-chan... I'm so glad I cleared that goal.",
					options: [
						{ text: 'Congrats.', points: 2 },
						{ text: 'Want more pats?', points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "I'm gonna go back.",
					options: [
						{ text: "You've really matured.", points: 3 },
						{ text: "And if you're bullied again?", points: 2 }
					]
				},
				{
					prompt: "Then even when we're apart, I can't stop thinking about you...",
					options: [
						{ text: 'Are you okay, Futaba?', points: 3 },
						{ text: "You're imagining things.", points: 2 }
					]
				},
				{
					prompt: '...Can we skip that last promise?',
					options: [
						{ text: 'If you want.', points: 2 },
						{ text: 'No way.', points: 2 }
					]
				},
				{
					prompt: 'Why, <protagonist>...?',
					options: [
						{ text: "Because we're teammates.", points: 0, routeFlag: 'friendship' },
						{ text: 'Because I love you.', points: 0, routeFlag: 'romance' }
					]
				},
				{
					prompt: 'Uh... I mean, like... what do you want...?',
					route: 'romance',
					options: [{ text: 'Do I really have to say it?', points: 2 }]
				},
				{
					prompt: 'Could you get specific? What kind of teammate am I to you?',
					route: 'friendship',
					options: [
						{ text: 'A true friend.', points: 2 },
						{ text: 'A partner.', points: 2 },
						{ text: 'A key item.', points: 2 }
					]
				}
			],
			unlocks: ['Emergency Shift']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt: 'I just hope I can keep changing little by little... like everyone else does.',
					options: [
						{ text: 'Take your time.', points: 3 },
						{ text: 'You can do this.', points: 3 },
						{ text: "We'll do it together.", points: 3 }
					]
				},
				{
					prompt: "Even Kana-chan's trying to step out into the world.",
					options: [
						{ text: "You can't lose to her.", points: 3 },
						{ text: 'Do you want a job too?', points: 2 }
					]
				},
				{
					prompt: "That way... we'll never be apart if I don't want to be.",
					route: 'romance',
					options: [
						{ text: 'You already have that right.', points: 3 },
						{ text: 'Took you long enough to ask.', points: 3 },
						{ text: 'I want that right too.', points: 3 }
					]
				}
			],
			unlocks: ['Second Awakening (Prometheus)', 'Ongyo-Ki fusion', 'Final Guard']
		}
	]
};
