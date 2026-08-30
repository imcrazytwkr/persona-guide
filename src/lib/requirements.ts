import type { SocialLink } from './types';

export function nextRank(link: SocialLink, currentRank: number) {
	return link.ranks.find((rank) => rank.rank === currentRank + 1);
}

export function nextNotes(link: SocialLink, currentRank: number): string {
	if (currentRank === 0) return link.unlock;
	return nextRank(link, currentRank)?.requirements ?? '';
}
