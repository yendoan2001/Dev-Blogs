import {BlogPosts} from "@/type/blogs";
import BlogsHeader from "@/component/BlogsHeader";

const BlogsPreview = (props: BlogPosts) => {
    const {title, bodyText, tags,createdAt, author, lastEdited, url, discussionUrl, id, HTML} = props;
   const previewText = bodyText?.substring(0, 150)
    return(
        <section>
            <BlogsHeader createdAt={createdAt} author={author}/>
            <h2 className='font-bold'>
                {title}
            </h2>
            <p className='mt-2'>
                {previewText}
            </p>
            <div className='flex gap-3'>
                {tags?.map((tag: string, index) =>{
                    return(
                        <p className='bg-sky-600 px-2 mt-2 font-semibold rounded-xl text-zinc-800' key={index}>
                            {tag}
                        </p>
                    )
                })}
            </div>
        </section>
    )
}
export default BlogsPreview