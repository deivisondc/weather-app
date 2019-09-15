export default {
  methods: {
    round(value, precision) {
      if (precision && precision > 0) {
        return value ? value.toFixed(precision) : (0).toFixed(precision);
      }
      return value ? Math.round(value) : 0;
    },

    convertMpsToKmh(value) {
      return value * 3.6;
    },
  },
};
