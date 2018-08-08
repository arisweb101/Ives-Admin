import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

export default {
  
  data() {
    return {
      urls: {
        forgotpassword : '/forgot-password',
        signup : '/sign-up'
      }
    }
    
  },
  methods: {
    showhide: function(evt) {
      $(evt.target).parent().find('#password').attr('type', 'text');
      $(evt.target).find('i').css('color' , 'red')
    }
 }
}



