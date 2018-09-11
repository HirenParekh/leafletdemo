export const StaticInfoOptions = {
  NURSERIES: {label: 'Nurseries', value: 'nurseries', type: 'points'},
  PRE_SCHOOLS: {label: 'Pre-schools', value: 'preSchools', type: 'points'},
  PRIMARY_SCHOOLS: {label: 'Primary schools', value: 'primarySchools', type: 'points'},
  SECONDARY_SCHOOLS: {label: 'Secondary schools', value: 'secondarySchools', type: 'points'},
  COLLEGES: {label: 'Colleges', value: 'colleges', type: 'points'},
  UNIVERSITIES: {label: 'Universities', value: 'colleges', type: 'points'},
  PHARMACY: {label: 'Pharmacy', value: 'pharmacy', type: 'points'},
  DOCTORS: {label: 'Doctors', value: 'doctors', type: 'points'},
  SPECIALIST: {label: 'Specialists', value: 'specialists', type: 'points'},
  VETERINARIES: {label: 'Veterinaries', value: 'veterinaries', type: 'points'},
  BAKERIES: {label: 'Bakeries', value: 'bakeries', type: 'points'},
  BUTCHERIES: {label: 'Butcheries', value: 'butcheries', type: 'points'},
  MARKET: {label: 'Market', value: 'market', type: 'points'},
  SUPERMARKET: {label: 'Supermarket', value: 'supermarket', type: 'points'},
  PARKS: {label: 'Parks', value: 'parks', type: 'points'},
  FORESTS: {label: 'Forests', value: 'forests', type: 'points'},
  BEACHES: {label: 'Beaches', value: 'beaches', type: 'points'},
  BARS: {label: 'Bars', value: 'bars', type: 'points'},
  RESTAURANTS: {label: 'Restaurants', value: 'restaurants', type: 'points'},
  CINEMA: {label: 'Cinema', value: 'cinema', type: 'points'},
  THEATERS: {label: 'Theaters', value: 'theaters', type: 'points'},
  MUSEUMS: {label: 'Museums', value: 'museums', type: 'points'},
  POLICE_STATIONS: {label: 'Police stations', value: 'policeStations', type: 'points'},
  FIRE_STATIONS: {label: 'Fire stations', value: 'fireStations', type: 'points'},
  CLINIC_AND_HOSPITALS: {label: 'Clinic & Hospitals', value: 'clinicAndHospitals', type: 'points'},
  FLOODING_ZONES: {label: 'Flooding zones', value: 'floodingZones', type: 'polygons'},
  SEISMIC_ZONES: {label: 'Seismic zones', value: 'seismicZones', type: 'polygons'},
  STONE_PIC_ZONES: {label: 'Stone-pic zones', value: 'StonePicZones', type: 'polygons'},
  INDUSTRIAL: {label: 'Industrial', value: 'industrial', type: 'polygons'},
  SOUNDS: {label: 'Sounds', value: 'sounds', type: 'polygons'},
  OLFACTORY: {label: 'Olfactory', value: 'olfactory', type: 'polygons'},
  ELECTROMAGNETIC: {label: 'Electromagnetic', value: 'electromagnetic', type: 'polygons'},
  MEDIAN_LISTING_PRICE: {label: 'Median Listing Price', value: 'medianListingPrice', type: 'polygons'},
  MEDIAN_SALE_PRICING: {label: 'Median Sale Price', value: 'medianSalePrice', type: 'polygons'},
  MEDIAN_SALE_PRICING_M2: {label: 'Median Sale Price / m2', value: 'medianSalePriceM2', type: 'polygons'},
  NUMBER_OF_CITIZEN: {label: 'Number of citizen', value: 'noOfCitizen', type: 'polygons'},
  MEDIAN_AGE: {label: 'Median age', value: 'medianAge', type: 'polygons'}
};

export const StaticInfoFilterConstants = {
  SCHOOLS: {
    label: 'Schools', key: 'schools', options: [
      StaticInfoOptions.NURSERIES,
      StaticInfoOptions.PRE_SCHOOLS,
      StaticInfoOptions.PRIMARY_SCHOOLS,
      StaticInfoOptions.SECONDARY_SCHOOLS,
      StaticInfoOptions.COLLEGES,
      StaticInfoOptions.UNIVERSITIES,
    ]
  },
  DAILY_HEALTH: {
    label: 'Daily Health', key: 'dailyHealth', options: [
      StaticInfoOptions.PHARMACY,
      StaticInfoOptions.DOCTORS,
      StaticInfoOptions.SPECIALIST,
      StaticInfoOptions.VETERINARIES
    ]
  },
  FOOD: {
    label: 'Alimentation', key: 'food', options: [
      StaticInfoOptions.BAKERIES,
      StaticInfoOptions.BUTCHERIES,
      StaticInfoOptions.MARKET,
      StaticInfoOptions.SUPERMARKET
    ]
  },
  LIVE_WELL: {
    label: 'Live Well', key: 'liveWill', options: [
      StaticInfoOptions.PARKS,
      StaticInfoOptions.FORESTS,
      StaticInfoOptions.BEACHES,
      StaticInfoOptions.BARS,
      StaticInfoOptions.RESTAURANTS,
      StaticInfoOptions.CINEMA,
      StaticInfoOptions.THEATERS,
      StaticInfoOptions.MUSEUMS
    ]
  },
  SECURITY: {
    label: 'Security', key: 'security', options: [
      StaticInfoOptions.POLICE_STATIONS,
      StaticInfoOptions.FIRE_STATIONS,
      StaticInfoOptions.CLINIC_AND_HOSPITALS
    ]
  },
  HAZARDS: {
    label: 'Hazards', key: 'hazards', options: [
      StaticInfoOptions.FLOODING_ZONES,
      StaticInfoOptions.SEISMIC_ZONES,
      StaticInfoOptions.STONE_PIC_ZONES,
      StaticInfoOptions.INDUSTRIAL
    ]
  },
  POLLUTION: {
    label: 'Pollution', key: 'pollution', options: [
      StaticInfoOptions.SOUNDS,
      StaticInfoOptions.OLFACTORY,
      StaticInfoOptions.ELECTROMAGNETIC
    ]
  },
  AFFORDABILITY: {
    label: 'Affordability', key: 'affordability', options: [
      StaticInfoOptions.MEDIAN_LISTING_PRICE,
      StaticInfoOptions.MEDIAN_SALE_PRICING,
      StaticInfoOptions.MEDIAN_SALE_PRICING_M2
    ]
  },
  STATS: {
    label: 'Stats', key: 'stats', options: [
      StaticInfoOptions.NUMBER_OF_CITIZEN,
      StaticInfoOptions.MEDIAN_AGE
    ]
  }
};
