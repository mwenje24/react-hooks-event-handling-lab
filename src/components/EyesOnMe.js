import React from 'react'

function onFocusEvent(){
    console.log('Good!')
  }

function onBlurEvent(){
console.log('Hey! Eyes on me!')
}

export default function EyesOnMe() {
  return (
    <div>
      <button onFocus={onFocusEvent} onBlur={onBlurEvent}>Eyes on me</button>
    </div>
  )
}

