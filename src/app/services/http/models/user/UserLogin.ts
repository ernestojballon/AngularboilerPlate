export interface UserModel {
  userId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  photoUrl: string;
  creationDate: string;
  userCode: string;
  password?: string;
  totalMerchantRegistered?: number;
  totalReviews?: number;
  averageStar?: number;
}

export interface PageModel {
  pageId: number;
  pageName: string;
}

export interface AuthModel {
  token: string;
  type: string;
  creationDate: string;
  expirationDate: string;
}

export interface LoginModel {
  user: UserModel;
  pages: PageModel[];
  authorization: AuthModel;
}