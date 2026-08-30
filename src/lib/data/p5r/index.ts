import type { GameId, SocialLink } from '$lib/types';
import { chariot } from './chariot';
import { councillor } from './councillor';
import { death } from './death';
import { devil } from './devil';
import { emperor } from './emperor';
import { empress } from './empress';
import { faith } from './faith';
import { fool } from './fool';
import { fortune } from './fortune';
import { hanged } from './hanged';
import { hermit } from './hermit';
import { hierophant } from './hierophant';
import { judgement } from './judgement';
import { justice } from './justice';
import { lovers } from './lovers';
import { magician } from './magician';
import { moon } from './moon';
import { priestess } from './priestess';
import { star } from './star';
import { strength } from './strength';
import { sun } from './sun';
import { temperance } from './temperance';
import { tower } from './tower';

export const p5rLinks: SocialLink[] = [
	fool,
	magician,
	priestess,
	empress,
	emperor,
	hierophant,
	lovers,
	chariot,
	justice,
	hermit,
	fortune,
	strength,
	hanged,
	death,
	temperance,
	devil,
	tower,
	star,
	moon,
	sun,
	judgement,
	faith,
	councillor
];

export function getLinks(game: GameId): SocialLink[] {
	if (game === 'p5r') return p5rLinks;
	return [];
}

export function getLink(game: GameId, arcana: string): SocialLink | undefined {
	return getLinks(game).find((link) => link.arcana === arcana);
}

export function arcanaLabel(arcana: string): string {
	if (arcana === 'hanged') return 'Hanged Man';
	return arcana.charAt(0).toUpperCase() + arcana.slice(1);
}
