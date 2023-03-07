REQUIREMENTS:
- HTML/JavaScript ✓
- Webpack + webpack-dev-server ✓
- TypeScript/JavaScript ✓
- CSS/SASS/SCSS/LESS ✓
- ReactJS ✓
- Redux/Mobx for State Management
- Consumption of a JSON file to render content ✓
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

3. I've never worked with such long strings in JSON before, and it took awhile for me to figure out how to convert the special characters back to string. Was quite annoying that I couldn't use parse or stringify.
What I did in the end was replace all the \" with ", then find all the \n and map them into a new paragraph

4. Learned how to use <picture> to provide different images for different dimensions

5. Previously, I only briefly used Jest to explore it's functions. 

6. Overall I thought this was a really well structured assignment that tested everything in different ways 

DISCREPENCIES: 
1. For the banner header, our photos have inverted resizing - probably because I designed mobile-first instead of desktop-first (I used object-fill: cover; width: 100%; height: auto; for phone view, while desktop media query displays max-height: 30vh). Same inversion goes for menu overlay height
2. For the mobile site, the text for the second post is truncated. Is that supposed to happen? I'll do it accordingly.
3. I haven't used Redux. While I theoretically roughly know what Redux does, I've never had applications that required large-scale enough state management. Even now, I'm not quite sure what state there is apart from opening the menu actually. I'll be learning it and completing it in my later commits, but for now I'll commit what I have!

IMPROVEMENTS:
1. I want to clamp the menu overlay height. I want it to be clamp(minimum-banner,33vh,maximum-content) in case the sentences overflow
2. I would've used MUI for the icons but I'm not sure if that's what you want, so I copied the icons directly. Otherwise, I would've put the MUI icons in a flex-row and adjusted the border-radius
Same goes for the quote with the icon - I can't extract either of them individually, so I rendered the image itself. Anyway, I assume it's just a matter of putting them in a flex container.
3. Automatically insert '\' to escape double quote in JSON, but I don't know how to directly make algorithms for JSON 
4. Would've liked to template everything into a page template, then I could reuse and recreate the pages faster. But for this case, I don't think it's appropriate, because the elements are quite different (i.e. photo responsiveness and photo placement)
5. I don't know how to make #third-banner fullscreen unless I remove it from the div. I spent a long time trying width: 100% and trying to adjust margin-left(other methods would overflow-x). But when it's width 100% it would be confined to it's parent's (.body-container) style. Now the DOM makes less sense when read, but no choice. I'll figure it out soon hopefully! Maybe something to do with .body-container box-sizing:border-box?

sorry if some naming conventions are weird 
