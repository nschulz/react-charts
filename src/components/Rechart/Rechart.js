
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Rechart.scss';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const priceData = require('../../data/cmc-btc-2015-04-04_2016-04-04.json');

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class Rechart extends Component {

  render() {
    return (
      <div style={{padding:20}}>
        <h1>Rechart Chart</h1>

        <LineChart width={600} height={400}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}
                   data={priceData.market_cap_by_available_supply.map((entry) => {
                    return {name: new Date(entry[0]).toLocaleDateString(), amt: entry[0], price: entry[1]}
                   })}>
          <XAxis dataKey="name"/>
          <YAxis dataKey="price" tickFormatter={(tick) => {
            return tick/1000000 + " M";
          }}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>

      </div>
    );
  }

}

export default withStyles(Rechart, s);
