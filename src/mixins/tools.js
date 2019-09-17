function convertApiIconToSvg(apiIcon) {
  switch (apiIcon) {
    case '01d': return 'SunnyIcon';
    case '01n': return 'ClearNightIcon';
    case '02d': return 'PartlyCloudyIcon';
    case '02n': return 'PartlyCloudyNightIcon';
    case '03d': return 'MostlyCloudyIcon';
    case '03n': return 'MostlyCloudyNightIcon';
    case '04d': return 'MostlyCloudyIcon'; // corrigir
    case '04n': return 'MostlyCloudyNightIcon'; // corrigir
    // case '04d': return 'ShowersIcon';
    // case '04n': return 'ShowersIcon';
    case '09d': return 'RainyIcon';
    case '09n': return 'RainyIcon';
    case '10d': return 'SunnyShowersIcon';
    case '10n': return 'NightShowersIcon';
    case '11d': return 'ThunderShowersIcon';
    case '11n': return 'ThunderShowersIcon';
    case '13d': return 'SnowShowersIcon';
    case '13n': return 'SnowShowersIcon';
    case '50d': return 'WindySunnyIcon';
    case '50n': return 'WindyIcon';

    default: return apiIcon;
  }
};

export default {
  methods: {
    isNightTime() {
      return this.$moment().hours() >= 18;
    },
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
        const svgIcon = convertApiIconToSvg(apiIcon);
        return svgIcon;
      }
      return null;
    },
  },
};
