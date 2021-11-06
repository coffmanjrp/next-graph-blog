const PostCard = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.expected}
    </div>
  );
};

export default PostCard;
