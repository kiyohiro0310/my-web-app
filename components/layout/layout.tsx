import React, { Fragment, useContext } from 'react'
import Notification from '../notification/notification'
import NotificationContext from '../notification/notification-context'
import MainFooter from './main-footer'
import MainNavigation from './main-navigation'

const Layout: React.FC = (props) => {
  const notificationCtx = useContext(NotificationContext)

  const activeNotification:any = notificationCtx.notification;

  return (
    <Fragment>
        <MainNavigation />
        {props.children}
        <MainFooter />
        {activeNotification && (<Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status}/>)}
    </Fragment>
  )
}

export default Layout