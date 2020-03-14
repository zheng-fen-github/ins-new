import React from 'react'
import {connect} from 'react-redux'

function Cool(props) {
    console.log(props.data.hello+'cool')
    const Ev = () => {
        let action = {
            type:'HATE_COMMENT',
        }
        props.action(action);

    }
    return (
        <div>
            <h1>hell ow rds</h1>
            <h2>{props.data.id}</h2>
            <button onClick={Ev}>click</button>
        </div>
    )
}
const state = (store) =>( {data:store.two});
const dispatch = dispatch =>( {action:dispatch});
export default connect(state,dispatch)(Cool)
