import React from 'react'
import { Input } from 'antd'

const InputComponent = (props) => {
    const { placeholder, size, ...rest} = props
  return (
    <div>
        <Input
                placeholder={placeholder}
                size={size}
                style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRight: 'none'
                }}
                {...rest}
        />
    </div>
  )
}

export default InputComponent
