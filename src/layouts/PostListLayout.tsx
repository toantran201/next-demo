import { ReactNode } from 'react'

interface PostListLayoutProps {
  children: ReactNode
}

const PostListLayout = ({ children }: PostListLayoutProps) => {
  return (
    <>
      <div>
        <h1>Header Posts Layout</h1>
      </div>
      <div>{children}</div>
      <div>
        <h1>Footer Posts Layout</h1>
      </div>
    </>
  )
}

export default PostListLayout
