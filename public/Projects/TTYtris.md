---
title: 'TTYtris'
subtitle: 'B2B T-Spin Triples my beloved'
photos: ['/ProjectPhotos/ttytris.png']
publishDate: 'January 13, 2025'

---

# Purpose

TTYtris is a stacker ("not tetris") and runs in a terminal, made for a first assignment to my compiler design class to get to know the language we'll be writing a compiler for. Because of technical limitations, there is no gravity and objects only move by your request.

# Design Overview

The langauge used to create TTYtris is a stripped down version of C used to teach the basics of compiler design. It is a functional imperative language. It has three data types, `int`, `bool`, `char`, and their one-dimension array counterparts. There is no type cohersion or manual memory management. Arrays are the only type passed by reference. The standard library has `output(int)`, `outputc(char)`, `outputb(bool)`, and `outnl()`. There is no built in pre-compiler.

To me, I saw this as a challenge. But since Tetris was originally created in 1980's Soviet Russia, I knew it had to be possible.

I've chosen to follow tetris guidelines as I wanted to create a faithful recreation of a modern version of tetris. I'm using the Super Rotation System and 7-Bag queue generation. I score B2B's for tetrises and t-spin line clears, as well as give a bonus for combos. It follows a 40 line format, which I chose as I felt that something like marathon wouldn't be as interesting without gravity.

# Techniques

First, I've chosen to use the C precompiler to keep the code base clean and simple. Without it everything would have to go into a single, 1800 line long file. I made some use of `#defines` mainly to define integer outputs.

To create each individual piece, I used a 5x5 sprite system, stored as a `int sprite[25]`. I chose to use integers instead of chars since it allowed me to both use multi-byte characters in the display and to allowed me to use a bit patterns to represent each rotation. This idea of using layers is later used during frame generation, as I can put the placed blocks on one layer, the current block on a second, and the background on a third. This can then be sent to the `outputsprite()` function which takes a sprite and its 2d size, and five strings (remember, no multidimensional arrays) to output the sprite. 

# Conclusion

This was a fun challenge. I ended up writing the bulk of the code in a few days, and the final product really feels like tetris in gameplay.