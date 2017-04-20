import React, { Component, PropTypes } from 'react';

import ReactPullToRefresh from 'react-pull-to-refresh';

import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';

const Style = { color: 'red' };

class ListView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      start: 0,
      length: 10,
      data: []
    };

    this.handleRefresh = this.handleRefresh.bind(this);
    this.refreshCallback = this.refreshCallback.bind(this);
  }

  componentDidMount() {
    const { start, length } = this.state;
    const refreshCallback = this.refreshCallback;
    this.props.loadData(start, length, (data) => {
      refreshCallback(data);
    });
  }

  handleRefresh(downOrUp, callback) {
    if (downOrUp === 'up') {
      const { start, length } = this.state;
      const refreshCallback = this.refreshCallback;
      this.props.loadData(start, length, (data) => {
        callback();
        refreshCallback(data);
      });
    } else {
      callback();
    }
  }

  refreshCallback(data) {
    const { start, length } = this.state;
    this.setState({
      start: start + data.length,
      length,
      data,
    });
  }

  render() {
    console.log("listview render -,-");
    const { data } = this.state;

    return (
      <ReactIScroll
        iScroll={ iScroll }
        pullDown={ false }
        pullUp={ true }
        style={ Style }
        handleRefresh={ this.handleRefresh }
        children={ data.map((row, index) => this.props.renderItem(row, index)) } >
      </ReactIScroll>
    );
  }
}

ListView.propTypes = {
  loadData: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired
}

export default ListView;
