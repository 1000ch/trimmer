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
      quality: 90
    };
  },
  methods: {
    onChange(e) {
      if (e.target.files.length !== 1) {
        return;
      }

      this.file = e.target.files[0];
    },
    onClick() {
      if (this.file === null) {
        return;
      }

      const { cropper } = this.$refs.trim;
      cropper.getCroppedCanvas().toBlob(blob => {
        const a = document.createElement('a');
        a.download = this.file.name;
        a.href = URL.createObjectURL(blob);
        a.click();
      }, this.file.type, this.quality);
    }
  }
});
