import { FC } from 'react';
import Section from './components/Section';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const array_exm = [1, 2, 3, 4, 5];

  return (
    <div>
      <Section color="#787777" bgColor="pink" />
    </div>
  );
};
