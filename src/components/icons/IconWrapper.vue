<template>
  <component
    :is="iconName"/>
</template>

<script>
import ClearNightIcon from '@/components/icons/ClearNightIcon';
import LightningIcon from '@/components/icons/LightningIcon';
import MostlyCloudyIcon from '@/components/icons/MostlyCloudyIcon';
import MostlyCloudyNightIcon from '@/components/icons/MostlyCloudyNightIcon';
import NightShowersIcon from '@/components/icons/NightShowersIcon';
import PartlyCloudyIcon from '@/components/icons/PartlyCloudyIcon';
import PartlyCloudyNightIcon from '@/components/icons/PartlyCloudyNightIcon';
import RainyIcon from '@/components/icons/RainyIcon';
import ShowersIcon from '@/components/icons/ShowersIcon';
import SnowShowersIcon from '@/components/icons/SnowShowersIcon';
import SnowyIcon from '@/components/icons/SnowyIcon';
import SunnyIcon from '@/components/icons/SunnyIcon';
import SunnyShowersIcon from '@/components/icons/SunnyShowersIcon';
import ThunderShowersIcon from '@/components/icons/ThunderShowersIcon';
import WindyIcon from '@/components/icons/WindyIcon';
import WindySunnyIcon from '@/components/icons/WindySunnyIcon';

export default {
  components: {
    ClearNightIcon,
    LightningIcon,
    MostlyCloudyIcon,
    MostlyCloudyNightIcon,
    NightShowersIcon,
    PartlyCloudyIcon,
    PartlyCloudyNightIcon,
    RainyIcon,
    ShowersIcon,
    SnowShowersIcon,
    SnowyIcon,
    SunnyIcon,
    SunnyShowersIcon,
    ThunderShowersIcon,
    WindyIcon,
    WindySunnyIcon,
  },
  props: {
    iconName: ''
  },
};
</script>

<style lang="scss" scoped>

</style>