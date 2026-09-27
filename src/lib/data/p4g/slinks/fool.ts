import { defineSocialLink } from '$lib/types';
import type { RouteKey } from '../routes';

export const fool = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Fool',
		value: 'fool'
	},
	name: 'Investigation Team',
	location: 'Story',
	unlock: 'Automatically on 4/17 after deciding to rescue Yukiko in the Midnight Channel.',
	availability: 'Ranks up automatically with story events. Points cannot be earned.',
	routes: [],
	ranks: [
		{
			rank: 1,
			requirements: 'Automatically on 4/17.',
			choices: [],
			unlocks: []
		},
		{
			rank: 2,
			requirements: 'Automatically on 4/30.',
			choices: [],
			unlocks: []
		},
		{
			rank: 3,
			requirements: 'Automatically on 5/18. No dialogue.',
			choices: [],
			unlocks: []
		},
		{
			rank: 4,
			requirements: 'Automatically on 6/6.',
			choices: [],
			unlocks: []
		},
		{
			rank: 5,
			requirements: 'Automatically on 7/10.',
			choices: [],
			unlocks: []
		},
		{
			rank: 6,
			requirements: 'Automatically on 7/10.',
			choices: [],
			unlocks: []
		},
		{
			rank: 7,
			requirements: 'Automatically on 7/27.',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements: 'Automatically on 10/6.',
			choices: [],
			unlocks: []
		},
		{
			rank: 9,
			requirements: 'Automatically on 11/6. No dialogue.',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements:
				'Automatically on 12/3 after the Namatame scene. Completing this unlocks Judgement.',
			choices: [],
			unlocks: ['Loki fusion']
		}
	]
});
