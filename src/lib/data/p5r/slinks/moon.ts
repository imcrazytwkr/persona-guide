import type { SocialLink } from '$lib/types';

export const moon: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Moon',
		value: 'moon'
	},
	name: 'Yuuki Mishima',
	romanNumeral: 'XVIII',
	location: 'Shibuya or Shinjuku',
	unlock: 'Automatic story event on 5/6.',
	availability:
		'Nights any day of the week, including rainy days. Ranking up (from Rank 3) also requires completing Phan-Site / Mementos requests.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ["Mishima's Support"]
		},
		{
			rank: 2,
			requirements: 'Automatic story event on 5/8.',
			choices: [
				{
					prompt:
						'We need the Phantom Thieves to be seen in the proper light if we want to make the name popular, right?',
					options: [{ text: "You've done good, kid.", points: 3 }]
				},
				{
					prompt: "It's like I'll be your strategic image management representative, so to speak.",
					options: [
						{ text: 'Sounds cool.', points: 3 },
						{ text: "You're really hyped for this.", points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R): At this point, I might as well pull an all-nighter fighting back!',
					options: [{ text: 'Nice hustle, image manager.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: 'Available from 5/10. Complete Mementos requests, then hang out with Mishima.',
			choices: [
				{
					prompt: 'All thieves are supposed to have some special ladies, right?',
					options: [
						{ text: 'Great idea.', points: 3 },
						{ text: "I'm already taken.", points: 2 }
					]
				},
				{
					prompt: "Don't spill the beans, okay?",
					options: [
						{ text: "We're part of... the Phandom?", points: 2 },
						{ text: "Let's tell the truth.", points: 2 }
					]
				},
				{
					prompt: "I didn't have time to really vet them too much.",
					options: [{ text: "It's not your fault.", points: 2 }]
				},
				{
					prompt: "Phone (P5R): It's always better to hear that kinda stuff in person, right?",
					options: [
						{ text: 'Of course.', points: 2 },
						{ text: 'Really?', points: 2 },
						{ text: "You'll get it right next time.", points: 2 }
					]
				}
			],
			unlocks: ["Mishima's Enthusiasm"]
		},
		{
			rank: 4,
			requirements:
				'Complete outstanding Phan-Site / Mementos requests, then hang out with Mishima.',
			choices: [
				{
					prompt: "...don't be afraid to go all out! What do you wanna eat?",
					options: [
						{ text: 'Steak sounds good.', points: 3 },
						{ text: 'I love desserts.', points: 2 }
					]
				},
				{
					prompt: 'Not bad for strategic management, huh?',
					options: [{ text: "You're amazing.", points: 2 }]
				},
				{
					prompt:
						'Phone (P5R): I guess it ended up being pretty good for our PR in the end, right?',
					options: [
						{ text: 'Yup.', points: 2 },
						{ text: "You'll get better ideas.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements:
				'Complete outstanding Phan-Site / Mementos requests, then hang out with Mishima.',
			choices: [
				{
					prompt: 'It cost me a lot of money...',
					options: [
						{ text: 'Is it for me?', points: 3 },
						{ text: 'Why was it so expensive?', points: 2 }
					]
				},
				{
					prompt:
						'Some of the stuff up there is pretty scary... so it seemed like I might need a little protection.',
					options: [{ text: "That's a good idea.", points: 2 }]
				},
				{
					prompt:
						"Phone (P5R): I'm gonna do everything in my power, so you can just kick back and relax!",
					options: [{ text: 'All right.', points: 2 }]
				}
			],
			unlocks: ["Mishima's Desperation"]
		},
		{
			rank: 6,
			requirements:
				'Complete outstanding Phan-Site / Mementos requests, then hang out with Mishima.',
			choices: [
				{
					prompt: "This one's massive!",
					options: [
						{ text: 'Just tell me already.', points: 2 },
						{ text: 'You sure are fired up...', points: 2 }
					]
				},
				{
					prompt:
						'I hear a rumor that a famous idol fell into his clutches... You need to act, on behalf of her fans.',
					options: [
						{ text: 'Rumors are wrong all the time...', points: 2 },
						{ text: "It's none of our business.", points: 2 }
					]
				},
				{
					prompt: "After all, I'm the only reason you guys have gotten this far, right?",
					options: [{ text: 'Absolutely. Nice job.', points: 2 }]
				}
			],
			unlocks: ['Inokashira Park (if not already unlocked)']
		},
		{
			rank: 7,
			requirements:
				'Complete outstanding Phan-Site / Mementos requests. After the first hangout, meet the team, find the target in Mementos, then Mishima will contact you to continue this rank.',
			choices: [
				{
					prompt: 'I need to make sure our next target is one we can win against.',
					options: [
						{ text: "You're so reliable.", points: 3 },
						{ text: 'And what exactly will we win?', points: 2 }
					]
				},
				{
					prompt: "So... we're gonna purge them.",
					options: [
						{ text: 'Sounds pretty twisted.', points: 2 },
						{ text: 'You need to chill.', points: 2 }
					]
				},
				{
					prompt: 'I wonder if there’s really any way a pathetic guy like me can help you...',
					options: [
						{ text: 'Maybe the Phansite?', points: 3 },
						{ text: "I'm sure there is.", points: 2 }
					]
				},
				{
					prompt:
						"Phone (P5R): It seems like enough evidence to make him a target, but I'm gonna look into this a little further, just to be safe.",
					options: [
						{ text: 'Kind of worrying.', points: 2 },
						{ text: "It's your time to shine.", points: 2 }
					]
				}
			],
			unlocks: ['Phanboy']
		},
		{
			rank: 8,
			requirements:
				'Complete outstanding Phan-Site / Mementos requests, then hang out with Mishima.',
			choices: [
				{
					prompt: 'Akira... run.',
					options: [
						{ text: "I'm not leaving.", points: 3 },
						{ text: 'You should run too.', points: 2 }
					]
				},
				{
					prompt: 'Urgh...',
					options: [
						{ text: "You're just gonna take that?", points: 2 },
						{ text: 'Believe in yourself.', points: 2 },
						{ text: "They're the real losers.", points: 2 }
					]
				},
				{
					prompt:
						"My whole act would've broken down if they didn't back off when they did. Hahaha... I really suck, huh?",
					options: [
						{ text: 'Wait, that was all an act?', points: 3 },
						{ text: 'You were super cool.', points: 3 },
						{ text: 'Totally.', points: 2 }
					]
				},
				{
					prompt:
						"Phone (P5R): Oh! B-But I have the model gun I got for self-defense! And my security system's top of the line! So I'm safe, right!?",
					options: [
						{ text: "You'll be fine.", points: 2 },
						{ text: "You've got this man.", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements:
				'Complete outstanding Phan-Site / Mementos requests, then hang out with Mishima.',
			choices: [
				{
					prompt:
						'I wish I had known that going in... One slip of the tongue in that act I pulled, and I would’ve been dead.',
					options: [
						{ text: 'You showed some real courage.', points: 3 },
						{ text: "I'm glad you're still alive.", points: 2 }
					]
				},
				{
					prompt:
						"Phone (P5R): You heard what he said about me... but do you really think some part of me's changed?",
					options: [{ text: 'The sparkle in your eyes.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Salvation Wish', 'Sandalphon fusion']
		}
	]
};
