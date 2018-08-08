export default {
  props: {
    createPage1: {
      type: Boolean,
      default: function(val) {
        this.createpage1 = val;
      }
    },
    toggleFormPage: {
      type: Function,
      default: function(val) {
        console.log('tmp');
      }
    }
  },
  data() {
    return {
      selectedonlabel: '',
      plans: [
        {
          label: 'Basic',
          charges: '1,599.00',
          minutes: '3000',
          smsmt: '3000',
          limit: '2MB',
          cutoff: '22 July 2018'
        },
        {
          label: 'Premium',
          charges: '2,599.00',
          minutes: '6000',
          smsmt: '6000',
          limit: '4MB',
          cutoff: '22 August 2018'
        },
        {
          label: 'Enterprise',
          charges: '3,599.00',
          minutes: '10000',
          smsmt: '10000',
          limit: '4MB',
          cutoff: '22 December 2018'
        }],
    }
  },
  computed: {
    details: function () {
      if (!this.selectedonlabel) {
        return {
          label: '0',
          charges: '0',
          minutes: '0',
          smsmt: '0',
          limit: '0',
          cutoff: ''
        }
      }
      return this.plans.find(varplan => varplan.label == this.selectedonlabel)
    }
  },
  methods: {
     selectedplan: function(plan) {
      this.selectedonlabel = plan  
     }
  }
}