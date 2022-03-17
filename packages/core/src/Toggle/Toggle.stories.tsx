import React, { useState } from 'react'
import { Toggle } from '..'
import { Dollar } from 'pcln-icons'

export default {
  title: 'Toggle',
  component: Toggle,
}

export const ToggleComponent = () => {
  const [isOn, setIsOn] = useState(false)
  const onToggle = () => setIsOn(!isOn)

  const DollarIcon = (props) => <Dollar color={isOn ? 'primary.base' : 'background.dark'} {...props} />
  const icon = <DollarIcon size={22} />
  const largeIcon = <DollarIcon size={48} />

  return (
    <>
      <h4>Default</h4>
      <Toggle label='Default' isOn={isOn} onToggle={onToggle} />
      <h4>Large</h4>
      <Toggle label='Large' isOn={isOn} onToggle={onToggle} height={50} />
      <h4>With Icon</h4>
      <Toggle label='With Icon' isOn={isOn} onToggle={onToggle} icon={icon} />
      <h4>Large With Icon</h4>
      <Toggle label='Large With Icon' isOn={isOn} onToggle={onToggle} height={50} icon={largeIcon} />
    </>
  )
}
