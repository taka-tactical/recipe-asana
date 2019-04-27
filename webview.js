'use strict';

module.exports = Franz => {
  function getMessages() {
    let directCount   = document.querySelectorAll("a.SidebarTopNavLinks-notificationsButton--hasNewNotifications").length;
    let indirectCount = document.querySelectorAll("span.DomainsMenuSection-hasNewNotifications").length;

    Franz.setBadge(directCount, indirectCount);
  }

  Franz.loop(getMessages);
};
