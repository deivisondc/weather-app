import TheDashboard from '@/components/view/dashboard/TheDashboard';
import Weather from '@/components/view/weather/Weather';
import WeatherList from '@/components/view/weather/WeatherList';
import WeatherDetail from '@/components/view/weather/WeatherDetail';
import WeatherNewCity from '@/components/view/weather/WeatherNewCity';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: TheDashboard,
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
    children: [
      {
        path: 'cities',
        name: 'WeatherList',
        component: WeatherList,
      },
      {
        path: 'cities/new',
        name: 'WeatherNewCity',
        component: WeatherNewCity,
      },
      {
        path: 'cities/:cityId',
        name: 'WeatherDetail',
        component: WeatherDetail,
      },
    ],
  },
  {
    path: '*',
    redirect: 'Dashboard',
  },
];

export default routes;
