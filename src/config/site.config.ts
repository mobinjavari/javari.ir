interface SocialLink {
  name: string;
  url: string;
  icon: string;
  gradient: string;
}

interface MetaImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface Config {
  // Site Info
  name: string;
  about: string;
  title: {
    default: string;
    template: string;
  };
  description: string;
  url: string;
  image: MetaImage;
  locale: string;
  themeColor: string;

  // Meta Info
  meta: {
    keywords: string[];
    author: string;
    email: string;
    robots: string;
    googlebot: string;
  };

  // GitHub Configuration
  github: {
    username: string;
    token: string;
  };

  // Social Links
  socials: SocialLink[];
}

const siteConfig: Config = {
  // Site Info
  name: "Mobin Javari",
  about: "Software Developer & Open Source Enthusiast",
  title: {
    default: "Mobin Javari - Software Developer",
    template: "%s | Mobin Javari"
  },
  description: "Software Developer specializing in web development and open source projects. Experienced in Vue.js, TypeScript, and modern web technologies.",
  url: "https://javari.ir",
  image: {
    url: "https://javari.ir/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Mobin Javari - Software Developer"
  },
  locale: "en_US",
  themeColor: "#3B82F6",

  // Meta Info
  meta: {
    keywords: [
      "Mobin Javari",
      "Software Developer",
      "Web Developer",
      "Vue.js Developer",
      "TypeScript",
      "Open Source",
      "Frontend Developer"
    ],
    author: "Mobin Javari",
    email: "me@javari.ir",
    robots: "index, follow",
    googlebot: "index, follow"
  },

  // GitHub Configuration
  github: {
    username: "mobinjavari",
    token: import.meta.env.VITE_GITHUB_TOKEN || "",
  },

  // Social Links
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mobinjavari",
      icon: "GithubIcon",
      gradient: "from-[#90a4ae] via-[#546e7a] to-[#37474f] bg-[215deg]",
    },
    {
      name: "Telegram",
      url: "https://t.me/mobinjavari",
      icon: "TelegramIcon",
      gradient: "from-[#4FC3F7] via-[#29B6F6] to-[#0277BD] bg-[215deg]",
    },
    {
      name: "BlueSky",
      url: "https://bsky.app/profile/javari.ir",
      icon: "BlueSkyIcon",
      gradient: "from-[#59B9FF] to-[#0A7AFF] bg-[215deg]",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@mobinjavari",
      icon: "YouTubeIcon",
      gradient: "from-[#EF9A9A] to-[#C62828] bg-[215deg]",
    },
    {
      name: "Email",
      url: "mailto:me@javari.ir",
      icon: "EmailIcon",
      gradient: "from-[#4CAF50] via-[#43A047] to-[#388E3C] bg-[215deg]",
    },
    {
      name: "GitLab",
      url: "https://gitlab.com/mobinjavari",
      icon: "GitlabIcon",
      gradient: "from-[#FC6D26] via-[#E24329] to-[#FCA326] bg-[215deg]",
    },
    {
      name: "Website",
      url: "https://javari.ir",
      icon: "WebsiteIcon",
      gradient: "from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] bg-[215deg]",
    },
  ],
};

export default siteConfig;
