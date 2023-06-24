import React, { useContext } from 'react'
import Post  from './Post';
import { ForumContext } from '../Context/FormContext';

const UserFeed = () => {
  const { forumData } = useContext(ForumContext);
  return (
    <div>
      {forumData.posts.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </div>
  );
};

export default UserFeed;
