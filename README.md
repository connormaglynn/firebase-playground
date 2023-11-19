[![Deploy to Firebase Hosting on merge](https://github.com/connormaglynn/firebase-playground/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/connormaglynn/firebase-playground/actions/workflows/firebase-hosting-merge.yml)

![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Next JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLINT](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

> **⚠️ Current Issues**: [reactfire currently uses v9 of firebase](https://github.com/FirebaseExtended/reactfire/blob/main/package-lock.json#L33), so upgrading to the latest version is not possible.

# **🔥 Firebase Playground**

A playground project to aid in learning and development of NextJs, React and Firebase.

## **🚀 Getting Stated**

Locally run the application by starting up the firebase-emulators.

These will act as stubbed out versions of the Firebase services to enable local development and testing.

You can access these services using the ports they run on (which can be configured in [./firebase.json](./firebase.json))

- `Emulator UI` http://localhost:4000 _# This is an application that can be used to customised the running emulators, such as adding users to Auth_
- `Auth` http://localhost:9099
- `Hosting` http://localhost:5000 _# This displays a static version of the application_

```shell
npm run dev:firebase
```

After, you can start the development version of the NextJs application - which runs at http://localhost:3000

```shell
npm run dev:next
```
