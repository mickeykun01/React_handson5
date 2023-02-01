
import React,{ PureComponent } from 'react';


class Counter extends PureComponent{
    render()
    {
        console.warn("check render");
        return(
            <div>
                <h3>Counter Component {this.props.count}</h3>
                <p>using PureComponent the component will not not re renders if the state remains same</p>
            </div>
        )
    }
}

export default Counter