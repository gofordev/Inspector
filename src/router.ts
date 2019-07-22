import Vue from 'vue';
import Router, { NavigationGuard, Route, RouteConfig } from 'vue-router';

import LoginScreen from './screens/login/LoginScreen.vue';
import ChecksListScreen from './screens/cheks-list/ChecksListScreen.vue';
import ProductScreen from './screens/product/ProductScreen.vue';
import CheckScreen from './screens/check/CheckScreen.vue';
import WizardScreen from './screens/wizard/WizardScreen.vue';
import FinalScreen from './screens/final/FinalScreen.vue';
import KnotsListScreen from './screens/knots-list/KnotsListScreen.vue';
import WizardKnotScreen from './screens/wizard-knot/WizardKnotScreen.vue';
import SupportScreen from './screens/support/SupportScreen.vue';
import QuestionScreen from './screens/question/QuestionScreen.vue';
import QuestionCreateScreen from './screens/question-create/QuestionCreateScreen.vue';
import CheckKnotScreen from './screens/check-knot/CheckKnotScreen.vue';

import {
  checkPage,
  finalPage,
  knotsCheckPage,
  knotsListPage,
  loginPage,
  networkPage,
  productPage,
  rootPage,
  supportPage,
  supportArchivePage,
  questionPage,
  questionCreatePage,
  wizardKnotPage,
  wizardPage,
} from './constants/config';

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: `${rootPage}`,
    name: 'checksListScreen',
    component: ChecksListScreen,
  },
  {
    path: `${networkPage}`,
    name: 'checksListScreen',
    component: ChecksListScreen,
  },
  {
    path: `${loginPage}`,
    name: 'loginScreen',
    component: LoginScreen,
  },
  {
    path: `${productPage}/:id`,
    name: 'productScreen',
    component: ProductScreen,
  },
  {
    path: `${checkPage}/:id`,
    name: 'checkScreen',
    component: CheckScreen,
  },
  {
    path: `${wizardPage}/:operationId/:checkId`,
    name: 'wizardScreen',
    component: WizardScreen,
  },
  {
    path: `${finalPage}/:operationId/:checkId`,
    name: 'finalScreen',
    component: FinalScreen,
  },
  {
    path: `${knotsListPage}`,
    name: 'knotsListScreen',
    component: KnotsListScreen,
  },
  {
    path: `${knotsCheckPage}/:id`,
    name: 'checkKnotScreen',
    component: CheckKnotScreen,
  },
  {
    path: `${wizardKnotPage}/:knotId/:operationId`,
    name: 'wizardKnotScreen',
    component: WizardKnotScreen,
  },
  {
    path: `${supportPage}`,
    name: 'supportScreen',
    component: SupportScreen,
  },
  {
    path: `${supportArchivePage}`,
    name: 'supportArchivePage',
    component: SupportScreen,
  },
  {
    path: `${questionPage}`,
    name: 'questionScreen',
    component: QuestionScreen,
  },
  {
    path: `${questionCreatePage}`,
    name: 'questionCreateScreen',
    component: QuestionCreateScreen,
  },
];

const router: Router = new Router({
  mode: 'history',
  routes,
});

export default router;
