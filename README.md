# keyworl-tool-diy

## Overview

The Keyword Tool DIY is a comprehensive tool designed to help users analyze and optimize their keyword strategies. It provides various functionalities to fetch keyword suggestions, keyword difficulty, keyword trends, and more from different APIs like Google Keyword Planner, Moz, Deep Seek, Google Gemini, and OpenAI.

## Features

- **Keyword Suggestions**: Fetch keyword suggestions from Google Keyword Planner, Moz, Deep Seek, Google Gemini, and OpenAI.
- **Keyword Difficulty**: Get keyword difficulty scores from Google Keyword Planner, Moz, Deep Seek, Google Gemini, and OpenAI.
- **Keyword Trends**: Retrieve keyword trends from Google Keyword Planner, Moz, Deep Seek, Google Gemini, and OpenAI.
- **Admin Control**: Admins can add IP addresses for admin control and manage usage and limitations.

## Admin Control Panel

The admin control panel allows administrators to manage the tool's usage and limitations. Admins can add IP addresses to the admin list and control the usage limits for users.

### Adding Admin IP Addresses

To add an IP address to the admin list, follow these steps:

1. Navigate to the Admin Control panel.
2. Enter the IP address in the provided input field.
3. Click the "Add IP Address" button.

### Controlling Usage and Limitations

To control the usage and limitations, follow these steps:

1. Navigate to the Admin Control panel.
2. Enter the desired usage limit in the provided input field.
3. Click the "Control Usage" button.

## Functionality Percentage

The tool is approximately 90% functional. The core features such as fetching keyword suggestions, keyword difficulty, and keyword trends are fully implemented and operational. The admin control panel is also functional, allowing admins to manage IP addresses and control usage limits. However, there may be minor bugs or improvements needed in the user interface and error handling.

## Chrome Extension Usage

The tool can be used as a Chrome extension. Follow these steps to set it up:

1. Create a `manifest.json` file in the root of your frontend directory. This file will define the metadata and permissions required for your Chrome extension.
2. Include the necessary permissions such as `activeTab`, `storage`, and any other permissions your extension might need.
3. Define the background script, content scripts, and popup HTML file in the manifest.
4. Modify the frontend code to work within the Chrome extension environment.
5. Create a popup HTML file that will serve as the user interface for your extension.
6. Update the React components to render within the popup HTML file.
7. Ensure that the API calls are made to the backend server from the Chrome extension.
8. Package the extension by zipping the frontend directory, including the `manifest.json` file, popup HTML file, and all necessary assets.
9. Upload the packaged extension to the Chrome Web Store for distribution.
10. Follow the Chrome Web Store guidelines for publishing and managing your extension.

## Integration of Open Sources and Google Trends

The tool integrates with various open sources and Google Trends to provide comprehensive keyword analysis. It fetches keyword suggestions, difficulty, and trends from multiple sources to give users a well-rounded view of their keyword strategies.

## Installation

To install and run the Keyword Tool DIY, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/brams172/keyworl-tool-diy.git
   ```

2. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   MOZ_ACCESS_TOKEN=your_moz_access_token
   GOOGLE_OAUTH_TOKEN=your_google_oauth_token
   DEEP_SEEK_API_KEY=your_deep_seek_api_key
   GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

5. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

6. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

Once the installation is complete, you can access the Keyword Tool DIY in your browser at `http://localhost:3000`. Use the various features to fetch keyword suggestions, keyword difficulty, and keyword trends. Admins can access the admin control panel to manage IP addresses and control usage limits.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
