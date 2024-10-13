import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    /*
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    */
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/sirhandsomejack' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.x.com/SirHandsomeJack' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@SirHandsomeJack' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/CW2Nv67' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/SirHandsomeJack' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© 2024 Jack Young (SirHandsomeJack). All rights reserved.`,
};
