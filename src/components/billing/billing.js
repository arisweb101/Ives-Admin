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
      billing: [{
        account: 'Will John Smith',
        refno: 'Campaign Name 1',
        date: 'April 25, 2018 <br> 05:00 PM',
        company: '123',
        plan: '120',
        moncharges: '0',
        noofminutes: '1,300 Minutes',
        smssent: '2000',
        totmoncharges: 'Php 11,998.00',
        view: `<a href="http://www.google.com">View Invoice</a>`
      },
      {
        account: 'Will John Smith',
        refno: 'Campaign Name 1',
        date: 'April 25, 2018 <br> 05:00 PM',
        company: '123',
        plan: '120',
        moncharges: '0',
        noofminutes: '1,300 Minutes',
        smssent: '2000',
        totmoncharges: 'Php 11,998.00',
        view: `<a href="http://www.google.com">View Invoice</a>`
      },
      {
        account: 'Will John Smith',
        refno: 'Campaign Name 1',
        date: 'April 25, 2018 <br> 05:00 PM',
        company: '123',
        plan: '120',
        moncharges: '0',
        noofminutes: '1,300 Minutes',
        smssent: '2000',
        totmoncharges: 'Php 11,998.00',
        view: `<a href="http://www.google.com">View Invoice</a>`
      },
      {
        account: 'Will John Smith',
        refno: 'Campaign Name 1',
        date: 'April 25, 2018 <br> 05:00 PM',
        company: '123',
        plan: '120',
        moncharges: '0',
        noofminutes: '1,300 Minutes',
        smssent: '2000',
        totmoncharges: 'Php 11,998.00',
        view: `<a href="http://www.google.com">View Invoice</a>`
      },
      {
        account: 'Will John Smith',
        refno: 'Campaign Name 1',
        date: 'April 25, 2018 <br> 05:00 PM',
        company: '123',
        plan: '120',
        moncharges: '0',
        noofminutes: '1,300 Minutes',
        smssent: '2000',
        totmoncharges: 'Php 11,998.00',
        view: `<a href="http://www.google.com">View Invoice</a>`
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


