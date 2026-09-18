import { SvelteMap } from 'svelte/reactivity';
import { createContext } from 'svelte';

import type { GameId } from '../types';

const [getState, setState] = createContext<RankState>();
export const getRankState = getState;
export const setRankState = setState;

export const MIN_RANK = 0;
export const MAX_RANK = 10;

export class RankState {
	private state: SvelteMap<string, number>;
	private parsed: Record<string, number>;
	private gameId: string;

	constructor(gameId: GameId) {
		this.state = new SvelteMap();
		this.parsed = Object.create(null);
		this.gameId = gameId;
	}

	private getKey(arcana: string): string {
		return `${this.gameId}:${arcana}:rank`;
	}

	getRank(arcana: string): number {
		const live = this.state.get(arcana);
		if (typeof live === 'number') {
			return live;
		}

		let parsed = this.parsed[arcana];
		if (typeof parsed === 'number') {
			return parsed;
		}

		parsed = this.readStorage(arcana);
		this.parsed[arcana] = parsed;
		return parsed;
	}

	setRank(arcana: string, rank: number): void {
		if (!isValidRank(rank)) {
			throw new RangeError(`Invalid rank value: ${rank}`);
		}

		this.state.set(arcana, rank);
		delete this.parsed[arcana];

		localStorage.setItem(this.getKey(arcana), `${rank}`);
	}

	toggleRank(arcana: string, rank: number): number {
		if (!isValidRank(rank)) {
			throw new RangeError(`Invalid rank value: ${rank}`);
		}

		const current = this.getRank(arcana);
		const result = current < rank ? rank : current - 1;
		if (!isValidRank(result)) {
			throw new RangeError(`Invalid rank toggle result: ${result}`);
		}

		this.setRank(arcana, result);
		return result;
	}

	private readStorage(arcana: string): number {
		const key = this.getKey(arcana);
		const raw = localStorage.getItem(key);
		if (typeof raw !== 'string' || !raw) {
			return 0;
		}

		const rank = parseInt(raw, 10);
		if (!isValidRank(rank)) {
			localStorage.setItem(key, '0');
			return 0;
		}

		return rank;
	}
}

// @api: private
function isValidRank(value: number): boolean {
	return Number.isInteger(value) && !(value < MIN_RANK || value > MAX_RANK);
}
