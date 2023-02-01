import './App.css';
import React from 'react';
import Counter from './PureComponent/Counter';

import ColorCounter from './HocComponent/ColorCounter';
import { GreenHOC, RedHOC } from './HocComponent/HOC';

class App extends React.Component{
constructor()
{
  super();
  this.state = {
    count : 1
  }
}

 render(){
     return(
      <>
      <div className='App'>
        <h1>Pure component example</h1>
        <Counter count={this.state.count}/>
       <button onClick={() => this.setState({count : this.state.count + 1})}>update me</button>
      </div>
      <br/><br/>
      <hr/>

      <div className='App'>
        <h1>HOC example</h1>
        <RedHOC cmp={ColorCounter}  />
        <GreenHOC cmp={ColorCounter} />
      </div>



      </>
    )
  }
}
  
  

export default App;

/*
Hooks --->
1. useRef
2. useReducer
3. useCallback
4. usememo
*/
