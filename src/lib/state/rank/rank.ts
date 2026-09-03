import { SvelteMap } from 'svelte/reactivity';
import type { GameId } from '../../types';

export const MIN_RANK = 0;
export const MAX_RANK = 10;

export class RankState {
	private state: SvelteMap<string, number>;
	private gameId: string;

	constructor(gameId: GameId) {
		this.state = new SvelteMap();
		this.gameId = gameId;
	}

	getKey(arcana: string): string {
		return `${this.gameId}:${arcana}:rank`;
	}

	getRank(arcana: string): number {
		if (this.state.has(arcana)) {
			return this.state.get(arcana) ?? 0;
		}

		const key = this.getKey(arcana);

		const raw = localStorage.getItem(key);
		if (typeof raw !== 'string' || !raw) {
			return 0;
		}

		const rank = parseInt(raw, 10);
		if (!isValidRank(rank)) {
			localStorage.removeItem(key);
			return 0;
		}

		// Backfilling reactive state
		this.state.set(arcana, rank);
		return rank;
	}

	setRank(arcana: string, rank: number): void {
		if (!isValidRank(rank)) {
			throw new RangeError(`Invalid rank value: ${rank}`);
		}

		if (rank === 0) {
			this.state.delete(arcana);
			localStorage.removeItem(this.getKey(arcana));
			return;
		}

		this.state.set(arcana, rank);
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
}

// @api: private
function isValidRank(value: number): boolean {
	return Number.isInteger(value) && !(value < MIN_RANK || value > MAX_RANK);
}
