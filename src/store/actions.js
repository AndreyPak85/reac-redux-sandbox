const inc = () => ({ type: 'inc' });
const dec = () => ({ type: 'dec' });
const rnd = (payload) => ({ type: 'rnd', payload });

export { inc, dec, rnd };
