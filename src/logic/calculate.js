import operate from './operate';

const calculate = (
  data = {
    total: '',
    next: '',
    operation: '',
  },
  buttonName,
) => {
  const {
    total,
    next,
  } = data;

  return operate(total, next, buttonName);
};

export default calculate;
