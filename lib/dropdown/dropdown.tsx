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
    onShow?: () => void,
    onHide?: () => void,
    onClickClose?: () => void,
    size?: 'large' | 'normal' | 'small',
    className?: string,
}

const Dropdown: SFC<IProps> = (props) => {
    const {button, trigger, position, children, visible, onClick, onShow, onHide, onClickClose, className, size, ...rest} = props;
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
                onShow && onShow();
            });
            eventRef.current.addEventListener('mouseleave', () => {
                onHide && onHide();
            });
        }
        if (overlayRef.current) {
            overlayRef.current.addEventListener('mouseenter', () => {
                onShow && onShow();
            });
            overlayRef.current.addEventListener('mouseleave', () => {
                onHide && onHide();
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
        if (trigger === 'click' && onClickClose) {
            window.addEventListener('click', () => {
                onClickClose();
            });
        }
        return () => {
            eventRef.current!.removeEventListener('click', () => {
                onClick && onClick();
            });
            eventRef.current!.removeEventListener('mouseenter', () => {
                onShow && onShow();
            });
            eventRef.current!.removeEventListener('mouseleave', () => {
                onHide && onHide();
            });
            overlayRef.current!.removeEventListener('mouseenter', () => {
                onShow && onShow();
            });
            overlayRef.current!.removeEventListener('mouseleave', () => {
                onHide && onHide();
            });
        };
    }, [visible]);
    return (
        <div className={sc('')}>
            <div className={classes(sc('button'), size)} ref={eventRef}>
                {button}
                <Icon className={sc('icon')} name={visible ? 'arrow-up' : 'arrow-down'}/>
            </div>
            <div className={classes(sc('overlay'), className, position, visible &&
                'visible')} ref={overlayRef} {...rest}>
                {children}
            </div>
        </div>
    );
};

Dropdown.displayName = componentName;
export default Dropdown;
