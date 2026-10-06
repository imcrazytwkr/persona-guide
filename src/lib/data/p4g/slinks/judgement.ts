import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '#lib/data/p4g/routes.ts';

export const judgement = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Judgement',
		value: 'judgement'
	},
	name: 'Seekers of Truth',
	location: 'Story',
	unlock: 'Requires Fool Rank 10 and the correct December 3 Namatame choices.',
	availability: 'Ranks up automatically with story events. Dialogue does not grant points.',
	routes: [],
	ranks: [
		{
			rank: 1,
			requirements: 'Automatically on 12/3 after Fool Rank 10 and the correct Namatame choices.',
			choices: [],
			unlocks: []
		},
		{
			rank: 2,
			requirements: 'Automatically on 12/4.',
			choices: [],
			unlocks: []
		},
		{
			rank: 3,
			requirements: 'Automatically on 12/4.',
			choices: [],
			unlocks: []
		},
		{
			rank: 4,
			requirements: 'Automatically on 12/5 after identifying Adachi as the culprit.',
			choices: [],
			unlocks: []
		},
		{
			rank: 5,
			requirements: 'Automatically on 12/5.',
			choices: [],
			unlocks: []
		},
		{
			rank: 6,
			requirements: 'Automatically on 12/6. No dialogue.',
			choices: [],
			unlocks: []
		},
		{
			rank: 7,
			requirements: 'Automatically on 12/7. No dialogue.',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements: 'Automatically on 12/7.',
			choices: [],
			unlocks: []
		},
		{
			rank: 9,
			requirements: 'Automatically after defeating Ameno-sagiri.',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements: 'Automatically after defeating Ameno-sagiri.',
			choices: [],
			unlocks: ['Lucifer fusion']
		}
	]
});
