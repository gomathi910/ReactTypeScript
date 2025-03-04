export interface WeatherData {
    name: string;
    weather: { description: string }[];
    main: { temp: number; humidity: number };
    wind: { speed: number };
}  