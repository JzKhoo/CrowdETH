import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjThree } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home