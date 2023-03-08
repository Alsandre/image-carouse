
import classes from './Options.module.css';

export default function Options () {
    const modeSelectHandler = event => {};
    
    return <select className={classes.menu} onSelect={modeSelectHandler}>
        <option>Infinite Baseline controls</option>
        <option>Infinite Underline controls</option>
        <option>Baseline controls</option>
        <option>Underline controls</option>
    </select>
}