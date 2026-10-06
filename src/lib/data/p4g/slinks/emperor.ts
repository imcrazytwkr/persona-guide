import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const emperor = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Emperor',
		value: 'emperor'
	},
	name: 'Kanji Tatsumi',
	location: 'Yasogami High practice building, 1F',
	unlock: 'Automatically after Kanji joins the party.',
	availability: 'Daytime on Wednesday, Thursday, Saturday, and Sunday.',
	routes: [],
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['Assist']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt:
						"She's always apologizing for me. She's been sprouting more and more white hairs...",
					options: [
						{ text: 'You just need to change.', points: 3 },
						{ text: 'Apologize to her.', points: 2 }
					]
				}
			],
			unlocks: ['Dizzy Boost']
		},
		{
			rank: 3,
			requirements: '',
			choices: [],
			unlocks: ['Follow Up']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: 'Uhh... When you met Ma at the hospital... She say anything about me?',
					options: [
						{ text: 'Plenty.', points: 3 },
						{ text: 'Nothing in particular...', points: 2 }
					]
				},
				{
					prompt: "Oh, uhh... I'm gonna go now.",
					options: [
						{ text: "I'll go with you.", points: 3 },
						{ text: "Violence isn't the answer.", points: 2 }
					]
				},
				{
					prompt: "Oh... Anyways, sorry 'bout dragging you into this...",
					options: [{ text: "You're giving him a new one?", points: 3 }]
				}
			],
			unlocks: ['Masukunda']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: "Hah, he said I'm cool...",
					options: [
						{ text: 'It was pretty amazing.', points: 3 },
						{ text: "Don't get cocky.", points: 2 }
					]
				}
			],
			unlocks: ['Recover']
		},
		{
			rank: 6,
			requirements: '',
			choices: [],
			unlocks: ['Power Charge']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: "That okay with you, 'big bro'?",
					options: [
						{ text: 'I want to learn too.', points: 3 },
						{ text: 'Yeah, go ahead.', points: 2 }
					]
				}
			],
			unlocks: ['Endure']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: '"...Come with me."',
					options: [
						{ text: "Kanji didn't do anything.", points: 3 },
						{ text: 'You got a warrant?', points: 3 }
					]
				},
				{
					prompt: '"What a load of... There\'s no way you\'re getting me to believe that."',
					options: [
						{ text: 'Believe it!', points: 3 },
						{ text: 'The truth is the truth.', points: 2 },
						{ text: 'Tell him, Kanji.', points: 2 }
					]
				}
			],
			unlocks: ['Regenerate 3']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: "It's the first time I went on my own... Well, I had a lot to tell him.",
					options: [
						{ text: 'How was it?', points: 3 },
						{ text: "Why didn't you go before?", points: 2 }
					]
				},
				{
					prompt:
						"As long as there's someone like that snot-nosed kid to accept me, I ain't afraid of nothing!",
					options: [
						{ text: 'Good for you.', points: 3 },
						{ text: 'Find more of them.', points: 3 }
					]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Second Awakening', 'Odin fusion', 'Evade Wind', 'Cute Strap']
		}
	]
});
