export const routes = Object.freeze({
	friendship: 'Friendship',
	romance: 'Romance',
	falseRomance: 'False Romance',
	normal: 'Normal',
	accomplice: 'Accomplice'
});

export type RouteKey = keyof typeof routes;
