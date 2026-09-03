import type { GameData, GameId } from '../types';

import { gameData as p5r } from './p5r';

export const dataIndex = Object.freeze<Record<GameId, GameData>>({
	p5r
});
