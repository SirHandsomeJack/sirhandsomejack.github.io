import { getPermalink, getHomePermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Little Sim World',
          href: 'https://store.steampowered.com/app/1429880/Little_Sim_World/',
        },
        {
          text: 'Super Bunny Hop',
          href: getPermalink('superbunnyhop'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:SirHandsomeJack@gmail.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/sirhandsomejack' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.x.com/SirHandsomeJack' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@SirHandsomeJack' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/CW2Nv67' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/SirHandsomeJack' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© 2024 Jack Young. All rights reserved.`,
};
