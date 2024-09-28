import type { PostResponse, ReplyResponse } from './types';

export const fetchPost = async (id: string) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const response = await fetch(`${baseUrl}/posts/${id}`);
  return (await response.json()) as PostResponse;
};

export const fetchReply = async (id: string) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const response = await fetch(`${baseUrl}/posts/${id}/comments`);
  return (await response.json()) as ReplyResponse[];
};
