import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const empress = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Empress',
		value: 'empress'
	},
	name: 'Margaret',
	location: 'Velvet Room',
	unlock: 'As early as 5/19. Requires Knowledge 3 (Expert).',
	availability: 'Any time the Velvet Room is accessible. Advancing the link does not spend time.',
	routes: [],
	ranks: [
		{
			rank: 1,
			requirements: 'Knowledge 3 (Expert). Talk to Margaret in the Velvet Room.',
			choices: [],
			unlocks: []
		},
		{
			rank: 2,
			requirements: 'Bring Ippon-Datara with Sukukaja.',
			choices: [],
			unlocks: []
		},
		{
			rank: 3,
			requirements: 'Bring Matador with Mahama.',
			choices: [],
			unlocks: []
		},
		{
			rank: 4,
			requirements: 'Bring Gdon with Rampage.',
			choices: [],
			unlocks: []
		},
		{
			rank: 5,
			requirements: 'Bring Neko Shogun with Bufula.',
			choices: [],
			unlocks: []
		},
		{
			rank: 6,
			requirements: 'Bring Black Frost with Auto-Sukukaja.',
			choices: [],
			unlocks: []
		},
		{
			rank: 7,
			requirements: 'Bring Yatagarasu with Megido.',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements: 'Bring Yatsufusa with Mediarama.',
			choices: [],
			unlocks: []
		},
		{
			rank: 9,
			requirements: 'Bring Ganesha with Tetrakarn.',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements: 'Bring Trumpeter with Mind Charge.',
			choices: [],
			unlocks: ['Isis fusion', 'Spiral Brooch']
		}
	]
});
