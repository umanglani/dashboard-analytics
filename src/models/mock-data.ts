export const countries = [
  {name: 'United States', code: 'us'},
  {name: 'India', code: 'in'},
  {name: 'Brazil', code: 'br'},
  {name: 'United Kingdom', code: 'uk'},
  {name: 'Nepal', code: 'np'},
  {name: 'Italy', code: 'it'},
  {name: 'Austria', code: 'at'},
  {name: 'Demark', code: 'dk'},
  {name: 'Japan', code: 'jp'},
  {name: 'France', code: 'fr'},
  {name: 'Taiwan', code: 'tw'},
  {name: 'Singapore', code: 'sg'}];

export const months = ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22', 'Jul 22', 'Aug 22', 'Sep 22', 'Oct 22', 'Nov 22', 'Dec 22' ];

const GenerateOverviewData = () => {
  const data = [];
  months.map( (month) => {  
    countries.map( (country) => {
      const visitsCount = Math.round(Math.random() * 1000);
      const signupsCount = Math.round(Math.random() * 100);
      const ordersCount = Math.round(Math.random() * 200);
      const enquiresCount = Math.round(Math.random() * 150);

      const profit = Math.round(Math.random() * 900);
    
      data.push({ country, month, visitsCount, signupsCount, ordersCount, enquiresCount, profit });
    })
  })
  return data;
};

export const mockData = {
  overview: GenerateOverviewData(),
  topPerformers: [
    { id: 1, name: 'Kevin Seena', designation: 'Lead Sales APAC', income: 125015, imageSrc: './assets/user1.png' },
    { id: 2, name: 'Paul Slater', designation: 'Marketing Manager', income: 95005, imageSrc: './assets/user2.png' },
    { id: 3, name: 'Sarah Kent', designation: 'Customer Relationship', income: 88682, imageSrc: './assets/user3.png' },
    { id: 4, name: 'Kristine West', designation: 'Customer Relationship', income: 75014, imageSrc: './assets/user4.png' },
  ]
};


export const formatNumber = (number) => {
    const SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    // find tier
    const tier = Math.log10(Math.abs(number)) / 3 | 0;
    // if zero
    if(tier == 0) {
      return number;
    }
    const suffix = SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    return scaled.toFixed(1) + suffix;
}