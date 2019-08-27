import React from 'react';
import classes, {classMaker} from "../helpers/classMaker";
import './grid.scss';

const componentName = 'Col';
const sc = classMaker('seele-col');
interface IProps extends IStyledProps{
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    gutter?: number,
    offset?: number,
}
const Col: SFC<IProps> = (props) => {
    const {gutter, offset, className} = props;
    console.log(props.xs);
    const padding = gutter ? `0 ${gutter / 2}px` : '';
    const spanList = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    const spanClass: any = [];
    spanList.map(size => spanClass.push(sc(`${size}-${(props as any)[size]}`)))
    const offsetClass: any = [];
    spanList.map(size => offsetClass.push(sc(`${size}-offset-${offset}`)))

    return (
        <div className={classes(sc(''), spanClass.join(' '), offset && offsetClass.join(' '))}
             style={{padding}}>
            <div className={className} style={props.style}>
                {props.children}
            </div>
        </div>
    )
}

Col.displayName = componentName;
Col.defaultProps = {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    xxl: 0,
    gutter: 0,
    offset: 0,
}

export default Col;
