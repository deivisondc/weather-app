import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('weather', ['weather', 'forecast', 'isLoading', 'isSearchingCity', 'errorMessage']),
  },
  methods: {
  },
};
