import axios from 'axios'
import qs from 'qs'
import { IUserInfo } from "../types"

export const apiGetUserTweets = {
    getTweets: (user: IUserInfo) => {
        return axios({
            method: 'POST',
            url: 'http://localhost:8080/api/getUserTweets',
            data: qs.stringify(user),
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
    },
}