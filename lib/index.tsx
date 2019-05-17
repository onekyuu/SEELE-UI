import './base/index.scss';
import {CSSProperties} from 'react';

declare global {
    
    interface IStyledProps {
        className?: string;
        style?: CSSProperties;
    }

    type Class = string | string[] | { [k: string]: any } | undefined | false | null;
}

export {default as Icon} from './icon/icon';