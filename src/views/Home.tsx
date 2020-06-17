import React from 'react'
import store from '../redux/store'

import ContButton from '../components/home/CountButton'
import CountNum from '../components/home/CountNum'

function Home() {
  return (
    <>
      <div>home page</div>
      <ContButton />
      <CountNum />
    </>
  )
}

export default Home