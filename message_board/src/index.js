// import React from 'react'
// import ReactDOM from 'react-dom'
// import CommentApp from './containers/CommentApp'
// import './index.css'
// import {Provider} from 'react-redux'


// ReactDOM.render(
//     <Provider>
//         <CommentApp></CommentApp>
//     </Provider>
//     ,document.getElementById('root')
// )
import React from 'react'
import ReactDOM from 'react-dom'
import commentsReducer from './reducers/comments'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css'
import CommentApp from './containers/CommentApp'


const store=createStore(commentsReducer);

ReactDOM.render(
    <Provider store={store}>
        <CommentApp></CommentApp>
    </Provider>
    ,
    document.getElementById('root')
)