// Import Vue
import Vue from 'vue';
import VueSignaturePad from 'vue-signature-pad';
Vue.use(VueSignaturePad);
// https://www.npmjs.com/package/vue2-touch-events
// window.VueSignaturePad = 'VueSignaturePad';
import Vue2TouchEvents from 'vue2-touch-events';
// Vue.use(Vue2TouchEvents);
Vue.use(Vue2TouchEvents, {
    disableClick: false,
    touchClass: '',
    tapTolerance: 10,
    touchHoldTolerance: 400,
    swipeTolerance: 30,
    longTapTimeInterval: 400
});

import {polyfill} from "mobile-drag-drop";

// optional import of scroll behaviour
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour";

// options are optional ;)
polyfill({
    // use this to make use of the scroll behaviour
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});



// // Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

import localForage from 'localforage';
//Import Axios
import axios from 'axios';
 window.axios = axios;


// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);
//https://www.digitalocean.com/community/tutorials/js-localforage


localForage.setItem('testkey', '780431114331994');
localForage.setItem('testkey4', '7fgdsgghfdshgdsf94');


// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),

  // Register App Component
  components: {
    app: App
  },
});
