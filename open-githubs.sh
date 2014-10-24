#!/bin/sh
usernames=("abergen84" "mb289"  "prufrock123"  "t3patterson" "warnerp18" "ryanmora23" "tawfiqmp" "therinken" "phyllistran" "julierich1211")

for i in "${usernames[@]}"
do
    :
    sleep .25
    open "https://github.com/$i"
done