import React, {
    MouseEventHandler, TouchEventHandler,
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
const isTouchDevice = 'ontouchstart' in window;

interface IProps extends IStyledProps {
    autoHide?: boolean,
    color?: string,
}

const Scroll: SFC<IProps> = (props) => {
    const {children, className, autoHide, color, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);
    const [barVisible, setBarVisible] = useState(false);
    const setBarTop = (number: number) => {
        if (number < 0) {
            return
        }
        const scrollHeight = ref.current!.scrollHeight;
        const viewHeight = ref.current!.getBoundingClientRect().height;
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) {
            return
        }
        _setBarTop(number)
    };
    const timerRef = useRef<number | null>(null);
    const onScroll: UIEventHandler = () => {
        setBarVisible(true);
        const scrollHeight = ref.current!.scrollHeight;
        const scrollTop = ref.current!.scrollTop;
        const viewHeight = ref.current!.getBoundingClientRect().height;
        setBarTop(scrollTop * viewHeight / scrollHeight);
        if (autoHide) {
            if (timerRef.current !== null) {
                window.clearTimeout(timerRef.current)
            }
            timerRef.current = window.setTimeout(() => {
                setBarVisible(false);
            }, 600)
        }
    };
    const ref = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const startPositionRef = useRef(0);
    const startBarTopRef = useRef(0);
    const MouseDownOnScrollBar: MouseEventHandler = (e) => {
        isDraggingRef.current = true;
        startPositionRef.current = e.clientY;
        startBarTopRef.current = barTop;
    };
    const MouseMoveOnScrollBar = (e: MouseEvent) => {
        if (isDraggingRef.current) {
            const newBarTop = e.clientY - startPositionRef.current + startBarTopRef.current;
            setBarTop(newBarTop);
            const scrollHeight = ref.current!.scrollHeight;
            const viewHeight = ref.current!.getBoundingClientRect().height;
            ref.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
        }
    };
    const MouseUpOnScrollBar = () => {
        isDraggingRef.current = false
    };
    const onSelect = (e: Event) => {
        if (isDraggingRef.current) {
            e.preventDefault();
        }
    };
    const [translateY, _setTranslateY] = useState(0);
    const setTranslateY = (y: number) => {
        if (y < 0) { y = 0 } else if (y > 60) { y = 60 }
        _setTranslateY(y)
    }
    const lastTouchY = useRef(0);
    const moveCount = useRef(0);
    const isPulling = useRef(false);
    const onTouchStart: TouchEventHandler = (e) => {
        const scrollTop = ref.current!.scrollTop;
        if (scrollTop !== 0) {
            return
        }
        isPulling.current = true;
        lastTouchY.current = e.touches[0].clientY;
        moveCount.current = 0;
    };
    const onTouchMove: TouchEventHandler = (e) => {
        const deltaY = e.touches[0].clientY - lastTouchY.current;
        moveCount.current += 1;
        if (moveCount.current === 1 && deltaY < 0) {
            isPulling.current = false;
            return;
        }
        if (isPulling.current === false) {return;}
        setTranslateY(translateY + deltaY);
        lastTouchY.current = e.touches[0].clientY;
    };
    const onTouchEnd: TouchEventHandler = () => {
        setTranslateY(0)
    };
    useEffect(() => {
        if (!autoHide) {
            setBarVisible(true)
        }
        const scrollHeight = ref.current!.scrollHeight;
        const viewHeight = ref.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
        document.addEventListener('mousemove',  MouseMoveOnScrollBar);
        document.addEventListener('mouseup', MouseUpOnScrollBar);
        document.addEventListener('selectstart', onSelect);
        return () => {
            document.removeEventListener('mousemove', MouseMoveOnScrollBar);
            document.removeEventListener('mouseup', MouseUpOnScrollBar);
            document.addEventListener('selectstart', onSelect)
        }
    }, []);
    const isVisible = isTouchDevice ? false : barVisible;
    return (
        <div {...rest} className={classes(sc(''))}>
            <div className={sc('inner')} style={{
                right: -scrollbarWidth(),
                transform: `translateY(${translateY}px)`,
            }}
                 onScroll={onScroll}
                 onTouchStart={onTouchStart}
                 onTouchMove={onTouchMove}
                 onTouchEnd={onTouchEnd}
                 ref={ref}>
                {children}
            </div>
            {
                isVisible &&
                <div className={classes(sc('track'), className)}
                     onMouseDown={MouseDownOnScrollBar}>
                    <div className={sc('bar')}
                         style={{
                             height: `${barHeight}px`,
                             transform: `translateY(${barTop}px)`,
                             backgroundColor: color
                         }}/>
                </div>
            }
        </div>
    )
};

Scroll.displayName = componentName;
Scroll.defaultProps = {
    autoHide: false,
    color: 'rgba(0, 0, 0, .2)',
};
export default Scroll;
