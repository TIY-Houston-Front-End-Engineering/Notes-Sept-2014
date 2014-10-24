#!/bin/sh

#!/bin/sh
blogs=( "http://www.adambergen.me" "http://marcodemus.tumblr.com" "http://medium.com/@prufrock123" "http://medium.com/@wideangle7" "http://medium.com/@warnerp18" "http://ryanmora23.tumblr.com" "http://medium.com/@tawfiqmp" "http://kenmcleod.tumblr.com" "http://phyllistran.tumblr.com" "http://julierichsworld.tumblr.com")

for i in "${blogs[@]}"
do
    :
    sleep .25
    open "$i"
done