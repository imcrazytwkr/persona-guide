import { defineGameData, type GameId } from '$lib/types';

import { routes } from './routes';

import {
	aeon,
	chariot,
	death,
	devil,
	emperor,
	empress,
	fool,
	fortune,
	hanged,
	hermit,
	hierophant,
	jester,
	judgement,
	justice,
	lovers,
	magician,
	moon,
	priestess,
	star,
	strengthBasketball,
	strengthSoccer,
	sunBand,
	sunDrama,
	temperance,
	tower
} from './slinks';

export const id: GameId = 'p4g';

export const title = 'Persona 4 Golden';

export const socialLinks = [
	fool,
	jester,
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
	strengthBasketball,
	strengthSoccer,
	hanged,
	death,
	temperance,
	devil,
	tower,
	star,
	moon,
	sunBand,
	sunDrama,
	judgement,
	aeon
];

export const gameData = defineGameData({ id, title, routes, socialLinks });
