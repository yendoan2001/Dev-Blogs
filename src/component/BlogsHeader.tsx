import {BlogPosts} from "@/type/blogs";
import Image from "next/image";

interface IProps{
    createdAt: string,
    author: {
        name: string,
        avatar: string,
        url: string
    }
}
const BlogsHeader = (props: IProps) => {
    const { createdAt, author } = props
    const createDate = new Date(createdAt)

    return(
        <div className='flex'>
            <img className='rounded-[50%] mb-4 mr-4' src={author.avatar} width={50} height={50} alt="Avatar"/>
        </div>
    )
}
export default BlogsHeader