
import { createContext } from 'react';

interface ContextAppType {
  value: string;
  setValue: (value: string) => void;
}

const ContextApp = createContext<ContextAppType | undefined>(undefined);

export default ContextApp;