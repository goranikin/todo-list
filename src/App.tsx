import './reset.css';

import { useState } from 'react';

import { PostTitleItem } from './PostTitleResponse.tsx';
import SelectedPostResponse from './SelectedPostResponse.tsx';
import SelectedReplyResponse from './SelectedReplyResponse.tsx';

export const App = () => {
  const [selectedPost, setSelectedPost] = useState<string>('1');

  return (
    <div>
      <div className="container">
        <div className="left-wrapper">
          <h2>포스트 목록</h2>
          <ol>
            <li
              className="title cursor-pointer"
              onClick={() => {
                setSelectedPost('1');
              }}
            >
              {PostTitleItem({ id: '1' })}
            </li>
            <li
              className="title cursor-pointer"
              onClick={() => {
                setSelectedPost('2');
              }}
            >
              {PostTitleItem({ id: '2' })}
            </li>
            <li
              className="title cursor-pointer"
              onClick={() => {
                setSelectedPost('3');
              }}
            >
              {PostTitleItem({ id: '3' })}
            </li>
          </ol>
        </div>
        <div className="middle-line"></div>
        <div className="right-wrapper">
          <h2>내용</h2>
          <SelectedPostResponse selectedPost={selectedPost} />
          <h2>댓글</h2>
          <SelectedReplyResponse selectedPost={selectedPost} />
        </div>
      </div>
    </div>
  );
};
