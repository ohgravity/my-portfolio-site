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
            I’ve recently finished my first round of #100DaysOfCode. The hashtag
            and ethos behind it were created by Alex Kalloway (@ka11away).
            According to the official website, 100daysofcode.com, the movement
            was set up to encourage...{" "}
          </em>
          <br />
        </p>
        <h4>( Click to view more... )</h4>
      </div>
    </div>
  );
};

export default PostPreview;
