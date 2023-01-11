import React from 'react';
import { zodiacs } from '../../data';
import Zodiac from '../Zodiac/Zodiac';
import './Main.css';
import background from '../../background.jpg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.id} {...zodiac} />
      ))}
    </main>
  );
}
