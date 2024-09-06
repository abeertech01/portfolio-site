import React from "react"
import blogPosts from "../assets/blogPosts"

function FeatBlogPosts() {
  return (
    <div className="text-grayish text-[1.4rem]">
      <h1 className="text-2xl font-medium mb-6">
        Featured Blog Posts -{" "}
        <a
          href="https://abeer.hashnode.dev"
          className="font-normal text-xl underline"
        >
          Visit My Blog
        </a>
      </h1>

      <ul className="w-4/5 relative -left-4">
        {blogPosts.map((post, index) => (
          <li
            key={index}
            className="mb-4 bg-[#5fffd409] rounded-xl border-t-[0.01rem] border-[#ffffff2a]"
          >
            <a href={post.link} target="_blank" className="w-full h-full">
              <div className="flex gap-4 p-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-48 h-28 bg-cover rounded-md border border-spacing-2 border-[#eeeeee40]"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="font-medium line-clamp-1 text-white text-[1.5rem]">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-[1.3rem]">{post.preview}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeatBlogPosts
