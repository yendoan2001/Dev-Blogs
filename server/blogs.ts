"use server"

import {discussionGql} from "./gql";
const API_URL = 'https://api.github.com/graphql'
const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID
export async function getBlogs(){
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${GH_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: discussionGql(DISCUSSION_CATEGORY_ID)
        }),
    });
    let res = await response.json();
    return res.data
    // console.log(res.data)
    // const discussions = res.data.repository.discussions.nodes;
}