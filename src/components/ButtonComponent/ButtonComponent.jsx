import React from 'react'
import { Button } from 'antd'

const ButtonComponent = (props) => {
    const { size,styleButton, StyleTextButton, textButton, icon, ...rest } = props
  return (
    <div>
      <Button
              size={size}
              icon={icon}    
              style={styleButton}
              {...rest}
              >
                <span style={StyleTextButton}>{textButton}</span>
        </Button>
    </div>
  )
}

export default ButtonComponent
