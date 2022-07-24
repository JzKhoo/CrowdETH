import React from 'react'
import TestImage from '../../images/Pitch.png'
import { ExploreCardWrapper,
  ExploreCardContainer,
  Poster,
  Heading,
  Description
} from './ExploreCard.styles';

const ExploreCard = () => {

    const [ventureInformation, setVentureInformation] = React.useState({
        name: "CrowdETH",
        description: "An Orbital Project",
        imageUrl: TestImage
      });
    
      const {
        name,
        description,
        imageUrl
      } = ventureInformation;  

  return (
    <>
      <ExploreCardWrapper>
        <ExploreCardContainer>
          <Poster src={TestImage} />
          <Heading>{name}</Heading>
          <Description>{description}</Description>
        </ExploreCardContainer>
      </ExploreCardWrapper>
    </>
  )
}

export default ExploreCard