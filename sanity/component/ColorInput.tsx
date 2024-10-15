import React from 'react'
import {SketchPicker, ColorResult} from 'react-color'

interface ColorInputProps {
  type: {
    title: string
  }
  value: string
  onChange: (color: string) => void
}

const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>((props, ref) => {
  const {type, value, onChange} = props

  const handleChange = (color: ColorResult) => {
    onChange(color.hex)
  }

  return (
    <div>
      <h2>{type?.title || 'Default Title'}</h2>
      <SketchPicker color={value} onChange={handleChange} />
    </div>
  )
})

export default ColorInput
