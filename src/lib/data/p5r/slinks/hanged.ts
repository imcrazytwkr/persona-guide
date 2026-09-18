import type { SocialLink } from '$lib/types';

export const hanged: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Hanged Man',
		value: 'hanged'
	},
	name: 'Munehisa Iwai',
	location: 'Shibuya Untouchable (airsoft shop)',
	unlock:
		"- After 5/6, see the airsoft shop event with the 'package' you have to hold.\n- Guts 4 (Dauntless)",
	availability:
		'Thursday, Saturday, and Sunday nights, and rainy days. Shop is open in the daytime but the confidant only advances at night.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt: "If you want somethin', you're gonna have to work for it.",
					options: [
						{ text: "So what's my first job?", points: 3 },
						{ text: 'Leave it to me.', points: 2 },
						{ text: "As long as it's safe...", points: 1 }
					]
				}
			],
			unlocks: ['Starter Customization']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: "...Sounds like there's some weird stuff goin' down.",
					options: [
						{ text: 'What should I do now?', points: 2 },
						{ text: "How's your cold?", points: 2 }
					]
				}
			],
			unlocks: ['+2 Proficiency']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'The same clan I was in... back when I was part of the yakuza.',
					options: [
						{ text: 'I always knew you were a thug.', points: 3 },
						{ text: 'Y-Yakuza!?', points: 2 }
					]
				},
				{
					prompt: "...Hope I ain't scarin' you off with all this talk.",
					options: [{ text: "We made a deal, didn't we?", points: 3 }]
				}
			],
			unlocks: ['Camo Customization', '+2 Proficiency']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt:
						"Anyways, nice job. I'm gonna be able to give Tsuda a real scare thanks to the info you gave me!",
					options: [
						{ text: "Where's my reward?", points: 3 },
						{ text: 'You two should play nice.', points: 2 }
					]
				},
				{
					prompt: 'But now Tsuda knows your face. And that could be a real problem.',
					options: [{ text: 'I agree.', points: 2 }]
				}
			],
			unlocks: ['+2 Proficiency']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: "He's just got too much power...",
					options: [{ text: "You're pathetic.", points: 3 }]
				},
				{
					prompt: "...You prolly don't want anythin' to do with me after that, huh?",
					options: [
						{ text: "I'll stick around for the guns.", points: 3 },
						{ text: "That's right.", points: 2 }
					]
				},
				{
					prompt: "But I gotta protect that secret, no matter what. For Kaoru's sake.",
					options: [{ text: "You're right.", points: 2 }]
				}
			],
			unlocks: ['Discount (gun customization)', '+2 Proficiency']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "You two look like you're havin' fun. What've you been talkin' about?",
					options: [
						{ text: 'Girls.', points: 3 },
						{ text: "That's a secret.", points: 3 },
						{ text: 'Our futures.', points: 2 }
					]
				},
				{
					prompt: "Ain't that right?",
					options: [
						{ text: 'You should buy us something.', points: 3 },
						{ text: 'Right.', points: 2 }
					]
				},
				{
					prompt: 'Looked like you and Kaoru really hit it off. Glad to see you two get along.',
					options: [
						{ text: "He's my age, so it comes easier.", points: 2 },
						{ text: 'All I did was listen to him.', points: 2 }
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
					prompt: "I mean, don't somethin' about that seem off to you?",
					options: [
						{ text: 'Absolutely.', points: 3 },
						{ text: 'I guess he likes guns?', points: 2 }
					]
				},
				{
					prompt: "And now he's tryin' to use me to cover up his mistake.",
					options: [
						{ text: "He's clever.", points: 3 },
						{ text: 'What a crafty bastard.', points: 2 }
					]
				},
				{
					prompt: "But considering who we're dealin' with... we can't afford to take any chances.",
					options: [{ text: 'Bring it on.', points: 2 }]
				}
			],
			unlocks: ['Expert Customization']
		},
		{
			rank: 8,
			requirements:
				'- Guts 5 (Lionhearted)\n- After the first scenes, complete Mementos request "Shady Deal in the Shadows", then return to Iwai.',
			choices: [
				{
					prompt: "I hope dealing with all this yakuza business hasn't been too much trouble.",
					options: [
						{ text: 'I did it all for Iwai.', points: 3 },
						{ text: 'It most definitely was.', points: 2 }
					]
				},
				{
					prompt: 'Just forget all of this...',
					options: [
						{ text: 'I will.', points: 2 },
						{ text: 'I want to help you.', points: 2 }
					]
				},
				{
					prompt: 'Hey, you think a guy can really go through a drastic change that quick?',
					options: [{ text: 'I dunno.', points: 2 }]
				},
				{
					prompt:
						"I understand kids these days have all sortsa commitments, so I get it if the answer's gotta be no...",
					options: [
						{ text: 'I guess I could consider it.', points: 3 },
						{ text: 'If you pay me well.', points: 3 },
						{ text: "I'm back, baby.", points: 2 }
					]
				},
				{
					prompt: "Seemed like he was on the level, but... can't be too careful.",
					options: [{ text: 'Understood.', points: 2 }]
				}
			],
			unlocks: ['+2 Proficiency', 'Mementos request: Shady Deal in the Shadows']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: 'Serves him right, huh?',
					options: [
						{ text: "Are you sure he's still alive?", points: 3 },
						{ text: "That's great news.", points: 2 }
					]
				},
				{
					prompt: 'Kaoru...',
					options: [
						{ text: 'Tell him the truth.', points: 3 },
						{ text: 'You need to trust your son.', points: 3 }
					]
				},
				{
					prompt: "Guess you're maturin' quicker than I even realized...",
					options: [
						{ text: 'Kaoru is really strong-willed.', points: 3 },
						{ text: "He's a cool kid, huh?", points: 3 },
						{ text: 'He gets that maturity from you.', points: 2 }
					]
				},
				{
					prompt: "...The kid must've grown into a man while I wasn't looking.",
					options: [
						{ text: 'Like father, like son.', points: 2 },
						{ text: 'Gecko bonds go beyond blood.', points: 2 }
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
					prompt: '......',
					options: [
						{ text: "It's up to you now, Iwai.", points: 3 },
						{ text: "Kaoru won't lose.", points: 3 }
					]
				},
				{
					prompt:
						"I can't be the only one who was saved by his change of heart. Wonder who else knows...",
					options: [{ text: "What if you're right?", points: 2 }]
				}
			],
			unlocks: ['Attis fusion', 'On The House', '+2 Proficiency']
		}
	]
};
