// import { UserProfile } from "./user.model";
// import { User } from "./user.model";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  user: any | null;
  tnc_agreed: boolean;
  profile: any | null;
  userList: Array<Conversation>;
  onPlatformPage: boolean;
  unreadMessageCount: number;
}

export interface BuyerAuthState {
  token: string | null;
  user: any | null;
  // info: profileInfo;
}

export interface profileInfo {
  __v: number;
  _id: string;
  avatar: string;
  dob: string;
  email: any;
  firstName: string;
  isVerified: boolean;
  lastName: any;
  location: string;
  phone: any;
  role: string;
  status: string;
}

export enum AccountStatus {
  ONLINE = "online",
  OFFLINE = "offline",
}

export interface ConversationUser {
  username: string;
  name: string;
  profile_image: string;
  status: AccountStatus;
}

export type Message = {
  text?: string;
  created_at?: Date;
  unread_count?: number;
  send_by?: String;
  receive_by?: String;
};

export interface Conversation {
  user: ConversationUser;
  message?: Message;
}
