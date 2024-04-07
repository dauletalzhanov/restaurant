# Restaurant: Rising Sun
**RISING SUN** is a web application for a fictional restaurant set in Japan. The website was built using the Webpack bundler.

[View Website](https://dauletalzhanov.github.io/restaurant/)

## Restaurant Project Overview
This section provides a guide on how to navigate through the website.

### Pages:
- **Main Page**
- **About Page**
- **Menu**
- **Contact Page**

### Main Page
- Features a background image that spans the entire screen, setting the atmosphere for the restaurant.
- Displays the restaurant name, "Rising Sun," in English at the center of the screen.
- Below the English name is the Japanese name, "殺された獲物."

### About Page
- Provides additional detail about the restaurant, although it's mostly fictional.
- The first section includes an image that stretches across the page, along with the restaurant name banner and opening times/address.
- The second section explains "What Makes Our Food Unique?" followed by Lorem Ipsum text in both English and Japanese.
- The third section mimics user reviews inspired by Google Reviews, with review data stored in a local .json file.

### Menu Page
- Displays the restaurant's menu, categorized into Ramen, Rice Dishes, Sushi, Noodles, Desserts, and Drinks.
- Each category features five dishes, with data pulled from a .json file.

### Contact Page
- Provides contact information and a reservation form.
- The first section includes contact details (telephone number, email, address, and opening hours), an embedded Google Maps location of the fictional restaurant, and links to social media platforms.
- The second section features a Japanese proverb.
- The third section includes a standard reservation form.

###### *Note: The web application is meant to be explored, with additional features beyond what's covered here.*

# Webpack Usage
This section explains how Webpack was used to provide functionality for the web application.

## Webpack Features Used:
- Webpack version: 5.91.0
- Template form
- JSON parser
- Image / Asset module
- CSS parser
- webpack-dev-server (for development)
- Standard webpack building/compiling for production

## Web Design:
- The web application is built as a single-page application linked to a single index.js file.
- Within index.js, logic is set up to navigate through different parts of the website by overwriting the previous version.
- index.js calls other .js scripts containing functions that generate the pages.
- These functions utilize the Webpack features listed above.
- The entire application consists of a single page.
