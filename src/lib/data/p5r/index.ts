import type { GameData, GameId, SocialLink } from '$lib/types';

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

export const gameData = Object.freeze<GameData>({ id, title, socialLinks });

export function getLinks(game: GameId): SocialLink[] {
	if (game === 'p5r') return socialLinks;
	return [];
}

export function getLink(game: GameId, arcana: string): SocialLink | undefined {
	return getLinks(game).find((link) => link.arcana.value === arcana);
}

export function arcanaLabel(arcana: string): string {
	if (arcana === 'hanged') return 'Hanged Man';
	return arcana.charAt(0).toUpperCase() + arcana.slice(1);
}
