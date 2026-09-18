import type { SocialLink } from '$lib/types';

export const justice: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Justice',
		value: 'justice'
	},
	name: 'Goro Akechi',
	location: 'Kichijoji (Darts & Billiards)',
	unlock: 'Unmissable story event on 6/10.',
	availability:
		'Wednesday and Saturday nights. Mid-July to mid-August also Tuesday and Saturday. Rank 6 triggers at Leblanc from 9/3. Must reach Rank 8 by 11/17.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt:
						'I found myself with some free time, so I was hoping to find someone to play against.',
					options: [{ text: 'You always seem so busy.', points: 2 }]
				},
				{
					prompt:
						"Not bad. Everything's riding on your next shot, though. How will you handle this?",
					options: [
						{ text: 'Shoot very carefully.', points: 2 },
						{ text: "I'll go for a power shot.", points: 2 }
					]
				},
				{
					prompt:
						"I'm rather dextrous with my right hand. I can even use chopsticks with it. Frankly, I didn't expect you to see through it.",
					options: [
						{ text: 'I see a lot of things.', points: 3 },
						{ text: "Maybe I'll be a detective.", points: 2 },
						{ text: 'No holding back next time.', points: 2 }
					]
				},
				{
					prompt:
						"I think you'd be an interesting influence on me. If you're so inclined, we could go out again sometime.",
					options: [{ text: 'As rivals?', points: 2 }]
				}
			],
			unlocks: ['Sleuthing Instinct']
		},
		{
			rank: 3,
			requirements: '- Knowledge 3 (Scholarly)\n- Charm 3 (Suave)',
			choices: [
				{
					prompt: "Uh-oh. Looks like I've been spotted.",
					options: [
						{ text: "Should've figured.", points: 3 },
						{ text: 'Your life must be so hard.', points: 2 }
					]
				},
				{
					prompt: "I saw firsthand what happens when I'm too careless with my words around you.",
					options: [{ text: "Wasn't it fun?", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "It's just a jazz club. You get to hear some great performers here.",
					options: [
						{ text: 'Now this is my kind of club.', points: 3 },
						{ text: 'Do they have coffee?', points: 2 }
					]
				},
				{
					prompt: "Well then, why don't we get some drinks?",
					options: [
						{ text: 'Any recommendations?', points: 3 },
						{ text: "Anything's fine by me.", points: 2 }
					]
				},
				{
					prompt: 'Whew... How relaxing. I really do like coming here.',
					options: [{ text: "It's a great place.", points: 2 }]
				},
				{
					prompt: 'That reminds me, do you cook?',
					options: [
						{ text: 'Pretty frequently.', points: 3 },
						{ text: 'I can use a microwave...', points: 3 },
						{ text: 'All I need is curry.', points: 2 }
					]
				},
				{
					prompt:
						"There's something about that strange, erratic synchronicity... It's a euphoria like when I manage to solve a case.",
					options: [{ text: 'I kinda get it.', points: 2 }]
				}
			],
			unlocks: ['Sleuthing Mastery', 'Jazz Club in Kichijoji']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Phew! My fingers are going to be sore tomorrow. What a realistic game.',
					options: [{ text: 'Are you used to gunplay?', points: 2 }]
				},
				{
					prompt: 'All this reminded me of running around the house with it, playing hero...',
					options: [
						{ text: 'You wanted to be a hero?', points: 3 },
						{ text: 'Very interesting.', points: 2 }
					]
				},
				{
					prompt: "Hopefully I didn't come off as too much of a novice. I wish I'd played better.",
					options: [
						{ text: 'You did fine.', points: 2 },
						{ text: "You've still got a long way to go.", points: 2 },
						{ text: 'You were getting cocky.', points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: 'Available starting 9/3.',
			choices: [
				{
					prompt: "Ahh, this feels wonderful... It's been a while.",
					options: [
						{ text: 'A while, huh?', points: 3 },
						{ text: 'So relaxing...', points: 2 }
					]
				},
				{
					prompt:
						"My mother worked at a nightclub. Whenever she had to bring a man home, she'd send me off to the local bathhouse.",
					options: [{ text: "...You've been through a lot.", points: 2 }]
				},
				{
					prompt: 'Actually, are you all right? I know the hot water can make people dizzy...',
					options: [
						{ text: 'This is nothing.', points: 3 },
						{ text: "I'll stay until you're ready.", points: 3 },
						{ text: 'Are YOU okay?', points: 2 }
					]
				},
				{
					prompt: 'Oof... I think I feel a little lightheaded.',
					options: [
						{ text: 'Same.', points: 3 },
						{ text: 'Guess I win.', points: 2 }
					]
				},
				{
					prompt:
						"I've never told anyone else about my family situation, either. I wonder why I told you? Curious indeed.",
					options: [
						{ text: 'Because we get along.', points: 2 },
						{ text: "Because we're similar.", points: 2 }
					]
				},
				{
					prompt: "We're both victims of the adults who unfairly impacted our lives.",
					options: [
						{ text: "I think you're right.", points: 3 },
						{ text: 'Can I put my clothes on?', points: 2 }
					]
				},
				{
					prompt:
						"If they saw how I was acting today, perhaps they'd say I wasn't acting like the Detective Prince.",
					options: [{ text: 'My bad, I guess.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '- Available from 11/2.\n- Knowledge 4 (Encyclopedic)',
			choices: [
				{
					prompt:
						"You can't simply strike the ball you're aiming for. You have to be indirect, but precise, to land it in the pocket...",
					options: [{ text: "That's why it's so fun.", points: 3 }]
				},
				{
					prompt:
						"Even if it was with my self-imposed handicap, I'm impressed that you beat me. You've become quite skilled.",
					options: [{ text: "I couldn't let myself lose.", points: 3 }]
				},
				{
					prompt: 'I have to ask—why do you get so competitive against me?',
					options: [{ text: "We're rivals, aren't we?", points: 2 }]
				}
			],
			unlocks: ['Harisen Recovery']
		},
		{
			rank: 8,
			requirements: 'Must reach Rank 8 by 11/17 or ranks 9–10 and the true ending path lock out.',
			choices: [
				{
					prompt:
						'By the way, about that duel—if we had fought to the end, do you see yourself winning?',
					options: [
						{ text: "I definitely wouldn't lose.", points: 3 },
						{ text: "I don't know.", points: 2 }
					]
				},
				{
					prompt: "...You're the one person I refuse to lose to.",
					options: [
						{ text: "Really hate losing, don't you?", points: 3 },
						{ text: 'Same here.', points: 1 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Second Awakening (Hereward)', 'Metatron fusion', 'Protect', 'Endure']
		}
	]
};
