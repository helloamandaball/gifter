import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const Post = ({ postProp }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {postProp.userProfile.name}</p>
      <CardImg top src={postProp.imageUrl} alt={postProp.title} />
      <CardBody>
        <p>
          <strong>{postProp.title}</strong>
        </p>
        <p>{postProp.caption}</p>
      </CardBody>
    </Card>
  );
};

export default Post;