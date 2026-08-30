import type { Game, GameId } from './types';

export const games: Game[] = [{ id: 'p5r', title: 'Persona 5 Royal' }];

export function getGame(id: string): Game | undefined {
	return games.find((game) => game.id === id);
}

export function isGameId(id: string): id is GameId {
	return games.some((game) => game.id === id);
}
