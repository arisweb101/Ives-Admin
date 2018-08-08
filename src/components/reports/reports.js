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
      reports: [{
        user: 'Will John Smith',
        campaign: 'Campaign Name 1',
        datetime: 'April 25, 2018 <br> 05:00 PM',
        uploadedno: '123',
        success: '120',
        failed: '0',
        totalminutes: '1,300 Minutes',
        download: ''
      },
      {
        user: 'Will John Smith',
        campaign: 'Campaign Name 1',
        datetime: 'April 25, 2018 <br> 05:00 PM',
        uploadedno: '123',
        success: '120',
        failed: '0',
        totalminutes: '1,300 Minutes',
        download: ''
      },
      {
        user: 'Will John Smith',
        campaign: 'Campaign Name 1',
        datetime: 'April 25, 2018 <br> 05:00 PM',
        uploadedno: '123',
        success: '120',
        failed: '0',
        totalminutes: '1,300 Minutes',
        download: ''
      },
      {
        user: 'Will John Smith',
        campaign: 'Campaign Name 1',
        datetime: 'April 25, 2018 <br> 05:00 PM',
        uploadedno: '123',
        success: '120',
        failed: '0',
        totalminutes: '1,300 Minutes',
        download: ''
      },
      {
        user: 'Will John Smith',
        campaign: 'Campaign Name 1',
        datetime: 'April 25, 2018 <br> 05:00 PM',
        uploadedno: '123',
        success: '120',
        failed: '0',
        totalminutes: '1,300 Minutes',
        download: ''
      }
    ],
    }
  },
  components: {

   headertemp,
   menutemp,
   footertemp,

  },
  mounted: function() {
    
    var vm = this;

    vm.reports = vm.reports.map(rep => {
      return Object.assign({}, rep, {
         download: `<img src="/static/images/download.png">`
      })
    })

  }
  
}


