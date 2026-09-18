import type { GameId } from './types';
import { dataIndex } from './data';

// Necessary for type-safety
const GAME_IDS: ReadonlySet<string> = new Set(Object.keys(dataIndex));

export function isGameId(id: string): id is GameId {
	return GAME_IDS.has(id);
}
