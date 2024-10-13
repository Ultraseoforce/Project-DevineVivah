export interface User {
    _id?: string;
    email?: string;
    created_at?: string;
    tnc_agreed?: boolean;
    category?: string[];
    followers?: number;
    following?: number;
    connections?: number;
    gender?: string;
    joined_at?: string;
    language?: string[];
    location?: UserLocation;
    name?: string;
    phone?: string;
    profile_image?: string;
    username: string;
  }
  
  export interface UserLocation {
    city?: string;
    country?: string;
    state?: string;
    zip?: string | number;
    address?: string;
    coordinates?: string | number;
    _id?: string;
  }
  
  export interface PlatformMetadata {
    _id?: string;
    platform_id?: string;
    about?: string;
    created_at?: string;
    brand_collaborations?: BrandCollaboration[];
    projects?: Projects[];
  
    posts?: string[];
    links?: Projects[];
    medias?: Projects[];
    honors_and_awards?: HonorsAndAwards[];
    __v?: number;
    updated_at?: string;
  }
  
  export interface BrandCollaboration {
    title?: string;
    url?: string;
    logo?: string;
    gallery?: string[];
    highlight?: boolean;
    description?: string;
    _id?: string;
    created_at?: string;
  }
  
  export interface Projects {
    logo?: string;
    title?: string;
    url?: string;
    gallery?: string[];
    highlight?: boolean;
    description?: string;
    _id?: string;
    created_at?: string;
  }
  
  export interface Hlink {
    logo?: string;
    title?: string;
    url?: string;
    image?: string[];
    highlight?: boolean;
    description?: string;
    _id?: string;
    created_at?: string;
  }
  
  export interface HonorsAndAwards {
    logo?: string;
    title?: string;
    url?: string;
    gallery?: string[];
    highlight?: boolean;
    description?: string;
    _id?: string;
    created_at?: string;
  }
  
  export interface UserInfo {
    name: string;
    roles: string[];
    location: { city: string; state: string; country: string };
    category: string[];
    language: string[];
    followers: string;
    connections: string;
  }
  
  export interface Account {
    _id: string;
    email: string;
    blocked: string;
    created_at: Date;
    deleted: boolean;
    roles: [string];
    status: string;
    tnc_agreed: boolean;
    unread_notifications: number;
  }
  
  export interface PlatformLocation {
    city: string;
    country: string;
    state: string;
  }
  
  export interface Platform {
    category: [string];
    connections: number;
    created_at: Date;
    followers: number;
    following: number;
    gender: string;
    joined_at: Date;
    occupation?: string;
    profileHeading?: string;
    contentCategory?: string;
    language: [string];
    location: PlatformLocation;
    name: string;
    profile_image: string;
    cover_photo: string;
    username: string;
    phone: string;
  }
  
  export interface UserProfile {
    account: Account;
    connected?: boolean;
    pending?: boolean;
    blocked?: number;
    following?: boolean;
    platform?: Platform;
    platformMetadata?: PlatformMetadata;
  }
  