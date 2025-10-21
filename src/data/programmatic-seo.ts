// Programmatic SEO data for UK locations and SEO services
// Start with top 20 locations for testing
export const ukLocations = [
  // Major cities
  "london", "manchester", "birmingham", "leeds", "glasgow", "edinburgh", 
  "liverpool", "bristol", "cardiff", "belfast", "newcastle", "sheffield",
  "nottingham", "leicester", "coventry", "bradford", "hull", "plymouth",
  "southampton", "portsmouth", "derby", "brighton", "norwich", "swansea",
  "exeter", "york", "bath", "cambridge", "oxford", "canterbury",
  
  // High-search-volume counties
  "sussex", "hampshire", "kent", "essex", "surrey", "berkshire", "buckinghamshire",
  "hertfordshire", "bedfordshire", "cambridgeshire", "norfolk", "suffolk",
  "devon", "cornwall", "somerset", "dorset", "wiltshire", "gloucestershire",
  "worcestershire", "warwickshire", "staffordshire", "shropshire", "herefordshire",
  "cheshire", "lancashire", "yorkshire", "durham", "northumberland", "cumbria",
  "lincolnshire", "nottinghamshire", "derbyshire", "leicestershire", "rutland",
  "northamptonshire", "oxfordshire", "west-midlands", "merseyside", "greater-manchester",
  "tyne-and-wear", "west-yorkshire", "south-yorkshire", "north-yorkshire",
  "east-yorkshire", "humberside", "cleveland", "county-durham", "northumberland",
  
  // Popular areas
  "cotswolds", "lake-district", "peak-district", "new-forest", "south-downs",
  "norfolk-broads", "yorkshire-dales", "north-york-moors", "exmoor", "dartmoor"
].slice(0, 20); // Start with top 20 for testing

export const seoServiceTypes = [
  "local-seo", "ecommerce-seo", "saas-seo", "lawyer-seo", "dentist-seo",
  "plumber-seo", "restaurant-seo", "hotel-seo", "fitness-seo", "beauty-seo"
].slice(0, 10); // Start with top 10 services for testing

export const locationDisplayNames = {
  "london": "London",
  "manchester": "Manchester", 
  "birmingham": "Birmingham",
  "leeds": "Leeds",
  "glasgow": "Glasgow",
  "edinburgh": "Edinburgh",
  "liverpool": "Liverpool",
  "bristol": "Bristol",
  "cardiff": "Cardiff",
  "belfast": "Belfast",
  "newcastle": "Newcastle",
  "sheffield": "Sheffield",
  "nottingham": "Nottingham",
  "leicester": "Leicester",
  "coventry": "Coventry",
  "bradford": "Bradford",
  "hull": "Hull",
  "plymouth": "Plymouth",
  "southampton": "Southampton",
  "portsmouth": "Portsmouth",
  "derby": "Derby",
  "brighton": "Brighton",
  "norwich": "Norwich",
  "swansea": "Swansea",
  "exeter": "Exeter",
  "york": "York",
  "bath": "Bath",
  "cambridge": "Cambridge",
  "oxford": "Oxford",
  "canterbury": "Canterbury",
  "sussex": "Sussex",
  "hampshire": "Hampshire",
  "kent": "Kent",
  "essex": "Essex",
  "surrey": "Surrey",
  "berkshire": "Berkshire",
  "buckinghamshire": "Buckinghamshire",
  "hertfordshire": "Hertfordshire",
  "bedfordshire": "Bedfordshire",
  "cambridgeshire": "Cambridgeshire",
  "norfolk": "Norfolk",
  "suffolk": "Suffolk",
  "devon": "Devon",
  "cornwall": "Cornwall",
  "somerset": "Somerset",
  "dorset": "Dorset",
  "wiltshire": "Wiltshire",
  "gloucestershire": "Gloucestershire",
  "worcestershire": "Worcestershire",
  "warwickshire": "Warwickshire",
  "staffordshire": "Staffordshire",
  "shropshire": "Shropshire",
  "herefordshire": "Herefordshire",
  "cheshire": "Cheshire",
  "lancashire": "Lancashire",
  "yorkshire": "Yorkshire",
  "durham": "Durham",
  "northumberland": "Northumberland",
  "cumbria": "Cumbria",
  "lincolnshire": "Lincolnshire",
  "nottinghamshire": "Nottinghamshire",
  "derbyshire": "Derbyshire",
  "leicestershire": "Leicestershire",
  "rutland": "Rutland",
  "northamptonshire": "Northamptonshire",
  "oxfordshire": "Oxfordshire",
  "west-midlands": "West Midlands",
  "merseyside": "Merseyside",
  "greater-manchester": "Greater Manchester",
  "tyne-and-wear": "Tyne and Wear",
  "west-yorkshire": "West Yorkshire",
  "south-yorkshire": "South Yorkshire",
  "north-yorkshire": "North Yorkshire",
  "east-yorkshire": "East Yorkshire",
  "humberside": "Humberside",
  "cleveland": "Cleveland",
  "county-durham": "County Durham",
  "cotswolds": "Cotswolds",
  "lake-district": "Lake District",
  "peak-district": "Peak District",
  "new-forest": "New Forest",
  "south-downs": "South Downs",
  "norfolk-broads": "Norfolk Broads",
  "yorkshire-dales": "Yorkshire Dales",
  "north-york-moors": "North York Moors",
  "exmoor": "Exmoor",
  "dartmoor": "Dartmoor"
};

export const serviceDisplayNames = {
  "local-seo": "Local SEO",
  "ecommerce-seo": "E-commerce SEO", 
  "saas-seo": "SaaS SEO",
  "lawyer-seo": "Lawyer SEO",
  "dentist-seo": "Dentist SEO",
  "plumber-seo": "Plumber SEO",
  "restaurant-seo": "Restaurant SEO",
  "hotel-seo": "Hotel SEO",
  "fitness-seo": "Fitness SEO",
  "beauty-seo": "Beauty SEO",
  "auto-repair-seo": "Auto Repair SEO",
  "real-estate-seo": "Real Estate SEO",
  "accountant-seo": "Accountant SEO",
  "consultant-seo": "Consultant SEO",
  "contractor-seo": "Contractor SEO",
  "electrician-seo": "Electrician SEO",
  "hvac-seo": "HVAC SEO",
  "landscaping-seo": "Landscaping SEO",
  "cleaning-seo": "Cleaning SEO",
  "moving-seo": "Moving SEO",
  "insurance-seo": "Insurance SEO",
  "financial-seo": "Financial SEO",
  "healthcare-seo": "Healthcare SEO",
  "education-seo": "Education SEO",
  "retail-seo": "Retail SEO",
  "manufacturing-seo": "Manufacturing SEO"
};

// Generate all possible combinations for sitemap
export function generateAllPages() {
  const pages: Array<{
    url: string;
    title: string;
    description: string;
    location?: string;
    service?: string;
  }> = [];
  
  // Location-based SEO pages
  ukLocations.forEach(location => {
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
    pages.push({
      url: `/seo-services/${location}`,
      title: `Best SEO Services in ${locationName} | AutomateSEO.co`,
      description: `Professional SEO services in ${locationName}. We help businesses in ${locationName} rank higher on Google with our proven programmatic SEO approach.`,
      location: locationName
    });
  });
  
  // Service + Location combinations
  seoServiceTypes.forEach(service => {
    const serviceName = serviceDisplayNames[service as keyof typeof serviceDisplayNames];
    ukLocations.forEach(location => {
      const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
      pages.push({
        url: `/seo-services/${service}/${location}`,
        title: `${serviceName} Services in ${locationName} | AutomateSEO.co`,
        description: `Professional ${serviceName} services in ${locationName}. We help ${serviceName.toLowerCase()} businesses in ${locationName} dominate local search results.`,
        service: serviceName,
        location: locationName
      });
    });
  });
  
  return pages;
}
