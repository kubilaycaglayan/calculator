import separate from './separate';

const convert = stateObject => {
  let { next, total, operate } = stateObject;
  if (next === null) {
    next = '0';
  } else if (!(next.slice(0, 5) === 'error')) {
    next = separate(next);
  }
  if (total === null) {
    total = '';
  } else {
    total = separate(total);
  }
  if (operate === null) {
    operate = '';
  }

  return {
    total,
    next,
    operate,
  };
};

export default convert;
