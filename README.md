# Restaurant
RISING SUN - a web application for a fictional restaurant set in Japan. The website was built using Webpack bundler. 

https://dauletalzhanov.github.io/restaurant/

## Restaurant Project 
This section provides a guide on how to navigate through the website.

Restaurant consists of following pages:
- Main Page
- About Page
- Menu
- Contact Page

#### Main Page
- Contains the background image stretches across the whole screen provides the atmosphere for the restaurant
- In the middle of the screen, the page contains the restaurant name, Rising Sun, in English
- Below it is located the Japanese name, 殺された獲物

#### About Page
- About page is meant to give more detail about the restaurant. However, as this is a fictional restaurant, it is mostly gibberish.
- First section contains another image (from unslash) that stretches across the page.
- Above it are located the banner with the restaurant name and the opening times with the address
- The secoond section contains segment explaining "What Makes Our Food Unique?"
- The paragraph under it are just Lorem Ipsum in English and Japanese
- The third section section is a segment for user reviews inspired by Google Reviews
- The data about the reviews are stored within the local .json file

#### Menu Page
- Menu Page is a page for a menu
- Menu has following categories for food: Ramen, Rice Dishes, Sushi, Noodles, Dessert and Drinks
- For each category, there are five dishes
- The data is pulled from the .json file as well

#### Contact Page
- Contact Page has the contact information as well as reservation form
- First section contains the contact information: "line" of contact details, embedded google maps location of the fictional restaurant, and a "line" of social media.
- Contact details include telephone number, email, address and opening hours.
- Social Media include twitter, facebook, instagram and tiktok links
- Second section contains a Japanese proverb in Japanese
- Third section includes a standard reservation form.

###### The web application is meant to be explored. There's a lot more than meets the eye that's not covered in here...

# Webpack
This section explains how webpack was used to provide functionality for the web application.

## The webpack uses: 
- Webpack version - 5.91.0
- Template form
- JSON parser
- CSS parser
- webpack-dev-server (for development)
- For production mode, standard webpack building / compiling was used

## Web Design
- The web application basically uses the template to build a single page linked a single index.js
- Inside index.js, the logic was set up to navigate through different parts of the website by overwritting the previous version
- index.js calls other .js scripts that contain bodies for functions that generate the pages
- Within those .js files, the functions utilize the webpack features listed above
- The whole application is only a single page




