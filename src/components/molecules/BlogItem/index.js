import React from "react";

const BlogItem = () => {
  return (
    <div className="card">
      <img
        src="https://source.unsplash.com/1600x900/?nature,animal,program,design,art"
        className="card-img-top"
        alt="unsplash api"
      />
      <div className="card-body">
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ipsum
          rerum excepturi modi, distinctio aspernatur consectetur nihil fugit
          eum totam veritatis esse saepe inventore ipsam.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
