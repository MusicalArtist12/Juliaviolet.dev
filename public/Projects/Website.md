---
title: 'This Website'
subtitle: ''
photo: '/ProjectPhotos/website.png'
publishDate: 'August 11, 2023'
---


# Design Overview

I wanted to create a website to fulfill a small handful of needs. It needed to display my personality and own abilities as a developer, so using something like *Wix*, *Squarespace*, or the many other website builders was out of the question. That, and I had very little web development experience so I also just wanted to build it myself.

I chose to use Next.JS as my primary framework. I wanted to use React after some preliminary research, and ultimately chose Next.JS because it was recommended to me, I liked how it was designed, and i liked its focus on server-side rendering. 

# Purpose

This website serves 3 primary goals. First and foremost, it gives myself a little home on the wild web. The [/About Me](/About-Me) section gives a place for visitors to learn about who I am, and the [/Contact](/Contact) section gives a place for visitors to find me in other places. The website's design also reflects my personal taste in styling, and when working on my linux config files, i found myself coming back to the design of my website to guide me. 

The next big goal for the website is to organize my projects, give them a goal, and to easily share them. When it comes to my personal projects, I often find it difficult to maintain motivation and seeing the end goal. While I was still putting the website together, I found myself coming up with many project ideas that may have been a bit silly, but would have been a ton of fun to make. A lot of that creative motivation came from just being able to have a place to share it. 

<div className='inset-photo' style={{maxWidth: "20rem"}}>
    <img src="/ProjectPhotos/bad_website.png"/>
</div>

The last goal was to learn web development. I had experience with html/css (*not a ton but I knew a little*) but lacked any javascript experience, which is part of the reason why I chose react and next.js. It seemed simple enough given what i knew about html so I dived in. 

The photo on the left was from 2019, and I clearly didn't know what a `<div>` was.

# Technical description

## Stack

- React/Next.JS 
- React-Spring (Animation)
- MDX (Project/Blog posts)
- Font Awesome (Icons)
- Vercel (Website hosting)

## Structure

I'm using the Next.JS's App Router, in contrast to the Pages Router. I liked the use of a single layout.tsx file to give a unified look to the website. The header's responsive design was done in React and CSS. 

While Next.JS provides support for Tailwind, I chose not to use it. I didn't like how it structured its utility classes, and instead wrote all my classes in CSS directly. There are instances where I needed to modify the individual classes where tailwind might've been useful, however for my use case React already provided this functionality for me.

I chose to use React-Spring for my animations since I liked how it frames object movement. I'm currently using it for the mobile navigation menu, the [/About Me](/About-Me) slideshow, and the loading screen. 

I'm using MDX to create project and blog posts because markdown is probably the easiest way to format text when writing. The way I implemented MDX provides a way to easily add posts without redeploying the website and its supported by Next.JS directly.

# Result

I mean, the result is right here. I'm quite proud of the outcome. I learned Typescript, React and Next.JS, as well as reinforced my CSS and HTML skills. I do not consider this project *done* by any means, since I plan on coming back to update it as grow and change as a person. 
