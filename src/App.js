import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './components/Counter';

import './App.css';

class App extends Component {
  handleOnAddCounter = () => {
    const { onAddCounter, idCounter } = this.props;
    const id = idCounter;
    onAddCounter({ id, counts:0 });
  }

  handleOnDeleteCounter = (id) => () => {
    this.props.onDeleteCounter(id);
  }

  handleOnCountClicks = (id) => () => {
    this.props.onCountClick(id);
  }

  renderCounters = () => {
    const { counterList } = this.props;
    return counterList.map((counter) => {
      const { id, counts } = counter;
      return (
        <Counter
          id={id}
          onDeleteCounter={this.handleOnDeleteCounter}
          onCountClick={this.handleOnCountClicks}
          key={id}
          counts={counts}
        />
      )
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.renderCounters()}
        </div>
        <div>
          <button>-</button>
          <button onClick={this.handleOnAddCounter}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counterList: state.counters,
    idCounter: state.idCounter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddCounter: (counter) => dispatch({ type: 'ADD_COUNTER', payload: counter }),
    onDeleteCounter: (id) => dispatch({ type: 'DELETE_COUNTER', payload: id }),
    onCountClick: (id) => dispatch({ type: 'COUNT_CLICK', payload: id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
