import React, { Fragment } from 'react'
import MainFooter from './main-footer'
import MainNavigation from './main-navigation'

const Layout: React.FC = (props) => {
  return (
    <Fragment>
        <MainNavigation />
        {props.children}
        <MainFooter />
    </Fragment>
  )
}

export default Layout