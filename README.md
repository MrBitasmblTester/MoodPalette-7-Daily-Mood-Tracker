# MoodPalette-7-Daily-Mood-Tracker

Description
A simple and visually appealing web app that allows users to log their daily moods and view them as a colorful calendar heatmap.

## Tech Stack
- React

## Requirements
- Mood selection interface (Use emoji or color buttons for mood selection)
- Calendar heatmap display (Map moods to colors and show them on a monthly grid)
- Local storage persistence (Save moods locally so data stays after refresh)

## Installation
1. Clone the repo:
   bash
   git clone https://github.com/your-username/MoodPalette-7-Daily-Mood-Tracker.git
   
2. Install dependencies:
   bash
   cd MoodPalette-7-Daily-Mood-Tracker
   npm install
   
3. Start the development server:
   bash
   npm start
   

No environment variables are required.

## Usage
1. Open `http://localhost:3000` in your browser.
2. Select your mood for the current day using the emoji/color buttons.
3. View your logged moods in the calendar heatmap. Colors correspond to different moods.
4. Data is saved in local storage and will persist after page refresh.

## Implementation Steps
1. Initialize a React project using create-react-app.
2. Create a `MoodSelector` component with emoji/color buttons.
3. Build a `HeatmapCalendar` component that maps saved moods to colors on a monthly grid.
4. Implement `localStorage` logic to save and retrieve daily mood entries.
5. Integrate `MoodSelector` and `HeatmapCalendar` components in the main `App`.
6. Apply CSS styling to create a clean and visually appealing layout.
7. Test mood logging, heatmap rendering, and data persistence on refresh.