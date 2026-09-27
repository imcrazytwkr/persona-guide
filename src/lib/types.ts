export type GameId = 'p5r';

export type DialogueOption<K extends string = string> = {
	text: string;
	points: number;
	routeFlag?: K;
};

export type Arcana = {
	label: string;
	value: string;
};

export type Game = {
	id: GameId;
	title: string;
};

export type GameData<K extends string = string> = Game & {
	routes: Record<K, string>;
	socialLinks: SocialLink<NoInfer<K>>[];
};

// Since we need this helper to typecheck data anyway, might as well slap
// a freeze onto it to make sure things are read-only.
export const defineGameData = <const K extends string>(data: GameData<K>) => Object.freeze(data);

export type SocialLink<K extends string> = {
	game: GameId;
	arcana: Arcana;
	name: string;
	location: string;
	availability: string;
	routes: K[];
	unlock: string;
	ranks: SocialLinkRank<K>[];
};

// Same as `defineGameData`
export const defineSocialLink = <const K extends string>(data: SocialLink<K>) =>
	Object.freeze(data);

// @NOTE: need a compile-time check that slink is only allowed to have
// multiple Ranks of the same level if all of them have their routes
// set and these routes are different.
export type SocialLinkRank<K extends string> = {
	rank: number;
	requirements: string;
	route?: K;
	choices: SocialLinkDialogueChoice<K>[];
	unlocks: string[];
};

export type SocialLinkDialogueChoice<K extends string> = {
	prompt: string;
	options: DialogueOption<K>[];
	route?: K;
};
