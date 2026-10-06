import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const star = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Star',
		value: 'star'
	},
	name: 'Teddie',
	location: 'Story',
	unlock: 'Automatically on 6/24.',
	availability: 'Ranks up automatically with story events. Dialogue does not grant points.',
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
			choices: [],
			unlocks: ['Auto-Rakukaja']
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
			choices: [],
			unlocks: ['Recarm']
		},
		{
			rank: 5,
			requirements: '',
			choices: [],
			unlocks: ['Recover']
		},
		{
			rank: 6,
			requirements: '',
			choices: [],
			unlocks: ['Marakunda']
		},
		{
			rank: 7,
			requirements: '',
			choices: [],
			unlocks: ['Endure']
		},
		{
			rank: 8,
			requirements: '',
			choices: [],
			unlocks: ['Samarecarm']
		},
		{
			rank: 9,
			requirements: '',
			choices: [],
			unlocks: ['Protect']
		},
		{
			rank: 10,
			requirements: '',
			choices: [],
			unlocks: ['Second Awakening', 'Helel fusion', 'Evade Elec']
		}
	]
});
