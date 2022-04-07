import React, { Fragment } from 'react'
import MainNavigation from './main-navigation'

const Layout: React.FC = (props) => {
  return (
    <Fragment>
        <MainNavigation />
        {props.children}
    </Fragment>
  )
}

export default Layout