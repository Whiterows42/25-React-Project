import React, { memo } from 'react'

function Another() {
    console.log("ajit");
  return (
    <div>
      <h1>hello ajit</h1>
    </div>
  )
}

export default memo(Another)
