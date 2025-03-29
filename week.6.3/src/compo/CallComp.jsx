import React, { memo } from 'react'

export const CallComp = memo(({exchanges}) => {
    console.log('re-rendered')
  return (
    <div>
        yours returns amount is {exchanges()}
    </div>
  )
})
