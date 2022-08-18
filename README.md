<div align="center">

<a href="./LICENSE">![GitHub](https://img.shields.io/github/license/everton-dgn/react_webpack_simplified?style=plastic)</a>
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=react-webpack-styled-components-redux-tlk-boilerplate&style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/everton-dgn/react_webpack_simplified?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/everton-dgn/react_webpack_simplified?color=yellow&style=plastic)
![GitHub Repo stars](https://img.shields.io/github/v/release/everton-dgn/react_webpack_simplified?color=orange&style=plastic)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/everton-dgn/react_webpack_simplified?style=plastic)
![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release&style=plastic)

</div>

<h1 align="center">Boilerplate Complete and updated with React.js, Webpack, Typescript, CSS Modules and Tests</h1>

<br />

# :memo: About the Project

This application is a boilerplate for large or small systems, especially those that need of security and code quality.

In the construction of the UI, the Atomic Design structure was chosen, organizing the global components into atoms, molecules, organisms and templates.

In addition to being constantly updated, this project was configured in the smallest details to serve as a basis for professional projects that require standardized and easy-to-maintain code architecture and design.

---

# :pushpin: Contents

- [Technologies](#globe_with_meridians-technologies)
- [Features](#triangular_flag_on_post-features)
- [Prerequisites](#white_check_mark-prerequisites)
- [How to install and run the project](#question-how-to-install-and-run-the-project)
  - [Clone Repository](#clone-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start Development Environment](#start-development-environment)
  - [Generate Production Build](#generate-production-build)
  - [Generate Development Build](#generate-development-build)
  - [Start Production Environment](#start-production-environment)
  - [Run Tests](#run-tests)
  - [Run Tests in Watch Mode](#run-tests-in-watch-mode)
  - [Run Lints](#run-lints)
  - [Format code with prettier](#format-code-with-prettier)
  - [Check for Available Updates for Dependencies](#check-for-available-updates-for-dependencies)
  - [Generate Semantic Releases](#generate-semantic-releases)
- [Important Considerations](#rotating_light-important-considerations)
- [Author](#technologist-author)

<br />

---

# :globe_with_meridians: Technologies

⚛ React.js

🔥 TypeScript

✨ CSS Modules

🚩 Lints: Husky, ESlint, Commitlint, Lint-Staged, Prettier, EditorConfig and Typecheck

🌸 Semantic Release

✅ Jest

🐙 React Testing Library

🔧 Webpack

<br />

---

# :triangular_flag_on_post: Features

- [x] Responsive design;

- [x] Atomic Design;

- [x] 100% coverage in tests including: components, templates and pages;

<br />

---

# :white_check_mark: Prerequisites

- node (latest version lts)

- yarn

<br />

---

# :question: How to install and run the project

## Clone Repository

```bash
git clone https://github.com/everton-dgn/react_webpack_simplified.git
```

## Install Dependencies

```bash
yarn
```

## Start Development Environment

```bash
yarn dev
```

Available in http://localhost:3000

## Generate Production Build

```bash
yarn build
```

## Generate Development Build

```bash
yarn build:dev
```

## Start Production Environment

```bash
yarn start
```

Available in http://localhost:3001

## Run Tests

```bash
yarn test
```

## Run Tests in Watch Mode

```bash
yarn test:w
```

## Run Lints

```bash
yarn lint
```

```bash
yarn typecheck
```

```bash
yarn check-format
```

## Format code with prettier

```bash
yarn format
```

## Check for Available Updates for Dependencies

```bash
yarn check-update
```

## Generate Semantic Releases

```bash
yarn release
```

<br />

---

# :rotating_light: Important Considerations

- The husky is configured to not allow commit if there are any lint and typescript errors. The push can only be done if all tests and builds pass.

- Due to husky's build check settings, to push with git, the development server must be stopped first or an error will occur in the `git push` command.

- Some conventions widely used in the React ecosystem were used. For example:

  - In the root of the components folder, an export index was created to facilitate the use of components with named import. In this way, to use a component just import it as an object and use it with the prefix "C", thus avoiding several unnecessary lines of imports:

    ```jsx
    import * as C from 'ui/components'

    ...
    <C.Card>
      <C.Input />
    </C.Card>
    ...
    ```

---

# :technologist: Author

By [Éverton Toffanetto](https://programadordesucesso.com).

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://www.youtube.com/c/ProgramadordeSucesso

:link: Site: https://programadordesucesso.com
