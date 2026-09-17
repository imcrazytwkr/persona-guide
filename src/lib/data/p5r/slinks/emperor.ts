import type { SocialLink } from '$lib/types';

export const emperor: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Emperor',
		value: 'emperor'
	},
	name: 'Yusuke Kitagawa',
	romanNumeral: 'IV',
	location: 'Shibuya Station Underground Walkway',
	unlock: 'Unmissable event on 6/18. Talk to Yusuke at the underground passageway afterwards.',
	availability:
		'Daytime every day; day and night on rainy days. Unavailable during some story events.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt:
						'I have to hold up my end of the deal, so I’ll perform to the best of my ability. You need only ask.',
					options: [
						{ text: "I'll be asking a lot.", points: 3 },
						{ text: 'Thanks.', points: 2 },
						{ text: "I'll try not to.", points: 2 }
					]
				}
			],
			unlocks: ['Card Duplication', 'Recarm Skill Card']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: 'I would like your honest opinion... if you would.',
					options: [
						{ text: "It's novel.", points: 2 },
						{ text: "It's enigmatic.", points: 2 }
					]
				},
				{
					prompt:
						'More importantly, it shall be the spark that revitalizes my slumbering art career!',
					options: [
						{ text: "I can't wait.", points: 3 },
						{ text: "I hope you're right.", points: 3 }
					]
				},
				{
					prompt:
						"I'm on a roll right now. I shall keep up this momentum and apply it to the Phantom Thieves as well!",
					options: [{ text: "You're already doing enough.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'My work is... empty?',
					options: [{ text: "Don't let it bother you.", points: 2 }]
				},
				{
					prompt: 'What is going to happen to me now? Without art, what will remain of my being!?',
					options: [
						{ text: "This isn't like you.", points: 3 },
						{ text: "You're really giving up?", points: 2 }
					]
				},
				{
					prompt:
						'But that is all the more reason I must break out of my slump. I must prove my ability to him...!',
					options: [
						{ text: 'How exactly?', points: 2 },
						{ text: "That's the spirit.", points: 2 }
					]
				},
				{
					prompt:
						"I will simply keep on drawing. I'm going to have ten pieces finished up by end of today!",
					options: [{ text: "That's the spirit.", points: 2 }]
				}
			],
			unlocks: ['Follow Up', 'Ueno Museum (if not already unlocked)']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt:
						'Thank you for your assistance today. After all, it would be impossible to sketch while rowing.',
					options: [
						{ text: 'Why are we in a boat?', points: 2 },
						{ text: 'I should bring a girl here.', points: 2 }
					]
				},
				{
					prompt: 'It seems my bias has caused me to overlook the truth of the matter...',
					options: [
						{ text: 'Love comes in all forms.', points: 3 },
						{ text: 'Maybe you should train more.', points: 2 }
					]
				},
				{
					prompt:
						'When will I fully understand the heart? Even if I ever do understand it, will I truly be able to draw it...?',
					options: [{ text: "Don't get discouraged.", points: 2 }]
				}
			],
			unlocks: ['Art Talk', 'Inokashira Park (if not already unlocked)']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Very well. <Protagonist>, you will have to be my model today.',
					options: [
						{ text: 'Do you want me to strip?', points: 3 },
						{ text: 'I dunno if I can do it...', points: 2 }
					]
				},
				{
					prompt: '<Protagonist>... Do you think I will be able to capture the truth someday?',
					options: [
						{ text: "I'm sure you will.", points: 3 },
						{ text: "It doesn't look like it.", points: 3 },
						{ text: 'Do you want to give up?', points: 2 }
					]
				},
				{
					prompt:
						'The more I think about it... the further I seem to be from understanding the abyss of the heart.',
					options: [{ text: "There's still hope.", points: 2 }]
				}
			],
			unlocks: ['Card Creation', 'Kanda Church (if not already unlocked)']
		},
		{
			rank: 6,
			requirements: 'Proficiency 4 (Masterful)',
			choices: [
				{
					prompt: 'Hm, this place has not changed in the slightest...',
					options: [{ text: 'It feels nostalgic.', points: 2 }]
				},
				{
					prompt: '...<Protagonist>, why do you think Madarame decided to take me in?',
					options: [
						{ text: 'Maybe he was sympathetic.', points: 3 },
						{ text: "I couldn't possibly tell you.", points: 3 },
						{ text: 'He somehow knew you had skill.', points: 2 }
					]
				},
				{
					prompt: "By the way, that gentleman... Kawanabe, was it? What's your impression of him?",
					options: [{ text: 'He had a certain dignity.', points: 2 }]
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
						"There is definitely a market for you. We'll sell you as the 'tragic, handsome artist.'",
					options: [{ text: 'What do you mean?', points: 2 }]
				},
				{
					prompt:
						'Why is it that all artists talk about is money, money, money!? Has the true meaning of art been lost!?',
					options: [{ text: 'The truth is within you.', points: 3 }]
				},
				{
					prompt: "I'm tainted after all...! I'm a petty sellout, a slave to the power of money!",
					options: [
						{ text: 'Calm down.', points: 2 },
						{ text: "It's not a crime to enjoy sushi.", points: 2 }
					]
				}
			],
			unlocks: ['Live Painting']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: '<Protagonist>, what subject do you think would most capture beauty?',
					options: [{ text: 'It has to be Ann.', points: 2 }]
				},
				{
					prompt:
						'Is this what pure passion is supposed to look like!? My heart is clouded by worldly desires!',
					options: [
						{ text: "You've really grown, Yusuke.", points: 3 },
						{ text: "What's wrong with that?", points: 2 }
					]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt:
						"When my mother was painting the 'Sayuri'... what do you think she was thinking about?",
					options: [
						{ text: 'Her love for her son.', points: 3 },
						{ text: 'The pain of separation.', points: 3 },
						{ text: "I don't know.", points: 2 }
					]
				},
				{
					prompt:
						'But that is why I am going to wield my brush again... To give hope to all those who see my paintings.',
					options: [
						{ text: "You've really changed, Yusuke.", points: 3 },
						{ text: "That's a great idea.", points: 2 }
					]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt: 'Sensei...',
					options: [
						{ text: 'He was a good man deep down.', points: 3 },
						{ text: 'That was another aspect of him.', points: 3 }
					]
				}
			],
			unlocks: ['Second Awakening (Kamu Susano-o)', 'Odin fusion']
		}
	]
};
