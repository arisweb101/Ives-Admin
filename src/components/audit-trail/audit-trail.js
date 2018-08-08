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
      audit: [{
        module: 'Module 6',
        action: 'edit',
        details: "In today's net savvy world it has become common for any business",
        datetime: 'April 24, 2018 <br> 00:45AM',
        cmsuser: 'Claudia Harvey',
      },
      {
        module: 'Module 3',
        action: 'delete',
        details: "In today's net savvy world it has become common for any business",
        datetime: 'April 24, 2018 <br> 00:45AM',
        cmsuser: 'Claudia Harvey',
      },
      {
        module: 'Module 2',
        action: 'Change Profile',
        details: "In today's net savvy world it has become common for any business",
        datetime: 'April 24, 2018 <br> 00:45AM',
        cmsuser: 'Claudia Harvey',
      },
      {
        module: 'Module 4',
        action: 'Add Account',
        details: "In today's net savvy world it has become common for any business",
        datetime: 'April 24, 2018 <br> 00:45AM',
        cmsuser: 'Claudia Harvey',
      },
      {
        module: 'Module 5',
        action: 'edit',
        details: "In today's net savvy world it has become common for any business",
        datetime: 'April 24, 2018 <br> 00:45AM',
        cmsuser: 'Claudia Harvey',
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


