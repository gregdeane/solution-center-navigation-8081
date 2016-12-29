# Solution Center Navigation
Reusable navigation header for software connecting to the Zalando Solution Center

[![Build Status](https://travis-ci.org/zalando-incubator/solution-center-navigation.svg?branch=master)](https://travis-ci.org/zalando-incubator/solution-center-navigation)

[Changelog](CHANGELOG.md)

### Installation

Install via npm or yarn

```shell
npm install solution-center-navigation
yarn add solution-center-navigation
```

### Usage

1. Load the script in your `<head>`:

    ```html
    <script src="../node_modules/solution-center-navigation/dist/solution-center-navigation.js"></script>
    ```

2. Include the `solution-center-navigation` module as a dependency in your app.

3. Insert the component at the top of your application:

    ```html
    <sc-navigation
        user="user"
        products="products"
        current-app-id="currentAppId">
    </sc-navigation>
    ```

### Style

The Solution Center Navigation is intended to be used with the [dress code](https://github.com/zalando/dress-code) style. That package is included as a dependency.

### Demo

See the `demo` folder. To run the demo locally, follow the Develop instructions below.

### Develop

Clone the repository, then run:

```shell
npm install
```

### License
MIT

### Changelog

You can check the new changes implemented in every version in the [changelog](CHANGELOG.md)
