import React from 'react'
import '@cosmos/styles/utilities/sizing.css'
import '@cosmos/styles/utilities/text/text.css'
import '@cosmos/loading'

export function Loader() {
  return (
    <div className="_w-full _text-center">
      <hot-loading />
    </div>
  )
}
