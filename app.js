import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.min.js';
import VueGrd from 'https://cdn.jsdelivr.net/npm/vue-grd@1.2.1/dist/vue-grd.esm.js';
import VueTrim from 'https://cdn.jsdelivr.net/npm/vue-trim@0.2.0/dist/vue-trim.esm.js';

Vue.use(VueGrd);
Vue.use(VueTrim);

const app = new Vue({
  el: '#app',
  data() {
    return {
      file: null,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      scaleX: 0,
      scaleY: 0,
      rotate: 0
    };
  },
  methods: {
    onChange(e) {
      if (e.target.files.length !== 1) {
        return;
      }

      this.file = e.target.files[0];
    },
    onCrop() {
      const data = this.$refs.trim.cropper.getData();

      this.x = data.x;
      this.y = data.y;
      this.width = data.width;
      this.height = data.height;
      this.scaleX = data.scaleX;
      this.scaleY = data.scaleY;
      this.rotate = data.rotate;
    }
  }
});
