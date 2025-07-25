---
title: How I built this website
date: 2025-07-24T16:00:00.000Z
---

I've gone through too many static site generators and content management services. None of them quite met my needs. Ghost was too rigid and non-customizable. Eleventy was way too complicated for just a personable blog. Hugo alone didn't give me the frictionless ease of posting and creating pages that I wanted, which really decreased the amount of writing I was motivated to do. Wordpress is just a hot mess. Plus, until about a month ago I was neck-deep in college application season, so I decided to retire from blogging until I had more time.

Well, this summer I've done nothing but play video games and watch TV, so I decided to pick up writing again. I knew I wanted a permanent solution; a way of making my blog that I would stay motivated to write for it, yet one that was flexible enough to tinker without taking up too much of my time. I settled on generating my site with [Hugo](https://gohugo.io), and using [TinaCMS](https://tina.io) as my CMS. Hugo has by far the most developed and easy to set up templating ecosystem I've seen in a static site generator. Its configuration is done using pure YAML, which is amazing. I don't need fancy animations or dynamic pages; I just need a place to write posts and host various random pages. Hugo is perfect for that.

![](/images/SCR-20250725-npsp.png "A snippet of my YAML configuration file.")

However, I own both a Mac and an iPad. On my Mac, it's no big deal to just open up the source code of my website in Neovim and add a blog post like that. However, doing that on my iPad is more trouble than it's worth. I wanted a Ghost or Wordpress-like admin page that I could manage my site's pages and media files from. After a bit of searching, I settled on TinaCMS. Tina connects with GitHub through TinaCloud, allowing one to automatically push posts to the site's repo, which is perfect since I'm hosting this website on GitHub pages. The admin page is built along with the rest of the site through GitHub actions, and authentication is handled using TinaCloud as well. One thing I love about Tina is how it allows you to define "collections," which are really just groups of posts that all live in one directory. You can define different metadata entries for each collection.

It's been way too long since I've had motivation to blog, and hopefully Hugo and TinaCMS will make everything a lot smoother to use.
