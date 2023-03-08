

import classes from './Image.module.css';

export default function Image (props) {
    return <img src={props.image} alt={props.alt} className={classes['image-styles']}></img>
}