type WxRealtime = {
	location: WxLocation,
	current: WxCurrent
};

type WxLocation = {
	name: string;
	region: string;
	Country: string;
	lat: number;
	lon: number;
	tz_id: string;
	localtime_epoch: number;
	localtime: string;
};

type WxCurrent = {
	last_updated_epoch: number;
	localtime: string;
	temp_c: number;
	temp_f: number;
	is_day: number;
	condition: WxCondition;

	wind_mph: number;
	wind_kph: number;
	wind_degree: number;
	wind_dir: string;
	pressure_mb: number;
	pressure_in: number;
	precip_mm: number;
	precip_in: number;
	humidity: number;
	cloud: number;
	feelslike_c: number;
	feelslike_f: number;
	vis_km: number;
	vis_miles: number;
	uv: number;
	gust_mph: number;
	gust_kph: number;
};

type WxCondition = {
	text: string,
	icon: string,
	code: number
};

/*
"wind_mph": 6.9,
		"wind_kph": 11.2,
		"wind_degree": 180,
		"wind_dir": "S",
		"pressure_mb": 1018,
		"pressure_in": 30.06,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 49,
		"cloud": 0,
		"feelslike_c": 24.6,
		"feelslike_f": 76.3,
		"vis_km": 16,
		"vis_miles": 9,
		"uv": 6,
		"gust_mph": 8.9,
		"gust_kph": 14.4

	"location": {
		"name": "Seattle",
		"region": "Washington",
		"country": "United States of America",
		"lat": 47.61,
		"lon": -122.33,
		"tz_id": "America/Los_Angeles",
		"localtime_epoch": 1694376327,
		"localtime": "2023-09-10 13:05"
	},
	"current": {
		"last_updated_epoch": 1694376000,
		"last_updated": "2023-09-10 13:00",
		"temp_c": 22.2,
		"temp_f": 72,
		"is_day": 1,
		"condition": {
			"text": "Sunny",
			"icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
			"code": 1000
		},
		"wind_mph": 6.9,
		"wind_kph": 11.2,
		"wind_degree": 180,
		"wind_dir": "S",
		"pressure_mb": 1018,
		"pressure_in": 30.06,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 49,
		"cloud": 0,
		"feelslike_c": 24.6,
		"feelslike_f": 76.3,
		"vis_km": 16,
		"vis_miles": 9,
		"uv": 6,
		"gust_mph": 8.9,
		"gust_kph": 14.4
	}
}
*/