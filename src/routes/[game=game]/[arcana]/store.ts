import type { GameId, SocialLink } from '$lib/types';
import { invalidate } from '$app/navigation';

const routeStorageKey = (game: GameId, arcana: string): `${string}:${string}` =>
	`${game}:${arcana}:route`;

// Wish I had proper override system for that
const cacheKey = (key: string): `${string}:${string}` => `local:${key}`;

export const localStorageKey = (game: GameId, arcana: string): `${string}:${string}` =>
	cacheKey(routeStorageKey(game, arcana));

export function getRoute(socialLink?: SocialLink<string>) {
	if (!socialLink || socialLink.routes.length < 1) {
		return '';
	}

	const routes: string[] = socialLink.routes;
	const raw = localStorage.getItem(routeStorageKey(socialLink.game, socialLink.arcana.value));
	return raw && routes.includes(raw) ? raw : socialLink.routes[0];
}

const noop = () => Promise.resolve();

export const routeSetter = (socialLink?: SocialLink<string>) => {
	if (!socialLink) {
		return noop;
	}

	const key = routeStorageKey(socialLink.game, socialLink.arcana.value);
	return (value: string) => {
		localStorage.setItem(key, value);
		return invalidate(cacheKey(key));
	};
};
