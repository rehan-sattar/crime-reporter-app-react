import { useState } from 'react';

const useForm = initValue => {
  const [value, setState] = useState(initValue);
  const setValue = value => setState(value);
  return [value, setValue];
};

export default useForm;
