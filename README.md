# KAS-Sass

<p align="center">![Our logo and slogan](images/Logo.jpg)</p>
<p align="center">Picture 1 - Our logo and slogan.</p>

Para ler este arquivo em português, acesse [README-pt-br.md](README-pt-br.md)

## Our goal
KAS-Sass is a Brazilian web framework for front-end development whose objective is to streamline the production of CSS layouts and styles but without "plastering" the developer to a unique style, giving him the freedom to quickly modify his features, all of this through our configuration file.

## Technologies used
KAS-Sass is entirely developed using the SCSS syntax of the style preprocessor [Sass](https://sass-lang.com/), so to use it you must have it installed on your machine.
I am also adapting the code for the development methodology [Atomic Design](https://atomicdesign.bradfrost.com).

### Installing Sass
To see all the ways to install Sass, you can [access the official project page](https://sass-lang.com/install), but, in summary ...
To install Sass using [Node.js](https://nodejs.org/pt-br/) just open the command terminal and type <b>npm i -g sass</b> and wait for the download to be completed.

## How to use?
Using KAS-Sass is simple:
* Download the source code present [in the 'src' folder of this project](https://github.com/AlarmedEwe/KAS-Sass/src)
* Edit the <i>KAS-config.scss</i> file according to your preferences (if you wish, of course)
* Compile the file using [Sass](https://sass-lang.com/guide) (we recommend using the command <b>sass --watch admitscss output.css</b>)
* Embed the generated CSS file in your code (if it is HTML, just use the tag <b>&lt;link rel="stylesheet" href="output.css" /&gt;</b>)

### KAS-config.scss
![Arquivo de configurações](images/Config.jpg)
<p align="center">Picture 2 - KAS-Sass configuration file</p>

This is the KAS-Sass configuration file. Through it you can embed the entire primary and secondary color scheme of your website, as well as the minimum size so that the menu does not become a hamburger menu or the size of the <i>border-radius</i> property of elements like buttons.