export const config = {
  title: 'Firebase Playground',
  description: 'A playground for Firebase',
  homeOgUrl: '/assets/logo.png',
  auth: {
    login: {
      redirectLocation: '/user',
    },
    logout: {
      redirectLocation: '/',
    },
  },
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  },
  emulatorHost: process.env.NEXT_PUBLIC_EMULATOR_HOST,
  emulator: process.env.NEXT_PUBLIC_EMULATOR === 'true',
}
