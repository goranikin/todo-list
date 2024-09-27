import { useEffect, useState } from 'react';

type TodoResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchPost = async (id: number) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const response = await fetch(`${baseUrl}/posts/${id}`);
  return (await response.json()) as TodoResponse;
};

export const PostItem = ({ id }: { id: number }) => {
  const [post, setPost] = useState<TodoResponse>();

  useEffect(() => {
    let ignore = false;
    fetchPost(id)
      .then((data) => {
        if (!ignore) setPost(data);
      })
      .catch(() => {
        alert('페이지를 가져오지 못했습니다.');
      });
    return () => {
      ignore = true;
    };
  }, [id]);

  return <li>{post != null ? post.title : 'Loading...'}</li>;
};
