import { defineParams } from '@sveltejs/kit/params';
import { isGameId } from '#lib/games.ts';

export const params = defineParams({
	game: (param) => (isGameId(param) ? param : undefined)
});
