import { defineSocialLink } from '$lib/types';
import type { RouteKey } from '../routes';

export const justice = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Justice',
		value: 'justice'
	},
	name: 'Nanako Dojima',
	location: 'Dojima residence',
	unlock: 'Automatically after moving in with the Dojimas.',
	availability:
		'Nighttime on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday; day and night on rainy days.',
	routes: [],
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
					prompt: '> Nanako is fidgeting.',
					options: [
						{ text: 'Go ahead and ask.', points: 3 },
						{ text: "What's wrong?", points: 2 }
					]
				},
				{
					prompt: 'Are you an only child?',
					options: [{ text: "That's right.", points: 3 }]
				},
				{
					prompt: '"Hmmm... Then do you have a little sister?"',
					options: [
						{ text: "I don't.", points: 3 },
						{ text: 'I have you.', points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: "Dad'll be disappointed.",
					options: [
						{ text: "I'll go buy some.", points: 3 },
						{ text: "Let's go buy some together.", points: 3 }
					]
				},
				{
					prompt: '> Nanako looks sad.',
					options: [{ text: "It's not Nanako's fault.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: '> Nanako is nodding her head cheerfully.',
					options: [{ text: 'Is there anything else?', points: 3 }]
				},
				{
					prompt: 'What happens to a person when they die?',
					options: [
						{ text: 'They go to heaven.', points: 3 },
						{ text: "I don't know.", points: 2 }
					]
				},
				{
					prompt: 'Why do bad people do bad things?',
					options: [{ text: "I don't know.", points: 2 }]
				},
				{
					prompt: 'Are bad people more important to Dad than I am?',
					options: [{ text: "He's protecting you.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: "What do they mean by 'real'?",
					options: [
						{ text: 'A person you love a lot.', points: 3 },
						{ text: 'Always by your side.', points: 3 }
					]
				},
				{
					prompt: "Daddy doesn't come home because I'm not his 'real' daughter?",
					options: [
						{ text: 'Did he say that?', points: 3 },
						{ text: 'You have me.', points: 2 }
					]
				},
				{
					prompt: '> What should you do?',
					options: [
						{ text: 'Talk with her', points: 3 },
						{ text: 'Listen to her talk', points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "> Nanako looks like she's about to cry...",
					options: [{ text: 'Swear to it', points: 2 }]
				},
				{
					prompt: "He can't come, huh?",
					options: [
						{ text: "He'll come.", points: 3 },
						{ text: "I'll ask him with you.", points: 3 }
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
					prompt: '"What\'s gotten into her...?"',
					options: [{ text: "Let's go look for her.", points: 3 }]
				},
				{
					prompt: 'Big bro...',
					options: [{ text: "Let's go home.", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'What should I do...? The teacher will yell at me.',
					options: [{ text: "I'll help you look for it.", points: 3 }]
				},
				{
					prompt: 'Why did Dad stop smiling...?',
					options: [
						{ text: "He's lonely too.", points: 3 },
						{ text: "Because you're lonely.", points: 3 }
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
					prompt: 'Big bro... I love my Dad.',
					options: [
						{ text: 'I know.', points: 3 },
						{ text: 'He loves you, too.', points: 3 }
					]
				},
				{
					prompt: '...I feel sorry for him, losing someone he loves.',
					options: [
						{ text: 'He still has you.', points: 3 },
						{ text: "She's not lost.", points: 3 },
						{ text: 'I feel sorry for you too.', points: 3 }
					]
				},
				{
					prompt: '> What should you do?',
					options: [
						{ text: 'Talk with her', points: 3 },
						{ text: 'Play with her', points: 3 }
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
					prompt: 'Big bro, can you make a salad?',
					options: [
						{ text: 'Sure thing.', points: 3 },
						{ text: 'I think...', points: 2 }
					]
				},
				{
					prompt: "You're my family, too, so... Let's work hard together!",
					options: [
						{ text: "Let's do it.", points: 3 },
						{ text: "Don't strain yourself.", points: 2 },
						{ text: "But I'm not your Mom...", points: 2 }
					]
				}
			],
			unlocks: ['Sraosha fusion', 'Family Picture']
		}
	]
});
