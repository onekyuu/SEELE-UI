import React, {useEffect, useRef} from 'react';
import './affix.scss';
import classes, {classMaker} from "../helpers/classMaker";

const componentName = 'Affix';
const sc = classMaker('seele-affix');
interface IProps extends IStyledProps{
    offsetTop?: number,
    offsetBottom?: number,
}

const Affix:SFC<IProps> = (props) => {
    const {className} = props;
    const element = useRef(null)
    const getOffset = (el: HTMLDivElement | null) => {
        if (el) {
            return el.getBoundingClientRect()
        }
        return null;
    }
    const setStyle = () => {
        useEffect(() => {
            getOffset(element.current);
        }, [element])
    }

    return (
        <div ref={element} className={classes(sc(''), className)} onScroll={setStyle}>
            affix
        </div>
    )
}

Affix.displayName = componentName;
export default Affix;
