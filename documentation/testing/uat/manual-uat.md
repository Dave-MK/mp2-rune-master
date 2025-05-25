# User Acceptance Testing (UAT) Script

**Project:** Rune Master  
**Version:** 2.0  
**Date:** 14/05/2025 
**Tested by:** David Kilgallon  
**Environment:** Web (Deployed GitHub Pages)  
**URL:** [https://dave-mk.github.io/mp2-rune-master](https://dave-mk.github.io/mp2-rune-master)

---

## 1. Home Page (Game Entry Point)
**Objective:** Ensure the landing page is user-friendly, responsive, and provides a clear entry into the game.

| Test Case | Description | Expected Result | Pass/Fail | Notes |
|-----------|-------------|------------------|-----------|-------|
| UAT-01 | Load home page | Page loads successfully without errors | Pass | Initially failed due to a mistake made during deployment, this was corrected |
| UAT-02 | Game title is visible | "Rune Master" is displayed prominently | Pass |  |
| UAT-03 | Tiles and Keyboard | Game loads ready to play | Pass |  |
| UAT-04 | Overall load speed is optimal | Game loads ensuring the user isnt waiting long | Pass | Initially failed due to PNGs affecting performance, fixed by converting the images to a WEBP compressed format |

---

## 2. Game Instructions / Help
**Objective:** Validate that instructions (if available) are easy to find and understand.

| Test Case | Description | Expected Result | Pass/Fail | Notes |
|-----------|-------------|------------------|-----------|-------|
| UAT-05 | Locate instructions or help icon | Instructions or tutorial is visible or accessible | Pass |  |
| UAT-06 | Review instructions content | Rules and objectives of the game are clearly explained | Pass | Initially failed due to tile images not rendering in the modal, fixed by calling these from the CSS file instead of within the component |

---

## 3. Gameplay Functionality
**Objective:** Confirm the core game logic and user interaction works smoothly.

| Test Case | Description | Expected Result | Pass/Fail | Notes |
|-----------|-------------|------------------|-----------|-------|
| UAT-07 | Click the NEW icon in the header | Should start a new game, whether during an active game or when the game is over, rune board and keyboard should reset | Pass |  |
| UAT-08 | Type a letter | Correct letter appears in the correct tile | Pass |  |
| UAT-09 | Try to submit a word with less than five letters | A toast should appear stating there aren't enough letters | Pass |  |
| UAT-10 | Game enforces valid moves only | Invalid moves shake the runes or show a toast | Pass |  |
| UAT-11 | End game condition triggers | Game ends when win/loss condition is met - A toast displays alluding that you have won or lost | Pass |  |

---

## 4. User Interface & Accessibility
**Objective:** Confirm that UI is intuitive and accessible to users.

| Test Case | Description | Expected Result | Pass/Fail | Notes |
|-----------|-------------|------------------|-----------|-------|
| UAT-12 | Font and layout readability | Text and elements are clearly legible across devices | Pass | Initial fail due to contrast errors in the WAVE test |
| UAT-13 | Mobile responsiveness | Game plays well on various screen sizes | Pass | Initial fail due to some CSS errors |
| UAT-14 | Accessibility | Sufficient information within the code to allow for screen readers | Pass | Initial fail during performance test |
| UAT-15 | Keyboard navigation (if supported) | Game can be partially or fully navigated via keyboard | Pass |  |

---

## 5. Error Handling & Edge Cases
**Objective:** Ensure the app handles unexpected user behavior gracefully.

| Test Case | Description | Expected Result | Pass/Fail | Notes |
|-----------|-------------|------------------|-----------|-------|
| UAT-16 | Reload game mid-play | Game resets without crashing or inconsistent state | Pass |  |
| UAT-17 | Click rapidly/make invalid choices | No console errors or crashes occur | Pass |  |
| UAT-18 | Cross browser compatibility | Works well across different browsers | Pass |  |

---

## 6. Additional Features
**Objective:** Test any extras like sound, animation, or UI feedback.

| Test Case | Description | Expected Result | Pass/Fail | Notes |
|-----------|-------------|------------------|-----------|-------|
| UAT-19 | Animations work correctly | Rune transitions and animations are smooth | Pass |  |
| UAT-20 | Correct rune colours show | If a rune is correct, out of place or wrong, the runes display the correct colour both in the tile board and the keyboard, unused runes stay the original colour | Pass | Initial fail due to image file path typo |

---

## Sign-off

| Role | Name | Date |
|------|------|------|
| Product Owner | David Kilgallon | 20/05/2025 |
| QA Tester | David Kilgallon | 20/05/2025 |
| Developer | David Kilgallon | 20/05/2025 |
