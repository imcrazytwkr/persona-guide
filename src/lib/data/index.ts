import type { GameData, GameId } from '../types';

import { gameData as p4g } from './p4g';
import { gameData as p5r } from './p5r';

export const dataIndex = Object.freeze<Record<GameId, GameData>>({
	p5r,
	p4g
});
