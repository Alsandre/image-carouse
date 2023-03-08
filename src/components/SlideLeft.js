

import Image from './Image';

import classes from './SlideLeft.module.css';

export default function SlideLeft (props) {
    return <div className={classes['slide-left'] + " " + props.className}>
        <Image image={props.image} alt={props.description}/>
    </div>
}