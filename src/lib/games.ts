import type { Game, GameId } from './types';

const games: Game[] = [{ id: 'p5r', title: 'Persona 5 Royal' }];

const gameIndex = games.reduce<Record<string, Game>>((acc, game) => {
	acc[game.id] = game;
	return acc;
}, {});

export function getGame(id: string): Game | undefined {
	return gameIndex[id];
}

export function isGameId(id: string): id is GameId {
	return Boolean(getGame(id));
}
