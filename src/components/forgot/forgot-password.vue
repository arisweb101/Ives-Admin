<template>
 <div class="login-page signup">
    <div class="login-body clear-fix">
        <div class="nav">
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      <div class="left-col">
        <div class="">
          <img src="/static/images/ic_logo_ives.svg" id="brand-logo">
          <h3><strong>Forgot your password?</strong></h3>
          <p>Enter your email below to receive your password reset instructions.</p>
          <form>
            <div class="form-item">
              <label for="email" style="text-align: left;">E-MAIL</label>
              <input type="email" id="email" required>
            </div>
            <input type="submit" value="Send" class="blue-btn" style="width: 250px !important;margin-top: 24px;">
          </form>
        </div>
      </div>
      <div class="right-col">
          <div class="gadget-images">
            <img src="/static/images/tablet.svg" id="img-tablet" data-aos="fade-up" data-aos-duration="500">
            <img src="/static/images/phone.svg" id="img-phone" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
          </div>
      </div>
      <!-- <div class="background">
      </div> -->
        <svg  class="background" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" version="1.1" baseProfile="full" style="height:490px;width:1150px;">
          <defs>
              <pattern id="img1" patternUnits="userSpaceOnUse" width="1150" height="490">
                  <image xlink:href="/static/images/bg.jpg" x="-100" y="0" width="1150" height="580"/><!-- Image from http://silviahartmann.com/background-tile/6-grass-meadow-tile.php-->
              </pattern>
          </defs>
         <path xmlns="http://www.w3.org/2000/svg" d="M0,0 575,490 1150,0" fill="url(#img1)"/> 
      </svg>
    </div>
    <div class="footer">
      <span>Copyright © 2018. All rights reserved.</span>
      <div id="footer-logo">Powered by <img src="/static/images/globe_labs.svg"></div>
    </div>
  </div>
</template>
<script type="text/javascript" src="./forgot-password.js"></script>
<style scope>
  @import '../../assets/css/styles.css';
</style>