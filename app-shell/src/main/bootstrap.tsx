import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

import { Routes } from '@/presentation/routes'
import './cosmos'
import './i18n'

ReactDOM.render(
  <RecoilRoot>
    <Routes />
  </RecoilRoot>,
  document.getElementById('root')
)
