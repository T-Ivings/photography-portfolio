import { React, useState } from 'react';

export default function SingleImg (props)  {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return(
    <img
      id={props.id}
      className={hovered ? 'image-hover ' : "single-image"}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      src={props.image}
      width={"10%"}
      />
  )
};