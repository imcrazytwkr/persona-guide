import type { SocialLink } from '$lib/types';

export const fortune: SocialLink = {
	game: 'p5r',
	arcana: 'fortune',
	name: 'Chihaya Mifune',
	romanNumeral: 'X',
	location: 'Shinjuku (fortune-telling stall), nighttime, not raining',
	unlock:
		'From 6/22: get a prediction, buy the Holy Stone for ¥100,000, return about the stone, complete Mementos request "Ending the Boyfriend\'s Abuse", then see Chihaya again.',
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
					prompt:
						'What can we do to help this woman who is so oppressed by the savagery of a male-dominated work environment?',
					options: [{ text: 'Encourage her.', points: 0 }]
				},
				{
					prompt: 'Incidentally, what would you say if you wanted to encourage her?',
					options: [{ text: 'Overturn your fate.', points: 0 }]
				},
				{
					prompt: 'Fate cannot be changed. Fate is absolute... That is how it must be.',
					options: [{ text: 'Open your mind to change.', points: 2 }]
				},
				{
					prompt: "Phone (P5R): You're currently standing right in front of your house, correct!?",
					options: [{ text: 'Of course I am.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'How should he move forward?',
					options: [{ text: 'Follow his heart.', points: 0 }]
				},
				{
					prompt: 'What would you say to make him choose his childhood friend...?',
					options: [{ text: 'Thieves may steal her away.', points: 0 }]
				}
			],
			unlocks: ['Money Reading']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: 'How can I become one of those people, Joker-san?',
					options: [
						{ text: 'Trust in yourself.', points: 3 },
						{ text: 'Strengthen your will.', points: 2 }
					]
				},
				{
					prompt:
						'Phone (P5R): Talking to you about everything is helping me feel a little better.',
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
						{ text: 'You must have a lot of free time.', points: 2 }
					]
				}
			],
			unlocks: ['Fate Reading']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: 'All this talk about me being a maiden or a monster...',
					options: [{ text: "You're just Chihaya to me.", points: 3 }]
				},
				{
					prompt: "Phone (P5R): I just can't find the courage to say what I need to…",
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
					prompt: "I'm a terrible person, huh?",
					options: [
						{ text: "I don't think so.", points: 3 },
						{ text: "You shouldn't have tricked them.", points: 2 }
					]
				},
				{
					prompt: "Phone (P5R): I'm done turning a blind eye.",
					options: [
						{ text: 'Are you gonna be okay?', points: 2 },
						{ text: 'Be careful.', points: 2 }
					]
				}
			],
			unlocks: ['Affinity Reading']
		},
		{
			rank: 8,
			requirements:
				'First visit unlocks Mementos request "Debunking the Psychic" (any answers). Return after completing it for the rest of the rank.',
			choices: [
				{
					prompt: "It's even shown up on the news!",
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
					prompt: 'Are you... interested in older women...?',
					options: [{ text: 'Hell yeah, I am.', points: 3 }]
				},
				{
					prompt: "Phone (P5R): I think that's thanks to your influence.",
					options: [{ text: 'It was all your own will.', points: 2 }]
				}
			],
			unlocks: ['Mementos request: Debunking the Psychic']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: 'To avoid our fates...',
					options: [
						{ text: 'Well, fate can be changed.', points: 3 },
						{ text: "That's all in the past now.", points: 2 }
					]
				},
				{
					prompt: 'Why do you come here?',
					options: [
						{ text: 'I like having my fortune read.', points: 0 },
						{ text: 'So I can be with you.', points: 0 }
					]
				},
				{
					prompt: 'Phone (P5R, not romanced):',
					options: [{ text: "I'm planning on it.", points: 2 }]
				},
				{
					prompt: 'Phone (P5R, romanced):',
					options: [{ text: 'I wanted to hear your voice too.', points: 2 }]
				}
			],
			unlocks: ['¥100,000 returned']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Special Fate Reading', 'Lakshmi fusion']
		}
	]
};
