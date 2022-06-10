# Crypto Vue

Crypto Vue is an application that allows users to see the current and historical price of 5 cryptocurrencies (BTC, ETH, DACXI, ATOM, LUNA).

App URL:
https://jessesousa.github.io/crypto-vue/

## Git Hooks

In order to maintain consistency over my code style and commit messages, I chose to use [Husky](https://typicode.github.io/husky/#/) in this project, with a pre-commit hook that lints the code and the commit message, as well as, runs all tests.

## Code Style

For this project, I used my own preferable code style for the eslint configuration. The organization and code of the components was, for the most part, made following the [Vue Style Guide](https://vuejs.org/style-guide/).

## Architectural Choices

- ### API - Polling

  To accomplish real-time change in the coin prices, using a restful API, I used a technique called [Periodic Polling](https://javascript.info/long-polling#regular-polling). It consists of making requests repeatedly to an API between intervals.
  I created a [Vue Composable](https://vuejs.org/guide/reusability/composables.html) called `useCoinData`, that polls the API, and keep updating its return value.
  According to the API provider, the API endpoints are cached between 30 seconds to 1 minute, so I decided to make requests at intervals of 30 seconds. [(source)](https://www.coingecko.com/en/api/pricing#data_and_security)

- ### Components Organization

  The page consists of a `CoinDashboard` component, with information for the specified coin. Since its template is very large, I decided to create its own folder `coin-dashboard` , containing the component itself as its sub-components.

- ### The `coinId` Global State

  I also decided to provide a global reference at the App Component level, called `coinId`. As its name suggests, it contains the id of the current coin being showed to the user.
  Whenever `coinId` changes, the composable `useCoinData` is updated to make requests to the new coin chosen by the user.

- ### The `useCoinData` Composable

  To keep the code cleaner, I choose to separate the API polling logic to the `useCoinData` composable. The composable it is called inside the `CoinDashboard` component and its input value is the `coinId` global ref, to maintain reactivity. Since it uses the `coinId` ref, it has the flexibility of updating data whenever a new coin its selected.

## Component Testing

For the most part, testing wasn't very necessary, so I used only in components that have a complex logic and are more prone to cointain bugs.

## Continuous Deployment

I created a github workflow called `Build and Deploy`, that builds the app from the source code and deploy to github pages automatically everytime a new `push` is made to the `main` branch.
