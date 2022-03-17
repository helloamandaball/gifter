import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody } from "reactstrap";

const Post = ({ postProp }) => {
  return (
    <Card className="m-4">
      <div className="text-left px-2 mb-1">
        Posted by:&nbsp; 
        <Link to={`/users/${postProp.userProfileId}`}>
          {postProp.userProfile.name}
        </Link>
      </div>
      <CardImg top src={postProp.imageUrl} alt={postProp.title} />
      <CardBody>
        <Link to={`/posts/${postProp.id}`}>
            <strong>{postProp.title}</strong>
        </Link>
        <p>{postProp.caption}</p>
        {/* <ul>
            {postProp.comments.map(pc => <li key={pc.id}> {pc.userProfile.name}: {pc.message}  </li>)}
        </ul> */}
      </CardBody>
    </Card>
  );
};

export default Post;