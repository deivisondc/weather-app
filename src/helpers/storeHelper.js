import { mapGetters } from 'vuex';

export default {
  ...mapGetters('weather', ['weather', 'forecast']),
};
