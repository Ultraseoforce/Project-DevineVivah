interface PersonalDetailsErrors {
  email?: string;
  dob?: string;
  religion?: string;
  caste?: string;
  mothertongue?: string;
  maritalstatus?: string;
  height?: string;
  weight?: string;
  gender?: string;
  dietname?: string
}


interface EducationDetailsErrors {
  studying?: string;
  educationlevel?: string;
  institutename?: string;
}


interface ProfessionDetailsErrors {
  currentlyworking?: string;
  skill?: string;
  officename?: string;
  salary?: string;
}
interface SiblingDetailsErrors {
  name?: string;
  gender?: string;
  age?: string;
  maritalstatus?: string;
}

interface FamilyDetailsErrors {
  fathername?: string;
  mothername?: string;
  siblingsno?: string;
  fatherprofession?: string;
  motherprofession?: string;
}

interface PreferencesErrors {
  abouttext?: string;
  likingstext?: string;
  dislikingstext?: string;
  smokestates?: string;
  drinkstates?: string;
}

interface LocationDetailsErrors {
  country?: string;
  state?: string;
  city?: string;
  postalcode?: string
}


interface PreferencesErrors {
  abouttext?: string;
  likingstext?: string;
  dislikingstext?: string;
  smokestates?: string;
  drinkstates?: string;
}

interface PasswordErrors {
  newPassword?: string,
  confirmPassword?: string
}


interface ForgotPasswordErrors{
  phonenumber: string;
  email?: string;
};



interface ProfileDetails {
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
  diet: number;
  marital_status: number;
  currently_studying: number;
  education_level: string;
  institute: string;
  currently_working: number;
  skill: string;
  office: string;
  position: string;
  salary: string;
  about_family: string;
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
  interests: string;
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
  deleted_at: string | null;
  shortlisted_count: number;
  viewed_count: number;
  is_shortlisted: number;
  is_rejected: number;
  personal_details: number;
  education_details: number;
  profession_details: number;
  family_details: number;
  preferences_details: number;
  location_details: number;
  verification_details: number;
  member_siblings: {
    sibling_id: number;
    member_id: number;
    sibling_name: string;
    sibling_gender: number;
    sibling_age: number;
    sibling_marital_status: number;
    created_at: string;
    updated_at: string;
  }[];
  country: {
    id: number;
    name: string;
  };
  state: {
    id: number;
    name: string;
    country_id: number;
  };
  city: {
    id: number;
    name: string;
    state_id: number;
    country_id: number;
  };
}

