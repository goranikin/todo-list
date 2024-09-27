import './reset.css';

import { PostItem } from './PostResponse.tsx';

export const App = () => {
  return (
    <div>
      <div className="container">
        <div className="left-wrapper">
          <h2>포스트 목록</h2>
          <ol>
            {PostItem({ id: 1 })}
            {PostItem({ id: 2 })}
            {PostItem({ id: 3 })}
          </ol>
        </div>
        <div className="right-wrapper">
          <h2>내용</h2>
          <h2>댓글</h2>
        </div>
      </div>
    </div>
  );
};
