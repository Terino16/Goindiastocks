import React from 'react';

const DiscussCard = ({id, user }) => {
  const { userName, userImg, discussion, timeAgo, likes, comments, shares } = user;

  return (
    <div className="-z-10 relative flex font-normal items-center border border-gray-200 rounded  p-2 m-2 md:p-4 md:mb-4">
      <div className="flex-shrink-0 items-center  flex justify-center flex-col">
        <img className="w-12 h-12 rounded-full" src={userImg} alt={userName} />
        <p className="text-sm font-normal text-gray-900 mb-1">{userName}</p>
      </div>
     
      <div className="grid min-w-0 ml-4">
        <span className='flex'>
        <p className="text-sm text-gray-500 mb-2 font-normal">{discussion}</p>
        </span>
      
        <div className="flex items-center text-sm text-gray-500">
        <span className="mr-2 font-normal text-sm right-0  bg-gray-400 p-1 rounded-2xl">{timeAgo}</span>
          <span className="mr-2 flex"><img src="/heart.png" width={15}/>{likes}</span>
          <span className="mr-2 flex"><img src="/comment.webp" width={15}/>{comments}</span>
          <span className="mr-2 flex"><img src="/share.png" width={15}/>{shares}</span>
        </div>
      </div>
    </div>
  );
};

export default DiscussCard;
