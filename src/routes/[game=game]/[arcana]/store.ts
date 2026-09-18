import type { GameId, GameRoute, RouteId, SocialLink } from '$lib/types';
import { invalidate } from '$app/navigation';

export const routeStorageKey = (game: GameId, arcana: string): `${string}:${string}` =>
	`${game}:${arcana}:route`;

// Wish I had proper override system for that
const cacheKey = (key: string): `${string}:${string}` => `local:${key}`;

export const localStorageKey = (game: GameId, arcana: string): `${string}:${string}` =>
	cacheKey(routeStorageKey(game, arcana));

const emptyGetter = (): RouteId => '';

export const routeGetter = (routes: GameRoute[]) => {
	if (routes.length < 1) {
		return emptyGetter;
	}

	const fallback: RouteId = routes[0].id;
	return (socialLink?: SocialLink) => {
		if (!socialLink) {
			return fallback;
		}

		const raw = localStorage.getItem(routeStorageKey(socialLink.game, socialLink.arcana.value));
		return raw && routes.some((r) => r.id === raw) ? raw : fallback;
	};
};

const noop = () => Promise.resolve();

export const routeSetter = (socialLink?: SocialLink) => {
	if (!socialLink) {
		return noop;
	}

	const key = routeStorageKey(socialLink.game, socialLink.arcana.value);
	return (value: string) => {
		localStorage.setItem(key, value);
		return invalidate(cacheKey(key));
	};
};
