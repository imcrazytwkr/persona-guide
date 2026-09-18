import type { GameData, GameId, GameMeta, GameRoute, SocialLink } from '$lib/types';

import {
	fool,
	magician,
	priestess,
	empress,
	emperor,
	hierophant,
	lovers,
	chariot,
	justice,
	hermit,
	fortune,
	strength,
	hanged,
	death,
	temperance,
	devil,
	tower,
	star,
	moon,
	sun,
	judgement,
	faith,
	councillor
} from './slinks';

export const id: GameId = 'p5r';

export const title = 'Persona 5 Royal';

const routes: GameRoute[] = [
	{ id: 'friendship', label: 'Friendship' },
	{ id: 'romance', label: 'Romance' }
];

const defaultRoute = 'friendship';

export const meta: GameMeta = { routes, defaultRoute };

export const socialLinks: SocialLink[] = [
	fool,
	magician,
	priestess,
	empress,
	emperor,
	hierophant,
	lovers,
	chariot,
	justice,
	hermit,
	fortune,
	strength,
	hanged,
	death,
	temperance,
	devil,
	tower,
	star,
	moon,
	sun,
	judgement,
	faith,
	councillor
];

export const gameData = Object.freeze<GameData>({ id, title, routes, defaultRoute, socialLinks });

export function arcanaLabel(arcana: string): string {
	if (arcana === 'hanged') return 'Hanged Man';
	return arcana.charAt(0).toUpperCase() + arcana.slice(1);
}
