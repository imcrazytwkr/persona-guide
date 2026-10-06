import { dataIndex } from '#lib/data.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = () => ({
	games: Object.values(dataIndex).map((game) => ({ id: game.id, title: game.title }))
});
