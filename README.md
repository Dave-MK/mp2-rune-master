![Image from MP2 Rune Master!](https://app.milanote.com/media/p/images/1UhMpm1gHeLmbk/AUZ/image.png)

# MP2 Rune Master - About the project

### **Presentation of interactive data**

In this project, I'll build an interactive front-end site. The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.

### **Value provided:**

1. Users are able to interact with the site in their particular way, to achieve their personal goals and derive answers to their specific questions.

2. The site owner advances their own goals by providing this functionality, potentially by being a regular user themselves.

**Project Idea**

I have decided to create a word guessing game called "Rune Master!", not too dissimilar from something like Wordle, but with a woodland pagan rune theme.

## Overall Tasks
- [x] Create and complete project layout and timeline
- [x] Change of theme
- [x] Branding
- [x] Personas
- [x] Component breakdown
- [x] Wireframes
- [x] Document and Repo initialisation
- [x] Build out components and develop based on wireframes and plan
- [x] Build general structure
- [x] Refine styling
- [x] Add interaction and modals
- [x] Add and refine animations
- [x] Refine and ensure full responsiveness
- [x] Complete automated testing using Vitest and manual end user testing
- [ ] Complete all sections of README and documentation

## Project Requirements

### **Main Technologies**

- <mark>Required</mark>: HTML, CSS, JavaScript.

    <mark>Optional</mark>: jQuery or any other JavaScript libraries, external APIs.

- Chosen: ReactJS framework, built and served using Vite, with Tailwind CSS for styling and Vitest for automation testing. 

### **Mandatory Requirements**

A project violating any of these requirements will FAIL

1. **Dynamic Front End Project**: Write custom JavaScript, HTML and CSS code to create a front-end web application consisting of one or more HTML pages with significant interactive functionality.

2. **Site Responses**: Use JavaScript to have the site produce relevant responses dependent on users' actions.

3. **Information Architecture**: Incorporate a main navigation menu (unless irrelevant) and structured layout (you might want to use Bootstrap to accomplish this).

4. **Documentation**: Write a README markdown file for your project that explains what the project does and the value that it provides to its users.

5. **Version Control**: Use Git & GitHub for version control.

6. **Attribution**: Maintain clear separation between code written by you and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README.

7. **Deployment**: Deploy the final version of your code to a hosting platform such as GitHub Pages.

## User Stories

## As a regular user, I want to be able to view a menu and see the game and content easily, so that I don't feel overwhelmed.
- [x] The page should contain a header menu, a body and footer
- [ ] The menu should contain links to "rules", "achievements" and "email opt in"
- [x] The footer should contain social links
- [x] The main body of the page should contain the tile board and Keyboard
## As someone who doesn't play a lot of games, I want to be able to view a set of rules, so that I know how to play the game properly.
- [x] The rules icon in the menu should link to the rules modal
## As a word game enthusiast, I want to choose the difficulty level, so that I can challenge myself, but also make it more relaxed if I see fit.
- [ ] The initial state of the game should allow users to choose the difficulty, Easy, Medium, Hard
- [ ] The levels should equate to the following modes, Easy - to be a 3 letter word with 10 tries, Medium - to be a 5 letter word with 8 tries and Hard - to be a 7 letter word with 5 tries
## As a person who isn't great with words, I would like the ability to choose from a few lifeline functions, so that when I am stuck I can get hints or letter reveals.
- [ ] An icon should be available at the bottom of the tile board allowing users to reveal 1 word for less points
- [ ] An icon should be available to allow user to reveal the whole word, but will receive no points
## As an avid mobile and browser gamer, I want to be able to earn achievements and rewards for hitting milestones and winning games.
- [ ] Achievements, badges etc should be accessible via the menu and display as a modal
## As someone with a short attention span, I want to see quick responses, colours and sounds, so that it will hold my attention and make the game more fun to play.
- [x] Should have type animations as user types of clicks the word, like a pop or flash
- [x] Letters should colour certain colours depending on whether they are in the wrong position, correct or not in the word
- [x] There should be flip animations for correct letters
- [x] If the user correctly guesses the word a modal pops up with the word and does a celebration animation
- [x] If the user runs out of tries the tiles should flip over and turn red and return to the initial difficulty choice state
## As a Mobile and Laptop user, I want to the game to adapt to the device I am playing on, so that I can play while on the go and also when relaxing at home.
- [x] The page, menu, tiles and keyboard should be responsive and accommodate all major device widths

## Background Style and Imagery

### Background

A faded background to look as though the user is playing the game in a spacey cyber environment. A gradient overlay of the above colours will brighten the theme up a little and assist with readability for the fonts.

![Image from MP2 Rune Master!](https://media.milanote.com/p/resized/1U5Mms159xaizN/1U5Mms159xaizN-CwQc6-large.jpeg)

### Rune Images

![Image from MP2 Rune Master!](https://app.milanote.com/media/p/images/1UhKRi1wkfF6fI/UBG/rune-images%20%281%29.png)

## Colour Palette

![Image from MP2 Rune Master!](https://app.milanote.com/media/p/images/1UiQbC1ofFzVc3/Rex/Rune%20Master%20Colours.png?w=800)

## Typography

### Primary

![Image from MP2 Rune Master!](https://app.milanote.com/media/p/images/1UhK8H1wkfuDb8/KOc/image.png)

[Pirata One - Google Fonts](https://fonts.google.com/specimen/Pirata+One)

Pirata One is a gothic Textura font, simplified and optimized to work well on screen and pixel displays. Its condensed structure and spacing give the perfect medieval feel.

### Secondary

![Image from MP2 Rune Master!](https://app.milanote.com/media/p/images/1UhKbA1wkfuDb9/p9o/image.png)

[Skranji - Google Fonts](https://fonts.google.com/specimen/Skranji?query=skran)

Skranji is primitive and exotic, evoking the thunder of Norse gods, giving a great choice for runic symbols and engravings.

## Secondary Font

### **Importing Tailwindcss and the Fonts**

In the vite.config file, Tailwind needs to be imported by placing it in the Plugins array:

```
plugins: [
    react(),
    tailwind()
]
```

At the below to the top of the stylesheet before:

```
@import "tailwindcss";
```

Add the below to the top of the stylesheet, but before the tailwind import:

```
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Outfit:wght@100..900&display=swap');
```

## Logo

For the logo and other icons I am using React-Icons:

https://react-icons.github.io/react-icons/

![Image from MP2 Rune Master!](https://app.milanote.com/media/p/images/1UhK5u1wkfuDb5/0Qd/image.png)

## Design

[MP2-USER-FLOW](https://media.milanote.com/p/files/1UhXXI1wklFS6Y/suK/canvas_user-flow-250522_0455.pdf) (298 KB)

# User Flow

[MP2-RUNE-MASTER-WIREFRAMES](https://media.milanote.com/p/files/1UhpdT12a6eg0G/DlZ/MP2-RUNE-MASTER-compressed.pdf) (6.5 MB)

## Testing

### Manual Testing

Table element string placeholder

### Automated Testing

Table element string placeholder

### Issues, Fixes & Future Features

## Issues Fixed
- [x] Contrast Issues for the tiles and keyboard
- [x] Link to manifest removed from index.html as this is redundant and was throwing console errors
- [x] Background tile images moved from inline styles to index.css due to issues rendering in deployment
- [x] Accessibility issues fixed with aria attributes, still room for improvement
- [ ] Some issues with keyboard fonts
- [ ] Issue where background images of certain tiles and keyboard tiles wouldn't display
- [ ] Similar background image issue as above where images were fine in test environment, but wouldn't show in deployment
## Issues still present
- [ ] The odd syntax error due to this being my first project using TypeScript, Tailwind CSS and ReactJS
- [ ] Tailwind class declarations could be neater
- [ ] Due to time, certain features will be introduced at a later date - as stated in Future Features
## Future Features
- [ ] Ability to earn and view Achievements
- [ ] Hints for the solution
- [ ] More refined local storage usage to allow game to be saved
- [ ] Leader board to allow users to view others guess accuracy and speed
- [ ] Share button to share to social media
- [ ] Head to head, 2 players online able to play the same game, the person to guess first wins

## Deployment

## GitHub Repo

[Dave-MK - Overview](http://github.com/dave-mk)

Videographer | Graphic Designer | Web Developer | Family Guy - Dave-MK

## Live Site (GitHub Pages)

[Rune Master](https://dave-mk.github.io/mp2-rune-master)

A word game - guess the correct runes within six attempts and become the Rune Master!

## Acknowledgements

[undefined](undefined)

[undefined](undefined)

[undefined](undefined)



