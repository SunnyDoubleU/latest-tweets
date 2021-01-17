import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { apiGetUserTweets } from '../../api/apiGetTweets'
import { useForm } from 'react-hook-form'
import { IConvertedTweet, IMedia, ITweet, IUserInfo } from "../../types"
import { convertData } from '../../functions'
import SearchIcon from "../../assets/images/search.png"
interface ISearchBarProps {
    setTweets: (tweets: IConvertedTweet[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setUsername: (username: string) => void;
}
export const SMainContainer = styled.div`
    font-size: 15px;
    padding: 20px;
    width: 100%;
    max-width: 460px;
    text-align: center;
    margin: 0 auto;
`
const SButton = styled.button`
    background: ${(props) =>
        `linear-gradient(50deg, ${props.theme.colors.background.tertiary} 26%, ${props.theme.colors.background.quaternary} 100%)`};
    padding: 10px;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: ${(props) => props.theme.colors.text.secondary};
`
const SForm = styled.form`
    display: flex;
    height: 50px;
    width: 100%;
`
const SInput = styled.input<{ hasError: boolean }>`
    border: 1px solid ${(props) => (props.hasError ? props.theme.colors.error : props.theme.colors.border)};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 10px;
    width: 100%;
`
const SErrorContainer = styled.div`
    color: ${(props) => props.theme.colors.error};
`
const SSearchIcon = styled.img`
    height: 4x0px;
    width: auto;
`

const SearchBar: React.FC<ISearchBarProps> = ({ setTweets, setLoading, setError, setUsername }) => {

    const { register, errors, handleSubmit } = useForm({})

    const setTweetHandler = useCallback((response: any) => {
        const convertedData: IConvertedTweet[] = convertData(response.data, response.includes.media)
        setTweets(convertedData)
    }, [])
    const searchUser = async (user: IUserInfo) => {
        try {
            setLoading(true)
            const response: any = await apiGetUserTweets.getTweets(user)
            if (response.data) {
                setTweetHandler(response.data)
                setUsername(user.username)
                setLoading(false)
                setError(null)
            } else {
                console.log(response)
                setTweetHandler([])
                setLoading(false)
                setError('Oops, something went wrong. Please try again later.')
            }
        } catch (err) {
            console.log('login error', err)
            setTweetHandler([])
            setLoading(false)
            setError('Oops, something went wrong. Please try again later.')
        }
    }

    const onSubmit = async (data: any) => {
        const userInfo = {
            username: data.username,
        }
        searchUser(userInfo)
    }
    return (
        <SMainContainer>
            <SForm>
                <SInput type="text"
                    name="username"
                    placeholder="Search user"
                    ref={register({
                        required: 'username is reqired',
                    })}
                    hasError={errors.username}></SInput>
                <SButton type="submit" onClick={handleSubmit(onSubmit)}>
                    <SSearchIcon src={SearchIcon} alt="" />
                </SButton>
            </SForm>
            <SErrorContainer>
                {errors.username && <div>{errors.username.message}</div>}
            </SErrorContainer>
        </SMainContainer>
    )
}


export default SearchBar
