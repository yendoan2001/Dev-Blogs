import {getBlogs} from '@/server/blogs'
import {BlogPosts} from "@/type/blogs";
import BlogsPreview from "@/component/BlogsPreview";

export default async function Home() {
  const blogs = await getBlogs()
  return (
    <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300 font-poppins">
      <title>Home Pages</title>
      <section>
        <div className="text-center mt-3">
          <h1 className="text-[2rem] font-bold">Test GraphQL</h1>
          <p>Welcome to homepage</p>
        </div>
      </section>
      <section className="flex flex-col items-center text-[1.15rem] mt-12">
        <div className='flex gap-3 mb-12'> </div>
            {blogs.map((blog: BlogPosts, index: number) => {
                return(
                    <div key={index}
                         className='max-w-[28em] max-h-[20em] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-lg p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300'

                    >
                        <BlogsPreview
                            title={blog.title}
                            bodyText={blog.bodyText}
                            createdAt={blog.createdAt}
                            author={blog.author}
                            tags={blog.tags}
                        />
                    </div>
                )
            })}
      </section>
    </main>
  )
}
