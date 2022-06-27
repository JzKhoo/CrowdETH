import React from 'react'
import GlobalStyle from '../../globalStyles'
import Navbar2 from '../../components/Navbar2/Navbar2'
import { Container, MainSection, LeftSection, FeaturedProjectPoster, RightSection, ProjectCard, ProjectPoster, ProjectDetail } from './Explore.styles'
import Sample from '../../images/Sample.jpeg'

function Projects() {
  return (
    <>
        <GlobalStyle />
        <Navbar2 />
        <Container>
          <h1>Projects</h1>  
          <MainSection>
            <LeftSection>
              <h2>Featured Project</h2>
              <FeaturedProjectPoster src={Sample} alt='Sample'></FeaturedProjectPoster>
              <h3>Title</h3>
              <p>Description</p>  
            </LeftSection>
            <RightSection>
              <h2>More Projects</h2>
              <ProjectCard>
                <ProjectPoster src={Sample} alt='Sample'></ProjectPoster>
                <ProjectDetail>
                  <h4>Some Random Title</h4>
                  <p>Some Random % Funded</p>
                  <p>Some Random Owner</p>
                </ProjectDetail>
              </ProjectCard>
            </RightSection>
          </MainSection>
        </Container> 
    </>
  )
}

export default Projects