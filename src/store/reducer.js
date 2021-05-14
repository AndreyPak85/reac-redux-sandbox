export default function reducer(state = 0, action) {
	switch (action.type) {
		case 'inc':
			return state + 1;
		case 'dec':
			return state - 1;
		case 'rnd':
			return state + Math.floor(Math.random() * 10);
		default:
			return state;
	}
}
