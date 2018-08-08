import Vue from 'vue'
import Router from 'vue-router'
import LogIn from 'components/login/login.vue';
import SignUp from 'components/signup/signup.vue';
import Password from 'components/forgot/forgot-password.vue';
import AccountsManagement from 'components/accounts/accounts-management.vue';
import Reports from 'components/reports/reports.vue';
import Billing from 'components/billing/billing.vue';
import CMSAccounts from 'components/cms-accounts/cms-accounts.vue';
import AuditTrail from 'components/audit-trail/audit-trail.vue';
import Profile from 'components/profile/profile.vue';
import RequestOption from 'components/request/request.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/forgot-password',
      name: 'Password',
      component: Password
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/accounts-management',
      name: 'AccountsManagement',
      component: AccountsManagement
    },
    {
      path: '/request',
      name: 'requestoption',
      component: RequestOption
    },
    {
      path: '/reports/',
      name: 'reports',
      component: Reports
    },
    {
      path: '/billing',
      name: 'billing',
      component: Billing
    },
    {
      path: '/cms-accounts',
      name: 'cmsaccounts',
      component: CMSAccounts
    },
    {
      path: '/audit-trail',
      name: 'audittrail',
      component: AuditTrail
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
