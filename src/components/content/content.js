import contentTemplate from './contentTemplate.js';

const content = {

  /* ------------------------------------------------------------------------ */

  template: contentTemplate,

  /* ------------------------------------------------------------------------ */

  props: {},

  /* ------------------------------------------------------------------------ */

  components: {},

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      subtitle: '',
    };
  },

  /* ------------------------------------------------------------------------ */

  created() {},

  /* ------------------------------------------------------------------------ */

  mounted() {},

  /* ------------------------------------------------------------------------ */

  updated() {},

  /* ------------------------------------------------------------------------ */

  methods: {
    addSubtitle() {
      this.subtitle = this.$t('subtitle');
    },
  },

  /* ------------------------------------------------------------------------ */

}

export default content;
