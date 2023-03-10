**--- STILL WIP, REFER TO TODO FOR THINGS I'LL BE ADDING ---**

**REQUIREMENTS:**

- HTML/JavaScript ✓
- Webpack + webpack-dev-server ✓
- TypeScript/JavaScript ✓
- CSS/SASS/SCSS/LESS ✓
- ReactJS ✓
- Redux/Mobx for State Management
- Consumption of a JSON file to render content ✓
- Creation of 1 frontend unit test case on 1 of your components with Jest and Enzyme ✓

**LEARNING POINTS:**

1. I usually use create-react-app immediately, so the most painful part for me was installing the babel transpiler to ensure compatability, and webpack for module bundling to ensure that the dependencies are in correct order
I ran into a lot of error codes, especially with the babel loaders, that led me on a wild chase around StackOverflow
Overall it was a fun experience going under the hood!

2. Spent an ungodly amount of time importing with @font-face --SOLVED-- Just had to re-download webpack

~~I tried troubleshooting it by importing different fonts too, but none worked. I doubt it's a corrupt font file either, since I tried downloading Visby from different sources too, and in different formats~~

~~I believe it's something to do with my webpack configuration, but I'm unable to solve the problem and it's been 2 hours
{ test: /\.(woff|woff2|ttf|eot)$/,
type: 'asset/resource' } should have worked
You can refer to App.css - I believe my @font-face code should be right~~

3. I've never worked with such long strings in JSON before, and it took awhile for me to figure out how to convert the special characters back to string. Was quite annoying that I couldn't use parse or stringify.
What I did in the end was replace all the \" with ", then find all the \n and map them into a new paragraph

4. Learned how to use `<picture>` to provide different images for different dimensions

5. Previously, I only briefly used Jest to explore it's functions. I'm learning to use Jest and Enzyme now! But webpack configuration with Jest... was annoying...
I keep getting:
   Support for the experimental syntax 'jsx' isn't currently enabled (9:31):
   describe('<Banner/>', () => {
   it('toggles menu when logo is clicked', () => {
   const wrapper = mount(<Banner/>);`

   Even though my webpack is: 
   rules: [
   {
   test: /\.(js)x?$/,
   exclude: /node_modules/,
   use: {
   loader: 'babel-loader',
   options: {
   presets: [ "@babel/preset-env",
   "@babel/preset-react"] }
   },
   resolve: { extensions: ['.jsx', '.js'], }
   },

   I honestly can't figure it out, and have exhausted StackOverflow and documentation. 

   Why was this literally so hard. Jest documentation for webpack: 
 
 __mocks__/styleMock.js

module.exports = {};
__mocks__/fileMock.js

module.exports = 'test-file-stub';
If you are using CSS Modules then it's better to mock a proxy to enable className lookups. hence your configurations will change to:

{
  "jest":{
     "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
  }
}

But you will need to install identity-obj-proxy package as a dev dependancy i.e.

yarn add identity-obj-proxy -D 

https://stackoverflow.com/questions/37104033/error-it-looks-like-you-called-mount-without-a-global-document-being-loaded

npm install --save-dev --save-exact jsdom jsdom-global

Then:

import 'jsdom-global/register'; //at the top of file, even before importing React

except... 

the error Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none.
          To configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
          before using any of Enzyme's top level APIs, where `Adapter` is the adapter
          corresponding to the library currently being tested. For example:

          import Adapter from 'enzyme-adapter-react-15';

          To find out more about this, see https://airbnb.io/enzyme/docs/installation/index.html 

appears... 

and react 16 onwards isn't supported with enzyme!! angry!!!
so I downloaded an unofficial one https://www.npmjs.com/package/@cfaester/enzyme-adapter-react-18 
but it said "Cannot find module 'prop-types' from 'node_modules/@cfaester/enzyme-adapter-react-18/dist/enzyme-adapter-utils/createMountWrapper.js'" 
so I installed prop-types

**DISCREPENCIES:**

1. For the banner header, our photos have inverted resizing - probably because I designed mobile-first instead of desktop-first (I used object-fill: cover; width: 100%; height: auto; for phone view, while desktop media query displays max-height: 30vh). Same inversion goes for menu overlay height and other banners

2. I would've used MUI for the icons but I'm not sure if that's what you want, so I copied the icons directly. Otherwise, I would've put the MUI icons in a flex-row and adjusted the border-radius
Same goes for the quote with the icon - I can't extract either of them individually, so I rendered the image itself. Anyway, I assume it's just a matter of putting them in a flex container.

3. For the mobile site, the text for the second post is truncated. Is that supposed to happen? I'll do it accordingly.
   --EDIT--
   Came back to see it the day after - the text has been replaced to the non-truncated version, but I already did the shortened paragraph for mobile view, so I'll leave it there!

4. I haven't used Redux. While I theoretically roughly know what Redux does, I've never had applications that required large-scale enough state management. Even now, I'm not quite sure what state there is apart from opening the menu actually. I'll be learning it and completing it in my later commits, but for now I'll commit what I have!

5. My mobile view has a little bit of whitespace separating top footer and bottom footer - I believe this is inherent in using the `<source>` function to render different media for the different sizes. My `<source>`, even when unused, is 19px. I compensated for the difference by using margin-top: -19px for the bottom div, and then adding padding-top to the image element to maintain the separation, but I'm slightly worried about using negative margins.

6. Would've designed my own Click Here button in css but the button already came with the image. Just a basic `<button>Click here</button>` with color:white background-color: #5C5646 border-radius

7. For the quote image, I can't extract the individual elements, and have to render the whole picture separately depending on mobile view or desktop view, since I can't get words in the image to flex.
Same goes for the footer - the top banner comes in a complete image, so mobile and desktop have 2 entirely different images, while the bottom banner for desktop view is also a complete image, whereas the bottom banner for mobile view is created with it's elements because it only came with a black background.

**IMPROVEMENTS: (FOR ADDITIONAL REFINEMENETS)**

1. I want to clamp the menu overlay height in case the sentences overflow for mobile

2. Would've liked to template body pages into a page template, then I could reuse and recreate the pages faster. But for this case, I don't think it's appropriate, because the elements are quite different (i.e. photo responsiveness and photo placement)

3. I don't know how to make #third-banner fullscreen unless I remove it from the div. I spent a long time trying width: 100% and trying to adjust margin-left(other methods would overflow-x). But when it's width 100% it would be confined to it's parent's (.body-container) style. Now the DOM makes less sense when read, but no choice. I'll figure it out soon hopefully! Maybe something to do with .body-container box-sizing:border-box?

4. I can't add link to "here". If I do a href in JSON it will render it as a string. But if I replace "here" for paraFormatted[3][8].props.children and use document.createElement('a') it doesn't make it a hyperlink either
