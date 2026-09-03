import { isGameId } from '$lib/games';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = isGameId satisfies ParamMatcher;
