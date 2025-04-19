# Weather Widget App

## Overview

A Next.js application for displaying current weather with search, forcast, and []. Optimized for performance with .

## Features

- **Structured Codebase**: Configured with ESLint, Prettier, and Husky for code consistency.
- **UI & UX**: Modular scss and responsive design.
- **Testing**: Implemented with Vitest.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Run tests:
   ```sh
   npm run test
   ```

## Notes

- I didn't add loading component in ui kit as I am fetching my data using ssr of next for this api
- Also for my routes I didn't add code spliting as Next is handing it automatically
- For the city name I can get that data from onavigator.geolocation, as you mentiond 3-4 hours didnt implement it,
  but I can inject city name and get it from ssr context
- I have tried to creat clean type of structure for my components, wrap them as templates, uikit
