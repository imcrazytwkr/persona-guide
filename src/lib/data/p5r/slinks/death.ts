import type { SocialLink } from '$lib/types';

export const death: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Death',
		value: 'death'
	},
	name: 'Tae Takemi',
	romanNumeral: 'XIII',
	location: 'Yongen-Jaya clinic (near Leblanc)',
	unlock: 'After 4/18, visit the clinic near Leblanc and talk to her.',
	availability: 'Daytime any day of the week. Day and night on rainy days.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt:
						"Based on today's results, I think I can whip up some new medicine for next time. Drop by when you're ready for it.",
					options: [
						{ text: 'Please go easy on me.', points: 3 },
						{ text: 'Fine by me.', points: 2 },
						{ text: 'So many pretty lights...', points: 2 }
					]
				}
			],
			unlocks: ['Rejuvenation', '+1 Guts']
		},
		{
			rank: 2,
			requirements: 'Guts 2 (Bold)',
			choices: [
				{
					prompt: "You don't seem to be sick... Are you up to something illegal!?",
					options: [{ text: 'I have a bad heart.', points: 2 }]
				},
				{
					prompt: "*sigh* I'm so over this...",
					options: [{ text: 'I agree.', points: 2 }]
				},
				{
					prompt: 'You know how it is. Some patients get sick on their way back home.',
					options: [
						{ text: "I'm totally fine.", points: 2 },
						{ text: 'I think I have superpowers.', points: 2 }
					]
				}
			],
			unlocks: ['+1 Guts']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'Participating in clinical trials run by a doctor like that?',
					options: [
						{ text: "I don't mind.", points: 2 },
						{ text: 'I need the medicine.', points: 2 }
					]
				},
				{
					prompt: "You... haven't told anyone about my drugs, right?",
					options: [{ text: 'Of course not.', points: 2 }]
				}
			],
			unlocks: ['Sterilization', '+1 Guts']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: '......',
					options: [{ text: 'Dr. Takemi will help.', points: 2 }]
				},
				{
					prompt: '...Hehe.',
					options: [
						{ text: 'You seem happy.', points: 3 },
						{ text: "You're so kind.", points: 2 },
						{ text: 'Why free?', points: 2 }
					]
				},
				{
					prompt: "Especially after approving that girl's consultation without my permission.",
					options: [{ text: "I'll reflect on my mistakes.", points: 2 }]
				}
			],
			unlocks: ['+1 Guts']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: "That's why it's harmless for people who don't have the disease... probably.",
					options: [
						{ text: "That's good.", points: 3 },
						{ text: 'When will it be done?', points: 2 }
					]
				},
				{
					prompt:
						"Also... sorry for the long talk today. I wasn't planning on telling you all that.",
					options: [{ text: 'About Miwa-chan?', points: 2 }]
				}
			],
			unlocks: ['Immunization', '+1 Guts']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "That's my role as the Plague. I'm not suited for all this other stuff.",
					options: [
						{ text: 'It suits you.', points: 3 },
						{ text: "You're not honest.", points: 2 }
					]
				},
				{
					prompt:
						"I'll need you to stick around just a little bit longer. I hope you can handle it.",
					options: [
						{ text: 'You can count on me.', points: 2 },
						{ text: 'Anything for you.', points: 2 }
					]
				}
			],
			unlocks: ['+1 Guts']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: '......',
					options: [
						{ text: 'This is harassment.', points: 2 },
						{ text: "She's a great doctor.", points: 2 },
						{ text: 'Please be quiet.', points: 2 }
					]
				},
				{
					prompt: "I can't...",
					options: [
						{ text: 'Just rest for today.', points: 2 },
						{ text: 'Anything I can do?', points: 2 }
					]
				},
				{
					prompt: "Ugh. I wish I hadn't shown you that side of me...",
					options: [
						{ text: 'We all do sometimes.', points: 3 },
						{ text: "I'm glad you did. (Romance flag)", points: 2 }
					]
				}
			],
			unlocks: ['Discount', '+1 Guts']
		},
		{
			rank: 8,
			requirements:
				'- Charm 4 (Charismatic)\n- After the first scene, complete Mementos request "Bad Medicine", then return to the clinic.',
			choices: [
				{
					prompt: "I'm all out of allies...",
					options: [{ text: "I'm your ally. (Romance flag)", points: 2 }]
				},
				{
					prompt: "So she's... she's alive...",
					options: [
						{ text: "Let's get to work, doctor.", points: 3 },
						{ text: "It's not over yet.", points: 3 },
						{ text: 'You should hurry.', points: 2 }
					]
				},
				{
					prompt: '...Sorry. Just hang in there, okay?',
					options: [
						{ text: "It's for Miwa-chan. (Romance flag)", points: 3 },
						{ text: "It's for you.", points: 3 },
						{ text: "It's for my exams.", points: 2 }
					]
				},
				{
					prompt: 'Miwa-chan was fighting all that time. I have to fight for her, too.',
					options: [
						{ text: "I'll be cheering you on.", points: 2 },
						{ text: 'Anything else I can do?', points: 2 }
					]
				}
			],
			unlocks: ['+1 Guts', 'Mementos request: Bad Medicine']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt:
						'I have to thank you again. All this is thanks to you helping me with the clinical trials.',
					options: [
						{ text: 'It was rough.', points: 3 },
						{ text: "Don't worry about it.", points: 2 },
						{ text: 'It was for my exams.', points: 2 }
					]
				},
				{
					prompt: "Why don't you tell me the truth about why you kept coming to me?",
					options: [
						{ text: 'I wanted to see you. (Romance route)', points: 0 },
						{ text: 'It was for my exams. (Platonic route)', points: 0 }
					]
				},
				{
					prompt: "...Don't tell me you're in love with me or something. (Romance)",
					options: [
						{ text: 'I love you.', points: 2 },
						{ text: 'What do you think?', points: 0 }
					]
				},
				{
					prompt: "Or... I can give you a 'special examination' if you'd like. (Romance)",
					options: [
						{ text: "It isn't a joke.", points: 3 },
						{ text: 'That sounds good.', points: 0 }
					]
				},
				{
					prompt:
						"Turns out my little guinea pig caught an illness that's even more annoying and persistent than Crawford-Ende's. (Romance)",
					options: [
						{ text: 'So did you.', points: 2 },
						{ text: "It's true love.", points: 0 },
						{ text: "I've always loved you.", points: 0 }
					]
				},
				{
					prompt: "You really are the best guinea pig I could've hoped for. (Platonic)",
					options: [
						{ text: "I'm glad we saw it through.", points: 2 },
						{ text: "You're welcome.", points: 0 },
						{ text: 'It was a breeze.', points: 0 }
					]
				}
			],
			unlocks: ['Inokashira Park']
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt:
						"And to have it happen when it did... Isn't the only logical conclusion to think that it's you?",
					options: [{ text: 'I wonder...', points: 2 }]
				},
				{
					prompt: "Really... Then, would you like a 'thorough examination'? (Romance)",
					options: [
						{ text: 'Yes, please.', points: 3 },
						{ text: 'What kind?', points: 2 }
					]
				}
			],
			unlocks: ['Alice fusion', 'Resuscitation']
		}
	]
};
