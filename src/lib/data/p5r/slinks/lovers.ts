import type { SocialLink } from '$lib/types';

export const lovers: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Lovers',
		value: 'lovers'
	},
	name: 'Ann Takamaki',
	location: 'Underground Mall in Shibuya after school',
	unlock: 'Unmissable event on 4/15.',
	availability:
		'Daytime on Monday, Tuesday, Wednesday, Friday, and Sunday; day and night on rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: []
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
						{ text: 'You might be right.', points: 3 },
						{ text: "You can't blame yourself.", points: 2 },
						{ text: 'Kamoshida had the upper hand.', points: 2 }
					]
				},
				{
					prompt: '...Thanks.',
					options: [
						{ text: "I couldn't just ignore you.", points: 3 },
						{ text: 'It was no big deal.', points: 2 }
					]
				},
				{
					prompt: "But I'm going to find the answer, I promise.",
					options: [
						{ text: "I'll help.", points: 3 },
						{ text: "Let's find it together.", points: 3 }
					]
				},
				{
					prompt:
						"If I think of anything, I'll let you know. I hope you'll join me again next time!",
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
					prompt: 'Uh-huh, uh-huh. What else?',
					options: [
						{ text: 'Can we stop yet?', points: 3 },
						{ text: 'I like you.', points: 2 },
						{ text: 'I love you.', points: 2 }
					]
				},
				{
					prompt:
						"It sounds like shoots have been real hectic with all the scrambling they've had to do for substitutes.",
					options: [
						{ text: 'Has that happened to you?', points: 3 },
						{ text: "That's odd.", points: 2 }
					]
				},
				{
					prompt: '...Maybe less these days.',
					options: [{ text: 'That freedom sounds nice.', points: 2 }]
				},
				{
					prompt: 'She had to have seen me, right? Do you think she thought I was cool...?',
					options: [{ text: 'Could be.', points: 2 }]
				}
			],
			unlocks: ['Follow Up', 'Inokashira Park']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt:
						"It has everything... but it feels like I can't understand any of it. It's honestly kinda scary.",
					options: [
						{ text: 'I know what you mean.', points: 3 },
						{ text: 'That comes down to you.', points: 2 }
					]
				},
				{
					prompt:
						"But that was when Shiho talked to me. The first thing she said was, 'Takamaki-san, your paintings suck.'",
					options: [
						{ text: "That's hilarious.", points: 3 },
						{ text: 'That was mean of her.', points: 2 }
					]
				},
				{
					prompt:
						'About that female thief in the anime I used to watch? Well, I thought of something!',
					options: [
						{ text: 'Tell me.', points: 3 },
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
					prompt: 'Do you do anything to train your body?',
					options: [
						{ text: 'I train everyday.', points: 2 },
						{ text: 'I carry Morgana in my bag.', points: 2 }
					]
				}
			],
			unlocks: ['Sexy Technique']
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
					prompt: "But still, wasn't Mika's fake crying pretty incredible?",
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
					prompt: 'So I was thinking, and um...what can I do to help Shiho?',
					options: [
						{ text: 'Comfort her.', points: 3 },
						{ text: 'Show her your own strength.', points: 3 },
						{ text: 'Listen to what she has to say.', points: 2 }
					]
				},
				{
					prompt: "But now that I saw her crying, I know I'll find something I can do for her...!",
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
					prompt: 'I want to be a real model...!',
					options: [{ text: "Go get 'em, tiger.", points: 2 }]
				},
				{
					prompt:
						"Obviously that means dieting, cutting back on food, and no matter how tough it is, I'll do any workout!",
					options: [{ text: 'You got this.', points: 2 }]
				}
			],
			unlocks: []
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
						{ text: "You're beautiful as is.", points: 2 }
					]
				},
				{
					prompt: 'Huh... There has to be somewhere my vibrant charm will shine, right!?',
					options: [
						{ text: "There's no doubt in my mind.", points: 3 },
						{ text: 'I hope so.', points: 3 },
						{ text: 'Good luck finding it.', points: 3 }
					]
				},
				{
					prompt:
						"I need to show her that I'm working hard... and that she doesn't need to worry so much about me.",
					options: [
						{ text: "She'll be happy to hear that.", points: 3 },
						{ text: "I'm sure she already knows.", points: 3 }
					]
				},
				{
					prompt:
						'...I wonder if this is how Shiho felt with her rehab? Being able to push herself because someone was there with her...',
					options: [
						{ text: "That's probably it.", points: 2 },
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
					prompt:
						"Because, well... the only way I can help Shiho is to show her how hard I'm working.",
					options: [
						{ text: 'Hang in there.', points: 3 },
						{ text: 'I believe in you, Ann.', points: 3 }
					]
				},
				{
					prompt: "I guess... I'm alone again, huh...?",
					options: [
						{ text: 'You have me.', points: 0, routeFlag: 'romance' },
						{ text: 'You have the others.', points: 0, routeFlag: 'friendship' }
					]
				},
				{
					prompt: 'I kinda need you to, at this point!',
					route: 'romance',
					options: [{ text: "I'm yours forever.", points: 3 }]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt: 'So... how was I?',
					options: [
						{ text: 'You really gave it your all.', points: 3 },
						{ text: 'Everyone was complimenting you.', points: 3 },
						{ text: 'You still have a ways to go.', points: 2 }
					]
				},
				{
					prompt: 'Just like you and Shiho are for me...',
					options: [
						{ text: "I'll be there with you.", points: 3 },
						{ text: 'You can do it, Ann.', points: 3 },
						{ text: "That's embarrassing.", points: 2 }
					]
				},
				{
					prompt: "But... I'm still kinda worried. Do you think you could help me, <protagonist>?",
					options: [
						{ text: 'Of course.', points: 3 },
						{ text: 'Ask me anything.', points: 3 }
					]
				}
			],
			unlocks: ['Second Awakening (Hecate)', 'Ishtar fusion']
		}
	]
};
