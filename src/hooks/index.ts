import {useQuery} from 'react-query';
import ky from 'ky';

export interface Location {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
  };
  temp: number;
  weather: [
    {
      description: string;
    },
  ];
}

export function useLocations() {
  const {data, ...rest} = useQuery('location', () =>
    ky
      .get(
        'https://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=07bfc8125e4b10b2eba1ae3b862373fb',
      )
      .json<{list: Location[]}>()
      .then(resp => {
        return {
          ...resp,
          list: resp.list.map(location => ({
            ...location,
            temp: (5 / 9) * (location.main.temp - 32),
          })),
        };
      }),
  );

  return {
    locations: data?.list ?? [],
    ...rest,
  };
}
