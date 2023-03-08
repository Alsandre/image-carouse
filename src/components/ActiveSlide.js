import Image from "./Image";

import classes from "./ActiveSlide.module.css";

export default function ActiveSlide(props) {
  return (
    <div className={classes["active-slide"] + " " + props.className}>
      <Image image={props.image} alt={props.description} />
    </div>
  );
}
