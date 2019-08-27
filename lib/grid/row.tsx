import React, {ReactElement} from 'react';
import classes, {classMaker} from "../helpers/classMaker";
import Col from './col';
import './grid.scss';

const sc = classMaker('seele-row')
const componentName = 'Row';
interface IProps extends IStyledProps{
    gutter?: number,
    align?: 'left' | 'center' | 'right' | 'spaceAround' | 'spaceBetween',
    vertical?: 'top' | 'middle' | 'bottom',
}
const Row: SFC<IProps> = (props) => {
    const {gutter, align, vertical, className, ...rest} = props;
    const margin = gutter ? `0-${gutter / 2}px` : '';
    const alignClass = align ? sc(align) : '';
    const verticalClass = vertical ? sc(vertical): '';
    const children = React.Children.map(props.children, (child: ReactElement<any>) => {
        return child && child.type === Col && React.cloneElement(child, {gutter})
    })
    const cols = children && children.length > 0 && children.filter(i => i);

    return (
        <div className={classes(sc(''), alignClass, verticalClass, className)}
             style={{margin, ...props.style}}
             {...rest}>
            {cols}
        </div>
    )
}

Row.displayName = componentName;
Row.defaultProps = {
    gutter: 0,
    align: 'left',
    vertical: 'top',
}

export default Row;
