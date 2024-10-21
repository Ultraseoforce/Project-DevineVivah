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