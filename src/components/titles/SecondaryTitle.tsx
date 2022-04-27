import React from 'react'

type Props = {
  size?: string,
  color?: string,
  text: string
}

function SecondaryTitle(props: Props) {
  return (
    <h1
      className={`font-bold ${props.size? props.size: 'text-lg'}
                  ${props.color ? props.color : 'text-textPrimary'}
                `}        
    >
      {props.text}
    </h1>
  )
}

export default SecondaryTitle