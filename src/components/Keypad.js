import React from 'react'

function onChangeEvent(){
  console.log('Entering password...')
}

function Keypad() {
  return (
    <div>
      <input name='password' type='password' onChange={onChangeEvent}/>
    </div>
  )
}

export default Keypad
