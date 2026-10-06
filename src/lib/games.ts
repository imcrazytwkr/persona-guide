import type { GameId } from '#lib/types.ts';
import { dataIndex } from '#lib/data.ts';

// Necessary for type-safety
const GAME_IDS: ReadonlySet<string> = new Set(Object.keys(dataIndex));

export function isGameId(id: string): id is GameId {
	return GAME_IDS.has(id);
}
