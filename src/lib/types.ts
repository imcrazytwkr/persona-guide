export type GameId = 'p5r';

export type RouteId = string;

export type GameRoute = {
	id: RouteId;
	label: string;
};

export type DialogueOption = {
	text: string;
	points: number;
	routeFlag?: RouteId;
};

export type DialogueChoice = {
	prompt: string;
	options: DialogueOption[];
	route?: RouteId;
};

export type Rank = {
	rank: number;
	requirements: string;
	choices: DialogueChoice[];
	unlocks: string[];
};

export type Arcana = {
	label: string;
	value: string;
};

export type SocialLink = {
	game: GameId;
	arcana: Arcana;
	name: string;
	location: string;
	availability: string;
	unlock: string;
	ranks: Rank[];
};

export type Game = {
	id: GameId;
	title: string;
};

export type GameData = Game & {
	routes: GameRoute[];
	socialLinks: SocialLink[];
};
