import { dataIndex } from '$lib/data';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	// @NOTE: cannot use `parent()` because it only gets layout data and not
	// page data
	const { socialLinks, ...game } = dataIndex[params.game];
	const link = socialLinks.find((l) => l.arcana.value === params.arcana);
	return { game, link };
};
