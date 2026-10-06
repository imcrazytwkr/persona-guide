import { defineSocialLink } from '#lib/types.ts';
import type { RouteKey } from '../routes.ts';

export const hermit = defineSocialLink<RouteKey>({
	game: 'p4g',
	arcana: {
		label: 'Hermit',
		value: 'hermit'
	},
	name: 'Fox',
	location: 'Tatsuhime Shrine',
	unlock: 'Automatically on 5/5. Progress by completing ema requests at the shrine.',
	availability: 'Every afternoon. Accepting a wish does not spend the day; reporting it does.',
	routes: [],
	ranks: [
		{
			rank: 1,
			requirements: 'Automatically on 5/5.',
			choices: [],
			unlocks: []
		},
		{
			rank: 2,
			requirements:
				'Quest 7: I Wish For Love. Speak to the female student in Yasogami Classroom Building 1F Lobby, then again the next day in 2F Lobby ("I read it"), then once more.',
			choices: [],
			unlocks: []
		},
		{
			rank: 3,
			requirements:
				"Quest 8: I Wish I Didn't Crave For Snacks. Speak to the woman in the south Central Shopping District, get Meat Gum from Chie, and return it.",
			choices: [],
			unlocks: []
		},
		{
			rank: 4,
			requirements:
				'Quest 9: We Wish Our Dog Would Return. Talk to the dog at the Samegawa Riverbank, then at north Central Shopping District ("Talk to it gently"), buy a Beef Skewer, and feed it at Samegawa ("Talk to it gently").',
			choices: [],
			unlocks: []
		},
		{
			rank: 5,
			requirements:
				'Quest 10: I Wish I Had Friends. Talk to the kid at Samegawa ("I don\'t want your money"), give a Tanaka Prize Sticker, get the Tankiriman Sticker from Nanako at night (deadline 11/3), and talk to the kid over two more days.',
			choices: [],
			unlocks: []
		},
		{
			rank: 6,
			requirements:
				'Quest 11: I Wish My Life Had Meaning Again. Talk to the haggard man between Aiya and the shrine ("Want me to make it?"), finish the model at night, and return it.',
			choices: [],
			unlocks: []
		},
		{
			rank: 7,
			requirements:
				'Quest 12: I Wish I Was Better At Speaking. Requires Understanding 3 (Generous) and Courage 3 (Brave). Talk to the girl on the Yasogami roof ("Do you need help speaking?" / "Give her lessons"), then return the next day ("Apologize to her").',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements:
				"Quest 13: I Wish I Didn't Fear Cats. Requires Quest 20, Please Feed the Cat. Talk to the man at Samegawa, let him see the cat outside the Dojima residence, then catch a Red Goldfish and give it to him.",
			choices: [],
			unlocks: []
		},
		{
			rank: 9,
			requirements:
				'Quest 14: I Wish My Wallet Would Return. Talk to the woman near the Samegawa park, examine the bushes at the right of the Riverbank stairs, then the bushes outside the shrine, and report back.',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements:
				"Quest 15: The Shichiri Beach Guardian. Unlock Shichiri Beach (ride the scooter 6 times), catch the River Guardian on a rainy day for the Angler's Set, then catch the Sea Guardian. Afterward, reach Expression 5 (Eloquent) and visit the Fox.",
			choices: [],
			unlocks: ['Ongyo-Ki fusion', 'Gratitude Ema']
		}
	]
});
