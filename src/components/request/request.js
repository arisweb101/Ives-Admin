import headertemp from '../header/header.vue';
import menutemp from '../menu/menu.vue';
import footertemp from '../footer/footer.vue';

export default {
  data() {
    return {      
      request: [{
        request: 'Plan Activation',
        details: '<b>Plan</b> Enterprise<br> <b>Call<b> 20,000 <br> <b>SMS<b> 20,000',
        documents: '',
        reqoption:''
      },
      {
        request: 'Caller ID',
        details: '<b>Number</b> 0915677',
        documents: '',
        reqoption:''
      },
      {
        request: 'SMS',
        details: 'Campaign Name 1',
        documents: '',
        reqoption:''
      },
      {
        request: 'Caller ID',
        details: '<b>Plan</b> Enterprise<br> <b>Call<b> 20,000 <br> <b>SMS<b> 20,000',
        documents: '',
        reqoption:''
      },
      {
        request: 'Will John Smith',
        details: '<b>Number</b> 0915677',
        documents: '',
        reqoption:''
      }
    ],
    }
  },
  components: {
    headertemp,
    menutemp,
    footertemp
  },
  mounted: function() {

    var vm = this;
    
    // Pass dynamic html to Data
    vm.request = vm.request.map(req => {
      return Object.assign({}, req, {
        reqoption: '<div class="reqoption"><button type="button" class="approve">Approve</button><button type="button" class="decline">Decline</button></div>'
      })
    })
  }
  
}