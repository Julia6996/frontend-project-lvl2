# **Hexlet Project: *"Difference Calculator"*** ![Difference Calculator](https://img5.goodfon.ru/wallpaper/nbig/b/f1/abstraktsiia-belyi-fon-geometriia.jpg)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Julia6996/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Julia6996/frontend-project-lvl2/actions)
<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>
<h1>Description:</h1>
<b>Generator of difference</b> is the CLI programm that generate difference between two files. Supporting formats: JSON, YML, YAML.
<h2>How to install:</h2>
<ul>
<li>Make sure you have installed <a href = "https://nodejs.org/en/">Node.js</a> no lower version 12: node -v.</li>
<li>Clone repository:

```
https://github.com/Julia6996/frontend-project-lvl2.git
```
</li>
<li>Change directory to frontend-project-lvl2</li>
<li>Run the command: 

```
make install.
```
</li>

```
$ git clone git@github.com:pterodactylsam/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
```
</ul>
<h2>Run tests:</h2>

```
make test
```
<h2>How to use:</h2>
You can use the project as a script in the terminal or as a library in your JavaScript project. You can format the difference in three styles: stylish (default), plain and json.

```
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
  ```
  <h2>Project asciinemas:</h2>

[![asciicast](https://asciinema.org/a/CFWuV2xmJM8j8nuDq8tjd7p8g.svg)](https://asciinema.org/a/CFWuV2xmJM8j8nuDq8tjd7p8g)

[![asciicast](https://asciinema.org/a/W8UpmdH1PUBYEEBBSBfigJJMK.svg)](https://asciinema.org/a/W8UpmdH1PUBYEEBBSBfigJJMK)
- [x] *stylish:*

[![asciicast](https://asciinema.org/a/wuCntzdU53Y98l9ffzeWxLnST.svg)](https://asciinema.org/a/wuCntzdU53Y98l9ffzeWxLnST)
- [x] *plain:*

[![asciicast](https://asciinema.org/a/fEOQEZzQ4NbpEN4mMyK26iLOU.svg)](https://asciinema.org/a/fEOQEZzQ4NbpEN4mMyK26iLOU)
- [x] *tests:*

[![asciicast](https://asciinema.org/a/hLzptnbwSwiLvuh1UnTomNQtF.svg)](https://asciinema.org/a/hLzptnbwSwiLvuh1UnTomNQtF)