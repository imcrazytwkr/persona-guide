// For now these effects are common between P3 and P4 and are unused in P5R.
// @WARN: May require per-game customization for P4R/P6.
export const OPTION_EFFECT_LABELS = Object.freeze({
	break: 'Break',
	reverse: 'Reverse'
});

export type OptionEffect = keyof typeof OPTION_EFFECT_LABELS;
