
import Image from "./Image";

import classes from "./SlideRight.module.css";


export default function SlideRight(props) {
  return (
    <div className={classes["slide-right"] + " " + props.className}>
      <Image image={props.image} alt={props.description} />
    </div>
  );
}
