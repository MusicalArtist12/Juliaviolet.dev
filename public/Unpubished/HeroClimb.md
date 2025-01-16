---
title: 'Hero Climb'
subtitle: 'Presented by Tappa Tappa Keyboard'
photos: ['/ProjectPhotos/HeroClimb.png']
publishDate: 'January 13, 2025'
githubLink: 'https://github.com/theIntethesis/Hero-Climb'
people: [ 'Jason Culbertson', 'Julia', 'Ferris Hammes-Buehler', 'Taran Haug', 'Gavin Haynes' ]
---

# Overview

Hero Climb is a rogue-like infinite tower climbing game created by Tappa Tappa Keyboard! race against the lava, collect loot, and buy upgrades! Get the highest score you can before dying to monsters or loosing to the lava. This game was a collaborative effor between four other peers and I for CS385 taught by Dr. BC at UI. The game was made in Godot 4.1 and uses a mix of C# and GDscript.

Jason developed the three enemies, Ferris developed our main character, Taran was in charge of level design, Gavin put the sound together, and I developed the user interface. Taran and I worked on the difficulty handler. 

I was also in charge of packaging and releasing the game out to the public.

# Personal Contributions

I had four key roles in the development of Hero Climb. The User interface, version publishing and creating the game manual, as well as developing a difficulty system with Taran.

## User Interface

The user interface is the largest contribution I made to Hero Climb. While the major composite classes were used or inherited by almost everything I made, the project can be broken down into two halves. The menu interface and the in-game HUD.

### Menu/HUD

I chose to use a composite/leaf system, since Godot also uses a composite system with its `Node`s. I created the base class `MenuElement` that `MenuLeaf` and `MenuComposite` both inherit from. a `MenuComposite` has many leaves. Really, the idea is that each menu context is abstracted out into a `MenuComposite` (Such as the main menu, pause menu, and HUD), and they each contain one or more leaves. From there, we can inherit `MenuComposite` creating `MenuStack` which allows for individual menus be layered (the base pause menu is "under" the settings menu). Going back is as simple as popping from the stack, and clicking a button that opens up a menu pushes onto the stack.

The in-game HUD is a composite, allowing for items to be dynamically added and removed (such as the controls on mobile).

### Assets



## Difficulty

Taran and I spent a week creating a difficulty handler that set values all over the entire game. The big challenge here was figuring out what numbers made the most sense to make the game feel challenging for each level. Taran handled the getters and setters for each of the individual game handlers, and I worked on the handler itself and the state pattern we decided on.

## Version Publishing

I was in charge of ensuring that the game could be built for Windows, Linux, and Android. Godot made this incredibly simple, all I had to do was get a key so that I could sign the android package. I also created the final game logo used in the android build. 

## Game Manual

The game manual was the most simple part of the project, yet it is still crucial to the user experience so that they can effectively download and play the game. This will sound weird but it was created by printing out a website made in Next.JS. I chose to do this since the original version of the manual was written out in Markdown and I needed a quick way to produce a print format. Using `@media print` made it so that I could also produce a web version of the manual and a single-page version for the demo.

# Results