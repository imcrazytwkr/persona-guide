import type { SocialLink } from '$lib/types';

export const fortune: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Fortune',
		value: 'fortune'
	},
	name: 'Chihaya Mifune',
	location: 'Shinjuku (fortune-telling stall), nighttime, not raining',
	unlock:
		'From 6/22: get a prediction, buy the Holy Stone for 100,000 yen, return about the stone, complete Mementos request "Ending the Boyfriend\'s Abuse", then see Chihaya again.',
	availability: 'Tuesday, Thursday, Saturday, and Sunday nights. Not available when raining.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt:
						"I suggest you don't try to get out of it. Or else, who knows what kind of black magic I'll have to resort to...?",
					options: [
						{ text: "I'll be there.", points: 3 },
						{ text: "You're pretty extreme...", points: 2 }
					]
				}
			],
			unlocks: ['Luck Reading']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: 'Fate cannot be changed. Fate is absolute... That is how it must be.',
					options: [{ text: 'Open your mind to change.', points: 2 }]
				},
				{
					prompt:
						"So I'm going to get right to my question! You're currently standing right in front of your house, correct!?",
					options: [{ text: 'Of course I am.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [],
			unlocks: ['Money Reading']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: 'How can I become one of those people, <protagonist>-san?',
					options: [
						{ text: 'Trust in yourself.', points: 3 },
						{ text: 'Strengthen your will.', points: 2 }
					]
				},
				{
					prompt: 'But talking to you about everything is helping me feel a little better.',
					options: [{ text: "I didn't do much.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt:
						'This way, I can suggest new alternatives instead of leaving them resigned to their fates.',
					options: [
						{ text: "You're such a hard worker.", points: 3 },
						{ text: 'You must have lots of free time.', points: 2 }
					]
				}
			],
			unlocks: ['Affinity Reading']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt:
						"You must think I'm weird, huh? All this talk about me being a maiden or a monster...",
					options: [{ text: "You're just Chihaya to me.", points: 3, routeFlag: 'romance' }]
				},
				{
					prompt:
						"But whenever I face the chairman, I just can't find the courage to say what I need to...",
					options: [{ text: 'Be honest with yourself.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: "...I'm a terrible person, huh?",
					options: [
						{ text: "I don't think so.", points: 3 },
						{ text: "You shouldn't have tricked them.", points: 2 }
					]
				},
				{
					prompt: "I'm done turning a blind eye!",
					options: [
						{ text: 'Are you gonna be okay?', points: 2 },
						{ text: 'Be careful.', points: 2 }
					]
				}
			],
			unlocks: ['Special Fate Reading']
		},
		{
			rank: 8,
			requirements:
				'After the first scene, complete Mementos request "Debunking the Psychic", then return to Chihaya.',
			choices: [
				{
					prompt: "The chairman turned himself in! It's even shown up on the news!",
					options: [
						{ text: 'I know.', points: 3 },
						{ text: 'I had no idea.', points: 2 }
					]
				},
				{
					prompt:
						"It's almost like this curse that's followed me ever since the villagers called me a monster... has passed.",
					options: [
						{ text: "I'm glad to hear that.", points: 3 },
						{ text: "That's some good luck.", points: 3 },
						{ text: "It's because you're strong.", points: 3 }
					]
				},
				{
					prompt: 'U-Um, <protagonist>-san... Are you... interested in older women...?',
					options: [{ text: 'Hell yeah I am.', points: 3, routeFlag: 'romance' }]
				},
				{
					prompt: "But I didn't. I stood firm. And I think that's thanks to your influence.",
					options: [{ text: 'It was all your own will.', points: 2 }]
				}
			],
			unlocks: ['Celestial Reading', 'Mementos request: Debunking the Psychic']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: 'All any of us ever wanted was to be happy... to avoid our fates...',
					options: [
						{ text: 'Well, fate can be changed.', points: 3 },
						{ text: "That's all in the past now.", points: 2 }
					]
				},
				{
					prompt: '<protagonist>-san... Why do you come here?',
					options: [
						{ text: 'I like having my fortune read.', points: 0, routeFlag: 'friendship' },
						{ text: 'So I can be with you.', points: 0, routeFlag: 'romance' }
					]
				},
				{
					prompt:
						"If you're in any trouble, please feel free to stop by for a consultation any time!",
					route: 'friendship',
					options: [{ text: "I'm planning on it.", points: 2 }]
				},
				{
					prompt: '...I-I mean, just kidding! I got you! Ahaha... ha...',
					route: 'romance',
					options: [{ text: 'I wanted to hear your voice too.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt: 'Particularly when I tell them they can alter their fate!',
					route: 'friendship',
					options: [
						{ text: 'You seem to be well.', points: 2 },
						{ text: "You've changed.", points: 2 }
					]
				},
				{
					prompt: "...That's the fate I've chosen for myself!",
					options: [
						{ text: 'I support you.', points: 3 },
						{ text: 'You have strong convictions.', points: 3 }
					]
				},
				{
					prompt: "And I'm not used to fancy places like this...",
					route: 'romance',
					options: [
						{ text: "It's actually pretty cute.", points: 3 },
						{ text: "I don't care about that.", points: 2 }
					]
				}
			],
			unlocks: ['Lakshmi fusion', 'True Affinity Reading']
		}
	]
};
