'use server'

import {GetServerSideProps, InferGetServerSidePropsType} from "next";

import {discussionGql} from "../../server/gql";
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

}
export default async function Home() {
    const data = await getBlogs();
    console.log(data)
    return (
        <main
            className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300 font-poppins">
            <title>Home Pages</title>
            <section>
                <div className="text-center mt-3">
                    <h1 className="text-[2rem] font-bold">Test GraphQL</h1>
                    <p>Welcome to homepage</p>
                </div>
            </section>
        </main>
    )
}



