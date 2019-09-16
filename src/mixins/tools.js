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

    getWeatherIcon(apiIcon) {
      if (apiIcon) {
        const svgIcon = this.convertApiIconToSvg(apiIcon);

        if (svgIcon !== apiIcon) {
          return require(`@/assets/${svgIcon}`);
          // return require(`@/assets/thunderShowersIcon.svg`);
          // return `@/assets/${svgIcon}`;
        }

        return `${process.env.VUE_APP_OPENWEATHER_BASE_ICON_URL + apiIcon}@2x.png`;
      }
      return null;
    },

    convertApiIconToSvg(apiIcon) {
      switch (apiIcon) {
        case '01d': return 'sunnyIcon.svg';
        case '01n': return 'clearNightIcon.svg';
        case '02d': return 'partlyCloudyIcon.svg';
        case '02n': return 'partlyCloudyNightIcon.svg';
        case '03d': return 'mostlyCloudyIcon.svg';
        case '03n': return 'mostlyCloudyIcon.svg'; // corrigir
        case '04d': return 'showersIcon.svg'; // corrigir
        case '04n': return 'showersIcon.svg'; // corrigir
        case '09d': return 'rainyIcon.svg';
        case '09n': return 'rainyIcon.svg';
        case '10d': return 'sunnyShowersIcon.svg';
        case '10n': return 'sunnyShowersIcon.svg'; // corrigir
        case '11d': return 'thunderShowersIcon.svg';
        case '11n': return 'thunderShowersIcon.svg';
        case '13d': return 'snowShowersIcon.svg';
        case '13n': return 'snowShowersIcon.svg';
        case '50d': return 'windySunnyIcon.svg';
        case '50n': return 'windyIcon.svg';

        default: return apiIcon;
      }
    },
  },
};
