# Paymento - Invoice Management for Freelance (Portfolio Project)

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). I started this project to learn more about how to effectively leverage Typescript and manage complex state. At the moment, it only uses local storage as a database but I am planning on leveraging Postgres and Prisma to make this truly full-stack, I may also attempt to use stripe and SendGrid to make this properly functional.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

# Overview

## The challenge

MVP - Users should be able to:

- ✔️ Create, Update, and Delete invoices
- ✔️ Sort invoices by their various status
- ✔️ View invoice details (total, items, cost per item, etc)
- ✔️ Be delivered the appropriate theme (dark vs light) based on their browser's prefers-color-scheme media query
- ✔️ Form validation

Extended Features - Users should be able to:

- ✔️ Animations
- 🚧 Allow for a demo mode so users don't need an account to use the app - in progress
- 🔲 Implement authentication and database so users can access invoices across devices

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/ssr-invoice-app-CN8rae-Gb)
- Live Site URL: [Add live site URL here](https://paymento.vercel.app)

## My process

I went with a mobile-first approach for building this app which worked nicely. I would build components out completely across all breakpoints before moving on to the next. While I was building the components I used placeholder data instead of any kind of dummy data held in state, in hindsight this was a mistake and led to a few headaches when it was time to wire everything up with state.

### Built with

- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styling
- [Framer Motion](https://www.framer.com/docs/animation/) - For animations
- [Heroku Postgres](https://www.heroku.com/postgres) - Database (🚧 Coming Soon)
- [Prisma](https://www.prisma.io/) - Database ORM (🚧 Coming Soon)

## What I learned 💡

### No Redux, No Problem! - `useContext` & `useReducer` to the Resuce !

I actually started this project with the intention of using it to learn Redux, I went through Steve Kinney's entire [Redux Course](https://frontendmasters.com/courses/redux-fundamentals/) on Frontend Masters and then started this project feeling that Redux was really going to solve alot of problems for me.

However as I was building it, everything started to feel kinda bloated and overengineered, so halfway through I had a change of heart and stripped it from the project.

I came across a blog post (the name escapes me, unfortunately) detailing how you could use a combinantion of useContext to pass around the state and useReducer to dispatch actions to that state and effectively mimic the behaviour of Redux without the overhead. This approach is what I landed on and I really like it.

DISCLAIMER: I do realize there are use cases where this won't cut it and Redux make actually be the better choice.

### Making things accessible

I learned a ton about myself and how to build things effectively during this project. As a former UX Designer, I found myself grappling with some of the accessibility related design choices the design makes. For example, some of the text elements on the site are smaller than 16px font (this is a major accessibility issue ESPECIALLY on mobile) however I decided to keep it as such because if I bumped the base font up 16px it messes with visual information hierarchy of everything else.

Another accessibility issue was the dropdown, it's designed to look and behave like a dropdown, contain what looks to be checkboxes, but behave like radio buttons. I ended leveraging [Reach UI](https://reach.tech/) to make the dropdown since it does a great job at covering all the little niche edge cases like scroll trapping when open. I also added a fourth element to make it behave like a dropdown for screen readers instead of a dropdown containing radio buttons.

Although I feel I was able to fix the above issues, I feel like in a work environment I would have been able to do this a lot faster as this is definitely something I would go back to designers and ask for clarification on rather than wrestle with the ideas in my head.

### Typescript is awesome

At the start of this project, I still feel that I had a fairly shaky grasp of how to effectively build projects in Typescript. I learned about the power of extends types, omitting items from prebuilt types, and leveraging prebuilt types for more robust type safety. See below how I typed my button component:

```js
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode,
	variant?: ButtonVariants,
	icon?: 'plus',
	className?: string,
};
```

# Continued development

Moving forward I plan to make this app Fullstack by connecting it to a Postgres backend and leveraging the serverless functions that Vercel provides. I will use Next-Auth to implement the authentication and may even try to use the Stripe API and Sendgrid to make it actually send out invoices.
