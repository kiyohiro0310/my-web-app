
import React, { createContext, useState, useEffect } from 'react'

interface TypeNotification {
    title: string;
    message: string;
    status: string;
}

const NotificationContext = createContext({
    notification: null,
    showNotification: (data: any) => {},
    hideNotification: () => {}
});

export const NotificationContextProvider: React.FC = (props) => {
    const [ activeNotification, setActiveNotification] = useState<any>(null);

    useEffect(()=>{
        if(activeNotification && (activeNotification.status === "success" || activeNotification.status === "error")){
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [activeNotification])

    function showNotificationHandler(data: any) {
        setActiveNotification(data);
    }
    function hideNotificationHandler() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    };

  return (
    <NotificationContext.Provider value={context}>
        {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext;