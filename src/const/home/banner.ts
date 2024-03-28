export const bannerData = {
  HeadLine: 'Find Your Haven With Heavnt',
  subTitle: 'sjajsakjslajsljalsjajsljasjajsl',
  Action:[
    {
      title: 'Location',
      type: 'text',
      placeHolders: 'Search Your Home',
      onChange: (e: any) => {
        console.log(e.target.value)
      }
    },
    {
      title: 'Bath Rooms',
      type: 'dropdown',
      values:["1", "2 ", "3", "4", "5", "6",],
      onChange: (e: any) => {
        console.log(e.target.value)
      }
    },
    {
      title: 'Rooms',
      type: 'dropdown',
      values:["1", "2 ", "3", "4", "5", "6",],
      onChange: (e: any) => {
        console.log(e.target.value)
      }
    },
    {
      title: 'Rooms',
      type: 'dropdown',
      values:["1", "2 ", "3", "4", "5", "6",],
      onChange: (e: any) => {
        console.log(e.target.value)
      }
    },
  ]
}