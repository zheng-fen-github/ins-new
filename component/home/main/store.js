import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {CommentReducer} from '../../redux/Reducer/chat.js'
import Index from './index'


const Store = createStore(CommentReducer);

function TestRudex () {
    return (
     <>
         <Provider store = {Store}>
             <Index/>
         </Provider>
     </>
    )
}

export default TestRudex