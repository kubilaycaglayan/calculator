import operate from './operate';

const calculate = (
  data = {
    total: '',
    next: '',
    operation: '',
  },
  buttonName,
) => {
  let {
    total,
    next,
  } = data;

  return operate(total, next, buttonName);
};

export default calculate;
