import { useState } from "react";

export const useCustomHook = () => {
  const [ x ] = useState('hi')
  return x;
}

