import React, { Fragment } from 'react';
import classes, { classMaker } from '../helpers/classMaker';
import './button.scss';

const sc = classMaker('wui-button')

interface Props extends IStyledProps {
  theme?: 'default' | 'ghost';
  size?: 'small' | 'normal' | 'large';
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconColor?: string;
  shape?: 'round' | 'circle';
  href?: string;
  target?: boolean;
  type?: 'button' | 'submit' | 'reset' | 'link' | 'string';
  level?: 'primary' | 'dashed' | 'danger' | 'importent';
  disabled?: boolean;
  badge?: number | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FunctionComponent<Props> = (props) => {
  const classList = [props.className].concat(['', props.level, props.size, props.shape, props.disabled ? 'disabled' : '', props.theme].map(c => sc(`${c}`))).join(' ')

  const buttonClasses = classes(props.className, classList)

  const buttonChildren = typeof props.children === 'string' ? <span>{props.children}</span> : props.children;

  const buttonContent = (props.iconPosition === 'left' ? <Fragment>{buttonChildren}</Fragment> : <Fragment>{buttonChildren}</Fragment>)

  const buttonWithoutHref = (
    <button className={buttonClasses}>
      {buttonContent}
    </button>
  );

  const buttonWithHref = (
    <a href={props.href} className={buttonClasses}>
      {buttonContent}
    </a>
  );

  const button = props.href ? buttonWithHref : buttonWithoutHref;

  return button;
}

Button.defaultProps = {
  theme: 'default',
  size: 'normal',
  iconPosition: 'left',
  shape: 'round',
  type: 'button',
  level: 'primary',
  disabled: false,
}

export default Button;