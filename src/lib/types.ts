export type GameId = 'p5r';

export type DialogueOption = {
	text: string;
	points: number;
};

export type DialogueChoice = {
	prompt: string;
	options: DialogueOption[];
};

export type Rank = {
	rank: number;
	requirements: string;
	choices: DialogueChoice[];
	unlocks: string[];
};

export type SocialLink = {
	game: GameId;
	arcana: string;
	name: string;
	romanNumeral: string;
	location: string;
	availability: string;
	unlock: string;
	ranks: Rank[];
};

export type Game = {
	id: GameId;
	title: string;
};
