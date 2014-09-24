# Wednesday, Sept 24th

# Git review
```sh
# I created a new repo on Github... now what?

$ cd ~/Github\ Projects/
$ git clone <ssh url> <optional folder name>
$ cd <folder that we just cloned>

# I made an edit or added stuff.. now what?

$ git add <files>
# OR
$ git add --all .

$ git commit
# OR
$ git commit -m "ORLY?"

# Once I'm ready to publish... then what?

$ git push origin master

# ----
# I want to make a publicly visible gh-pages "folder" (a.k.a. branch)
# AND I haven't already created it yet

$ git branch
$ git checkout -b gh-pages
$ git push origin gh-pages
# ALWAYS MAKE YOUR EDITS IN "master"
$ git checkout master

# ---
# I want to add updates to gh-pages "folder" (a.k.a. branch)
# AND I HAVE already created it

$ git branch
$ git checkout gh-pages
$ git merge master
$ git push origin gh-pages
# ALWAYS MAKE YOUR EDITS IN "master"
$ git checkout master
```