import type { SocialLink } from '$lib/types';

export const councillor: SocialLink = {
	game: 'p5r',
	arcana: 'councillor',
	name: 'Takuto Maruki',
	romanNumeral: 'Councillor',
	location: 'Shujin Academy',
	unlock: 'Unmissable event on 5/13.',
	availability:
		'Monday, Tuesday, Wednesday, and Friday daytimes. Unlocked 5/13. Cannot pass Rank 5 until after 9/19. Must reach Rank 9 by 11/17 for Rank 10.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['+5 SP', 'item']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: 'Welcome! Thank you for coming.',
					options: [
						{ text: 'We made a deal.', points: 2 },
						{ text: "I'm a little nervous.", points: 2 }
					]
				},
				{
					prompt: "Maybe that's a little weird for you to hear from a guy you just met, huh?",
					options: [
						{ text: 'But it all sounds right.', points: 3 },
						{ text: 'Yep.', points: 2 }
					]
				},
				{
					prompt: "You can have them! They're yours!",
					options: [{ text: 'Well, okay.', points: 2 }]
				}
			],
			unlocks: ['+5 SP', 'Non-Static Gum', 'Detox X']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: "I'm glad the ones who came to me have taken some steps toward recovery.",
					options: [
						{ text: 'So they have, huh?', points: 2 },
						{ text: 'Thanks to you, probably.', points: 2 }
					]
				},
				{
					prompt: 'You remember how I asked you to help me with my research?',
					options: [
						{ text: 'Of course.', points: 2 },
						{ text: 'Yeah, for our deal.', points: 2 }
					]
				},
				{
					prompt: 'Do you have any thoughts on this kind of pain?',
					options: [{ text: 'That one seems necessary.', points: 2 }]
				},
				{
					prompt: 'You helped me realize that purpose again. Thank you.',
					options: [
						{ text: 'Did that help?', points: 2 },
						{ text: "Don't worry about it.", points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): I thought I'd thank you once again for your help earlier.",
					options: [{ text: 'Good work over there.', points: 2 }]
				}
			],
			unlocks: ['+5 SP', 'Jagariko', 'Flow']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "I had no idea a cat's claws were so sharp...",
					options: [
						{ text: 'I know, right…?', points: 3 },
						{ text: 'Talk about a reward.', points: 2 }
					]
				},
				{
					prompt: '...like putting antibiotics on a scratch.',
					options: [
						{ text: "Is that what you're researching?", points: 3 },
						{ text: "That'd be great.", points: 2 }
					]
				},
				{
					prompt:
						"We'll even be able to perform more effective treatment for those people with wounded hearts.",
					options: [
						{ text: "That's a grand plan.", points: 2 },
						{ text: "You're so kind.", points: 2 }
					]
				},
				{
					prompt: "I'm on a shoestring budget, so I wouldn't be able to pay you!",
					options: [{ text: 'That sounds fun.', points: 3 }]
				},
				{
					prompt: 'Phone (P5R): Is your schoolwork being affected?',
					options: [
						{ text: 'I feel completely fine.', points: 2 },
						{ text: "It's part of our deal, so...", points: 2 }
					]
				}
			],
			unlocks: ['+5 SP', 'Happy Pop']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Go ahead, enjoy!',
					options: [
						{ text: 'This looks great', points: 3 },
						{ text: 'I could just take cash...', points: 2 }
					]
				},
				{
					prompt:
						'You can see this law in action just by observing how excited people get over limited-edition merchandise.',
					options: [
						{ text: "You know, you're right.", points: 3 },
						{ text: "They're getting paid.", points: 2 }
					]
				},
				{
					prompt: 'Your unconscious desires may have changed the taste of the cookie?',
					options: [
						{ text: 'My senses lied to me!', points: 2 },
						{ text: 'Hey, as long as it tastes good.', points: 2 }
					]
				},
				{
					prompt: 'It would have been a subjective truth of your reality.',
					options: [{ text: 'I guess so.', points: 2 }]
				},
				{
					prompt: 'Phone (P5R): It ended up being another big academic discussion...',
					options: [
						{ text: "I really don't mind.", points: 2 },
						{ text: 'It was thought-provoking.', points: 2 }
					]
				}
			],
			unlocks: ['+5 SP', 'Donut Worry', 'Mindfulness']
		},
		{
			rank: 6,
			requirements: "Can't pass Rank 5 until after 9/19.",
			choices: [
				{
					prompt: 'This is fantastic.',
					options: [
						{ text: 'Another cup?', points: 2 },
						{ text: "We've got curry too.", points: 2 }
					]
				},
				{
					prompt: "I'd appreciate if you'd help me talk through this again.",
					options: [
						{ text: 'I can do that.', points: 3 },
						{ text: "It's a deal.", points: 2 }
					]
				},
				{
					prompt:
						"I don't think that would be enough to finally beat trauma. And I guess that's what I ultimately realized.",
					options: [{ text: 'So give up.', points: 2 }]
				},
				{
					prompt:
						'Phone (P5R): Sorry for... hah... rushing out... phew... so suddenly... hah... earlier...',
					options: [
						{ text: 'Calm down.', points: 2 },
						{ text: "What's going on.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: "I guess I've taken an academic interest in them.",
					options: [
						{ text: 'You really are dedicated.', points: 3 },
						{ text: 'Are you a fan?', points: 2 }
					]
				},
				{
					prompt: 'How is such a feat even possible? Any ideas, Joker?',
					options: [
						{ text: 'No idea.', points: 3 },
						{ text: 'As in, removing them?', points: 3 }
					]
				},
				{
					prompt: "You think I'm getting anywhere here?",
					options: [
						{ text: 'Sounds pretty far-fetched.', points: 3 },
						{ text: "It's intriguing.", points: 3 }
					]
				}
			],
			unlocks: ['Quick Flow', '+5 SP', 'Phantom Wafers']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: "I know it's been a while since you've had one, too!",
					options: [
						{ text: 'What do you mean?', points: 3 },
						{ text: "I'm good on cookies, thanks.", points: 2 }
					]
				},
				{
					prompt:
						"I'd like to take you to that buffet, as my way of thanking you. How does that sound?",
					options: [
						{ text: 'Ooh, really?', points: 3 },
						{ text: 'Can you afford that?', points: 2 },
						{ text: 'Sorry, I prefer sushi.', points: 2 }
					]
				},
				{
					prompt: 'No holding back! Eat as much as you please!',
					options: [
						{ text: 'Thanks for the food!', points: 3 },
						{ text: 'This is quite the spread.', points: 2 }
					]
				},
				{
					prompt: "Oh, he's uhhh... how do I put it?",
					options: [
						{ text: "We've made a deal.", points: 3 },
						{ text: "I'm a student.", points: 2 }
					]
				},
				{
					prompt: 'My paper is finally almost finished.',
					options: [
						{ text: 'Congratulations.', points: 3 },
						{ text: 'Way to go.', points: 3 }
					]
				},
				{
					prompt: "Don't you wanna congratulate him too?",
					options: [
						{ text: 'I sure do.', points: 2 },
						{ text: "Let's celebrate.", points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): Maybe it's because he knows I'm a little careless, though.",
					options: [{ text: "He's a good friend.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: 'Must reach Rank 9 by 11/17 to unlock Rank 10 and the third semester.',
			choices: [
				{
					prompt: "I think this'll probably be the last time I come to you about the paper.",
					options: [
						{ text: 'Kind of sad...', points: 3 },
						{ text: 'Is our deal over?', points: 2 },
						{ text: 'Well… take care of yourself.', points: 2 }
					]
				}
			],
			unlocks: ['+5 SP', 'Fulfiller', 'Detox DX']
		},
		{
			rank: 10,
			requirements: 'Occurs through story progress if Rank 9 was reached before 11/17.',
			choices: [],
			unlocks: ['Wakefulness']
		}
	]
};
