# 🌦️ Weather Widget App

A Next.js application that displays the current weather and a 3-day forecast using real-time, location-based data. Built for performance and developer experience with SSR, modular design, and automatic updates.

## Features

- **Structured Codebase**: ESLint, Prettier, and Husky ensure consistent formatting and code quality.
- **Weather API**: Integrated live weather and forecast data (current + 3-day).
- **Functionality**:

  - Automatically detects user's city via browser geolocation.
  - Weather updates every 10 minutes using a lightweight refresh hook.
  - Background dynamically changes based on current weather condition.

- **UI Kit**: Reusable UI kit built with modular SCSS. Responsive layout and clean styling.
- **Error Handling**: handles API/network failures with fallbacks.
- **Test**: Unit tested using Vitest.
- **Performance**: SSR-powered rendering via getServerSideProps.

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

- Loading states are not needed since data is server-rendered.
- Route-level code splitting is handled automatically by Next.js.
- The component structure is modular and designed for scalability.
