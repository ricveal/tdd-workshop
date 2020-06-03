# TDD Workshop

> Testing driven development

![TDD Diagram](https://geekytheory.com/wp-content/uploads/2015/05/TDD-Diagram-287x300.gif)

- Choose a feature to implement.
- Write a test case.
- Test should fails. If it passes, the feature is already implemented.
- Write the implementation. Follow KISS (Keep it simple, stupid).
- Run your tests to check if it passes.
- Refactor code to simplify, improve, whatever...

## Why testing?

- Helps prevent future regressions and bugs.
- Increases confidence that the code works as expected.

## Why TDD?

- Design before implementation 🤔💡.

## Cons?

- Takes longer to develop (but it can save time in the long run).
- Testing edge cases is hard.
- Mocking, faking, and stubbing are all even harder.

## But BDD...

> Behauvior Driven Development

TDD but tests should describe business logic in business "words".

## Kata ⛩

Code kata is an exercise in programming which helps programmers hone their
skills through practice and repetition.

For this session, we will follow two exercises:

- The FizzBuzz kata as general Javascript TDD.
- A shop list application as visual components TDD.

### Requisites

Only Javascript (ES6+) is required to participate on the session but a very
basic knowledge of React is recommended in order to follow the second kata where
we build a very simple React app as example of _TDD-ing_ visual components.

### Preparing... 🛠

We are going to use [Visual Studio Code](https://code.visualstudio.com/) and
[Live Share](https://visualstudio.microsoft.com/es/services/live-share/)
functionality so please, be sure you have installed and configured (logged)
[this](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
extension. The link session will be distributed on the kata session.

In addition, I recommend you the
[Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
for VS Code but it's not strictly necessary.

Finally, this workshop will use `create-react-app` as base project so please,
ensure you have an empty generated project:

```bash
npx create-react-app tdd-workshop
```

If you check your dependencies, you should have something similar to:

```json
{
  "@testing-library/jest-dom": "^4.2.4",
  "@testing-library/react": "^9.3.2",
  "@testing-library/user-event": "^7.1.2",
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-scripts": "3.4.1"
}
```

Now, we are ready to rock... 🚀

### FizzBuzz kata description

- Write a program that prints one line for each number from 1 to 100.
- For multiples of three print `Fizz` instead of the number.
- For the multiples of five print `Buzz` instead of the number.
- For numbers which are multiples of both three and five print `FizzBuzz`
  instead of the number.

### Shop list (kata)

- Should be a list of items.
- Each item should have a remove link.
- When the user clicks on remove link, this element should be removed.
- Should be an input box with an "add button".
- Button should be disabled when text is empty.
- Button should be enabled when input has text.
- When the user clicks on the button, the item should be added to the list.

### Kata Resolved

You can check the `develop` branch which contains a resolved version of these
two exercises. Please, notice that this is only one possible solution.

## Interesting links and references

- [Kata-Log](https://kata-log.rocks/index.html): kata's repository.
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom)
- [user-event](https://testing-library.com/docs/ecosystem-user-event)
- [Learn Test Driven Development (TDD)](https://github.com/dwyl/learn-tdd)
- 🎬 (🇪🇸)
  [TDD Mi cuaderno de recetas - Modesto San Juan](https://www.youtube.com/watch?v=D1fWBImC2r8)
- 🎬
  [Test Driven Development (TDD) on a real app](https://www.youtube.com/watch?v=G2KV3YlvDFQ)
- 🎬
  [Test Driven Development & Refactoring - JS Testing 101 with Jest](https://www.youtube.com/watch?v=6pYUzEduLyU)

---

> 🎧 This workshop has been prepared listening
> [re:member - Ólafur Arnalds](https://open.spotify.com/album/6JpQGIi2he6iskzR4aLwPG?si=oGk8ZQaRTbaUijs73cQNAQ)
