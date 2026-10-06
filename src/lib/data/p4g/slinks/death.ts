import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const death = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Death',
		value: 'death'
	},
	name: 'Hisano Kuroda',
	location: 'Samegawa Flood Plain',
	unlock: 'After reaching a high enough Courage rank; talk to Hisano at the riverbank.',
	availability: 'Daytime on Sunday.',
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
					prompt: 'Haha, he was a handsome man.',
					options: [
						{ text: 'Who are you talking about?', points: 3 },
						{ text: "So he didn't look like me?", points: 3 },
						{ text: 'Stop staring at me.', points: 3 }
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
					prompt: 'Watching the river here with you, like this, brings back memories...',
					options: [
						{ text: 'Of what?', points: 3 },
						{ text: 'What about the river?', points: 3 }
					]
				},
				{
					prompt: '...I was happy back then.',
					options: [
						{ text: "I'm jealous.", points: 3 },
						{ text: 'What about now?', points: 2 }
					]
				},
				{
					prompt: 'He went to Heaven... and I will surely go to Hell.',
					options: [
						{ text: "That's not true!", points: 3 },
						{ text: "Don't torture yourself.", points: 3 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt:
						"My husband's tsuki meinichi is today, and I've just come back from visiting his grave.",
					options: [
						{ text: 'Tsuki meinichi?', points: 2 },
						{ text: 'That must have been tough.', points: 2 },
						{ text: "Don't be depressed.", points: 2 }
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
					prompt: "It must be boring, listening to this old bag's stories...",
					options: [
						{ text: "It's actually interesting.", points: 3 },
						{ text: "I'm just killing time.", points: 3 }
					]
				},
				{
					prompt: 'Enough about me. I want to hear something from you. Tell me anything.',
					options: [
						{ text: 'Talk about school', points: 3 },
						{ text: 'Talk about girls', points: 3 }
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
					prompt:
						'Being noncommittal... floating around, never deciding to be one thing nor another. Can a man understand that?',
					options: [
						{ text: 'I get it.', points: 3 },
						{ text: "I don't get it.", points: 3 }
					]
				},
				{
					prompt:
						'But I wanted to write my reply so badly, so I would grow impatient and read it carefully, over and over.',
					options: [{ text: 'Letters? How inconvenient.', points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 7,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'I must accept that...',
					options: [
						{ text: 'Take your time.', points: 3 },
						{ text: 'Hang in there.', points: 3 }
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
					prompt:
						"I didn't want to accept that he had died all by himself, not remembering me, leaving me behind...",
					options: [
						{ text: 'I understand the feeling.', points: 3 },
						{ text: "That's selfish.", points: 3 },
						{ text: "I don't understand.", points: 3 }
					]
				},
				{
					prompt: "Haha... But it's too late now, isn't it?",
					options: [
						{ text: 'I guess so.', points: 3 },
						{ text: "No, it isn't.", points: 3 }
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
					prompt:
						"At first, I turned them down because I didn't want to leave the place I was born in, but...",
					options: [
						{ text: 'They kept insisting?', points: 3 },
						{ text: 'What about your husband?', points: 3 }
					]
				}
			],
			unlocks: ['Mahakala fusion', 'Old Fountain Pen']
		}
	]
});
