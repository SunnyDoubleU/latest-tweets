import { IAttachments, IMedia, ITweet } from "../types"

const convertAttachments = (attachments: IAttachments, mediaList: IMedia[]) => {
    return attachments?.media_keys.map((singleKey: string) => ({
        singleKey,
        media: mediaList.filter((media: IMedia) => media.media_key === singleKey)[0]
    }))
}
export const convertData = (tweets: ITweet[], medias: IMedia[]) => {
    console.log('im at convert')
    if (tweets !== undefined && tweets.length > 0 && medias !== undefined) {
        return tweets.map((singleTweet: ITweet) => ({
            ...singleTweet,
            attachments: singleTweet.attachments !== undefined ? convertAttachments(singleTweet?.attachments, medias) : null
        })
        )
    } else if (tweets !== undefined && tweets.length > 0 && medias === undefined) {
        return tweets
    } else {
        return []
    }
}