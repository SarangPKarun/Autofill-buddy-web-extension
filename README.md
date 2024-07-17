# Form Filler Chrome Extension

## Overview

The Form Filler Chrome Extension allows users to create detailed profiles with personal information, store these profiles, and use them to auto-fill forms on various websites. Users can create, edit, delete profiles, and fill forms on multi-page websites with ease.

## Features

- Create profiles with detailed fields (name, first name, middle name, last name, phone number, email).
- Edit and delete profiles.
- Auto-fill forms on websites using saved profiles.
- Multi-page form support.

## Installation

1. Clone or download the repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory where the extension files are located.

## Usage

### Creating a Profile

1. Click on the Form Filler extension icon in the Chrome toolbar.
2. Click on the "Create Profile" button.
3. Fill in the required details in the form.
4. Click "Save Profile" to save the profile.

### Editing a Profile

1. Click on the Form Filler extension icon in the Chrome toolbar.
2. Find the profile you want to edit in the profiles list.
3. Click the "Edit" button next to the profile.
4. Modify the details in the form.
5. Click "Save Profile" to update the profile.

### Deleting a Profile

1. Click on the Form Filler extension icon in the Chrome toolbar.
2. Find the profile you want to delete in the profiles list.
3. Click the "Delete" button next to the profile.
4. The profile will be removed from the list.

### Auto-Filling Forms

1. Navigate to a website with a form you want to fill.
2. Click on the Form Filler extension icon in the Chrome toolbar.
3. Click the button corresponding to the profile you want to use.
4. The form fields will be automatically populated with the profile details.

## Development

### Project Structure

- `manifest.json` - Configuration file for the Chrome extension.
- `popup.html` - HTML file for the popup interface.
- `popup.js` - JavaScript file to manage profile creation, editing, deletion, and form filling.
- `background.js` - Background script to handle form detection and multi-page form support.
- `images` - Directory containing icon images.

### Setting Up Your Development Environment

1. Ensure you have a text editor (e.g., VSCode) and Chrome installed.
2. Create a new folder for your extension files.
3. Follow the installation instructions to load the extension in Chrome.

### Testing and Debugging

1. Ensure your extension works as expected.
2. Use Chrome's developer tools to debug any issues that arise.

## Contributing

If you want to contribute to the development of this extension, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
