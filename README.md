# Digital Business Card

A responsive personal business card web app built with React. It shows my photo, name, role, contact buttons, About and Interests sections and social links, with a dark/light theme toggle.

---

## Built with

- React (Vite)
- JSX
- CSS3 (CSS Variables, Flexbox)
- NPM Packages (`react-icons`, `@fontsource/inter`)
- Netlify (Hosting)

---

## Features

- Dark and light themes switched with a toggle button, using CSS variables and a `data-theme` attribute
- Theme choice saved in `localStorage`, with a fallback to the user's system preference
- Reusable custom components (`ProfileCard`, `ThemeToggle`) and a custom `useTheme` hook
- All personal details stored in a single `profile` object, so the content is easy to update
- Social links with empty values hidden automatically
- Responsive layout that works on mobile and desktop

---

**What I learned in this section:**

- Why React is worth using for building user interfaces
- Setting up a new React project with Vite and installing NPM packages
- Writing JSX to describe the UI and render dynamic data
- Building and reusing custom components to structure an app

---

# Live Demo

[Link](https://gkdigitalbusinesscard.netlify.app/)
