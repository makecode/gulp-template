##Gulp template (SASS, autoprefixer, BrowserSync, rigger)

Gulp-template for frontend assembly.

###System requirements
1. [NodeJS](http://nodejs.org) - download and run the installer.
2. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (MAC OS users need _sudo_).

###How use
1. Clone or download this repo in directory of your choice.
2. Inside this directory run `npm install`.

###Start
```shell
$ gulp
```

BrowserSyn start automatically and show your IP in console.

####Structure
`/src/` - your working directory.

`/site/` - compiled code. Nver edit this folder.

####Simple import files
Use //=include for importing HTML and JS files.

```html
<body>
	//=include partials/_header.html
	<main>
		Main content
	</main>
	//=include partials/_footer.html
</body>
```

####Link library
By default, already connected Eric Meyer's “Reset CSS” 2.0 and jQuery v1.11.3.

##Enjoy!