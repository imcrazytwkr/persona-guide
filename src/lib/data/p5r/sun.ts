import type { SocialLink } from '$lib/types';

export const sun: SocialLink = {
	game: 'p5r',
	arcana: 'sun',
	name: 'Toranosuke Yoshida',
	romanNumeral: 'XIX',
	location: 'Shibuya Station Square',
	unlock:
		'From 5/6, listen to Yoshida at Station Square, then apply at the nearby Beef Bowl Shop via station leaflets. Work there twice to start the confidant.',
	availability: 'Sunday nights. Unavailable after November 13.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt:
						"It's about my speech schedules from this point on. Would you be willing to stick around to hear it?",
					options: [{ text: 'Let me write this down.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: 'Why do you want to become a politician?',
					options: [{ text: 'I want to improve my speech.', points: 2 }]
				},
				{
					prompt: 'What kind of politician do you want to be?',
					options: [
						{ text: 'One with conviction.', points: 2 },
						{ text: "I don't know yet.", points: 2 }
					]
				},
				{
					prompt: "That is the foundation of a great speech. You'd do well to remember that.",
					options: [{ text: 'That was helpful.', points: 2 }]
				},
				{
					prompt: 'Phone (P5R): What do you think? Did you take anything useful from it?',
					options: [
						{ text: 'It was helpful.', points: 2 },
						{ text: 'Somewhat.', points: 2 },
						{ text: 'It changed my whole outlook.', points: 2 }
					]
				}
			],
			unlocks: ['Diplomacy']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Tell me, what about Yoshida here drew you in?',
					options: [
						{ text: 'His message.', points: 2 },
						{ text: 'His speaking skills.', points: 2 }
					]
				},
				{
					prompt: 'Phone (P5R): I want you to use your experiences to forge your own conviction.',
					options: [{ text: "You think I'll ever find it?", points: 2 }]
				}
			],
			unlocks: ['Fundraising']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: 'The highlight, though, was your yelling.',
					options: [{ text: "I couldn't help myself.", points: 2 }]
				},
				{
					prompt:
						'Phone (P5R): Perhaps it seems too obvious, or too trite, but... I hope you remember to cherish that, too.',
					options: [
						{ text: 'I will.', points: 2 },
						{ text: "Can't forget your roots.", points: 2 }
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
					prompt: "Do you think I've regained my confidence?",
					options: [
						{ text: "That media doesn't matter.", points: 3 },
						{ text: 'I think so.', points: 2 }
					]
				}
			],
			unlocks: ['Manipulation']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt:
						"I'd like to hear your honest opinion. As a young man, are you for or against them?",
					options: [
						{ text: "I don't really care.", points: 3 },
						{ text: "I'm for them.", points: 2 }
					]
				},
				{
					prompt: 'What would you do at a time like this?',
					options: [
						{ text: "I'd decline.", points: 3 },
						{ text: "I'd leave it to chance.", points: 2 }
					]
				},
				{
					prompt:
						"Phone (P5R): The most crucial thing is that you don't lose sight of who you are.",
					options: [
						{ text: "I'll keep that in mind.", points: 2 },
						{ text: 'You make quite a case.', points: 2 }
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
					prompt: "Could you talk some sense into him? You'll benefit as well.",
					options: [{ text: 'You should decline.', points: 2 }]
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
						'Join with Matsushita and take my revenge against Mr. Kuramoto, but drop out of the election...',
					options: [{ text: "That's a difficult decision.", points: 2 }]
				},
				{
					prompt: 'To achieve my dream, I have to set aside my beliefs. What should I do?',
					options: [{ text: 'Stick to your beliefs.', points: 3 }]
				},
				{
					prompt:
						"Phone (P5R): That is why you must never forget what's truly important to you... You understand?",
					options: [
						{ text: "I'll never forget that.", points: 2 },
						{ text: "It's tougher than it seems.", points: 2 }
					]
				}
			],
			unlocks: ['Mind Control']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "OK, I'm going to get started.",
					options: [
						{ text: 'Do your best.', points: 3 },
						{ text: "I'm getting nervous.", points: 2 }
					]
				},
				{
					prompt: "Perhaps, it's the effect of you moving my heart.",
					options: [{ text: 'You had a change of heart.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Charismatic Speech', 'Asura fusion']
		}
	]
};
