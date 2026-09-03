import type { SocialLink } from '$lib/types';

export const strength: SocialLink = {
	game: 'p5r',
	arcana: {
		label: 'Strength',
		value: 'strength'
	},
	name: 'Caroline & Justine',
	romanNumeral: 'XI',
	location: 'Velvet Room',
	unlock: 'Unlocked automatically on 5/18.',
	availability: 'Any time the Velvet Room is accessible; unlocked 5/18.',
	ranks: [
		{
			rank: 1,
			requirements:
				'- Bring Jack Frost with Mabufu\n- Jack Frost learns Mabufu at level 12. Fuse Berith (Hierophant) with Apsaras (Priestess); Mokoi (Death) with Apsaras; or Silky (Priestess) with Berith.',
			choices: [],
			unlocks: ['Group Guillotine']
		},
		{
			rank: 2,
			requirements:
				'- Bring Ame no Uzume with Frei\n- Fuse Suzaku (Sun, min 16) with Berith (Hierophant, min 9). Suzaku can be fused from Berith and Hua Po. Alternatively fuse Cait Sith (Magician) with Succubus (Moon) and use a Frei skill card.',
			choices: [],
			unlocks: []
		},
		{
			rank: 3,
			requirements:
				'- Bring Flauros with Tarukaja\n- Group Guillotine: Berith (Hierophant), Orobas (Hierophant), and Eligor (Emperor). Eligor must be level 16 to inherit Tarukaja (Chemdah, Mementos).',
			choices: [],
			unlocks: ['Lockdown']
		},
		{
			rank: 4,
			requirements:
				"- Bring Phoenix with Counter\n- Fuse Jack O'Lantern (Magician) with Hua Po (Hanged Man) for Yaksini. Fuse Yaksini (Empress) with Kelpie (Strength) and inherit Counter.",
			choices: [],
			unlocks: []
		},
		{
			rank: 5,
			requirements: '- Bring Setanta with Rakukaja\n- Fuse Silky (Priestess) with Lamia (Empress).',
			choices: [],
			unlocks: ['Special Treatment']
		},
		{
			rank: 6,
			requirements:
				'- Bring Neko Shogun with Dekaja\n- Raise Anzu (Hierophant) to level 28 for Dekaja. Group Guillotine: Anzu, Kodama (Star), and Sudama (Hermit); inherit Dekaja.',
			choices: [],
			unlocks: []
		},
		{
			rank: 7,
			requirements:
				'- Bring Lachesis with Tetraja\n- Raise Clotho (Fortune) to level 28 for Tetraja, then fuse with Regent (Emperor) or Stone of Scone. Alternative: Principality (starts with Tetraja) with Succubus for Lilim, then Lilim with Take-Minataka.',
			choices: [],
			unlocks: []
		},
		{
			rank: 8,
			requirements:
				'- Bring Hecatoncheires with Masukunda\n- Level Lilim (Devil) until she learns Masukunda, then fuse with Anzu or Daisoujou (Hierophant). Alternatives: Clotho (Fortune) with Red Rider or Belphegor (Tower). Masukunda skill card from the Aquarium hangout from 7/26.',
			choices: [],
			unlocks: ['Guillotine Booster']
		},
		{
			rank: 9,
			requirements:
				'- Bring Bugs with Samarecarm\n- Complete Mementos request The Lovesick Cyberstalking Girl (from 7/10) to unlock Bugs. Group Guillotine: Pixie (Lovers), Pisaca (Death), and Hariti (Empress). Hariti learns Samarecarm at level 41; inherit it. Pisaca is in Akzeriyyuth, Mementos.',
			choices: [],
			unlocks: []
		},
		{
			rank: 10,
			requirements:
				'- Bring Seth with High Counter\n- High Counter skill card from Mementos request The Killer Who Cleans Up Trash (10/14). Fuse Hecatoncheir (Hanged) with Kushinada-Hime (Lovers) for Horus, then Isis (Priestess), Thoth (Emperor), Anubis (Judgement), and Horus for Seth; apply the skill card. Alternative: Lachesis (Fortune) + Neko Shogun (Star) = Pazuzu; level Dakini (Empress) for High Counter; Pazuzu + Dakini = Horus (inherit High Counter); then four-way with Isis, Thoth, and Anubis.',
			choices: [],
			unlocks: ['VIP Treatment']
		}
	]
};
