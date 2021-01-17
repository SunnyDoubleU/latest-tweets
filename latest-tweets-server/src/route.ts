import * as express from "express";
// import { Request, Response } from "express";
import * as needle from "needle";
const router = express.Router();
require("dotenv").config();

const token = process.env.BEARER_TOKEN;

const getUserId = async (username) => {
  const endpointURL = `https://api.twitter.com/2/users/by/username/${username}`;
  const res = await needle("get", endpointURL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (res.body) {
    return res.body;
  } else {
    throw new Error("User unavailable");
  }
};

const getUserTweet = async (id) => {
  const endpointURL = `https://api.twitter.com/2/users/${id}/tweets`;
  const params = {
    "expansions": "attachments.media_keys",
    "tweet.fields": "created_at",
    "media.fields": "preview_image_url,url"
  }
  const res = await needle("get", endpointURL, params, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (res.body) {
    return res.body;
  } else {
    throw new Error("Tweet Error");
  }
};

router.post("/api/getUserTweets", (req, res) => {
  const username = req.body.username;
  return getUserId(username)
    .then((user) => {
      return getUserTweet(user.data.id)
        .then((tweet) => {
          res.json(tweet)
        })
        .catch((tweetErr) => {
          res.status(400).send(tweetErr)
        })
    })
    .catch((err) => {
      res.status(404).send(err)
    })
});

module.exports = router;
