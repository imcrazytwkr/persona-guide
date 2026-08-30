import type { GameId } from './types';

export function rankStorageKey(game: GameId, arcana: string): string {
	return `${game}:${arcana}:rank`;
}

const MIN_RANK = 0;
const MAX_RANK = 10;

function parseRank(value: string | null): number {
	if (typeof value !== 'string' || !value) {
		return 0;
	}

	const n = parseInt(value, 10);
	if (!Number.isInteger(n)) {
		return 0;
	}

	return Math.min(Math.max(MIN_RANK, n), MAX_RANK);
}

let tick = $state(0);

function bump() {
	tick += 1;
}

export function getRank(game: GameId, arcana: string): number {
	tick;

	return parseRank(localStorage.getItem(rankStorageKey(game, arcana)));
}

export function setRank(game: GameId, arcana: string, rank: number): void {
	const next = Math.min(Math.max(MIN_RANK, Math.floor(rank)), MAX_RANK);
	localStorage.setItem(rankStorageKey(game, arcana), `${next}`);
	bump();
}

export function toggleRank(game: GameId, arcana: string, rank: number): void {
	const current = getRank(game, arcana);
	setRank(game, arcana, current >= rank ? rank - 1 : rank);
}
