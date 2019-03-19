import React from 'react';
import './importAll';
import './icon.scss';

interface IconProps {
    name: string;
    size?: string;
    theme?: string;
    onClick?: React.MouseEventHandler<SVGElement>
}

// export default class Icon extends React.Component<IconProps> {
//   render() {
//     return (
//       <span>{this.props.name}</span>
//     );
//   }
// }

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className='yuui-icon' onClick={props.onClick}>
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
};
export default Icon;