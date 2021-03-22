import React from "react";
import { posts } from "../Molecules/BlogData";
import "../Pages/LandingPage/LandingPage.css";

const PostPreview = () => {
  return (
    <div className="preview">
      <div className="img-wrapper">
        <img src={posts[0].img} alt={posts[0].alt} />
      </div>
      <div className="text-wrapper">
        <h3>{posts[0].title}</h3>
        <p>
          <em>{posts[0].body.slice(0, 175)}... </em>
          <br />
        </p>
        <h4>( Click to view more... )</h4>
      </div>
    </div>
  );
};

export default PostPreview;
