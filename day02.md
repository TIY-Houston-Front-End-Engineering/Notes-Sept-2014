# Tuesday, Sept 22nd

```sh
 _______________________________________
| today was all about the terminal and  |
| git                                   |
 ---------------------------------------
   \
    \
        .--.
       |o_o |
       |:_/ |
      //   \ \
     (|     | )
    /'\_   _/`\
    \___)=(___/
```

---

# Terminal Basics

```sh
# make a directory
$ mkdir <directory-name>

# move into a directory
$ cd <directory-name>

# list the contents of a directory
$ ls <directory-name>

# the symbol for the current directory is a dot
$ ls . # this lists the contents of the current directory

# the symbol for the parent directory is ..
$ cd .. # this moves up a directory

# See the current directory
$ pwd
```

# Git

To use the basics of git, you can think of it as a briefase with folders in it. It takes a copy of papers (a printout of your project at a certain point in time), but it will only snapshot the things you have placed in the "staging area" (the folders, in this analogy).

## Configuring git editor

```sh
git config --global core.editor "sublime --wait"
```

## Cloning a repository to your computer
This creates a git repository in the current directory.

```sh
git clone <ssh URL from your github repo>
```

## Adding files to the staging area

To see the current status of your directory and repository:

```sh
$ git status
```

To track *all* files. You can do this by adding the current directory.

```sh
$ git add .
```

## Checking the status
```sh
$ git status
```

## Committing files
Now that you have files in the staging area, you can save a snapshot of the staging area using a commit.

```sh
$ git commit
```

This will open a text editor, probably Sublime. (See [Configuring git editor](#Configuring git editor) if Sublime doesn't open.)

Enter a commit message as the first line in the editor (e.g. "Initial commit" or "Fix the font in index.html"). Save the document in the editor and close the window. Git will finish running in the terminal and you should see output like the following:

```
$ git commit
[master 7b84c79] Fix font in index.html
1 file changed, 12 insertions(+), 2 deletions(-)
```

## Pushing to GitHub

First you'll need to make a repository on GitHub (replace `<projectname>` with the name of your project) and clone it:

```sh
$ git clone <project SSH URL>
```

Then, push your commits to GitHub:

```sh
$ git push origin master
```

If you use the wrong command, it might give you an error, but it won't hurt anything, so don't worry too much about remembering whether you've already pushed.

# Homework

- Re-read about layout with CSS: http://learnlayout.com/
- Play with these terminal commands:

	```sh
	pwd
	ls
	cd
	cp
	sublime
	```

	Remember that there are ways to navigate and not get lost in the terminal. Keep playing with the terminal, I promise you will get very comfortable, very quickly!

	- use `pwd` to find your current dir
	- list out file structure with `ls`
	- navigate up and down with `cd`
	- `.` means current folder
	- `..` means parent folder

- Check out all these terminal commands. There's so much awesomeness to learn: http://mally.stanford.edu/~sr/computing/basic-unix.html
- Work more on your HW01, and try to get the styles closer to this screenshot:

	![](./examples/day01/blog.png)

- Remember, you can add more HTML tags to your homework 1:
	- `<doctype>`
	- `<html>`
	- `<head>`
	- `<body>`
	- `<p>`
	- `<div>`
	- `<a>`
	- `<h1>`
	- `<img>`
	- `<ul>`
	- `<ol>`
	- and more from http://www.w3schools.com/tags/
- And add more styles to your CSS:
	- background
	- color
	- opacity
	- display
	- margin
	- padding
	- height / width
	- visibility
	- font
	- and more from http://css-tricks.com/almanac/

## Resources

- http://css-tricks.com/almanac/
- http://meettheipsums.com/
- List of HTML tags: http://www.w3schools.com/tags/
- All the CSS properties! http://www.w3schools.com/cssref/

## Homework


- Watch "The Long Game pt 1 and 2": http://delve.tv/essays/
- Copy the code from today, and experiment with as many HTML tags as possible
	- tags: http://www.w3schools.com/tags/
	- code from today: [link to code](./examples/day01)
	- When you finish, just zip your files and email them to me. We will be putting them on the "internets" tomorrow with Git!

## ProTip

- Use `border: solid red 1px;` to see where the edges of a box are.
- Use `*{ border: solid red 1px; }` if you need a sledgehammer.