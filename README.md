# Simple Meet-up app

## Notes

- Please run the app in a **real device** simulator or emulator for better testing of the app functionalities as virtual simulators or emulators may causes unusual behaviors that are occurred only when run the app on them.

## Prerequisites

React Native CLI to be installed. You can install it by running the command:

```bash
npm install -g react-native-cli
```

`Nodejs` and its version must be **>=12**

[You can find the latest version here](https://nodejs.org/en/)

**For iOS:**

You need to install `cocopods` to install app ios dependencies, you can install using `Homebrew` it by running the following command:

```bash
brew install cocoapods
```

Simulator or emulator **(real devices)** to run the app on.

## Installation

Run the following command to install project dependencies:

```bash
yarn
```

**IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

```bash
cd ios && pod install && cd ..
```

or using `npx` in the project directory:

```bash
npx pod-install
```

### Run on Android Device

Run the following command on project directory:

```bash
yarn run android
```

### Run on iOS Device

Run the following command on project directory:

```bash
yarn run ios
```

### Run Unit Tests

Run the following command to execute all unit test suites.

```bash
yarn run test
```
