import * as React from 'react'
import { classMaker } from '../helpers/classMaker';

const componentName = 'Switch'
const sc = classMaker('seele-switch')

interface IProps {

}

const Switch: SFC<IProps> = (props) => {
  return <div className={sc('')}>switch</div>
}

Switch.displayName = componentName

export default Switch
