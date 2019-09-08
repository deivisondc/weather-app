import TheDashboard from "@/components/view/dashboard/TheDashboard";
import Weather from "@/components/view/weather/Weather";
import WeatherDetail from "@/components/view/weather/WeatherDetail";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: TheDashboard,
  },
  {
    path: "/weather",
    name: "Weather",
    component: Weather,
    children: [
      {
        path: ":cityId",
        name: "WeatherDetail",
        component: WeatherDetail
      }
    ]
  },
  {
    path: "*",
    redirect: "Dashboard",
  },
];

export default routes;