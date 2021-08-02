import { createConnection } from 'typeorm';
import { Video } from './../entities/Video';
import 'reflect-metadata';

type MetadataType = {
  videoId: string;
  title: string;
  description?: string;
  duration?: number;
  channel: string;
  thumbnailURL: string;
  views: number;
  likes: number;
  dislikes: number;
  uploadedAt: string;
  category: string;
};

export const recommendedData: MetadataType[] = [
  // {
  //   videoId: 'xU47nhruN-Q',
  //   title: 'Your Name - Official Trailer',
  //   channel: 'Funanimation',
  //   thumbnailURL: 'https://i.ytimg.com/vi/xU47nhruN-Q/hq720.jpg',
  //   views: 62,
  //   likes: 730992,
  //   dislike: 1800,
  //   uploadedAt: '4 months',
  // },
  {
    videoId: 'L9MQLhV2u2E',
    title: 'Demon Slayer - The Movie: Mugen Train Official Trailer',
    channel: 'Funiplex USA',
    thumbnailURL: 'https://i.ytimg.com/vi/L9MQLhV2u2E/hq720.jpg',
    views: 15,
    likes: 2730992,
    dislikes: 11800,
    uploadedAt: '3 months',
    category: 'recommended',
  },
  {
    videoId: 'FUK2kdPsBws',
    title: 'F9: Fast & Furious 9 - Official Trailer',
    channel: 'IGN',
    thumbnailURL: 'https://i.ytimg.com/vi/FqAjVAf5fNA/hq720.jpg',
    views: 51,
    likes: 430992,
    dislikes: 2800,
    uploadedAt: '2 days',
    category: 'recommended',
  },
  {
    videoId: '-FZ-pPFAjYY',
    title: 'The Batman - Official Trailer',
    channel: 'DC',
    thumbnailURL: 'https://i.ytimg.com/vi/WbUEueLx-eU/hq720.jpg',
    views: 31,
    likes: 1170992,
    dislikes: 5500,
    uploadedAt: '1 month',
    category: 'recommended',
  },
  {
    videoId: '6ZfuNTqbHE8',
    title: 'Avengers - Infinity Wars | Official Trailer',
    channel: 'Marvel Entertainment',
    thumbnailURL: 'https://i.ytimg.com/vi/6ZfuNTqbHE8/hq720.jpg',
    views: 245,
    likes: 490992,
    dislikes: 8800,
    uploadedAt: '3 years',
    category: 'recommended',
  },
];

export const trendingData: MetadataType[] = [
  {
    videoId: 'wZti8QKBWPo',
    title: 'Nobody - Official Trailer (HD)',
    views: 9974653,
    likes: 215451,
    dislikes: 3328,
    channel: 'Universal Pictures',
    thumbnailURL: 'https://i.ytimg.com/vi/wZti8QKBWPo/maxresdefault.jpg',
    uploadedAt: '15 days',
    category: 'trending',
  },
  {
    videoId: 'sY8gUtyeAKE',
    title: 'Coming 2 America - Official Trailer',
    description:
      "Set in the lush and royal country of Zamunda, newly-crowned King Akeem (Eddie Murphy) and his trusted confvideoIdante Semmi(Arsenio Hall) embark on an all-new hilarious adventure that has them traversing the globe from their great African nation to the borough of Queens, New York – where it all began. Available March 5th on Prime VvideoIdeo. Starring: Eddie Murphy, Arsenio Hall, Jermaine Fowler, Leslie Jones, Tracy Morgan, KiKi Layne, Shari Headley, with Wesley Snipes and James Earl Jones. Also starring John Amos, Teyana Taylor, Vanessa Bell Calloway, Paul Bates, Nomzamo Mbatha, Bella Murphy Screenplay by: Kenya Barris and Barry W. Blaustein & DavvideoId Sheffield Story by: Barry W. Blaustein & DavvideoId Sheffield and Justin Kanew Directed by: Craig Brewer Based on characters created by: Eddie Murphy Produced by: Kevin Misher and Eddie Murphy Costumes by: Ruth E. Carter.\n\n» SUBSCRIBE: http://bit.ly/PrimeVvideoIdeoSubscribe\r\n \r\nAbout Prime VvideoIdeo:\r\nWant to watch it now? We've got it. This week's newest movies, last night's TV shows, classic favorites, and more are available to stream instantly, plus all your vvideoIdeos are stored in Your VvideoIdeo Library. Over 150,000 movies and TV episodes, including thousands for Amazon Prime members at no additional cost.\r\n \r\nGet More Prime VvideoIdeo: \r\nStream Now: http://bit.ly/WatchMorePrimeVvideoIdeo\r\nFacebook: http://bit.ly/PrimeVvideoIdeoFB\r\nTwitter: http://bit.ly/PrimeVvideoIdeoTW\r\nInstagram: http://bit.ly/AmazonPrimeVvideoIdeoIG\r\n \r\nPrime VvideoIdeo\r\nhttps://www.youtube.com/PrimeVvideoIdeo",
    duration: 120,
    views: 16170583,
    likes: 146391,
    dislikes: 5253,
    channel: 'Amazon Prime VvideoIdeo',
    thumbnailURL: 'https://i.ytimg.com/vi_webp/sY8gUtyeAKE/maxresdefault.webp',
    uploadedAt: '2 months',
    category: 'trending',
  },
  {
    videoId: 'nW948Va-l10',
    title: "Marvel Studios' Loki | Official Trailer | Disney+",
    description:
      'Loki’s time has come. Watch the brand-new trailer for "Loki," and start streaming the Marvel Studios Original Series June 11 on Disney+.\n\n► Watch Marvel on Disney+: https://bit.ly/2XyBSIW\n► Subscribe to Marvel on YouTube: http://bit.ly/WeO3YJ\n\nFollow Marvel on Twitter: ‪https://twitter.com/marvel\nLike Marvel on Facebook: ‪https://www.facebook.com/marvel\nWatch Marvel on Twitch: https://www.twitch.tv/marvel\n\nReward your Marvel fandom by joining Marvel InsvideoIder!\nEarn points, then redeem for awesome rewards.\nTerms and conditions apply. \nLearn more at https://www.marvel.com/insvideoIder?Osocial=YT&CvideoId=MarvelInsvideoIder\n\nFor even more news, stay tuned to:\nTumblr: ‪http://marvelentertainment.tumblr.com/\nInstagram: https://www.instagram.com/marvel\nPinterest: ‪http://pinterest.com/marvelofficial\nReddit: http://reddit.com/u/marvel-official',
    duration: 137,
    views: 15366393,
    likes: 564678,
    dislikes: 7040,
    channel: 'Marvel Entertainment',
    thumbnailURL: 'https://i.ytimg.com/vi/nW948Va-l10/maxresdefault.jpg',
    uploadedAt: '6 months',
    category: 'trending',
  },
  {
    videoId: 'IWBsDaFWyTE',
    title: 'Official Trailer | The Falcon and the Winter Soldier | Disney+',
    description:
      'Are you ready? Watch the brand-new trailer for Marvel Studios’ “The Falcon and the Winter Soldier,” and start streaming the Original Series March 19 on Disney+: https://bit.ly/2XyBSIW\n\n► Subscribe to Marvel on YouTube: http://bit.ly/WeO3YJ\n\nFollow Marvel on Twitter: ‪https://twitter.com/marvel\nLike Marvel on Facebook: ‪https://www.facebook.com/marvel\nWatch Marvel on Twitch: https://www.twitch.tv/marvel\n\nReward your Marvel fandom by joining Marvel InsvideoIder!\nEarn points, then redeem for awesome rewards.\nTerms and conditions apply. \nLearn more at https://www.marvel.com/insvideoIder?Osocial=YT&CvideoId=MarvelInsvideoIder\n\nFor even more news, stay tuned to:\nTumblr: ‪http://marvelentertainment.tumblr.com/\nInstagram: https://www.instagram.com/marvel\nPinterest: ‪http://pinterest.com/marvelofficial\nReddit: http://reddit.com/u/marvel-official',
    duration: 120,
    views: 15152805,
    likes: 630593,
    dislikes: 8645,
    channel: 'Marvel Entertainment',
    thumbnailURL: 'https://i.ytimg.com/vi/IWBsDaFWyTE/maxresdefault.jpg',
    uploadedAt: '7 days',
    category: 'trending',
  },
  {
    videoId: 'VVcT0WpmheM',
    title: 'THE JACK IN THE BOX 2: Awakening Trailer (2021)',
    description:
      "Official The Jack in the Box: Awakening Movie Trailer 2021 | Subscribe ➤ http://abo.yt/ki | Horror Movie Trailer | Release: 2021 | More https://KinoCheck.com/film/o2q/the-jack-in-the-box-awakening-2021\nSequel to 2019's The Jack in the Box horror flick.\n\nThe Jack in the Box: Awakening (2021) is the new horror movie.\n\nNote | #TheJackInTheBoxAwakening #Trailer courtesy of Fowler Media. | All Rights Reserved. | #KinoCheck®",
    duration: 79,
    views: 62463,
    likes: 1903,
    dislikes: 97,
    channel: 'KinoCheck International',
    thumbnailURL: 'https://i.ytimg.com/vi/VVcT0WpmheM/maxresdefault.jpg',
    uploadedAt: '1 months',
    category: 'trending',
  },
];

export const latestData: MetadataType[] = [
  {
    videoId: '1HZAnkxdYuA',
    title: 'THE LITTLE THINGS – Official Trailer',
    description:
      'Watch the trailer for The Little Things, bringing Denzel Washington back to screen alongsvideoIde fellow Academy Award® winners Rami Malek and Jared Leto. In theaters now. #TheLittleThingsMovie\n\n\nAcademy Award winners Denzel Washington (“Training Day,” “Glory”), Rami Malek (“Bohemian Rhapsody”) and Jared Leto (“Dallas Buyers Club”) star in the psychological thriller “The Little Things.” John Lee Hancock (“The Blind SvideoIde,” “Saving Mr. Banks,” “The Founder”) directed the film from his own original screenplay.\n\nKern County Deputy Sheriff Joe “Deke” Deacon (Washington) is sent to Los Angeles for what should have been a quick evvideoIdence-gathering assignment. Instead, he becomes embroiled in the search for a killer who is terrorizing the city. Leading the hunt, L.A. Sheriff Department Sergeant Jim Baxter (Malek), impressed with Deke’s cop instincts, unofficially engages his help. But as they track the killer, Baxter is unaware that the investigation is dredging up echoes of Deke’s past, uncovering disturbing secrets that could threaten more than his case.\n\nThe main cast also includes Natalie Morales (“Battle of the Sexes”), Terry Kinney (“Mile 22,” TV’s “Billions”), Chris Bauer (“Sully,” TV’s “The Deuce”), Joris Jarsky (TV’s “Bad Blood”), Isabel Arraiza (TV’s “Pearson”) and Michael Hyatt (“Crazy Ex-Girlfriend”).\n\n“The Little Things” is produced by Oscar- and Emmy-winning producer Mark Johnson (“Breaking Bad,” “Rain Man”) and Hancock, with Mike Drake and Kevin McCormick serving as executive producers.\n\nBehind the scenes, Hancock reunited with several longtime collaborators, including Oscar-nominated director of photography John Schwartzman (“Seabiscuit,” “The Founder,” “Saving Mr. Banks”), Oscar-nominated production designer Michael Corenblith (“Apollo 13,” “The Founder,” “The Blind SvideoIde”) editor Robert Frazen (“The Founder”), and costume designer Daniel Orlandi (“The Founder,” “The Blind SvideoIde”). The music is by multiple Oscar-nominated composer Thomas Newman (“1917,” “BrvideoIdge of Spies,” “Saving Mr. Banks”).\n\nWarner Bros. Pictures presents A Gran Via Production, “The Little Things” will be distributed worldwvideoIde by Warner Bros. Pictures. The film has slated for release on January 29, 2021 in theaters and on HBO Max and has been rated R for violent/disturbing images, language and full nudity.',
    duration: 145,
    views: 13945403,
    likes: 43861,
    dislikes: 1167,
    channel: 'Warner Bros. Pictures',
    thumbnailURL: 'https://i.ytimg.com/vi/1HZAnkxdYuA/maxresdefault.jpg',
    uploadedAt: '1 months',
    category: 'latest',
  },
  {
    videoId: '7tmxxzZXLEM',
    title:
      'The Mauritanian | Official Trailer [HD] | In Theaters and On Demand Everywhere',
    description:
      'Directed by Kevin Macdonald and based on the NY Times best-selling memoir “Guantánamo\nDiary” by Mohamedou Ould Slahi, this is the inspiring true story of Slahi’s fight for freedom after being detained and imprisoned without charge by the U.S. Government for years. Alone and afravideoId, Slahi (Tahar Rahim) finds allies in defense attorney Nancy Hollander (Jodie Foster) and her associate Teri Duncan (Shailene Woodley) who battle the U.S. government in a fight for justice that tests their commitment to the law and their client at every turn. Their controversial advocacy, along with evvideoIdence uncovered by a formvideoIdable military prosecutor, Lt. Colonel Stuart Couch (Benedict Cumberbatch), uncovers shocking truths and ultimately proves that the human spirit cannot be locked up.\n\nGenre: Drama\nCast: Jodie Foster, Tahar Rahim, Zachary Levi, Saamer Usmani with Shailene Woodley and Benedict Cumberbatch\nBased Upon the Book: "Guantánamo Diary" by Mohamedou Ould Slahi\nWriters: M.B. Traven and Rory Haines & Sohrab Noshirvani\nDirector: Kevin Macdonald\nProducers: Adam Ackland, Leah Clarke, Benedict Cumberbatch, Lloyd Le vin, Beatriz Levin, Mark Holder, Christine Holder, Branwen Prestwood Smith, Michael Bronner\n\n#TheMauritanian In Theaters and On Demand Everywhere\n\nFACEBOOK: https://www.facebook.com/themauritanian/\nTWITTER: https://twitter.com/themauritanian/\nINSTAGRAM: https://www.instagram.com/themauritanian/\n\n#STXfilms\n\nConnect with STXfilms Online:\nWEBSITE: http://www.stxfilms.com/\nFACEBOOK: https://www.facebook.com/STXfilms/\nTWITTER: https://twitter.com/STXfilms\nINSTAGRAM: https://www.instagram.com/stxfilms/\n\nThe Mauritanian | Official Trailer [HD] | In Theaters and On Demand Everywhere\nhttps://www.youtube.com/STXfilms',
    duration: 192,
    views: 5718386,
    likes: 4891,
    dislikes: 209,
    channel: 'STXfilms',
    thumbnailURL: 'https://i.ytimg.com/vi_webp/7tmxxzZXLEM/maxresdefault.webp',
    uploadedAt: '20 days',
    category: 'latest',
  },
  {
    videoId: 'bINTjSKwu3Q',
    title: 'MONSTERS OF MAN Official Final Trailer (2020)',
    description: 'First trailer for monsters of man.',
    duration: 144,
    views: 723757,
    likes: 4869,
    dislikes: 374,
    channel: 'Movie Trailers Source',
    thumbnailURL: 'https://i.ytimg.com/vi_webp/bINTjSKwu3Q/maxresdefault.webp',
    uploadedAt: '12 days',
    category: 'latest',
  },
  {
    videoId: '72HvFU6ZDHI',
    title: 'WHAT IF Trailer (2021) Marvel',
    description: "Trailer for Marvel's What If...?",
    duration: 131,
    views: 594634,
    likes: 16966,
    dislikes: 363,
    channel: 'FilmSelect Trailer',
    thumbnailURL: 'https://i.ytimg.com/vi/72HvFU6ZDHI/maxresdefault.jpg',
    uploadedAt: '1 month ago',
    category: 'latest',
  },
  {
    videoId: 'jFxOxLLzjG8',
    title:
      'Fear of Rain (2021 Movie) Official Trailer – Katherine Heigl, Harry Connick Jr.',
    description:
      'Fear of Rain – Arrives on FrvideoIday, February 12 On Digital Demand & on Blu-ray and DVD on February 16. Katherine Heigl, Harry Connick Jr., Madison Iseman, & Israel Broussard\n\nSubscribe to the LIONSGATE YouTube Channel for the latest movie trailers, clips, and more: https://bit.ly/2Z6nfym\n\n#FearOfRain\n\nhttps://www.lionsgate.com  \nhttps://www.facebook.com/fearofrain\nhttps://www.instagram.com/fearofrain\nhttps://twitter.com/fearofrain\n\nFor teenager Rain Burroughs (Madison Iseman), a diagnosis with schizophrenia means that every day is a struggle as she tries to figure out which of the disturbing images, harrowing voices, and traumatic feelings she experiences are real and which are all in her mind. But when Rain insists against her parents’ (Katherine Heigl and Harry Connick, Jr.) advice that the shadows and cries from her neighbor’s attic are hvideoIding a dark secret, she enlists help from Caleb (Israel Broussard), the charmingly awkward new boy at school – who himself may not be real. Written and directed by Castille Landon (After We Fell, After Ever Happy), Fear of Rain is a terrifying thriller that takes you insvideoIde Rain’s mind as she confronts the frightening hallucinations of her imagination to determine whether there is real horror hvideoIding right next door.',
    duration: 133,
    views: 476295,
    likes: 2322,
    dislikes: 107,
    channel: 'Lionsgate Movies',
    thumbnailURL: 'https://i.ytimg.com/vi_webp/jFxOxLLzjG8/maxresdefault.webp',
    uploadedAt: '3 days',
    category: 'latest',
  },
];

export const popularData: MetadataType[] = [
  {
    videoId: 'u8ZsUivELbs',
    title: 'OutsvideoIde the Wire | Official Trailer | Netflix',
    description:
      "Check out the NEW official trailer for OutsvideoIde the Wire!\nWhen disgraced drone pilot, Lt. Harp (Damson videoIdris) is sent into a deadly militarized zone after disobeying orders, he finds himself working for Capt. Leo (Anthony Mackie), an androvideoId officer tasked with locating a doomsday device before insurgents do.  OutsvideoIde the Wire is directed by Mikael Hafstrom and debuts on Netflix January 15.\n\nSUBSCRIBE: http://bit.ly/29qBUt7\n\nAbout Netflix:\nNetflix is the world's leading streaming entertainment service with over 195 million pavideoId memberships in over 190 countries enjoying TV series, documentaries and feature films across a wvideoIde variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.\n\nOutsvideoIde the Wire | Official Trailer | Netflix\nhttps://youtube.com/Netflix\n\nIn the near future, a drone pilot sent into a war zone finds himself paired with a top-secret androvideoId officer on a mission to stop a nuclear attack.",
    duration: 153,
    views: 2769075,
    likes: 42215,
    dislikes: 1155,
    channel: 'Netflix',
    thumbnailURL: 'https://i.ytimg.com/vi/u8ZsUivELbs/maxresdefault.jpg',
    uploadedAt: '7 days',
    category: 'popular',
  },
  {
    videoId: 've8L4Naafa4',
    title: 'COSMOBALL Trailer (2021)',
    description:
      'Official Cosmoball Movie Trailer 2021 | Subscribe ➤ http://abo.yt/ki | Evgeny Romantsov Movie Trailer | US Release: Coming Soon | More https://KinoCheck.com/film/wsz/cosmoball-2021\nCosmoball is a mesmerizing intergalactic game of future played between humans and aliens at the giant extraterrestrial ship hovering in the sky over Earth. A young man with enormous power of an unknown nature joins the team of hot-headed superheroes in exchange for a cure for his mother’s deadly illness. The Four from Earth will fight not only to defend the honor of their home planet in the spectacular game, but to face the unprecedented threat to the Galaxy and embrace their own destiny.\n\nCosmoball (2021) is the new science fiction movie starring Evgeny Romantsov, Mariya Lisovaya and Victoria Agalakova.\n\nNote | #Cosmoball #Trailer courtesy of SplendvideoId Film. | All Rights Reserved. | #KinoCheck®',
    duration: 131,
    views: 579939,
    likes: 9614,
    dislikes: 993,
    channel: 'KinoCheck International',
    thumbnailURL: 'https://i.ytimg.com/vi/ve8L4Naafa4/maxresdefault.jpg',
    uploadedAt: '1 month',
    category: 'popular',
  },
  {
    videoId: 'Ia3bZdPSmXY',
    title: 'Skyfire - Official Trailer',
    description:
      "Now available on digital and on demand!\n\nChaos erupts when the once dormant volcano at the world's only volcano theme park and resort rumbles. Everyone must evacuate before it's too late.\n\nskyfiremovie.net",
    duration: 95,
    views: 492320,
    likes: 1865,
    dislikes: 85,
    channel: 'Screen Media Films',
    thumbnailURL: 'https://i.ytimg.com/vi_webp/Ia3bZdPSmXY/maxresdefault.webp',
    uploadedAt: '15 days',
    category: 'popular',
  },
  {
    videoId: 'olXYZOsXw_o',
    title: 'Space Jam: A New Legacy – Trailer 1',
    description:
      'Tunes vs. Goons. Watch LeBron James and Bugs Bunny in the new trailer for Space Jam: A New Legacy. In theaters and streaming on HBO Max – July 16. #SpaceJamMovie \n\n-----------------\nhttps://www.facebook.com/SpaceJamMovie​\nhttps://www.instagram.com/SpaceJamMovie/​\nhttps://twitter.com/spacejammovie/​\n-----------------\nWelcome to the Jam!  Basketball champion and global icon LeBron James goes on an epic adventure alongsvideoIde timeless Tune Bugs Bunny with the animated/live-action event “Space Jam: A New Legacy,” from director Malcolm D. Lee and an innovative filmmaking team including Ryan Coogler and Maverick Carter.  This transformational journey is a manic mashup of two worlds that reveals just how far some parents will go to connect with their kvideoIds. When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.’s digitized champions on the court: a powered-up roster of professional basketball stars as you’ve never seen them before.  It’s Tunes versus Goons in the highest-stakes challenge of his life, that will redefine LeBron’s bond with his son and shine a light on the power of being yourself. The ready-for-action Tunes destroy convention, supercharge their unique talents and surprise even “King” James by playing the game their own way.\n\nJames stars alongsvideoIde Oscar nominee Don Cheadle (the “Avengers” films, “Hotel Rwanda”), Khris Davis (“Judas and the Black Messiah,” TV’s “Atlanta”), Sonequa Martin-Green (TV’s “The Walking Dead,” “Star Trek: Discovery”), newcomer Cedric Joe, Jeff Bergman (“Looney Tunes Cartoons”), Eric Bauza (“Looney Tunes Cartoons”), and Zendaya (upcoming “Dune,” “Malcolm & Marie”).\n\nLee (“Girls Trip,” “Night School”) directs from a screenplay by Juel Taylor & Tony Rettenmaier & Keenan Coogler & Terence Nance.  The film’s producers are Ryan Coogler, LeBron James, Maverick Carter and Duncan Henderson, and the executive producers are Sev Ohanian, Zinzi Coogler, Allison Abbate, Jesse Ehrman, Jamal Henderson, Spencer Beighley, Justin Lin, Terence Nance and Ivan Reitman.\n\nThe director’s behind-the-scenes creative team includes director of photography Salvatore Totino (“SpvideoIder-Man: Homecoming”), animation producer Troy Nethercott (“Wonder Park”), production designers Kevin Ishioka (“The Mule”), Akin McKenzie (Netflix’s “When They See Us”) and Clint Wallace (upcoming “Eternals”), editor Bob Ducsay (“Godzilla: King of the Monsters,” “Star Wars Episode VIII – The Last Jedi”) and costume designer Melissa Bruning (“Rampage,” “War for the Planet of the Apes”).  The music is by Kris Bowers (“Greenbook,” Netflix’s “BrvideoIdgerton”).\n\nWarner Bros. Pictures Presents a Proximity/The SpringHill Company Production, a Malcolm D. Lee Film, “Space Jam: A New Legacy.”  The film will be distributed worldwvideoIde by Warner Bros. Pictures.  It will be released in theaters nationwvideoIde on July 16, 2021 and will be available in the U.S. on HBO Max for 31 days from theatrical release.',
    duration: 158,
    views: 20558420,
    likes: 183941,
    dislikes: 21949,
    channel: 'Warner Bros. Pictures',
    thumbnailURL:
      'https://i.ytimg.com/vi/olXYZOsXw_o/maxresdefault.jpg?v=606866ab',
    uploadedAt: '3 days',
    category: 'popular',
  },
  {
    videoId: 'lEBPNi4bEbc',
    title: 'The Marksman Trailer #1 (2021) | Movieclips Trailers',
    description:
      "Check out The Marksman Official Trailer starring Liam Neeson! Let us know what you think in the comments below.\n► Visit: https://www.fandango.com/the-marksman-2021-223960/movie-overview?cmp=MCYT_YouTube_Desc\n\nWant to be notified of all the latest movie trailers? Subscribe to the channel and click the bell icon to stay up to date.\n\nUS Release Date: January 22, 2021\nStarring:  Liam Neeson, Katheryn Winnick, Teresa Ruiz, Juan Pablo Raba\nDirected By: Robert Lorenz\nSynopsis: A rancher on the Arizona border becomes the unlikely defender of a young Mexican boy desperately fleeing the cartel assassins who've pursued him into the U.S.\n#TheMarksman #LiamNeeson\n\nWatch More Trailers: \n► Hot New Trailers: http://bit.ly/2qThrsF\n► In Theaters This Week: http://bit.ly/2ExQ1Lb\n► Drama Trailers: http://bit.ly/2ARA8Nk\n► Thriller Trailers: http://bit.ly/2D1YPeV\n\nFuel Your Movie Obsession: \n► Subscribe to MOVIECLIPS TRAILERS: http://bit.ly/2CNniBy\n► Watch Movieclips ORIGINALS: http://bit.ly/2D3sipV\n► Like us on FACEBOOK: http://bit.ly/2DikvkY \n► Follow us on TWITTER: http://bit.ly/2mgkaHb\n► Follow us on INSTAGRAM: http://bit.ly/2mg0VNU\n\nThe Fandango MOVIECLIPS TRAILERS channel delivers hot new trailers, teasers, and sneak peeks for all the best upcoming movies. Subscribe to stay up to date on everything coming to theaters and your favorite streaming platform.",
    duration: 155,
    views: 1931472,
    likes: 15124,
    dislikes: 597,
    channel: 'Movieclips Trailers',
    thumbnailURL: 'https://i.ytimg.com/vi_webp/lEBPNi4bEbc/maxresdefault.webp',
    uploadedAt: '4 months',
    category: 'popular',
  },
];

export const allVideos = [
  ...latestData,
  ...popularData,
  ...recommendedData,
  ...trendingData,
];

export default async function seedData() {
  console.log('Beginning dbseed task.');

  const conn = await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
  console.log('PG connected.');

  // Create seed data.
  allVideos.map(
    async ({
      title,
      views,
      likes,
      dislikes,
      channel,
      thumbnailURL,
      category,
      videoId,
    }) => {
      let video = new Video();
      video.title = title;
      video.category = category;
      video.channel = channel;
      video.dislikes = dislikes;
      video.likes = likes;
      video.playlists = [];
      video.uploadedAt = new Date();
      video.views = views;
      video.videoId = videoId;
      video.thumbnail_url = thumbnailURL;

      const newVideo = await conn.manager.create(Video, video).save(); // re-assign to know assigned id
      console.log(`Video saved. id = ${newVideo.videoId}`);
    },
  );

  // Close connection
  await conn.close();
  console.log('PG connection closed.');

  console.log('Finished dbseed task.');
}

seedData()
  .then((_) => console.log('Successfully Seeded'))
  .catch((err) => console.log(err));
