![Site header title](/documentation/readme-assets/header-title.png)

# MP2 - About the project
---
### **Presentation of interactive data**

In this project, I'll build an interactive front-end site. The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.

### **Value provided:**

1. Users are able to interact with the site in their particular way, to achieve their personal goals and derive answers to their specific questions.

2. The site owner advances their own goals by providing this functionality, potentially by being a regular user themselves.

**Project Idea**

I have decided to create a word guessing game called "Rune Master!", not too dissimilar from something like Wordle, but with a woodland pagan rune theme.

## Project Requirements

### **Main Technologies**

- **Required**: HTML, CSS, JavaScript.

    **Optional**: jQuery or any other JavaScript libraries, external APIs.

- **Chosen Tech Stack**: ReactJS + TypeScript for UI and interactivity, built and served using Vite, with Tailwind CSS for styling and Vitest for automation testing. 

### **Mandatory Requirements**

A project violating any of these requirements will FAIL

1. **Dynamic Front End Project**: Write custom JavaScript, HTML and CSS code to create a front-end web application consisting of one or more HTML pages with significant interactive functionality.

2. **Site Responses**: Use JavaScript to have the site produce relevant responses dependent on users' actions.

3. **Information Architecture**: Incorporate a main navigation menu (unless irrelevant) and structured layout (you might want to use Bootstrap to accomplish this).

4. **Documentation**: Write a README markdown file for your project that explains what the project does and the value that it provides to its users.

5. **Version Control**: Use Git & GitHub for version control.

6. **Attribution**: Maintain clear separation between code written by you and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README.

7. **Deployment**: Deploy the final version of your code to a hosting platform such as GitHub Pages.
---
# Project Documentation

## User Stories

#### As a regular user, I want to be able to view a menu and see the game and content easily, so that I don't feel overwhelmed. - MUST HAVE
- The page should contain a header menu, a body and footer
- The menu should contain links to "rules" icon and "new game" icon
- The footer should contain social links
- The main body of the page should contain the tile board and Keyboard
#### As someone who doesn't play a lot of games, I want to be able to view a set of rules, so that I know how to play the game properly. - MUST HAVE
- The rules icon in the menu should link to the rules modal
#### As someone with a short attention span, I want to see quick responses, colours and sounds, so that it will hold my attention and make the game more fun to play. - SHOULD HAVE
- Should have type animations as user types of clicks the word, like a pop or flash
- Letters should colour certain colours depending on whether they are in the wrong position, correct or not in the word
- There should be flip animations for correct letters
- If the user correctly guesses the word a modal pops up with the word and does a celebration animation
- If the user runs out of tries the tiles should flip over and turn red and return to the initial difficulty choice state
#### As a Mobile and Laptop user, I want to the game to adapt to the device I am playing on, so that I can play while on the go and also when relaxing at home. - MUST HAVE
- The page, menu, tiles and keyboard should be responsive and accommodate all major device widths
#### As a word game enthusiast, I want to choose the difficulty level, so that I can challenge myself, but also make it more relaxed if I see fit. - COULD HAVE - Coming in a later phase
- The initial state of the game should allow users to choose the difficulty, Easy, Medium, Hard
- The levels should equate to the following modes, Easy - to be a 3 letter word with 10 tries, Medium - to be a 5 letter word with 8 tries and Hard - to be a 7 letter word with 5 tries
#### As a person who isn't great with words, I would like the ability to choose from a few lifeline functions, so that when I am stuck I can get hints or letter reveals. - COULD HAVE - Coming in a later phase
- An icon should be available at the bottom of the tile board allowing users to reveal 1 word for less points
- An icon should be available to allow user to reveal the whole word, but will receive no points
#### As an avid mobile and browser gamer, I want to be able to earn achievements and rewards for hitting milestones and winning games. - COULD HAVE - Coming in a later phase
- Achievements, badges etc should be accessible via the menu and display as a modal

## Project Setup

### **Setting up and importing, the project, file structure, styles and testing frameworks and libraries**

[**Vite + ReactJS Application Setup**](/documentation/readme-assets/logo.png)<br>
View this particular part of the documentation to see how I setup my project.

[**Tailwind CSS Setup and Import**](/documentation/readme-assets/logo.png)<br>
View this particular part of the documentation to see how setup and import Tailwind into my project.

[**React Icon Import**](/documentation/readme-assets/logo.png)<br>
View this particular part of the documentation to see how I installed and imported react icons.

[**Vitest Setup**](/documentation/readme-assets/logo.png)<br>
View this particular part of the documentation to see how I setup my automated testing using Vitest.

## Background Style and Imagery

### Background

A faded background to look as though the user is playing the game in a spacey cyber environment. A gradient overlay of the above colours will brighten the theme up a little and assist with readability for the fonts.

![Site background image](/documentation/readme-assets/site-bg.jpg)

### Rune Images

![Rune Images](/documentation/readme-assets/rune-images.png)

## Colour Palette

![Colour Paletter](/documentation/readme-assets/rune-master-colours.png)

## Typography

### Primary

![Pirata One Font](/documentation/readme-assets/pirata-one-font.png)

[Pirata One - Google Fonts](https://fonts.google.com/specimen/Pirata+One)

Pirata One is a gothic Textura font, simplified and optimized to work well on screen and pixel displays. Its condensed structure and spacing give the perfect medieval feel.

### Secondary

![Skranji Font](/documentation/readme-assets/skranji-font.png)

[Skranji - Google Fonts](https://fonts.google.com/specimen/Skranji?query=skran)

Skranji is primitive and exotic, evoking the thunder of Norse gods, giving a great choice for runic symbols and engravings.

## Logo

For the logo and other icons I am using React-Icons: [See React Icons](https://react-icons.github.io/react-icons/)

![Site Logo](/documentation/readme-assets/logo.png)

## Design

[User flow](/documentation/readme-assets/MP2-USER-FLOW.pdf)<br>
The user flow shows the planned journey the user can go through, due to time contraints some of this flow could not be implemented at this time.

# User Flow

[Wireframes](/documentation/readme-assets/MP2-RUNE-MASTER-WIREFRAMES.pdf)<br>
The wireframes show how the game should look on various device sizes, mobile, tablet and desktop

## Testing

### Manual Testing

[UAT Test Script](/documentation/testing/uat/manual-uat.md)

### Automated Testing

[Vitest - Automated Testing](/documentation/testing/automation/vitest-results.json)

## Issues, Fixes & Future Features

### Issues Fixed
- Contrast Issues for the tiles and keyboard
- Link to manifest removed from index.html as this is redundant and was throwing console errors
- Background tile images moved from inline styles to index.css due to issues rendering in deployment
- Accessibility issues fixed with aria attributes, still room for improvement
- Some issues with keyboard fonts
- Issue where background images of certain tiles and keyboard tiles wouldn't display
- Similar background image issue as above where images were fine in test environment, but wouldn't show in deployment
### Issues still present
- As mentioned above accessibility could be improved further
- Tailwind class declarations could be neater
- Due to time, certain features will be introduced at a later date - as stated in Future Features
- Git Commit messages could be optimised in future, this is still a skill i am working on
- When testing on an old monitor i have noticed the GitHub link at the bottom goes off the page, but doesnt happen on more modern monitors / resolutions, didn't find a quick enough fix in time
### Future Features
- Ability to earn and view Achievements
- Hints for the solution
- More refined local storage usage to allow game to be saved
- Leader board to allow users to view others guess accuracy and speed
- Share button to share to social media
- Head to head, 2 players online able to play the same game, the person to guess first wins

## Deployment

### GitHub Repo

[Dave-MK - Overview](http://github.com/dave-mk)

Videographer | Graphic Designer | Web Developer | Family Guy - Dave-MK

### Live Site (GitHub Pages)

[Rune Master](https://dave-mk.github.io/mp2-rune-master)

A word game - guess the correct runes within six attempts and become the Rune Master!

## Acknowledgements

[ReactJS Documentation](undefined) - ReactJS + TypeScript setup using Vite

[Josh Tries Coding](undefined) - Game core functionality

[undefined](undefined) - Modal creation

[TypeScript Documentation](undefined) - TypeScript

[Tailwind CSS Documentation](undefined) - Tailwind CSS

[Vite Documentation](undefined) - Vitest setup and execution

[Official Wordle Game - NYTimes](undefined) - Wordle for the inspiration

[Adobe Firefly](undefined) - Adobe Firefly



