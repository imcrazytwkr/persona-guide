import { createContext } from 'svelte';

import type { RankState } from './rank';

const [getContext, setContext] = createContext<RankState>();

export const getRankStateContext = getContext;
export const setRankStateContext = setContext;
