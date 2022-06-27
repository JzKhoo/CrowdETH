import styled from "styled-components";

export const Container = styled.div`
    height: 910px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
        margin: 50px 0px 50px 100px;
        font-size: 40px;
    }
`
export const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    gap: 30px;
`

export const FeaturedProjectPoster = styled.img`
    width: 60%;
    height: 60%; 
`

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

export const ProjectCard = styled.div`
    display: flex;
`

export const ProjectPoster = styled.img`
    width: 10%;
    height: 10%;
    margin: 20px 50px 20px 0px;
`

export const ProjectDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`