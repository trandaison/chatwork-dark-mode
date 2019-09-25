module.exports = {
  "extends": ["airbnb"],
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "webextensions": true
  },
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
