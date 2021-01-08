import React from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import './index.css'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider>
        <CommentApp></CommentApp>
    </Provider>
    ,document.getElementById('root')
)