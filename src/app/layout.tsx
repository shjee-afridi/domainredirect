import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anime Discord",
  description:
    "Anime Discord – Discover and Share the Best Anime Servers. Join the top anime Discord communities!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Removed noindex meta tag for SEO */}
        <meta name="description" content="Anime Discord – Discover and Share the Best Anime Servers. Join the top anime Discord communities!" />
        <meta property="og:title" content="Anime Discord – Best Anime Discord Server Directory" />
        <meta property="og:description" content="Find, review, and join the top anime Discord servers. Analytics, reviews, and more!" />
        <meta property="og:image" content="/icon-256x256.png" />
        <meta property="og:url" content="https://animediscord.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Anime Discord" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anime Discord – Best Anime Discord Server Directory" />
        <meta name="twitter:description" content="Find, review, and join the top anime Discord servers. Analytics, reviews, and more!" />
        <meta name="twitter:image" content="/icon-256x256.png" />
        <link rel="canonical" href="https://animediscord.com" />
        {/* Structured Data: WebSite and BreadcrumbList for enhanced SEO with improved search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://animediscord.com",
              "name": "Anime Discord",
              "description": "Anime Discord offers advanced search to help you discover and join the best anime Discord servers. Search by name, tags, popularity, and more, with comprehensive results.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://animediscord.com/search/{search_term_string}",
                "query-input": "required name=search_term_string",
                "description": "Type any anime, genre, or server feature to get a list of matching Discord servers. More results are shown for broader queries."
              },
              "exampleOfWork": [
                {
                  "@type": "CreativeWork",
                  "name": "Anime Hangout Server",
                  "url": "https://animediscord.com/servers/anime-hangout"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Manga & Chill",
                  "url": "https://animediscord.com/servers/manga-chill"
                }
              ]
            }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://animediscord.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Servers",
                  "item": "https://animediscord.com/servers"
                }
              ]
            }`,
          }}
        />
        <meta name="keywords" content="Anime Discord, Anime Discord servers, Best Anime Discord, Anime chat, Anime community, Anime roleplay, Anime manga, Anime games, Anime music, Anime art, Anime memes, Anime friends, Anime social, Anime group, Anime club, Anime events, Anime streaming, Anime watch party, Anime recommendations, Anime bots, Anime emotes, Anime stickers, Anime cosplay, Anime news, Anime updates, Anime discussion, Anime reviews, Anime list, Anime directory, Anime server list, Anime join, Anime invite, Anime safe, Anime verified, Anime active, Anime new, Anime big, Anime small, Anime international, Anime English, Anime Japanese, Anime Korean, Anime Chinese, Anime Spanish, Anime French, Anime German, Anime Russian, Anime Hindi, Anime Filipino, Anime LGBTQ, Anime furry, Anime Minecraft, Anime Valorant, Anime Genshin Impact, Anime Roblox, Anime Among Us, Anime Fortnite, Anime League of Legends, Anime Overwatch, Anime Call of Duty, Anime Aesthetic, Anime Chill, Anime Study, Anime Tech, Anime Programming, Anime Kpop, Anime Sports, Anime Book, Anime Language, Anime Movie, Anime Gaming, Anime Music, Anime Art, Anime Meme, Anime Community, Anime Friends, Anime Dating, Anime Chat, Anime Forums, Anime Groups, Discord Anime, Discord Japan, Discord Otaku, Discord Manga, Discord Waifu, Discord Husbando, Discord Cosplay, Discord Streaming, Discord Anime List, Discord Anime Directory, Discord Anime Server, Discord Anime Community, Discord Anime Chat, Discord Anime Roleplay, Discord Anime Games, Discord Anime Music, Discord Anime Art, Discord Anime Memes, Discord Anime Friends, Discord Anime Social, Discord Anime Group, Discord Anime Club, Discord Anime Events, Discord Anime Watch Party, Discord Anime Recommendations, Discord Anime Bots, Discord Anime Emotes, Discord Anime Stickers, Discord Anime Cosplay, Discord Anime News, Discord Anime Updates, Discord Anime Discussion, Discord Anime Reviews, Discord Anime Join, Discord Anime Invite, Discord Anime Safe, Discord Anime Verified, Discord Anime Active, Discord Anime New, Discord Anime Big, Discord Anime Small, Discord Anime International, Discord Anime English, Discord Anime Japanese, Discord Anime Korean, Discord Anime Chinese, Discord Anime Spanish, Discord Anime French, Discord Anime German, Discord Anime Russian, Discord Anime Hindi, Discord Anime Filipino, Discord Anime LGBTQ, Discord Anime Furry, Discord Anime Minecraft, Discord Anime Valorant, Discord Anime Genshin Impact, Discord Anime Roblox, Discord Anime Among Us, Discord Anime Fortnite, Discord Anime League of Legends, Discord Anime Overwatch, Discord Anime Call of Duty, Discord Anime Aesthetic, Discord Anime Chill, Discord Anime Study, Discord Anime Tech, Discord Anime Programming, Discord Anime Kpop, Discord Anime Sports, Discord Anime Book, Discord Anime Language, Discord Anime Movie, Discord Anime Gaming, Discord Anime Music, Discord Anime Art, Discord Anime Meme, Discord Server, Discord List, Discord Directory, Discord Community, Discord Social, Discord Online, Discord Members, Discord Channels, Discord Categories, Discord Invite, Discord Join, Discord Safe, Discord Verified, Discord Active, Discord New, Discord Big, Discord Small, Discord International, Discord English, Discord Hindi, Discord Spanish, Discord French, Discord German, Discord Russian, Discord Japanese, Discord Korean, Discord Chinese, Discord Random, Discord Trending, Discord Popular, Discord 2025, Discord Top, Discord Best, Discord Search, Discord Find, Discord For You, Discord For All, Discord For Fun, Discord For Chat, Discord For Games, Discord For Anime, Discord For Movies, Discord For Music, Discord For Study, Discord For Memes, Discord For Art, Discord For Tech, Discord For Programming, Discord For Kpop, Discord For Sports, Discord For Books, Discord For Language, Discord For LGBTQ, Discord For Furry, Discord For Minecraft, Discord For Valorant, Discord For Genshin Impact, Discord For Roblox, Discord For Among Us, Discord For Fortnite, Discord For League of Legends, Discord For Overwatch, Discord For Call of Duty, Discord For Aesthetic, Discord For Chill, Discord For Community, Discord For Active, Discord For New, Discord For Big, Discord For Small, Discord For International, Discord For English, Discord For Hindi, Discord For Spanish, Discord For French, Discord For German, Discord For Russian, Discord For Japanese, Discord For Korean, Discord For Chinese, Discord For Random, Discord For Trending, Discord For Popular, Discord For 2025, Discord For Top, Discord For Best, Discord For Search, Discord For Find" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
