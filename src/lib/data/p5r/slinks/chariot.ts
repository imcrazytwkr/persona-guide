import type { SocialLink } from '$lib/types';

export const chariot: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Chariot',
		value: 'chariot'
	},
	name: 'Ryuji Sakamoto',
	romanNumeral: 'VII',
	location: 'School after school; arcade on days off',
	unlock: 'Unmissable event on 4/12.',
	availability: 'Daytime every day of the week; day and night on rainy days.',
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
					prompt: "Maybe then I'll be able to help out a little more.",
					options: [
						{ text: "I'm counting on you.", points: 3 },
						{ text: 'You seem pretty excited.', points: 3 },
						{ text: '...help with what?', points: 2 }
					]
				},
				{
					prompt: '......',
					options: [
						{ text: 'Do you want to go back?', points: 2 },
						{ text: 'Do you regret it?', points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): I should've kept up my running.",
					options: [
						{ text: "You're already fast enough.", points: 2 },
						{ text: 'Are your legs okay?', points: 2 },
						{ text: "It's never too late, man.", points: 2 }
					]
				}
			],
			unlocks: ['Baton Pass']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: '.....',
					options: [{ text: "Let's not fight.", points: 2 }]
				},
				{
					prompt: "That don't got anything to do with this...",
					options: [
						{ text: 'Calm down, Ryuji.', points: 3 },
						{ text: 'Just endure it.', points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R): I get pissed off so damn easily. I really gotta work on that.',
					options: [{ text: "I can't exactly blame you.", points: 2 }]
				}
			],
			unlocks: ['Follow Up']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "But for some reason it don't look like he's gettin' along with the others.",
					options: [{ text: 'Are you worried about him?', points: 3 }]
				},
				{
					prompt: "I don't want 'em endin' up like me.",
					options: [
						{ text: "But you're doing great.", points: 3 },
						{ text: "It's not so bad.", points: 2 },
						{ text: 'I know how you feel.', points: 3 }
					]
				}
			],
			unlocks: ['Punk Talk', 'Ogikubo Ramen']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Oh yeah! You bring your stuff?',
					options: [
						{ text: 'A towel?', points: 2 },
						{ text: 'Protein powder?', points: 3 }
					]
				},
				{
					prompt: '...Good for them.',
					options: [
						{ text: 'You seem conflicted.', points: 2 },
						{ text: 'Do you want to rejoin?', points: 2 }
					]
				},
				{
					prompt:
						"But I'm still worried 'bout their advisor, Yamauchi. He's basically like a mini Kamoshida.",
					options: [
						{ text: "So he's short?.", points: 2 },
						{ text: "So he's an asshole?", points: 3 }
					]
				},
				{
					prompt: "Phone (P5R): I ain't too worried!",
					options: [{ text: "Don't worry. I gotcha.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'You got any ideas?',
					options: [
						{ text: "Let's stay here.", points: 2 },
						{ text: 'How about Protein Lovers?', points: 2 },
						{ text: 'We can train at my place.', points: 3 }
					]
				},
				{
					prompt: "That's a load of bull!",
					options: [
						{ text: 'You guys should trust Nakaoka.', points: 3 },
						{ text: 'There is no time for arguing.', points: 3 }
					]
				},
				{
					prompt: "You get what I'm tryin' to say, yeah?",
					options: [
						{ text: 'Absolutely.', points: 3 },
						{ text: 'More or less.', points: 3 }
					]
				},
				{
					prompt: "Phone (P5R): He'll keep his mouth shut whether or not someone's punchin' him.",
					options: [{ text: "So he should've punched back?", points: 2 }]
				}
			],
			unlocks: ['Harisen Recovery']
		},
		{
			rank: 7,
			requirements:
				'Ryuji texts to initiate. Dates: 5/25, 6/22, 8/12, 9/21, 10/2, 11/2, 11/4, 11/11, 12/2, 12/7.',
			choices: [
				{
					prompt:
						"If we don't do something quick, Yamauchi's gonna get rid of Takeishi too... God dammit!",
					options: [{ text: "Let's talk to Takeishi.", points: 3 }]
				},
				{
					prompt: "I know that ain't the coolest thing to say, but it's how I feel.",
					options: [
						{ text: "I think it's cool, Ryuji.", points: 3 },
						{ text: 'Wait, what?', points: 2 }
					]
				}
			],
			unlocks: ['Insta-kill']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'You saw that, right? That was some serious violence!',
					options: [
						{ text: 'Things turned out for the best.', points: 3 },
						{ text: 'You deserved it.', points: 3 }
					]
				},
				{
					prompt: 'Thanks.',
					options: [
						{ text: 'All I did was watch.', points: 3 },
						{ text: 'Are you gonna pay me back?', points: 2 }
					]
				},
				{
					prompt: "It's kinda like I was doin' a sprint... and you were runnin' next to me.",
					options: [
						{ text: 'But I was just standing here...', points: 2 },
						{ text: "You weren't cool though.", points: 3 }
					]
				},
				{
					prompt:
						"Phone (P5R): Seein' them havin' a real heart-to-heart talk... They got a good team.",
					options: [{ text: 'So. Case closed?', points: 2 }]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "Looks like they're finally walkin' their own path.",
					options: [
						{ text: 'Are you satisfied now?', points: 3 },
						{ text: 'Not running?', points: 2 }
					]
				},
				{
					prompt: 'They asked me to come back to the team.',
					options: [
						{ text: 'What did you say?', points: 2 },
						{ text: 'Do you have any time for that?', points: 2 },
						{ text: "Don't do it.", points: 3 }
					]
				},
				{
					prompt: "Wherever you decide to be, that's where you belong.",
					options: [
						{ text: "You're right.", points: 3 },
						{ text: 'I never realized that.', points: 3 }
					]
				},
				{
					prompt: "I'm just glad I found it.",
					options: [{ text: 'I agree.', points: 2 }]
				},
				{
					prompt: 'Phone (P5R): Sounds like they got him under control.',
					options: [
						{ text: 'Congratulations.', points: 2 },
						{ text: 'Better watch out for them.', points: 2 }
					]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Chi You fusion', 'Second Awakening (Seiten Taisei)']
		}
	]
};
