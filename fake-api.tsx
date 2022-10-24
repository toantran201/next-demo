import {Post} from "~/models/common";

export const fetchPopularPostIds = () => {
  return new Promise<number[]>(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5])
    }, 1000)
  })
}

export const fetchPost = (id: number) => {
  return new Promise<Post>((resolve) => {
    setTimeout(() => {
      resolve({
        userId: 1,
        id: id,
        title: `Post ${id}`,
        body: `Body ${id}`
      })
    }, 2000)
  })
}