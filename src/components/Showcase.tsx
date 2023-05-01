import React from "react";

type Props = {
  imgPath: string;
  screenshots: string[];
  title: string;
  websiteUrl: string;
  githubUrl: string;
};

const Showcase = ({
  imgPath,
  screenshots,
  title,
  websiteUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="container">
      <div>
        <img src={imgPath}>
          <a href="" />
        </img>
      </div>
      ;
    </div>
  );
};

export default Showcase;
