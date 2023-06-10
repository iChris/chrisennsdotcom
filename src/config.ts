import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    uses: {
        path: '/uses',
        title: 'uses'
    },
    links: {
        path: '/links',
        title: 'links'
    },    
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Faraway, So Close',
    title: 'Faraway, So Close',
    description: 'Faraway, So Close is the blog of Chris Enns - a podcast editor & producer.',
    url: 'https://chrisenns.com',
    githubUrl: 'https://github.com/iChris/chrisennsdotcom',
    listDrafts: true,
    image: 'https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png',
    // YT video channel Id (used in media.astro)
    ytChannelId: 'UCaIQZGbI2RnbJKPEgKd0iyA',
    // Optional, user/author settings (example)
    // Author: name
    author: 'Chris Enns', // Example: Fred K. Schott
    // Author: Twitter handler
    authorTwitter: 'iChris', // Example: FredKSchott
    // Author: Image external source
    authorImage: 'https://pbs.twimg.com/profile_images/1651216053295525889/UdTmeSYH_400x400.jpg', // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
    // Author: Bio
    authorBio: 'A podcast editor and producer living in Saskatoon, Saskatchewan, Canada.'
}

// Ink - Theme configuration
export const PAGE_SIZE = 8
export const USE_POST_IMG_OVERLAY = false
export const USE_MEDIA_THUMBNAIL = true

export const USE_AUTHOR_CARD = true
export const USE_SUBSCRIPTION = false /* works only when USE_AUTHOR_CARD is true */
