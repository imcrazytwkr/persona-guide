import { defineSocialLink } from '$lib/types';
import type { RouteKey } from '../routes';

export const tower = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Tower',
		value: 'tower'
	},
	name: 'Shu Nakajima',
	location: 'Yasogami High',
	unlock: 'Tutor Shu after school.',
	availability: 'Nighttime on Tuesday, Thursday, and Saturday; day and night on rainy days.',
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
					prompt: '...Do you know what that means?',
					options: [{ text: 'Sure I do.', points: 2 }]
				},
				{
					prompt: "Huh... Time's already up. We were still in the middle of that last question...",
					options: [{ text: "I'll stay and help you.", points: 2 }]
				}
			],
			unlocks: []
		},
		{
			rank: 3,
			requirements: '',
			choices: [
				{
					prompt: 'What do you think of your school?',
					options: [
						{ text: "It's boring.", points: 3 },
						{ text: "It's strict.", points: 2 }
					]
				},
				{
					prompt: '......',
					options: [{ text: 'Well, it is the countryside.', points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 4,
			requirements: '',
			choices: [
				{
					prompt: "They don't get what it means to learn at all.",
					options: [{ text: "That's just how it is.", points: 2 }]
				},
				{
					prompt: 'That place...',
					options: [{ text: "You're not the only one!", points: 3 }]
				}
			],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '',
			choices: [
				{
					prompt: 'Is there any bullying at your school?',
					options: [{ text: "No, there isn't.", points: 2 }]
				},
				{
					prompt: "Maybe that's not the same thing as bullying.",
					options: [{ text: 'Leave it to me.', points: 3 }]
				},
				{
					prompt:
						"It seems that I've been talking to you about things that really aren't relevant to my studies...",
					options: [
						{ text: "It's not like you.", points: 2 },
						{ text: "I don't mind.", points: 2 }
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
					prompt: "Um... You only come here because you're being paid to, right?",
					options: [
						{ text: "That's not it.", points: 3 },
						{ text: "That's just one reason.", points: 2 }
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
					prompt: "Let's change the subject to something else. What's up?",
					options: [
						{ text: 'What I like in a girl is...', points: 3 },
						{ text: 'The other day on TV, I saw...', points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 8,
			requirements: '',
			choices: [
				{
					prompt: 'Is it possible for anyone to be all those things? Do you know anyone like that?',
					options: [{ text: 'This guy.', points: 3 }]
				},
				{
					prompt: '> Shu suddenly looks tormented.',
					options: [
						{ text: 'Cheer him up', points: 3 },
						{ text: "Ask him what he's worried about", points: 2 }
					]
				}
			],
			unlocks: []
		},
		{
			rank: 9,
			requirements: '',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements: '',
			choices: [
				{
					prompt:
						"Thank you for recognizing... 'me.' I wouldn't have been able to talk to Mom if you hadn't.",
					options: [
						{ text: "I'm proud of you.", points: 3 },
						{ text: "No, it's all you.", points: 3 }
					]
				}
			],
			unlocks: ['Shiva fusion', 'Test Results']
		}
	]
});
