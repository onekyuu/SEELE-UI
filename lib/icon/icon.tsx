import React from 'react';
import './importAll';

interface IconProps {
    name: string;
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
        <span>
          <svg>
            <use xlinkHref={`#${props.name}`}></use>
          </svg>
        </span>
    )
};
export default Icon;