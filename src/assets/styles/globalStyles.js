import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* hide all default scrollbars */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  /* stops ability to select text unless specified */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  user-select: none;

  /* stops blue box on touch event elements */
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
}

:root {
  /* Colors */
  --color-primary: rgba(59, 113, 202, 255);
  --color-primary-transparent: rgba(59, 113, 202, 0.5);
  --color-white: white;
  --color-red: red;
  --olive-drab: #64a22f;
--lemon-grass: #979b94;
--winter-hazel: #d4d09b;

  /* Size */
  --inline: 0.5rem;
  --default: 1rem;
  --gutter: 2rem;
  --bleed: 3rem;
  --whitespace: 5rem;
  --macro: 10rem;
  --padding-small: 10px;
  --padding-mid: 20px;
  --padding-medium: 30px;
  --padding-large: 40px;

  /* Text */
  --text-xxl: 8rem;
  --text-xl: 6rem;
  --text-lg: 3rem;
  --text-md: 2rem;
  --text-sm: 1.5rem;

  --open-sans: "Open Sans", sans-serif;
  --futura-pt: "Futura PT", sans-serif;

  /* Line Heights */
  --line-height-xl: 200%;
  --line-height-lg: 150%;
  --line-height-default: 110%;
  --line-height-sm: 80%;
}

html {
  line-height: 1;
  -webkit-text-size-adjust: 100%;
  /* font-size: 8px; */
}

html,
body {
  background-color: #f9fcf8;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  
}

body {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--open-sans);
  overflow-y: auto;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-items: center; */
  
}

img {
  border-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6, 
{
  margin: 0;
  padding: 0;
}


p,
input,
textarea {
  -webkit-user-select: text; /* Chrome/Safari/Opera */
  user-select: text;
  cursor: text;
}

a {
  text-decoration: none;
  color: inherit;
}

main {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

[hidden] {
  display: none;
}

:focus {
  outline: none;
}

/* Scrollbar */

::-webkit-scrollbar {
  display: none;
}

.Content__Wrapper {
  height: 100vh;
  overflow: hidden;
  background-color: #eaf1ef;
  padding: var(--whitespace) var(--gutter); 
  
}

.heading__H1{
  font-size: var(--text-lg);
  margin-bottom: var(--gap-default);
}

.heading__P {
  font-size: var(--text-sm);
  font-weight: 600;
}

.first__Heading {
  max-width: max-content;
}

.Content__Wrapper{
  padding: var(--macro) var(--gutter);
}

.content__Paragraph,
.list__Items{
  line-height: var(--line-height-default);
  font-size: 1.2rem;
  padding: var(--default) 0;
  max-width: max-content;
  
}

.content__Paragraph span {
  color: var(--color-red);
}


.list__Items {
  margin: var(--padding-medium);
  
}



/* form section styles */


.form__Section {
  padding: var(--gutter-mid) var(--gutter);
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
}

.form__Heading {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: var(--gutter);
}

.form__Group {
  flex-basis: calc(50% - 10px);
  margin-bottom: var(--padding-mid);
}

.form__Group:last-child {
  flex-basis: 100%;
}

.form__Group label {
  display: block;
  margin-bottom: 5px;
}

.form__Group input,
.form__Group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
}


/* form button */

.form__btn {
  width: 100%;
  background: #3679e1;
  padding: 10px;
  margin-top: var(--padding-mid);
  color: #ffffff;
  font-size: var(--font-small);
  cursor: pointer;
  border: none;
  border-radius: 25px;
}


/* hover card section and styles */
.hoverCard__Section {
  padding: 6rem var(--gutter);
  background: #f47ba6;
  min-height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.hoverCard__Wrapper {
  position: relative;
  margin-top: var(--whitespace);
}

.hoverCard {
  width: 400px;
  height: 250px;
  background: #ffffff;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in-out;
  border-radius: 15px;
}

.hoverCard:hover {
  height: 460px;
}

.hoverCard__Image {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--padding-mid);
}

.hoverCard__Image img {
  width: 300px;
  height: 250px;
  border-radius: 50px;
  object-fit: cover;
}

.hoverCard__Info {
  position: relative;
  top: 2rem;
  padding-bottom: 1rem;
  text-align: center;
  line-height: 1.5;
  font-size: 22px;
}

.hoverCard__Info h3,
.posts h3,
.followers h3 {
  color: #3a3a43;
}
.hoverCard__Info p,
.posts p,
.followers p,
.following p {
  color: #cccccc;
}

.hoverCard__Content {
  visibility: hidden;
  display: flex;
  padding-top: 2rem;
  justify-content: space-between;
  text-align: center;
  align-items: center;
}

.hoverCard:hover .hoverCard__Content {
  visibility: visible;
  transition-delay: 0.2s;
  opacity: 1;
}

.hoverCard__ButtonWrapper {
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
  width: 100%;
  visibility: hidden;
}

.hoverCard:hover .hoverCard__ButtonWrapper {
  visibility: visible;
  transition-delay: 0.3s;
  opacity: 1;
}

.follow__btn,
.message_btn {
  padding: 18px 28px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  outline: 1px solid #fff;
  cursor: pointer;
}

.follow__btn {
  color: #ffffff;
  background: #f14a95;
}

.follow__btn:hover {
  color: #fff;
  background: #28a745;
}

.message_btn:hover {
  background: #f14a95;
  color: #fff;
}

`