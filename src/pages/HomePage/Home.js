import React from 'react'
import InfoSection from '../../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home