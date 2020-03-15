import React, {ReactElement, useEffect, useRef} from 'react';
import classes, {classMaker} from "../helpers/classMaker";
import './dropdown.scss';
import Icon from "../icon/icon";

const componentName = 'Dropdown';
const sc = classMaker('seele-dropdown');

interface IProps extends IStyledProps {
    button: ReactElement,
    trigger?: 'click' | 'hover',
    position?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight',
    visible: boolean,
    onClick?: () => void,
    onHoverShow?: () => void,
    onHoverHide?: () => void,
    onClickOutSide?: () => void,
    size?: 'large' | 'normal' | 'small',
    className?: string,
}

const Dropdown: SFC<IProps> = (props) => {
    const {button, trigger, position, children, visible, onClick, onHoverShow, onHoverHide, onClickOutSide, className, size, ...rest} = props;
    const eventRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<number | null>(null);
    const clickHandler = () => {
        eventRef.current && eventRef.current.addEventListener('click', (e) => {
            e.stopPropagation();
            onClick && onClick();
        });
    };
    const hoverHandler = () => {
        if (eventRef.current) {
            eventRef.current.addEventListener('mouseenter', () => {
                onHoverShow && onHoverShow();
            });
            eventRef.current.addEventListener('mouseleave', () => {
                onHoverHide && onHoverHide();
            });
        }
        if (overlayRef.current) {
            overlayRef.current.addEventListener('mouseenter', () => {
                onHoverShow && onHoverShow();
            });
            overlayRef.current.addEventListener('mouseleave', () => {
                onHoverHide && onHoverHide();
            });
        }
    };
    const visibleChangeHandler = () => {
        if (trigger === 'click') {
            if (timerRef.current !== null) {
                window.clearTimeout(timerRef.current);
            }
            timerRef.current = window.setTimeout(clickHandler, 250);
        } else if (trigger === 'hover') {
            if (timerRef.current !== null) {
                window.clearTimeout(timerRef.current);
            }
            timerRef.current = window.setTimeout(hoverHandler, 250);
        }
    };

    useEffect(() => {
        visibleChangeHandler();
        if (trigger === 'click' && onClickOutSide) {
            window.addEventListener('click', () => {
                onClickOutSide();
            });
        }
        return () => {
            eventRef.current!.removeEventListener('click', () => {
                onClick && onClick();
            });
            eventRef.current!.removeEventListener('mouseenter', () => {
                onHoverShow && onHoverShow();
            });
            eventRef.current!.removeEventListener('mouseleave', () => {
                onHoverHide && onHoverHide();
            });
            overlayRef.current!.removeEventListener('mouseenter', () => {
                onHoverShow && onHoverShow();
            });
            overlayRef.current!.removeEventListener('mouseleave', () => {
                onHoverHide && onHoverHide();
            });
        };
    }, [visible]);
    return (
        <div className={sc('')}>
            <div className={classes(sc('button'), size)} ref={eventRef}>
                {button}
                <Icon className={sc('icon')}
                      name={visible ? 'arrow-up' : 'arrow-down'}/>
            </div>
            <div
                className={classes(sc('overlay'), className, position, visible &&
                    'visible')} ref={overlayRef} {...rest}>
                {children}
            </div>
        </div>
    );
};

Dropdown.displayName = componentName;
export default Dropdown;
