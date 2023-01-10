import React from 'react';
import classes from './Zodiac.module.css';

export default function Zodiac(props) {
  return (
    <div className={classes.zodiac}>
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/zodiacs/${props.name}.png`} />
      <span className={classes.name}>{props.name}</span>
      <span className={classes.dates}>{props.dates}</span>
      {/* <span className={classes.symbol}>{props.symbol}</span> */}
    </div>
  );
}
