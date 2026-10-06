import { defineGameData, type GameId } from '#lib/types.ts';

import { routes } from './p5r/routes.ts';

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
} from './p5r/slinks.ts';

export const id: GameId = 'p5r';

export const title = 'Persona 5 Royal';

export const socialLinks = [
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

export const gameData = defineGameData({ id, title, routes, socialLinks });
