# React-App
Functional Progressive Web App Base with React, SCSS, & CoffeeScript

## Usage
- Navigate to the project directory
- `git clone https://github.com/codeWonderland/react-app.git`
- `cd react-app`
- `npm install && npm start`

### File Watchers
Ideally, I recommend using WebStorm, and the pre-established config files in the `.idea/` folder, but if not then the config can be set up via npm as such: 

#### CoffeeScript
`npm run watch-coffee`

#### SCSS
`npm run watch-scss`

## Documentation
This project exists to establish a simple progressive web app using a node base, scss, coffeescript, and react.
As there is only one page, there is no need for extra routing, the entire state is managed by the react application.
All of the main react components should be made within `App.js`, while all utility functions should be done within util.coffee
Adding addtional resources is done within the `index.js` file

## License
This project is licensed under the GNU General Public License
