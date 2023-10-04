import { FC } from 'react';

import './style.css';
import {FormExample} from './FormExample'

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <FormExample/>
    </div>
  );
};
