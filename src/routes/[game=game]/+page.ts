import { dataIndex } from '$lib/data';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => dataIndex[params.game];
