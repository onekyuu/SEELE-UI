import React, {UIEventHandler, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import classes, {classMaker} from "../helpers/classMaker";
import scrollbarWidth from "../../example/scroll/getScrollBarWidth";

const componentName = 'Scroll';
const sc = classMaker('seele-scroll');
interface IProps extends IStyledProps{
}

const Scroll: SFC<IProps> = (props) => {
    const {children, className, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0)
    const [barTop, setBarTop] = useState(0)
    const onScroll:UIEventHandler = (e) => {
        const scrollHeight = e.currentTarget.scrollHeight;
        const scrollTop = e.currentTarget.scrollTop;
        const viewHeight = e.currentTarget.getBoundingClientRect().height;
        setBarTop(scrollTop * viewHeight / scrollHeight);
    }
    const ref = useRef<HTMLDivElement>(null)
    useEffect(()=> {
        const scrollHeight = ref.current!.scrollHeight;
        const viewHeight = ref.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
    }, [])
    return (
        <div {...rest} className={classes(sc(''), className)}>
            <div className={sc('inner')} style={{right: -scrollbarWidth()}}
            onScroll={onScroll} ref={ref}>
                {children}
            </div>
            <div className={sc('track')}>
                <div className={sc('bar')} style={{height: `${barHeight}px`, transform: `translateY(${barTop}px)`}}/>
            </div>
        </div>
    )
};

Scroll.displayName = componentName;
export default Scroll;
