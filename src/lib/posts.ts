export type Post = {
  platform: "HASHNODE" | "DEV.TO"
  badge?: string
  title: string
  url: string
}

export const posts: Post[] = [
  {
    platform: "HASHNODE",
    badge: "★ FEATURED",
    title: "All you need to know about middleware in Next.js",
    url: "https://abeer.hashnode.dev/all-you-need-to-know-about-middleware-in-nextjs",
  },
  {
    platform: "HASHNODE",
    badge: "★ FEATURED",
    title: "Server Actions in Next.js 14, explained",
    url: "https://abeer.hashnode.dev/what-are-server-actions-in-nextjs-nextjs-14-edition",
  },
  {
    platform: "DEV.TO",
    title: "What's new in React 19: a clear walkthrough",
    url: "https://dev.to/abeertech01/what-new-react-19-has-brought-to-the-table-get-clear-understanding-327h",
  },
]
