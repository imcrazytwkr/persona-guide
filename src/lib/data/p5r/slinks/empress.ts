import type { SocialLink } from '$lib/types';

export const empress: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Empress',
		value: 'empress'
	},
	name: 'Haru Okumura',
	location: 'School rooftop after school; school gates on Sundays',
	unlock:
		'After 10/30, find and chat with her on the school rooftop. On Sundays, she hangs out at the school gates.',
	availability:
		'After school, except Sunday and rainy days. On Sundays she hangs out at the school gates.',
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [
				{
					prompt:
						"I certainly have plenty of seeds, so if you have a preference, I'll prioritize growing those first.",
					options: [
						{ text: 'That was our deal.', points: 3 },
						{ text: 'Sounds good.', points: 2 },
						{ text: "Thanks. I'm counting on you.", points: 2 }
					]
				}
			],
			unlocks: ['Cultivation']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: '...Coffee beans.',
					options: [
						{ text: 'Are you opening a café?', points: 3 },
						{ text: 'Are you starting a farm?', points: 3 },
						{ text: 'You like coffee?', points: 2 }
					]
				},
				{
					prompt:
						'He even offered to assist me with asset management. I fear he has an ulterior motive though...',
					options: [{ text: 'He sounds suspicious.', points: 3 }]
				},
				{
					prompt: "...At least, it's possible.",
					options: [
						{ text: 'This is a complex issue.', points: 3 },
						{ text: 'You might be wrong.', points: 2 },
						{ text: 'Maybe you should fire him.', points: 2 }
					]
				},
				{
					prompt: 'I might as well grow things that everyone like eating.',
					options: [
						{ text: 'Moonlight Carrot.', points: 3 },
						{ text: 'Sun Tomato.', points: 3 },
						{ text: 'Jewel Melon.', points: 3 }
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
					prompt:
						"But um, <protagonist>-kun... I'm worried what the school might do if they found out about this.",
					options: [
						{ text: "They won't find out.", points: 3 },
						{ text: "It'll be okay, I promise.", points: 3 },
						{ text: "A phantom thief doesn't worry.", points: 2 }
					]
				},
				{
					prompt: 'So, um... what can I say to decline his offer...?',
					options: [{ text: '"I don\'t want to go with you."', points: 3 }]
				},
				{
					prompt: 'Have, um... Have you ever experienced that?',
					options: [
						{ text: 'Not yet.', points: 3 },
						{ text: 'I have.', points: 2 },
						{ text: 'Too many times to count.', points: 2 }
					]
				},
				{
					prompt: 'My excuse was that my friend was calling me... so here I am, away from him.',
					options: [{ text: 'Smart response.', points: 3 }]
				}
			],
			unlocks: ['Follow Up']
		},
		{
			rank: 4,
			requirements: 'Proficiency 5 (Transcendent)',
			choices: [
				{
					prompt:
						'You see, just a single cup of the Dark Ivory coffee here costs roughly six thousand yen.',
					options: [
						{ text: 'It must be amazing.', points: 3 },
						{ text: "That's pricey.", points: 2 }
					]
				},
				{
					prompt: "Well, shall we order? I'll be paying for your cup as well.",
					options: [
						{ text: "I can't let you do that.", points: 3 },
						{ text: 'Cheers.', points: 3 },
						{ text: 'Let me cover the bill.', points: 2 }
					]
				},
				{
					prompt: "Apparently it's brewed using beans gathered from elephant dung.",
					options: [
						{ text: 'You mean... poop!?', points: 3 },
						{ text: 'I can taste the elephant.', points: 3 },
						{ text: 'Excuse me while I vomit.', points: 3 }
					]
				},
				{
					prompt: 'Speaking of cats, do you think Mona-chan would be able to...?',
					options: [{ text: "Let's ask him.", points: 3 }]
				},
				{
					prompt: 'Hey, um... what did you think of him?',
					options: [{ text: "I'm not really sure.", points: 3 }]
				},
				{
					prompt:
						'You took the time out of your schedule to hang out with me, but we ended up dealing with my own drama...',
					options: [{ text: "Let's get coffee again sometime.", points: 3 }]
				}
			],
			unlocks: ['Celeb Talk']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt:
						"One side has to be deceiving me, correct? I'm honestly suspicious of everyone at this point...",
					options: [
						{ text: "Somebody's telling the truth.", points: 3 },
						{ text: 'Trust no one.', points: 2 }
					]
				},
				{
					prompt:
						'Though now that I think about it... that may be my best chance to help the employees my father left behind...',
					options: [{ text: 'There has to be another way.', points: 2 }]
				},
				{
					prompt: 'Would I have just resigned myself to the fate he had made for me...?',
					options: [
						{ text: "I don't think so.", points: 3 },
						{ text: "That doesn't matter now.", points: 2 }
					]
				},
				{
					prompt: 'Once I started to imagine that again, this powerful fear came flooding back...',
					options: [{ text: 'Pinch yourself.', points: 2 }]
				}
			],
			unlocks: ['Bumper Crop']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt:
						'It says here that the type of roast you want should differ depending on how you want to drink your coffee.',
					options: [
						{ text: "That's fascinating.", points: 3 },
						{ text: 'Can you make some for me?', points: 3 },
						{ text: "You're so studious.", points: 2 }
					]
				},
				{
					prompt: "But that's where the real origin of our family business lies.",
					options: [{ text: 'I had no idea.', points: 2 }]
				},
				{
					prompt:
						"I mean, Takakura-san seems to only be focused on profits... At this rate, we'll never lose our black image.",
					options: [
						{ text: 'That would be bad.', points: 3 },
						{ text: 'Black like coffee?', points: 3 }
					]
				},
				{
					prompt:
						"He's going to get Okumura Foods as well as my entire inheritance... and I'm totally powerless against him...",
					options: [{ text: 'Be strong, Haru.', points: 3 }]
				},
				{
					prompt:
						'The negativity felt so painful, too much to handle alone, and... before I knew it, I was already calling you.',
					options: [
						{ text: 'You can talk to me anytime.', points: 2 },
						{ text: 'Let him say what he wants.', points: 2 }
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
					prompt: "In the end, I'm just not sure what to do...",
					options: [
						{ text: 'What do you want to do?', points: 3 },
						{ text: 'That sounds really tough...', points: 2 }
					]
				},
				{
					prompt:
						"But... I don't think you can truly gain the same joy from the low-cost chain Takakura-san is suggesting.",
					options: [
						{ text: 'What does Takakura-san think?', points: 3 },
						{ text: 'There has to be a way.', points: 3 },
						{ text: 'You should tell him that.', points: 3 }
					]
				},
				{
					prompt: "I'll make him see what I'm really thinking... and what's truly important to me.",
					options: [
						{ text: "That's the spirit.", points: 3 },
						{ text: 'You can do it, Haru.', points: 3 }
					]
				},
				{
					prompt: "It's thanks to your support that I can keep pushing forward.",
					options: [{ text: "I'll always have your back.", points: 2 }]
				}
			],
			unlocks: ['Soil Improvement']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt:
						'The thing that will help me show Takakura-san how I really feel... is right here.',
					options: [{ text: 'The soil?', points: 3 }]
				},
				{
					prompt: 'I wonder what Takakura-san will think when he tries it...',
					options: [
						{ text: "It'll help him understand you.", points: 3 },
						{ text: "He's going to love it.", points: 3 }
					]
				},
				{
					prompt:
						'But if they want to fool people with a low-quality product instead of regaining their trust... I will proudly oppose them.',
					options: [
						{ text: "I'll be cheering for you.", points: 3 },
						{ text: "You're amazing, Haru.", points: 3 },
						{ text: 'Are you sure you can do that?', points: 2 }
					]
				},
				{
					prompt:
						"I'm already testing the soil I brought home today. I can tell my coffee plants are happy.",
					options: [
						{ text: "It's in your nature to nurture.", points: 2 },
						{ text: 'I want some too.', points: 2 }
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
					prompt: 'W-Well... um...',
					options: [
						{ text: "I'm sure you'll do great.", points: 3 },
						{ text: "Give it all you've got, Haru.", points: 3 },
						{ text: "It'll be fine.", points: 2 }
					]
				},
				{
					prompt: '...Thank you, <protagonist>-kun.',
					options: [
						{ text: "You're very welcome.", points: 3 },
						{ text: 'You did amazing.', points: 3 }
					]
				},
				{
					prompt: 'Why do you think...?',
					options: [
						{ text: 'He saw us as good friends.', points: 0, routeFlag: 'friendship' },
						{ text: 'I like you too, Haru.', points: 0, routeFlag: 'romance' }
					]
				},
				{
					prompt: 'If only you could smell it too.',
					route: 'friendship',
					options: [{ text: 'You sound so happy.', points: 2 }]
				},
				{
					prompt: 'Er, well... H-How are you?',
					route: 'romance',
					options: [
						{ text: 'I wanted to hear your voice.', points: 2 },
						{ text: 'I miss you.', points: 2 }
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
					prompt:
						'I think my presence angered some people at first, but in the end they all listened to my thoughts.',
					options: [
						{ text: "You've done great, Haru.", points: 3 },
						{ text: "That's good to hear.", points: 2 }
					]
				},
				{
					prompt:
						"It'll be a shop that people love, like Grandfather's... and like this place. What do you think?",
					options: [
						{ text: "I'm sure you'll succeed.", points: 3 },
						{ text: "This won't be easy.", points: 2 },
						{ text: 'It all comes down to flavor.', points: 2 }
					]
				},
				{
					prompt: '......',
					route: 'romance',
					options: [
						{ text: "I'm glad too.", points: 3 },
						{ text: 'Just my teammate?', points: 3 },
						{ text: "Don't deny yourself.", points: 2 }
					]
				}
			],
			unlocks: ['Second Awakening (Astarte)', 'Mother Harlot fusion']
		}
	]
};
