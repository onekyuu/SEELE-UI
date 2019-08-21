import React, { Fragment } from 'react';
import classes, { classMaker } from '../helpers/classMaker';
import './button.scss';
import Icon from '../icon/icon';

const componentName = 'Button';
const sc = classMaker('seele-button')

export interface Props extends IStyledProps {
  theme?: 'default' | 'ghost' | 'dashed';
  size?: 'small' | 'normal' | 'large';
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconColor?: string;
  shape?: 'round' | 'circle';
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'cancel' | 'reset' | 'link' | 'string';
  level?: 'primary' | 'danger';
  disabled?: boolean;
  badge?: number | string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: SFC<Props> = (props) => {

  const disabled = props.loading || props.disabled;

  const classList = Array.from(new Set(['', props.level, props.size, props.shape, props.disabled ? 'disabled' : '', props.theme].filter(c => c !== 'undefined').map(c => sc(`${c}`)))).join(' ')

  const buttonClasses = classes(props.className, classList)

  const buttonChildren = typeof props.children === 'string' ? <span>{props.children}</span> : props.children;

  const icon = props.icon && <Icon name={props.icon} style={{fill: props.iconColor}}/>

  const loadingIcon = (
    <Icon name={'loading'} className={sc('loading-icon')}/>
  )

  const iconWrap = props.loading ? loadingIcon : icon;

  const buttonContent = (props.iconPosition === 'left' ? <Fragment>{iconWrap} {buttonChildren}</Fragment> : <Fragment>{buttonChildren} {iconWrap}</Fragment>)

  const onClick = (e: React.MouseEvent) => {
    if (props.disabled) {return e.preventDefault(); }
    props.onClick && props.onClick.call(e.target, e);
  };

  const buttonWithoutHref = (
    <button className={buttonClasses} onClick={onClick} style={props.style} disabled={disabled}>
      {buttonContent}
    </button>
  );

  const buttonWithHref = (
    <a href={props.href} target={props.target} className={buttonClasses} onClick={onClick} style={props.style}>
      {buttonContent}
    </a>
  );

  const button = props.href ? buttonWithHref : buttonWithoutHref;

  return button;
}

Button.displayName = componentName;
Button.defaultProps = {
  theme: 'default',
  size: 'normal',
  iconPosition: 'left',
  shape: 'round',
  type: 'button',
  disabled: false,
  loading: false,
}

export default Button;