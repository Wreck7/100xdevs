import React, { memo } from 'react'

const Demo = memo(({ a }) => {
    console.log("renders");
    return (
        <div>
            hi there {a(2,3)}
        </div>
    )
})

export default Demo