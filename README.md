REQUIREMENTS:
- HTML/JavaScript ✓
- Webpack + webpack-dev-server ✓
- TypeScript/JavaScript ✓
- CSS/SASS/SCSS/LESS ✓
- ReactJS ✓
- Redux/Mobx for State Management
- Consumption of a JSON file to render content
- Creation of 1 frontend unit test case on 1 of your components with Jest and Enzyme

LEARNING POINTS: 
1. I usually use create-react-app immediately, so the most painful part for me was installing the babel transpiler to ensure compatability, and webpack for module bundling to ensure that the dependencies are in correct order
I ran into a lot of error codes, especially with the babel loaders, that led me on a wild chase around StackOverflow
Overall it was a fun experience going under the hood!

2. Spent an ungodly amount of time importing with @font-face 

--SOLVED-- just had to re-download webpack 

I tried troubleshooting it by importing different fonts too, but none worked. I doubt it's a corrupt font file either, since I tried downloading Visby from different sources too, and in different formats 

I believe it's something to do with my webpack configuration, but I'm unable to solve the problem and it's been 2 hours 
{ test: /\.(woff|woff2|ttf|eot)$/,
   type: 'asset/resource' } should have worked 
You can refer to App.css - I believe my @font-face code should be right

DISCREPENCIES: 
1. For the banner header, our photos have inverted resizing - probably because I designed mobile-first instead of desktop-first (I used object-fill: cover; width: 100%; height: auto; for phone view, while desktop media query displays max-height: 30vh). Same inversion goes for menu overlay height
2. The cross logo to exit out of menu overlay: I used float, I think you guys used flex-end instead 

IMPROVEMENTS:
1. I want to clamp the menu overlay height. I want it to be clamp(minimum-banner,33vh,maximum-content) in case the sentences overflow. 

sorry if some naming conventions are weird 
