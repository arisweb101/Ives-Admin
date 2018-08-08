import headertemp from '../header/header.vue';
import menutemp from '../menu/menu.vue';
import footertemp from '../footer/footer.vue';

export default {
  data() {
    return {
      selectitem: '5',
      showitems: [
        { option: '5' },
        { option: '10'},
        { option: '15'},
        { option: '20'}
      ],
      cmsaccounts: [{
        name: 'Will John Smith',
        email: 'wjsmith@globe.com.ph',
        mobile: '09179837483',
        accessright: 'User Management Billing',
        upassword: 'Reset Password',
        option: 'sdf'
      },
      {
        name: 'Will John Smith',
        email: 'wjsmith@globe.com.ph',
        mobile: '09179837483',
        accessright: 'Admin',
        upassword: 'Reset Password',
        option: 'sdf'
      },
      {
        name: 'Will John Smith',
        email: 'wjsmith@globe.com.ph',
        mobile: '09179837483',
        accessright: 'Audit <br> Reports',
        upassword: 'Reset Password',
        option: 'sdf'
      },
      {
        name: 'Will John Smith',
        email: 'wjsmith@globe.com.ph',
        mobile: '09179837483',
        accessright: 'Billing <br> Reports',
        upassword: 'Reset Password',
        option: 'sdf'
      },
      {
        name: 'Will John Smith',
        email: 'wjsmith@globe.com.ph',
        mobile: '09179837483',
        accessright: 'User Management',
        upassword: 'Reset Password',
        option: 'sdf'
      },
    ],
    }
  },
  components: {

   headertemp,
   menutemp,
   footertemp,

  }

}


