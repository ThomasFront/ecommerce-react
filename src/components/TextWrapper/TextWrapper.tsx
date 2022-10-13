import React from 'react'
import { TextWrap } from './TextWrapper.styles'

type ChildrenProps = {
  children: React.ReactNode
}

export function TextWrapper({ children }: ChildrenProps) {
  return (
    <TextWrap>{children}</TextWrap>
  )
}
