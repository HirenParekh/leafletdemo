export const FilterTypeConstants = {
  LISTING_TYPES: 'listingTypes',
  PRICE_RANGE: 'priceRange',
  NO_OF_BEDS: 'noOfBeds',
  NO_OF_BATHS: 'noOfBaths',
  HOME_TYPES: 'homeTypes',
  SQUARE_FEET_RANGE: 'squareFeetRange',
  LOT_SIZE: 'lotSize',
  YEAR_BUILT: 'yearBuilt',
  MAX_HOA: 'maxHOA',
  DAYS_ON_SITE: 'daysOnSite',
  KEYWORDS: 'keywords'
};

export const ListTypeConstants = {
  FOR_SALE: {label: 'For Sale', value: '1', parent: ''},
  BY_AGENT: {label: 'By Agent', value: '2', parent: '1'},
  BY_OWNER: {label: 'By Owner', value: '3', parent: '1'},
  NEW_CONSTRUCTION: {label: 'New Construction', value: '4', parent: '1'},
  FOUR_CLOSURES: {label: 'Fourclosures', value: '5', parent: '1'},
  COMING_SOON: {label: 'Coming Soon', value: '6', parent: '1'},
  POTENTIAL_LISTINGS: {label: 'Potential Listing', value: '7', parent: ''},
  FORE_CLOSED: {label: 'Fourclosed', value: '8', parent: '7'},
  PRE_FORECLOSURE: {label: 'Pew-Foreclosure', value: '9', parent: '7'},
  MAKE_ME_MOVE: {label: 'Fourclosed', value: '10', parent: '7'},
  FOR_RENT: {label: 'For Rent', value: '11', parent: ''},
  RECENTLY_SOLD: {label: 'Recently Sold', value: '12', parent: ''}
};

export const HouseListTypes = [
  {
    type: ListTypeConstants.FOR_SALE,
    subTypes: [
      ListTypeConstants.BY_AGENT,
      ListTypeConstants.BY_OWNER,
      ListTypeConstants.NEW_CONSTRUCTION,
      ListTypeConstants.FOUR_CLOSURES,
      ListTypeConstants.COMING_SOON,
    ]
  },
  {
    type: ListTypeConstants.POTENTIAL_LISTINGS,
    subTypes: [
      ListTypeConstants.FORE_CLOSED,
      ListTypeConstants.PRE_FORECLOSURE,
      ListTypeConstants.MAKE_ME_MOVE
    ]
  },
  {
    type: ListTypeConstants.FOR_RENT,
    subTypes: [],
  },
  {
    type: ListTypeConstants.RECENTLY_SOLD,
    subTypes: [],
  }
];
