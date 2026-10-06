import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const lovers = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Lovers',
		value: 'lovers'
	},
	name: 'Rise Kujikawa',
	location: 'Yasogami High practice building, 1F',
	unlock: 'Automatically after Rise joins the party.',
	availability: 'Daytime on Friday, Saturday, and Sunday.',
	routes: ['friendship', 'romance'],
	ranks: [
		{
			rank: 1,
			requirements: '',
			choices: [],
			unlocks: ['All-Out Attack Assist']
		},
		{
			rank: 2,
			requirements: '',
			choices: [
				{
					prompt: "But it's a little embarrassing to show up alone, you know?",
					options: [
						{ text: "So you don't eat out?", points: 3 },
						{ text: 'Just order takeout.', points: 3 },
						{ text: 'Why?', points: 2 }
					]
				}
			],
			unlocks: ['Weakness Scan']
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: "It'll take time to get back, so let's walk around quick!",
					options: [
						{ text: 'You come here often?', points: 3 },
						{ text: "Can't you shop in Inaba...?", points: 3 },
						{ text: 'What are you looking for?', points: 3 }
					]
				}
			],
			unlocks: ['Full Analysis']
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: '> Rise is worried...',
					options: [
						{ text: 'Call the police', points: 3 },
						{ text: 'Grab her hand and run', points: 3 }
					]
				},
				{
					prompt: '> Rise is desperate...',
					options: [{ text: 'Go along with her', points: 3 }]
				},
				{
					prompt: "I'm sorry… Lying about marrying you and all...",
					options: [
						{ text: "I don't mind.", points: 3 },
						{ text: 'It... It was a lie?', points: 3 }
					]
				}
			],
			unlocks: ['Third Eye']
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt:
						"Senpai, have you ever thought that you're pushing yourself too far, or that you were just acting...?",
					options: [
						{ text: 'All the time.', points: 3 },
						{ text: 'Sometimes...', points: 3 },
						{ text: 'Not really.', points: 2 }
					]
				},
				{
					prompt: "You're with me right now because I'm Risette, yeah?",
					options: [
						{ text: "I don't know...", points: 3 },
						{ text: 'No.', points: 2 }
					]
				}
			],
			unlocks: ['Healing Wave']
		},
		{
			rank: 6,
			requirements: '',
			choices: [
				{
					prompt: "I gave up on being Risette. I can't meet her expectations...",
					options: [
						{ text: 'Having second thoughts?', points: 3 },
						{ text: "She'll understand.", points: 3 }
					]
				},
				{
					prompt: "Doesn't that sound fun? H-How about it? Haha...ha...",
					options: [
						{ text: 'Sounds great.', points: 3 },
						{ text: "If you're serious...", points: 3 }
					]
				}
			],
			unlocks: ['Weakness Scan (Improved)']
		},
		{
			rank: 7,
			requirements: '',
			choices: [
				{
					prompt: "You like having such a cute underclassman, right? I'm an ex-idol, after all.",
					options: [
						{ text: "That part doesn't matter.", points: 3 },
						{ text: "I'm happy.", points: 2 }
					]
				},
				{
					prompt: '> Rise looks helpless...',
					options: [
						{ text: 'Cheer her up', points: 3 },
						{ text: 'Move closer to her', points: 3 },
						{ text: 'Laugh it off', points: 3 }
					]
				}
			],
			unlocks: ['In-battle aid']
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: "> ...You sense this is an important moment. There's no turning back.",
					options: [
						{ text: 'Hold her', points: 0, routeFlag: 'romance' },
						{ text: 'Stand there', points: 0, routeFlag: 'friendship' }
					]
				}
			],
			unlocks: ['Stamina Song']
		},
		{
			rank: 9,
			requirements: '',
			choices: [
				{
					prompt: 'And yet... I felt so angry about it... Why do you think that is?',
					options: [
						{ text: 'You regret leaving.', points: 3 },
						{ text: "You're selfish.", points: 3 },
						{ text: 'Risette is Rise, too.', points: 3 }
					]
				}
			],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Second Awakening', 'Ishtar fusion', 'Auto-Revive', 'Signed Photo']
		}
	]
});
