---
header: {
    title: 'Repeater Cards',
    subtitle: 'Made for a Callsign Rolodex',
    photos: ['/ProjectPhotos/rolodex.png'],
    publishDate: 'October 7, 2024',
    link: 'https://rolodex.breq.dev',
    githubLink: 'https://github.com/breqdev/callsign-rolodex',
    people: [ 'Breq', 'Julia' ]
}

---

# Overview and Motivation

So, my friend [Brooke](https://breq.dev) made a really cool web app that stores ham radio callsigns with various information. It's pretty neat, and you can find her writeup [here](https://breq.dev/projects/rolodex). However, upon using it, I kept wishing that I could store repeater information with their associated callsign, since my HT only shows 7 characters per repeater entry. So I forked the repo and got to work.

# Description

I wanted each card to either show a person or a station. If it displays a person, it should show their name, callsign, website, and DMR. If it displays a repeater, it should display its callsign, location, CTCSS or DCS tones, frequency, and offset. Like a personal selection of repeaterbook entries.

To sort cards, I modified Brooke's code to split the dropdown into three sections, one that only showed individuals, one that only showed repeaters, and a section that could sort both. Sorting by frequency also divides the cards up by their respective band (2m, 70cm, 10m, etc...). 

To export cards, I added two vcf lines, `X-REPEATER-INFO` and `X-STATION-TYPE`. `X-REPEATER-INFO` is semicolon seperated, following the VCF specification.

