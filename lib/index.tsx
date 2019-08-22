import './base/index.scss';
import {CSSProperties} from 'react';

declare global {
    interface SeeleUIFunctionComponent<P = {}> extends React.FunctionComponent<P> {
        // 强制要求 displayName
        displayName: string;
        // 由于 propTypes 与 TypeScript + 函数式组件配合起来有 bug
        // 见 https://stackoverflow.com/questions/53672656/typescript-does-not-check-a-react-components-proptypes-how-could-i-fix-it/53675443
        propTypes?: any;
      }
    
    interface IStyledProps {
        className?: string;
        style?: CSSProperties;
    }
    type SFC<P = {}> = SeeleUIFunctionComponent<P>;
    type Class = string | string[] | { [k: string]: any } | undefined | false | null;
}

export {default as Icon} from './icon/icon';