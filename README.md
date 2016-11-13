##Gulp template (Pug, SASS, autoprefixer, BrowserSync, include)

Gulp-template for frontend assembly.

###System requirements
1. [NodeJS](http://nodejs.org) - download and run the installer.
2. [GulpJS](http://gulpjs.com/) - `$ npm install -g gulp` (MAC OS users need _sudo_).

###How use
1. Clone or download this repo in directory of your choice.
2. Inside this directory run `npm install`.

###Start
```shell
$ gulp
```

BrowserSyn start automatically and show your IP in console. The default local port - _7777_. 

You can change this in _gulpfile.js - browserSync settigs - port_:

![PNG](http://1.1m.yt/xy52KvU.png)

####Structure
`/src/` - your working directory.

`/build/` - compiled code. Never edit this folder.

####Simple import HTML and JS files
Use //=include for importing:

```html
<body>
	//=include partials/_header.html
	<main>
		Main content
	</main>
	//=include partials/_footer.html
</body>
```

####Notify on SASS error

![PNG](http://2.1m.yt/rx4I8RV.png)

####Link library
By default, already connected:

- Eric Meyer's “Reset CSS” 2.0

- jQuery v1.11.3

- SASS mixins

##Enjoy!