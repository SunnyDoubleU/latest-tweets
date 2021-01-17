import React from 'react'
import styled from "styled-components"
import DSkeleton from "./index"

const SMainContainer = styled.div`
    background: ${props => props.theme.colors.background.primary}
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;`



const SSkeleton = styled(DSkeleton) <{ width?: string | number }>`
    width: ${(props) => (props.width ? props.width.toString() : '40')}%;
    height: 16px;
    margin-bottom: 12px;
`;

const SImageSkeleton = styled(DSkeleton) <{ width?: string | number }>`
width: 100%;
height: 200px;
margin-bottom: 12px;
`;
const STweetContainer = styled.div`
width: 90%;
margin-bottom: 8px;
`
const IndividualLoader = () => {
    const randomWidth = () => Math.floor(Math.random() * 45) + 25;
    return (
        <STweetContainer>
            <SImageSkeleton width={90} />
            <SSkeleton width={90} />
            <SSkeleton width={90} />
            <SSkeleton width={80} />
            <SSkeleton width={40} />
        </STweetContainer>
    )
}
const TweetLoader: React.FC = () => {

    return (
        <SMainContainer>
            <IndividualLoader />
            <IndividualLoader />
            <IndividualLoader />
        </SMainContainer>
    )
}

export default TweetLoader;