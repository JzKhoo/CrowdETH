import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjTwo, homeObjThree } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home