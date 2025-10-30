export interface Destination {
  id: string;
  name: string;
  region: 'North' | 'South' | 'East' | 'West';
  image: string;
  description: string;
  shortDescription: string;
  price: number;
  history: string;
  culture: string;
  mustVisit: string[];
  bestTime: string;
  localExperiences: string[];
  gallery: string[];
}

export interface WishlistItem {
  destination: Destination;
  addedAt: Date;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  travelers: number;
  travelDate: Date | null;
  destinationId: string;
}
