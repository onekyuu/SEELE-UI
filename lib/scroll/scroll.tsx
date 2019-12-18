import React, {
    MouseEventHandler,
    UIEventHandler,
    useEffect,
    useRef,
    useState
} from 'react';
import './scroll.scss';
import classes, {classMaker} from "../helpers/classMaker";
import scrollbarWidth from "../../example/scroll/getScrollBarWidth";

const componentName = 'Scroll';
const sc = classMaker('seele-scroll');
interface IProps extends IStyledProps{}

const Scroll: SFC<IProps> = (props) => {
    const {children, className, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);
    const setBarTop = (number: number) => {
        if (number < 0) { return }
        const scrollHeight = ref.current!.scrollHeight;
        const viewHeight = ref.current!.getBoundingClientRect().height;
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) { return }
        _setBarTop(number)
    }
    const onScroll:UIEventHandler = () => {
        const scrollHeight = ref.current!.scrollHeight;
        const scrollTop = ref.current!.scrollTop;
        const viewHeight = ref.current!.getBoundingClientRect().height;
        setBarTop(scrollTop * viewHeight / scrollHeight);
    }
    const ref = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const startPositionRef = useRef(0);
    const startBarTopRef = useRef(0);
    const MouseDownOnScrollBar: MouseEventHandler = (e) => {
        isDraggingRef.current = true;
        startPositionRef.current = e.clientY;
        startBarTopRef.current = barTop;
    }
    const MouseMoveOnScrollBar = (e: MouseEvent) => {
        if (isDraggingRef.current) {
            const newBarTop = e.clientY - startPositionRef.current + startBarTopRef.current
            setBarTop(newBarTop)
            const scrollHeight = ref.current!.scrollHeight;
            const viewHeight = ref.current!.getBoundingClientRect().height;
            ref.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
        }
    }
    const MouseUpOnScrollBar = () => {
        isDraggingRef.current = false
    }
    const onSelect = (e: Event) => {
        if (isDraggingRef.current) {
            e.preventDefault();
        }
    }
    useEffect(()=> {
        const scrollHeight = ref.current!.scrollHeight;
        const viewHeight = ref.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
        document.addEventListener('mousemove', MouseMoveOnScrollBar);
        document.addEventListener('mouseup', MouseUpOnScrollBar);
        document.addEventListener('selectstart', onSelect);
        return () => {
            document.removeEventListener('mousemove', MouseMoveOnScrollBar);
            document.removeEventListener('mouseup', MouseUpOnScrollBar);
            document.addEventListener('selectstart', onSelect)
        }
    }, [])
    return (
        <div {...rest} className={classes(sc(''), className)}>
            <div className={sc('inner')} style={{right: -scrollbarWidth()}}
            onScroll={onScroll} ref={ref}>
                {children}
            </div>
            <div className={sc('track')}
                onMouseDown={MouseDownOnScrollBar}>
                <div className={sc('bar')} style={{height: `${barHeight}px`, transform: `translateY(${barTop}px)`}}/>
            </div>
        </div>
    )
};

Scroll.displayName = componentName;
export default Scroll;
