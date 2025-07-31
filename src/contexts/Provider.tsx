// contexts/ProviderApp.tsx
import { useState } from 'react';
import ContextApp from './ContextApp';

const ProviderApp: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [value, setValue] = useState('Default value');

  return (
    <ContextApp.Provider value={{ value, setValue }}>
      {children}
    </ContextApp.Provider>
  );
};