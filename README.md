# Skip Selection Page Redesign

A responsive React implementation of the "WeWantWaste" skip selection page, built with React and Tailwind CSS.

## 🚀 Demo

View the live demo: [Skip Selection Page Demo](https://q349kv-5173.csb.app/)

## 📋 Project Overview

This project is a redesign of the skip selection page for WeWantWaste. Users can select from various skip sizes with different capacities and prices. The implementation focuses on a clean, responsive design that works well on both desktop and mobile devices.

### Key Features

- **Responsive Design:** Adapts seamlessly to different screen sizes
- **Interactive Selection:** Visual feedback when users select a skip
- **Progress Tracker:** Shows where users are in the booking process
- **Loading State:** Elegant loading animation while data is being fetched
- **Error Handling:** User-friendly error messages if data loading fails

## 💡 My Approach

### Design Decisions

1. **Dark Theme:** I chose a dark theme with yellow accents to create a modern, professional look that matches the construction industry aesthetic while maintaining brand recognition with the yellow skips.

2. **Card-Based Layout:** Each skip option is presented as a distinct card with clear visual hierarchy, making it easy to scan and compare options.

3. **Visual Skip Representation:** Simple visual representations of skips that scale with their capacity, helping users intuitively understand size differences.

4. **Responsive Grid:** The grid layout adjusts from 3 columns on desktop to 1 column on mobile, ensuring a good experience across devices.

5. **Progress Tracker:** Clear visual representation of the user's position in the booking flow, helping with orientation and reducing abandonment.

### Technical Implementation

1. **Component Structure:** The application is organized into reusable components for better maintainability:
   - `ProgressTracker`: Shows the current step in the booking process
   - `SkipCard`: Displays information about each skip option
   - `Loader`: Shows during data fetching
   - `SkipSelectionPage`: Main page that orchestrates the components

2. **Custom Hook:** Created a `useSkips` hook to handle data fetching and state management related to skip options.

3. **Error Handling:** Comprehensive error handling with user-friendly feedback and retry functionality.

4. **Tailwind CSS:** Used Tailwind for styling to ensure consistency and rapid development.

5. **Responsive Design:** Implemented mobile-first design principles using Tailwind's responsive utilities.

6. **Fallback Data:** Included fallback data in case the API is unavailable during testing.

## 🛠️ Technologies Used

- **React:** For building the user interface
- **Tailwind CSS:** For styling components
- **Axios:** For API requests
- **Vite:** For fast development and optimized builds

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/skip-selection-redesign.git

# Navigate to the project directory
cd skip-selection-redesign

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📱 Responsive Behavior

- **Desktop (1024px and above):** 3-column grid layout
- **Tablet (768px to 1023px):** 2-column grid layout
- **Mobile (below 768px):** Single column layout with optimized spacing

## 🔍 Future Improvements

Given more time, I would implement:

1. **Skip Size Comparison:** Add a feature to compare different skip sizes side by side
2. **Filtering Options:** Allow users to filter skips based on specific requirements
3. **Accessibility Enhancements:** Further improvements to keyboard navigation and screen reader support
4. **Animation Refinements:** Smoother transitions and more subtle hover effects
5. **Additional Skip Information:** Add more details about each skip's suitability for different waste types

## 📝 License

This project is open-source. 