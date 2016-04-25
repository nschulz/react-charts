import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './VictoryPage.scss';
import Victory from '../Victory';

const title = 'Victory Chart Example';

class VictoryPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div>
        <Victory />
      </div>
    );
  }

}

export default withStyles(VictoryPage, s);
