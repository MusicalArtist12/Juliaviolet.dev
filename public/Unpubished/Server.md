---
header: {
    title: 'Server',
    subtitle: 'No, you cannot have a link',
    photos: ['/ProjectPhotos/server.png'],
    publishDate: 'April 16, 2024'
}

---

# Design Overview

I needed a server to act as a backend between my devices. I wanted something to make it easier to sync up photos, documents, and anything extra. I also had a (somewhat) old Dell all-in-one at my disposal that my roommate got for free. 

I decided on Arch Linux as my distro of choice, even though its not *really* designed for server use. I chose Arch for a few reasons. 1. I know my way around the system and I know pacman fairly well, and I know how to tune the system to my needs. 2. I wanted to host some AUR builds, and I know that the Arch repo has tools designed for this. And, 3. Even though its rolling release, I've never had any stability issues with arch and I get the benefits of being on the bleeding edge.

To sync files between my devices, I ultimately decided on [ownCloud Infinite Scale](https://owncloud.dev/ocis/). I had a pretty rough experience with Nextcloud, since the PHP backend was fairly buggy and would consistently crash. After a bit of research I came across OCIS, which is a complete rewrite of the backend in GO, I knew this would be the best path moving forwards. I'm using [rclone](https://rclone.org/) to handle client syncing.

I'm using Apache as my HTTP server since I have a little experience working with it.

To connect to it locally, I needed to set up a DNS server since my router doesn't support NAT hairpinning. I originally tried to use dnsmasq, but got caught up in the fact that my phone requires DNS over TLS/SSL to use it properly. So I went with BIND, which is completly overkill. My router also doesn't support local DNS servers for some reason, so to use it I need to manually add the private IP address as a DNS address on each device. This still doesn't work properly with my phone, and its been driving me nuts. If anyone has any advice feel free to contact me. 

# Purpose

The driving factor for this project was to migrate off of OneDrive. I had switched to linux in 2022, and OneDrive doesn't really have a capable client for Linux. I also wanted full control of my data. This is the primary objective.

A fairly small secondary goal of mine was to set up a CUPS server, since my printer isn't web-enabled and I work off of more than one machine. I'm still working on getting it to patch through Apache, but that shouldn't be too difficult.

It was only recently that I decided to also use it to build and serve AUR packages (thanks ari!) and thats been very useful. I don't really want to openly link to my website, but its not that difficult to find since I have an A record for it. 

# Conclusion

While I'm not done adding things to this server (I'm now using it to also serve some gifs for Discord), I've reached a point where I'm happy with the results. Currently, the main limiting factor is my home wifi, since I don't want to pay a server hosting company. 

I currently have around 200 GB of data on it, most of which is from OneDrive.
