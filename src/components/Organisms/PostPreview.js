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
          <em>
            Hello there! Welcome to my first blog post. This one is about my
            experience thus far of learning to code (more technical posts coming
            later). So it makes sense to write about my first round of
            #100DaysOfCode. The Twitter hashtag and ethos behind it were...{" "}
          </em>
          <br />
        </p>
        <h4>( Click to view more... )</h4>
      </div>
    </div>
  );
};

export default PostPreview;
