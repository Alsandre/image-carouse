

export default function SliderButton (props) {
    return <button className={props.className} onClick={props.onClick}>{props.direction}</button>
}