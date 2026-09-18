import { localStorageKey, routeGetter } from './store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent, depends }) => {
	depends(localStorageKey(params.game, params.arcana));

	const { routes, socialLinks } = await parent();
	const getRoute = routeGetter(routes);

	const link = socialLinks.find((l) => l.arcana.value === params.arcana);
	const activeRoute = getRoute(link);
	return { link, activeRoute };
};
