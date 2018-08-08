
export default {
 
   data() {
     return {
      isActive: false,
      menu : {
        accounts : '/accounts-management/',
        reports : '/reports/',
        billing : '/billing/',
        cms : '/cms-accounts/',
        audit : '/audit-trail',
        profile: '/profile', 
     }
    }
  },
  methods: {
    activation(e) {
      $(e.target).closest('.treeview').addClass('active')
    }
  }
}

