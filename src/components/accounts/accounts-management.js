import headertemp from '../header/header.vue';
import menutemp from '../menu/menu.vue';
import footertemp from '../footer/footer.vue';
import createaccount from '../modals/create-account.vue';

export default {
  components: {

    headertemp,
    menutemp,
    footertemp,
    createaccount
    },
  data() {
    return {
      requestpage: '/request',
      createpage1: true,
      selectitem: '5',
      showitems: [
        { option: '5' },
        { option: '10'},
        { option: '15'},
        { option: '20'}
      ],
      accounts: [{
        fullname: 'Will John Smith',
        email: 'jsmith@globe.com.ph',
        mobilenumber: '0915 123 4567',
        company: 'Globe Telecom',
        designation: 'Project Manager',
        smsmask: '123',
        id: '456',
        plantype: '0',
        status: 'Active',
        option: ''
      }, {
        fullname: 'Will John Smith',
        email: 'jsmith@globe.com.ph',
        mobilenumber: '0915 123 4567',
        company: 'Globe Telecom',
        designation: 'Project Manager',
        smsmask: '123',
        id: '456',
        plantype: '0',
        status: 'Active',
        option: `` 
      }, {
        fullname: 'Will John Smith',
        email: 'jsmith@globe.com.ph',
        mobilenumber: '0915 123 4567',
        company: 'Globe Telecom',
        designation: 'Project Manager',
        smsmask: '123',
        id: '456',
        plantype: '0',
        status: 'Active',
        option: `` 
      }, {
        fullname: 'Will John Smith',
        email: 'jsmith@globe.com.ph',
        mobilenumber: '0915 123 4567',
        company: 'Globe Telecom',
        designation: 'Project Manager',
        smsmask: '123',
        id: '456',
        plantype: '0',
        status: 'Active',
        option: `` 
      }, {
        fullname: 'Will John Smith',
        email: 'jsmith@globe.com.ph',
        mobilenumber: '0915 123 4567',
        company: 'Globe Telecom',
        designation: 'Project Manager',
        smsmask: '123',
        id: '456',
        plantype: '0',
        status: 'Active',
        option: `` 
      }]
    }
  },
  methods: {
    showCreateForm: function(val) {
      this.toggleFormPage(val);
    },
    toggleFormPage: function(val) {
      this.createpage1 = val;
    }
  },
  mounted: function() {
    var vm = this;
    $(function() {
      $('#edit-option').on('click', function() {
          console.log('this',vm.toggleFormPage(true))
       });
        
       $('body').on('keypress', '.mobile-list input', function (e) {
  
        var regex = new RegExp("^[0-9\n.,\r\n!\b]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
          return true;
        }
          e.preventDefault();
          return false;
      }); 

      vm.accounts = vm.accounts.map(acc => {
        return Object.assign({}, acc, {
          option: `<ul class='account-options'>
          <li>
            <span class='request-account'>
            <a routerLink href="${vm.requestpage}"><img src='/static/images/request-icon.png'></a>
            </span>
          </li>
          <li>
            <span class='edit-account'>
            <a data-toggle="modal" id="edit-option" data-target="#create-account" @:click="showCreateForm(true)"><img src='/static/images/edit-icon.png'></a>
            </span>
          </li>
          <li>
            <span class='delete-account'>
              <img src='/static/images/delete-icon.png'>
            </span>
          </li>
          </ul>`,
        });
      })
    });
   }
}


