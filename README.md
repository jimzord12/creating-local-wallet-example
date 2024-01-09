# Local Wallet Example (ethers.js, Next.js 14, shadcn/ui)

This is a Next.js 14 application created **using pnpm**.

To install pnpm, please visit their [official website](https://pnpm.io/installation).

_Used pnpm instead of npm because I encountered a issued with the command:_

`npx create-next-app@latest`

## Final Application

![Final Application Images](/readmeImages\End_App.png)

## Installation

To get started with this project, follow these steps:

1. Clone the repository.
2. Install the dependencies using `pnpm install`.
3. Start the development server using `pnpm dev`.

## Options Selected

![Selected Options](/readmeImages\Nextjs_Init_opts.png)

For more information visit Next.js [official website](https://nextjs.org/docs/app/api-reference/create-next-app) for creating a Next.js app.

## Common Problems

In case you encounter the error:

```
ERR_PNPM_NO_IMPORTER_MANIFEST_FOUND  No package.json (or package.yaml, or package.json5) was found in "C:\Users\yourUserName\yourPath\GitHub\creating-local-wallet-example".
```

Verify your are navigated to the correct directory, this is the right one (add the `\local-wallet-example` in the end):

```
C:\Users\yourUserName\yourPath\GitHub\creating-local-wallet-example\local-wallet-example
```

## Creating the Local Wallet

### Important ⚠

Using a local wallet is NOT considered safe! It should only be used in cases where the wallet is not considered important and does not contain real assets. Its well suited for cases where the users (unexperienced with the Web3 space) want to interact with a blockchain powered application.

### The Logic

The [ethers documention](https://docs.ethers.org/v6/api/wallet/#Wallet) regarding the Wallet Classes might be useful.

1. Create a `/hooks` directory in the root directory of the project. This will make it easier to manage it from the UI.

2. Create a `/lib` directory in the root directory of the project. Inside it, create a `/localWallet` directory, and inside that, a `handlers.ts` file. Here we will write the logic for managing the Local Wallet. Like creating one, deleting it, etc.

3. Use the useLocalWallet Hook in your UI Components to create or delete the Wallet through user Input. You can find the UI code in the `app/page.tsx` file.

Happy coding!
