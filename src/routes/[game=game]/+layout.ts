import { dataIndex } from '#lib/data.ts';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => dataIndex[params.game];
