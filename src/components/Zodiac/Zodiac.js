import React from 'react';
import classes from './Zodiac.module.css';

export default function Zodiac(props) {
  return (
    <div className={classes.zodiac}>
      <img className={classes.image} alt={props.name} src={`zodiacs/${props.name}.png`} />
      <span className={classes.dates}>{props.dates}</span>
      <span className={classes.name}>{props.name}</span>
    </div>
  );
}
