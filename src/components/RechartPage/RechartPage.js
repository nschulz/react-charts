import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RechartPage.scss';
import Rechart from '../Rechart';

const title = 'Rechart Chart Example';

class RechartPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div>
        <Rechart />
      </div>
    );
  }

}

export default withStyles(RechartPage, s);
