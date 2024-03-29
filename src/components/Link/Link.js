import React from "react";

const Link = (props) => {
  const { name, link } = props.route;
  return (
    <div className="mr-16">
      <a href={link}>{name}</a>
    </div>
  );
};

export default Link;
