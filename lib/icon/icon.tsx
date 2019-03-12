import React from 'react';

interface IconProps {
    name?: string;
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
        <span>{props.name}</span>
    )
};
export default Icon;