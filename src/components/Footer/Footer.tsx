import React from 'react'
import { FooterWrapper, TextContainer } from './Footer.styles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <TextContainer>
        <a href="#">Data preferences</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Legal Notice</a>
      </TextContainer>
    </FooterWrapper>
  )
}