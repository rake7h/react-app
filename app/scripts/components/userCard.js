import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import fetchPosts from '../redux/actions';

function UserCard() {
  const userData = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {userData && JSON.stringify(userData)}
      user Card
    </div>
  );
}

export default UserCard;
