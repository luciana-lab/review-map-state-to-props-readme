import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
        <button onClick={() => this.handleOnClickItems()}>
          Click to change items count
        </button>
        <button onClick={() => this.handleOnClickUsers()}>
          Click to change user count
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

// the mapStateToProps() method is executed with each change to the store's state.
// mapStateToProps() receives state as its first argument
// mapSrareToProps() can return just a portion of the state or ignore the store's state and return whatever it likes
const mapStateToProps = (state) => {
  // debugger;
  return { itens: state.items }
}

// export default connect(state => ({ items: state.items }))(App) -> shorten version of mapStateToProps()
export default connect(mapStateToProps)(App);
// connect is connecting the App to a slice of the store's state specified in mapStateToProps()
// connect() calls the mapStateToProps() function each time there is a change in state
// connect() takes whatever the return value is of the mapStateToProps() and passes it to the props of the component in the last parentheses (in this case, App)


// mapStateToProops() is called each time there is a change of state, and has access to the store's entire state.
// The connect() function then takes the return value from the mapStateToProps() function and adds that return value to the props of the component that is passed through in the last set of parentheses. 
// We call that component a connected component because it is connected to the store.