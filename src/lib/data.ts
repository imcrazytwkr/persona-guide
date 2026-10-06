import type { GameData, GameId } from '#lib/types.ts';

import { gameData as p4g } from './data/p4g.ts';
import { gameData as p5r } from './data/p5r.ts';

export const dataIndex = Object.freeze<Record<GameId, GameData>>({
	p5r,
	p4g
});
