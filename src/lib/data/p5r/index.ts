import { defineGameData, type GameId } from '$lib/types';

import { routes } from './routes';

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
