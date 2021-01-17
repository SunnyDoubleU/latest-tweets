export interface IUserInfo {
    username: string
}

export interface ITweet {
    text: string
    id: string
    created_at: string
    attachments?: IAttachments
}

export interface IConvertedTweet {
    attachments: {
        singleKey: string; media: IMedia;
    }[] | null;
    text: string;
    id: string;
    created_at: string;
}

export interface IConvertedAttachments {
    media_keys: IConvertedMediaKey[] | null
}

export interface IConvertedMediaKey {
    singleKey: string;
    media: IMedia;
}
export interface IAttachments {
    media_keys: string[]
}


export interface IMedia {
    media_key: string,
    type: string,
    url?: string,
    preview_image_url?: string
}