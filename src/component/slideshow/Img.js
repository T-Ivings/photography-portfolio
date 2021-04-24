import { React, useState } from 'react';

export default function SingleImg (props)  {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return(
    <img
      id={props.id}
      alt={"If aree seeing this instead of my wife's lovely photographs, please send her an email letting us know."}
      className={hovered ? 'hover-image' : 'single-image'}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      // onClick={}
      src={props.image}
      width={"10%"}
      />
  )
};