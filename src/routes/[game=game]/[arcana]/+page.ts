import { localStorageKey, getRoute } from './store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent, depends }) => {
	depends(localStorageKey(params.game, params.arcana));

	const { socialLinks } = await parent();
	const link = socialLinks.find((l) => l.arcana.value === params.arcana);
	const activeRoute = getRoute(link);
	return { link, activeRoute };
};
