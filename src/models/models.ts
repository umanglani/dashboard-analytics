export interface User {
  id: number;
  fullName: string;
  email: string;
  imageSrc: string;
  designation: string;
}

export interface OverviewData {
  country: string;
  month: string;
  
  visitsCount: number;
  signupsCount: number;
  ordersCount: number;
  enquiryCount: number;
  profit: number;
}

export enum OverviewDataType {
  visits = 'Website Visited',
  signups = 'New Signups',
  orders = 'New Orders',
  enquires = 'New Enquires',
  profit = 'Profit'
}

export enum VisitType {
  seo = 'SEO',
  referral = 'Referral',
  newuser = 'New User',
  existinguser = 'Existing User',
}

// -------------------------------------------

export interface TopPerformer {
  user: User;
  clientsServed: number;
  revenue: number;
}

export interface Tab {
  id: string;
  title: string;
  active: boolean;
  route?: string;
}