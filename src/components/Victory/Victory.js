
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Victory.scss';

import {
  VictoryAxis,
  VictoryArea,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryScatter
} from 'victory';

const data = require('../../data/cmc-btc-2015-04-04_2016-04-04.json');

class Victory extends Component {

  render() {
    return (
      <div style={{padding:20, textAlign: 'center'}}>
        <h1>Victory Chart</h1>
        <VictoryChart width={500}>
          <VictoryLine data={data.market_cap_by_available_supply.map((entry) => {
            return {x: entry[0], y: entry[1]}
          })} />
        </VictoryChart>
      </div>
    );
  }

}

export default withStyles(Victory, s);
