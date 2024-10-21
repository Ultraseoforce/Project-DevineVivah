interface Sibling {
  sibling_id: number;
  member_id: number;
  sibling_name: string;
  sibling_gender: number;
  sibling_age: number;
  sibling_marital_status: number;
  created_at: string;
  updated_at: string;
}

interface Country {
  id: number;
  name: string;
}

interface StateData {
  id: number;
  name: string;
  country_id: number;
}

interface City {
  id: number;
  name: string;
  state_id: number;
  country_id: number;
}

interface Profile {
  mId: number;
  member_name: string;
  member_mobile: string;
  member_email: string;
  member_gender: number;
  dob: string;
  otp: number;
  religion: string;
  caste: string;
  mother_tongue: string;
  height: number;
  weight: number;
  marital_status: number;
  currently_studying: number;
  education_level: string;
  institute: string;
  currently_working: number;
  skill: string;
  office: string;
  salary: string;
  father_name: string;
  mother_name: string;
  father_profession: string;
  mother_profession: string;
  siblings: number;
  about_you: string;
  likes: string;
  dislikes: string;
  smoke: number;
  drink: number;
  interests: string[];
  country_id: number;
  state_id: number;
  city_id: number;
  postalcode: string;
  card_type: number;
  front_photo: string;
  back_photo: string;
  selfie: string;
  profile_photo1: string;
  profile_photo2: string;
  profile_photo3: string;
  profile_photo4: string;
  profile_photo5: string;
  firebase_token: string;
  is_suspended: number;
  is_blacklisted: number;
  is_accepted: number;
  created_at: string;
  updated_at: string;
  member_siblings: Sibling[];
  country: Country;
  state: StateData;
  city: City;
}

interface AuthState {
  user: string | null;
  token: string | null;
  tnc_agreed: boolean;
  profile: Profile | null;
  userList: string[];
  onPlatformPage: boolean;
  unreadMessageCount: number;
}