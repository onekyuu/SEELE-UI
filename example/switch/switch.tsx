import * as React from 'react'
import { useTranslation } from 'react-i18next';
import Switch from '../../lib/switch/switch';

const SwitchExample = () => {
  const {t} = useTranslation()
  return <div>
    <Switch/>
  </div>
}

export default SwitchExample
