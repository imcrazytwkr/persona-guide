import type { SocialLink } from '$lib/types';

export const lovers: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Lovers',
		value: 'lovers'
	},
	name: 'Ann Takamaki',
	romanNumeral: 'VI',
	location: 'Underground Mall in Shibuya after school',
	unlock: 'Unmissable event on 4/15.',
	availability:
		'Daytime on Monday, Tuesday, Wednesday, Friday and Sunday; day and night on rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['Baton Pass']
		},
		{
			rank: 2,
			requirements: '- Kindness 2 (Considerate)\n- Available after 5/6.',
			choices: [
				{
					prompt: 'So, I apologized as well.',
					options: [
						{ text: 'Are you feeling better now?', points: 3 },
						{ text: "She's so strong.", points: 3 },
						{ text: 'So are you friends again?', points: 2 }
					]
				},
				{
					prompt: "...But in the end, maybe I just didn't believe in her ability.",
					options: [
						{ text: "You can't blame yourself?", points: 2 },
						{ text: 'You might be right.', points: 3 },
						{ text: 'Kamoshida had the upper hand.', points: 2 }
					]
				},
				{
					prompt: '..Thanks.',
					options: [
						{ text: 'It was no big deal.', points: 2 },
						{ text: "I couldn't just ignore you.", points: 3 }
					]
				},
				{
					prompt: "I'm going to find the answer, I promise.",
					options: [
						{ text: "I'll help.", points: 3 },
						{ text: "Let's find it together.", points: 3 }
					]
				},
				{
					prompt: "Phone (P5R): I hope you'll join me again next time!",
					options: [
						{ text: "Of course. You're my teammate.", points: 2 },
						{ text: 'Leave it to me.', points: 2 },
						{ text: 'The no-refills thing again?', points: 2 }
					]
				}
			],
			unlocks: ['Girl Talk']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Uh-huh. What else?',
					options: [
						{ text: 'I like you.', points: 2 },
						{ text: 'I love you.', points: 2 },
						{ text: 'Can we stop yet?', points: 3 }
					]
				},
				{
					prompt:
						"It sounds like shoots have been real hectic with all the scrambling they've had to do for substitutes.",
					options: [
						{ text: "That's odd.", points: 2 },
						{ text: 'Has that happened to you?', points: 3 }
					]
				},
				{
					prompt: 'Maybe less these days.',
					options: [{ text: 'The freedom sounds nice?', points: 2 }]
				},
				{
					prompt: 'Phone (P5R): Do you think she thought I was cool...?',
					options: [{ text: 'Could be.', points: 2 }]
				}
			],
			unlocks: ['Follow Up', 'Inokashira Park (if not already unlocked)']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "It feels like I can't understand any of it. It's honestly kinda scary.",
					options: [
						{ text: 'I know what you mean.', points: 3 },
						{ text: 'That comes down to you.', points: 2 }
					]
				},
				{
					prompt: "The first thing she said was, 'Takamaki-san, your paintings suck.'",
					options: [
						{ text: 'That was mean of her.', points: 2 },
						{ text: "That's hilarious.", points: 3 }
					]
				},
				{
					prompt:
						'About that female thief in the anime I used to watch? Well, I thought of something!',
					options: [
						{ text: 'Tell me?', points: 3 },
						{ text: "I'm afraid to know.", points: 2 }
					]
				},
				{
					prompt: "And that's why I'm going to try and learn from them!",
					options: [
						{ text: 'Good idea.', points: 3 },
						{ text: 'How exactly?', points: 2 }
					]
				},
				{
					prompt: "I'm gonna star in action movies!",
					options: [{ text: 'Good luck with that.', points: 3 }]
				},
				{
					prompt: 'Phone (P5R): Do you do anything to train your body?',
					options: [
						{ text: 'I train everyday.', points: 2 },
						{ text: 'I carry Morgana in my bag.', points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Do you think maybe Shiho would want one too?',
					options: [{ text: 'Give it up.', points: 2 }]
				},
				{
					prompt: 'I really screwed that up...',
					options: [{ text: "She's amazing, huh...", points: 2 }]
				},
				{
					prompt: "Wasn't Mika's fake crying pretty incredible?",
					options: [{ text: 'It had grace.', points: 2 }]
				}
			],
			unlocks: ['Crocodile Tears']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt:
						'I guess you really just need someone to laugh at you if you want to feel better.',
					options: [
						{ text: 'It seems that way.', points: 3 },
						{ text: "If it's a friend, yeah.", points: 2 }
					]
				},
				{
					prompt: 'What can I do to help Shiho?',
					options: [
						{ text: 'Comfort her.', points: 3 },
						{ text: 'Listen to what she has to say.', points: 2 },
						{ text: 'Show her your strength.', points: 3 }
					]
				},
				{
					prompt: "Phone (P5R): I know I'll find something I can do for her...!",
					options: [
						{ text: "Someone's motivated.", points: 2 },
						{ text: "I'll cheer you on.", points: 2 }
					]
				}
			],
			unlocks: ['Harisen Recovery']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: 'I wonder why...',
					options: [{ text: 'She admires you.', points: 2 }]
				},
				{
					prompt: 'I want to be a real model...',
					options: [{ text: "Go get 'em, tiger.", points: 2 }]
				},
				{
					prompt: "Phone (P5R): I'll do any workout!",
					options: [{ text: 'You got this.', points: 2 }]
				}
			],
			unlocks: ['Sexy Technique']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt:
						'Obviously I want to cut down on my waist size too... and firm up my butt and calves!',
					options: [
						{ text: 'You have some real guts.', points: 3 },
						{ text: "You're beautiful as-is.", points: 2 }
					]
				},
				{
					prompt: 'There has to be somewhere my vibrant charm will shine, right?',
					options: [
						{ text: "There's no doubt in my mind.", points: 3 },
						{ text: 'I hope so.', points: 3 },
						{ text: 'Good Luck finding it.', points: 3 }
					]
				},
				{
					prompt: "She doesn't need to worry so much about me.",
					options: [
						{ text: 'So happy to hear that.', points: 3 },
						{ text: "I'm sure she already knows.", points: 3 }
					]
				},
				{
					prompt: 'Phone (P5R): Being able to push herself because someone was there with her...',
					options: [
						{ text: "That's probably it.", points: 0 },
						{ text: 'You can ask her yourself.', points: 2 }
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
					prompt: "The only way I can help Shiho is to show her how hard I'm working.",
					options: [
						{ text: 'Hang in there.', points: 3 },
						{ text: 'I believe in you, Ann.', points: 3 }
					]
				},
				{
					prompt: "I guess... I'm alone again, huh...?",
					options: [
						{ text: 'You have me. (Romance)', points: 0 },
						{ text: 'You have the others. (Friendship)', points: 0 }
					]
				},
				{
					prompt: 'Phone (P5R, Romance)',
					options: [{ text: "I'm yours forever.", points: 3 }]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Ishtar fusion', 'Second Awakening (Hecate)']
		}
	]
};
