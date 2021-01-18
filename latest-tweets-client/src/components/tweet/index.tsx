import React, { useState } from "react"
import styled from "styled-components"
import dayjs from 'dayjs';
import { IConvertedTweet, IMedia } from "../../types"

interface ITweetContainerProps {
    tweet: IConvertedTweet
}

const SMainContainer = styled.div`
    background: ${props => props.theme.colors.background.primary};
    border-radius: 15px;
    width: 100%;
    margin-bottom: 8px;
    border: 1px solid ${props => props.theme.colors.background.quaternary};
`
const SImage = styled.img`
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

`
const SText = styled.div`
    color: ${props => props.theme.colors.text.primary};
    font-size: 16px;
    // width: 100%;
    margin: 8px;
`
const SDate = styled(SText)`
color: ${props => props.theme.colors.text.tertiary};
font-size: 14px;
`
const TweetContainer: React.FC<ITweetContainerProps> = ({ tweet }) => {
    const getMedia = () => {
        if (tweet.attachments !== null && tweet.attachments !== undefined && tweet?.attachments?.[0]?.media?.type === "photo") {
            return tweet?.attachments?.[0]?.media.url
        } else if (tweet.attachments !== null && tweet.attachments !== undefined && tweet?.attachments?.[0]?.media.type === "video") {
            return tweet.attachments?.[0]?.media.preview_image_url
        }
    }
    const media = getMedia()
    const formatDate = dayjs(tweet.created_at).format('ddd, MMMM DD YYYY')
    return (
        <SMainContainer>
            { media && <SImage src={media} alt='' />}
            <SText>{tweet.text}</SText>
            <SDate>{formatDate}</SDate>
        </SMainContainer>
    )
}

export default TweetContainer