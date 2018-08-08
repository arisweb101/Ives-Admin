<template>
   <div class="main-header">
      <!-- Logo -->
      <a href="/" class="logo dark-bg-color">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini">
          <img src="/static/images/ives_logo.png">
        </span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg">
          <img src="/static/images/ic_logo_ives_white.svg">
        </span>
      </a>

      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top light-bg-color">
        <!-- Sidebar toggle button-->
        <a href="#" data-toggle="offcanvas" role="button" id="menu-toggle">
          <img src="/static/images/ic_keyboard_arrow_left_black.svg">
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- User Account: style can be found in dropdown.less -->
            <li class="dropdown user user-menu">
              <div class="profile">
                <div id="notif-wrap1">
                  <a id="notification-toggle">
                    <img src="/static/images/ic_notifications.svg">
                    <div class="notif-num">2</div>
                  </a>
                  <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Notification Popup-->
                  <div id="notification-popup">
                    <!-- <img class="notif-pointer" src="/static/images/notif-pointer.png"> -->
                    <div class="notif-header">
                      <img src="/static/images/ic_notification.svg">Notifications
                    </div>
                    <div class="notification-wrap">
                      <div class="notification-item">
                        <div>
                          <img src="/static/images/ic_dummy.svg">
                        </div>
                        <div class="details">
                          Successfully completed your profile.
                        </div>
                      </div>
                      <div class="notification-item">
                        <div>
                          <img src="/static/images/ic_dummy.svg">
                        </div>
                        <div class="details">
                          Successfully completed your profile.
                        </div>
                      </div>
                    </div>
                    <div style="text-align: center;padding: 12px 0 6px;">
                      <a href="dashboard-activities.html">View more activities</a>
                    </div>
                  </div>
                </div>
                <a href="dashboard-profile.html" id="profile-btn">
                  <div>J</div>
                </a>
                <a href="" id="logout-btn">
                  <img src="/static/images/ic_exit.svg">
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>
<script type="text/javascript" scr="./header.js"></script>