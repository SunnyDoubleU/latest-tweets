import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { IAttachments, IConvertedTweet, IMedia, ITweet } from "../types"
import SearchBar from '../components/searchBar'
import TweetContainer from '../components/tweet'
import TwitterLogo from "../assets/images/twitter-logo.png"
import TweetLoader from '../components/loader/TweetLoader'
import { convertData } from '../functions'
import { device } from '../styles/device';


const SMainContainer = styled.div`
    background: ${(props) => props.theme.colors.background.tertiary};
    min-height: 98vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    padding: 0 20px 20px 20px;
    width: 100%;
    @media ${device.desktop} {
        flex-direction: row;
        justify-content: center;
        padding: 0 20px 0 20px;
    }
`
const SLogo = styled.img`
    filter: brightness(0) invert(1);
    height: 50px;
    width: 50px;
`
const STopContainer = styled.div`
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-left: 12px;
    margin-right: 12px;

    @media ${device.desktop} {
        max-width: 550px;
    }
`
const STitle = styled.div`
    text-align: left;
    color: ${props => props.theme.colors.text.secondary};
    font-weight: 200;`

const SBottomContainer = styled.div`
    background: ${props => props.theme.colors.background.primary};
    width: 100%;
    max-width: 820px;
    min-width: 280px;
    border-radius: 20px;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    aling-items: center;

    @media ${device.desktop} {
        max-width: 500px;
        max-height: 85vh;
    }
`
const STweetsContainer = styled.div`
    border-radius: 21px;
    margin: 8px;
    @media ${device.desktop} {
        max-height: 74vh;
        overflow-y: scroll;
    }
`

const SError = styled.div`
    text-align: left;
    color: ${props => props.theme.colors.text.primary};
    font-weight: 200;
    font-size: 20px;
    margin: 16px;
    `

const Home: React.FC = () => {
    const [tweets, setTweets] = useState<any>([])
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const { register, errors, handleSubmit } = useForm({})
    console.log(error)
    return (
        <SMainContainer>
            <STopContainer>
                <SLogo src={TwitterLogo} alt="twitter logo" />
                <STitle>Get the latest tweets from your favourite accounts.</STitle>
            </STopContainer>
            <SBottomContainer>
                <SearchBar setTweets={setTweets} setLoading={setLoading} setError={setError} setUsername={setUsername} />
                <STweetsContainer>
                    {tweets && tweets.length > 0 &&
                        <>{tweets.map((tweet: IConvertedTweet, index: any) => <TweetContainer tweet={tweet} key={index} />)}</>
                    }
                    {loading && <TweetLoader />}
                    {error && error.length > 0 && <SError>{error}</SError>}
                </STweetsContainer>
            </SBottomContainer>
        </SMainContainer>
    )
}


export default Home
