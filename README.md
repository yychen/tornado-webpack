# tornado-webpack
## Install requirements
```
(venv)$ pip install -r requirements.txt
```
Basically, this installs `tornado` and `jinja2`.

Then, install npm packages. You should install webpack globally, and other packages locally.

```
(venv)$ npm install -g webpack
(venv)$ npm install
```
This basically installs `babel-loader`, `babel-runtime`, `style-loader`, `css-loader`, `sass-loader`, `extract-text-webpack-plugin`, `assets-webpack-plugin`.

## Entry points
The main index HTML is located at `templates/index.html`.  
The main javascript is located at `js/main.jsx`.  
The main scss is located at `scss/main.scss`.

## Watch!
Run `webpack` and watch changes by the following command:

```
(venv)$ webpack --progress --watch
```

## Serve!
Run the python script:

```
(venv)$ python server.py
```

Then, access the webpage at http://localhost:8888/


## nvm
In order to manage node.js as how virtual environment does in python, I use nvm. Please refer to https://github.com/creationix/nvm
