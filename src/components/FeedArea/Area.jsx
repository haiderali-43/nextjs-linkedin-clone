"use client";
import { Separator } from "../ui/separator";
import OpenInput from "./OpenInput";
import PostDisplay from "./PostDisplay";
import PostModal from "./PostModal";
import { useState } from "react";

const Area = () => {
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const handlePost = (post) => {
    setPosts([...posts, post]);

    // Close the modal
    closePostModal();
  };

  const openPostModal = () => {
    setPostModalOpen(true);
  };

  const closePostModal = () => {
    setPostModalOpen(false);
  };
  return (
    <div className="md:w-[50%] border-2 border-grey-400 rounded-md mt-3 m-auto p-2 h-[100vh] overflow-hidden">
      <OpenInput handleInputOpen={openPostModal} />
      <Separator className="mt-5" />
      <PostModal
        isOpen={isPostModalOpen}
        onClose={closePostModal}
        onPost={handlePost}
      />

      {posts.map((post, index) => (
        <PostDisplay
          key={index}
          postContent={post.postContent}
          imageUrl={post.imageUrl}
          imageDimensions={post.imageDimensions}
        />
      ))}
    </div>
  );
};

export default Area;
