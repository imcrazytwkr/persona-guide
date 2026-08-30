import type { SocialLink } from '$lib/types';

export const hermit: SocialLink = {
	game: 'p5r',
	arcana: 'hermit',
	name: 'Futaba Sakura',
	romanNumeral: 'IX',
	location: 'Outside LeBlanc',
	unlock: 'Unmissable nighttime event on 8/31.',
	availability:
		'Wednesday, Thursday, Saturday and Sunday daytimes. Stays indoors when it rains. Progress can be blocked by a Hierophant (Sojiro) side quest.',
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
					prompt: "Do you think I'll be able to?",
					options: [
						{ text: 'If we work together.', points: 3 },
						{ text: 'Want me to help?', points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): Do you think it'd make Sojiro happy?",
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
					prompt: 'I, I, I...',
					options: [{ text: 'I was about to come find you.', points: 3 }]
				},
				{
					prompt: 'Bam, a wild Joker appeared!',
					options: [
						{ text: 'Good to see you again.', points: 3 },
						{ text: "You're the one who appeared.", points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): I'll clear it in no time...! Right?",
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
					prompt: 'Can I use a Goho-M instead...?',
					options: [
						{ text: 'Nope.', points: 2 },
						{ text: "Let's do this together.", points: 3 }
					]
				},
				{
					prompt: 'Am I weird, Joker?',
					options: [
						{ text: 'Not at all.', points: 2 },
						{ text: 'Everyone does it.', points: 2 },
						{ text: "I think it's cute.", points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R): The real world is a scary place...',
					options: [
						{ text: "We'll take it slow.", points: 2 },
						{ text: "I'll help you anytime.", points: 3 }
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
					prompt: 'Are you an NPC?!',
					options: [
						{ text: "What's an NPC?", points: 2 },
						{ text: "He's the protagonist.", points: 3 }
					]
				},
				{
					prompt: "Phone (P5R): No more getting scared of the police! C'mon, tell me I'm cool!",
					options: [{ text: 'You did great.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'She started saying it every day from then on.',
					options: [
						{ text: 'Were you happy?', points: 2 },
						{ text: 'That must have been a shock.', points: 3 }
					]
				},
				{
					prompt: 'I felt terrible, but she just kept yelling at me for reading it...',
					options: [{ text: "You didn't know any better.", points: 2 }]
				},
				{
					prompt: 'Phone (P5R): I get so scared...',
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
					prompt: "They're even selling the pictures now...",
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
			requirements:
				"Complete the Daughter's Just a Meal Ticket Mementos request unlocked at Rank 7.",
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
					prompt: "It's all because of you that I could do it!",
					options: [
						{ text: 'You worked really hard, too.', points: 3 },
						{ text: "You're making me blush...", points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): I'm so glad I cleared that goal.",
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
						{ text: 'What if you get bullied again?', points: 2 }
					]
				},
				{
					prompt: "Then even when we're apart, I can't stop thinking about you...",
					options: [
						{ text: 'Are you OK, Futaba?', points: 3 },
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
					prompt: 'Why...?',
					options: [
						{ text: "Because we're teammates. (Friendship)", points: 0 },
						{ text: 'Because I love you. (Romance)', points: 0 }
					]
				},
				{
					prompt: 'Phone (P5R, Friendship)',
					options: [{ text: 'A true friend.', points: 2 }]
				},
				{
					prompt: 'Phone (P5R, Romance)',
					options: [{ text: 'Any choice', points: 0 }]
				}
			],
			unlocks: ['Emergency Shift']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Final Guard', 'Ongyo-Ki fusion', 'Second Awakening (Prometheus)']
		}
	]
};
