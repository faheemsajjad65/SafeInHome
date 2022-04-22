import React from 'react'
import Navbar from "../components/shared/Navbar"
import Menu from "../components/shared/Menu"

export const withBaseLayout = (Component, config) => {
  return (props) => {
    return (
      <>
        <Navbar {...config} />
        <Menu {...config} />
        <Component {...props} />
      </>
    )
  }
}