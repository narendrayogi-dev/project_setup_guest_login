export const IMAGES = {
  splashWave:require('../assets/images/splashWave.png'),
  logo:require('../assets/images/logo.png'), 
  onboarding1:require('../assets/images/image1.png'), 
  onboarding2:require('../assets/images/image2.png'), 
  onboarding3:require('../assets/images/image3.png'), 
  onboardingArrow:require('../assets/images/onboardingArrow.png'), 
  styleArrow:require('../assets/images/styleArrow.png'), 
  onBoardBtn:require('../assets/images/onBoardBtn.png'), 
};

export const FONT_FAMILY = {
  Thin: 'Gordita-Thin',
  Light: 'Gordita-Light',
  Regular: 'Gordita-Regular',
  Medium: 'Gordita-Medium',
  SemiBold: 'Gordita-SemiBold',
  Bold: 'Gordita-Bold',
  ExtraBold: 'Gordita-ExtraBold',
  Black: 'Gordita-Black',
};


interface verificationPasswordParams {
  email: string;
  from: 'register' | 'forgot';
}
interface resetPasswodParams {
  email: string;
}

interface medicineDetailsParams {
  medicineId: string;
  name: string;
  brandName: string;
}
interface feedBackParams {
  medicineId: string;
}
interface DisclaimerParams {
  medicineId: string;
}

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  VerificationPassword: verificationPasswordParams;
  ResetPassword: resetPasswodParams;
  Home: undefined;
};
