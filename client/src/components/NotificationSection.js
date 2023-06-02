import React, { useState, useEffect } from "react";
import { getNotifications } from "./notifications";

function NotificationSection({ userId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // fetch the notifications for the current user
    const userNotifications = getNotifications(userId);
    setNotifications(userNotifications);
  }, [userId]);

  return (
    <div className="notification-section">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>
              New property found: {notification.propertyId} (criteria: {notification.criteria})
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
}

export default NotificationSection;
