
import HomePage from '../pages/home.vue';
import ViewdevicePage from '../pages/viewdevice.vue';
import SignaturePage from '../pages/signature.vue';
import DragdropPage from '../pages/dragdrop.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/signature/',
    component: SignaturePage,
  },
  {
    path: '/viewdevice/',
    component: ViewdevicePage,
  },
  {
    path: '/dragdrop/',
    component: DragdropPage,
  }

];

export default routes;
