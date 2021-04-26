import { React, useState, useEffect } from 'react';

export default function SingleImg (props)  {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(0);

  const toggleHover = () => setHovered(!hovered);

  const hovering = hovered ? 'hover-image' : '';
  let classes = `single-image ${hovering}`

  

  useEffect(() => {
  console.log("gets here")
    if(classes.includes("hover")) {
      classes += " select-image"
      console.log(classes)
    } else {
      classes = "single-image"
      console.log("but does it get here?")
    }
      console.log("finally here")
  })

  return(
    <img
      id={props.id}
      alt={"If are seeing this instead of my wife's lovely photographs, please send her an email letting us know."}
      className={classes}
     
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={()=> {setSelected(props.id)}}
      src={props.image}
      width={"10%"}
      />
  )
};