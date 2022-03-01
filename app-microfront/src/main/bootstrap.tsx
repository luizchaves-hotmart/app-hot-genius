import React from 'react'
import ReactDOM from 'react-dom'

import { bootstrap } from '@/application/auth'
import Main from './main'

bootstrap.subscribe({ next: (user) => console.warn('user', user) })
bootstrap.start()

ReactDOM.render(<Main />, document.getElementById('root'))
