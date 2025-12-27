import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  ExternalLink,
  ChevronLeft,
  Play,
  Clock,
  MapPin,
  Disc,
  MessageSquare,
  Database,
  Ticket
} from 'lucide-react';

// --- Fallback Assets for Preview ---
// const IMG_CHERRY_TREE = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2600&auto=format&fit=crop"; // Concert hall vibe
// // Simple SVG Logo Fallback
// const IMG_LOGO = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100' fill='none'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-weight='bold' font-size='40' fill='%23041E42'%3ETHE CHIMES%3C/text%3E%3C/svg%3E`;
// const IMG_LOGO_WHITE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100' fill='none'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-weight='bold' font-size='40' fill='%23F4F4F3'%3ETHE CHIMES%3C/text%3E%3C/svg%3E`;

// const IMG_NECKTIE = "https://images.unsplash.com/photo-1598522646279-d47783994a37?q=80&w=800&auto=format&fit=crop";
// const IMG_BOWTIE = "https://images.unsplash.com/photo-1596704017254-802521974345?q=80&w=800&auto=format&fit=crop";

// // Setting these to null uses the existing CSS background color fallbacks in your component
// const IMG_DCDM = null;
// const IMG_PARTNERS = null;
// const IMG_THREE_STRIPES = null;
// const IMG_PROSPECT = null;
// const IMG_BATTLE_GEAR = null;
// const IMG_PSRC = null;
// const IMG_LTGCR = null;
// const IMG_HOYA_SAXA = null;
// const IMG_CHIMES_75 = null;
// const IMG_CHIMES_66 = null;
// const IMG_1959 = null;
// const IMG_UNDER_THE_TREE = null;

import IMG_CHERRY_TREE from './assets/Composite-Set-Monochrome-Compressed.jpg';
import IMG_LOGO from './assets/logo.png';
import IMG_LOGO_WHITE from './assets/logo-white.png';
import IMG_NECKTIE from './assets/necktie.jpg';
import IMG_BOWTIE from './assets/bowtie.jpg';
import IMG_DCDM from './assets/DCDM.jpg';
import IMG_PARTNERS from './assets/partners.jpg';
import IMG_THREE_STRIPES from './assets/three-stripes.jpg';
import IMG_PROSPECT from './assets/36th-prospect.jpg';
import IMG_BATTLE_GEAR from './assets/battle-gear.jpg';
import IMG_PSRC from './assets/psrc.jpg';
import IMG_LTGCR from './assets/ltgcr.jpg';
import IMG_HOYA_SAXA from './assets/hoya-saxa.jpg';
import IMG_CHIMES_75 from './assets/chimes-75.jpg';
import IMG_CHIMES_66 from './assets/chimes-66.jpg';
import IMG_1959 from './assets/1959.jpg';
import IMG_UNDER_THE_TREE from './assets/under-the-tree.jpg';

// --- Data ---
const EVENTS_DATA = [
  { 
    id: 1, 
    title: "The Cherry Tree Massacre", 
    date: "FEB 6 2026", 
    time: "7:00 PM",
    location: "GASTON HALL", 
    type: "CONCERT",
    link: "https://buytickets.at/chimes/1998396/r/gcaa-site",
    description: "Senior Parents & Families Weekend, featuring performances by Georgetown groups. The longest-running a cappella tradition at Georgetown."
  },
  { 
    id: 2, 
    title: "The Cherry Tree Massacre", 
    date: "FEB 21 2026", 
    time: "7:00 PM",
    location: "GASTON HALL", 
    type: "CONCERT",
    internalLink: "ctm_feb21", // Use internal routing for this event
    link: "https://buytickets.at/chimes/1998443/r/gcaa-site",
    description: "Alumni Weekend, with Welcome Reception & Afterglow details to be announced. The longest-running a cappella tradition at Georgetown."
  },
  { 
    id: 3, 
    title: "John Carroll Weekend", 
    date: "APR 18–21 2026", 
    time: "TBD",
    location: "PUERTO RICO", 
    type: "JCAW",
    link: "https://jcw.georgetown.edu/",
    description: "Join us in celebrating Federico Stubbe #177. Check Slack announcements for some special Chimes accommodations and events."
  },
];

const ALBUMS_DATA = [
  { 
    id: 1, 
    title: "Desperate Chimes, Desperate Measures", 
    year: "2026", 
    cover: "bg-[#2A3B55]", 
    image: IMG_DCDM,
    badge: "PRE-ORDER",
    link: "https://bio.to/ChimesAA",
    description: "Limited First Pressing Arriving 2026. Join the waitlist for priority access.",
    highlights: ["Vinyl Early Access", "Mastered at Abbey Road Studios"],
    leadSingle: { 
      title: "And So It Goes", 
      composer: "Billy Joel (arr. Bob Chilcott)",
      link: "https://thechimes.lnk.to/AndSoItGoesAA"
    },
    credits: {
      "Production": [
        { role: "Producer", name: "The Georgetown Chimes" },
        { role: "Executive Producer", name: "Michael Luckey" },
        { role: "Musical Direction", name: "Christian Kim" },
        { role: "Artistic Direction", name: "Aidan Metz" },
        { role: "Co-Producers", name: "Ben Fosnocht, Robby Della Bernarda, Aidan Metz, Arjun Singh, Youngsung Sim, and Rufino A. Mendoza II" },
        { role: "Album Sequencing", name: "Aidan Metz" }
      ],
      "Engineering": [
        { role: "Recording Engineer", name: "Blaine Misner at Cue Recording, Falls Church, VA" },
        { role: "Mixing", name: "Blaine Misner at Cue Recording, Falls Church, VA" },
        { role: "Editing", name: "Blaine Misner at Cue Recording" },
        { role: "Mastering", name: "Geoff Pesche at Abbey Road Studios, London" }
      ],
      "Art & Design": [
        { role: "Cover Art", name: "Caleb Morris" },
        { role: "Art Direction & Design", name: "Rufino A. Mendoza II" }
      ],
      "Administration": [
        { role: "Production Coordinators", name: "Ben Fosnocht, Robby Della Bernarda, and Rufino A. Mendoza II" },
        { role: "Licensing & Clearance", name: "Easy Song" },
        { role: "Licensing Coordinator", name: "Robby Della Bernarda" },
        { role: "Liner Notes & Metadata", name: "Rufino A. Mendoza II and Robby Della Bernarda" }
      ]
    },
    tracks: [
      { title: "And So It Goes", composer: "Billy Joel (arr. Bob Chilcott)", soloist: "Aidan Metz" },
    ]
  },
  { 
    id: 2, 
    title: "Partners in Chime", 
    year: "2016", 
    cover: "bg-[#4A5B75]",
    image: IMG_PARTNERS,
    link: "https://thechimes.lnk.to/partners-in-chimeAA",
    tracks: [
      { title: "We Meet (Live)" },
      { title: "Little Bitty Pretty One", soloist: "Matthew Demartini" },
      { title: "Friends for Now", soloist: "Peter Fanone" },
      { title: "Wayfaring Stanger", soloist: "Jaewoo Kim" },
      { title: "Bridge Over Troubled Water", soloist: "Junho Lee" },
      { title: "It’s a Beautiful Day (Live)", soloist: "Connor Joseph" },
      { title: "Telephone Line", soloist: "Peter Fanone" },
      { title: "Runaways / When We Were Young", soloist:"Peter Fanone, Jeff Kemp" },
      { title: "How Deep Is Your Love? (Live)", soloist: "Charlie Plissner"},
      { title: "Sixteen Tons", soloist: "Michael Lucker" },
      { title: "Don’t Worry Baby (Live)", soloist: "Charlie Plissner" },
      { title: "Who Put the Bomp (in the Bomp, Bomp, Bomp)?", soloist: "Peter Hu" },
      { title: "It’s All Right", soloist: "Justin McCarthy" },
      { title: "How Great Thou Art", soloist: "Jack Sheridan" },
      { title: "My Comrades", soloist: "Phil Hah" },
      { title: "Georgetown Fight Song"},
    ]
  },
  { 
    id: 3, 
    title: "Three Stripes", 
    year: "2012", 
    cover: "bg-[#6A7B95]",
    image: IMG_THREE_STRIPES,
    link: "https://thechimes.lnk.to/three-stripesAA",
    tracks: [
      { title: "We Meet" },
      { title: "Blue & Grey Strut" },
      { title: "Runaround Sue" },
      { title: "My Girl" },
      { title: "Georgetown Guy" },
      { title: "Georgetown Girl" },
      { title: "Moomdance" },
      { title: "A Beatles Medley: All You Need Is Love / Blackbird / All My Loving / Here Comes the Sun / Hey Jude" },
      { title: "Jessie’s Girl" },
      { title: "Hold the Line" },
      { title: "So Much in Love" },
      { title: "Loch Lomond" },
      { title: "Ave Maria" },
      { title: "Thank You" },
      { title: "Wagon Wheel" },
      { title: "Lullabye" },
      { title: "Fight Song" },
      { title: "A Message from Our Founder" },
      { title: "My Comrades" },
      { title: "Wazoo" }
    ]
  },
  { 
    id: 4, 
    title: "36th & Prospect", 
    year: "2009", 
    cover: "bg-[#8A9BB5]",
    image: IMG_PROSPECT,
    link: "https://thechimes.lnk.to/36th-prospectAA",
    linerNotes: [
      {
        author: "James P.M. Walsh, SJ #119",
        text: "Twenty-seven years of involvement with The Chimes, a quarter century as the Active Chime who will never graduate… Each group is different and yet somehow the same as all the others. It’s like Commedia dell’arte: the same cast of characters, but played by different actors each year; the same basic script, but with interesting variants. Or maybe it’s more like South Park. As Celestial Chime, it’s been my privilege to preside at Chimes weddings and funerals, and to baptize Chimes children. I seem to have been given this “parish” comprising generations and continents. It’s a pastoral gig I never envisioned when I got ordained in 1970. But half my life as a Jesuit has been with The Chimes. It has been a privilege and, on the whole, joy, Deo gratias. And to think that Frank Jones planned the whole thing, right from the outset!"
      },
      {
        author: "Tim Naughton #95",
        text: "Even after 33 years, I have not finished learning about the Chimes. The Chimes share a common love of music and of the group. The tradition is entrusted from one Chime to the next. With singing in harmony as a foundation for their friendship, the Chimes are a community within Georgetown that spans generations, devoted to the University and one another."
      },
      {
        author: "Justin Douds #202",
        text: "60 years is a long time for any organization to last, but considering the wealth and breadth of opportunities for Georgetown students that exists today, the Chimes’ continued success is all the more astounding. What makes the Chimes unique is that its path has been shaped by all two hundred and eleven members, who contribute to its development long after their college days are over. As a recent alum, I aspire to continue my involvement with the Chimes in my new role. While our musical style and song selection has changed over the three generations, it is the basic tenets of song, harmony, fellowship, and brotherhood that ensure the existence of the Chimes sixty years from now."
      },
      {
        author: "Mark Rossetti #211",
        text: "Two hundred and ten Chimes later, it’s all one elaborate story to which we each contribute our own personalities and anecdotes. Sometimes our personalities are the anecdotes. And still it all begins with the music—the group’s history in the Glee Club, learning songs as a neophyte, and quartets at every gathering of Chimes. For me, it is a sort of thread that runs through my life. It defines who I know, how I spend my time at school, and what I do during my summers. I need simply open my wallet to see in my Chaz card a little reminder of friendship, generosity, and music. Over sixty years after it all began, it remains a great thing to be a Chime, and I am confident that the fellowship and harmony will only become richer and fuller as the years pass."
      }
    ],
    acknowledgements: [
      "Tim Naughton #97",
      "Brother Joe Ritzman",
      "Dave Walsh #33",
      "Les Lentz",
      "Gabriel Lebec",
      "Tracy Foust",
      "Georgetown University Center for Student Programs",
      "The Tombs and 1789 Management"
    ],
    tracks: [
      { title: "We Meet" },
      { title: "Eight Days a Week" },
      { title: "Soul to Soul" },
      { title: "In the Still of the Night" },
      { title: "Just a Gigolo" },
      { title: "Something Tells Me" },
      { title: "Glory of Love" },
      { title: "Cartoon Theme Medley: Duck Tales / Fraggle Rock / Chip ’n’ Dale Rescure Rangers / Inspector Gadget / Gummi Bears" },
      { title: "Maggie" },
      { title: "King of Spain" },
      { title: "Come Go with Me" },
      { title: "Bright Morning Stars" },
      { title: "Runaway" },
      { title: "Change the World" },
      { title: "Up the Ladder" },
      { title: "King of Wishful Thinking" },
      { title: "Georgetown University Fight Song" },
      { title: "My Comrades" }
    ]
  },
  { 
    id: 5, 
    title: "Battle Gear", 
    year: "2003", 
    cover: "bg-[#9AABCA]",
    image: IMG_BATTLE_GEAR,
    link: "https://thechimes.lnk.to/battle-gearAA",
    credits: {
      "Production": [
        { role: "Recording & Production", name: "Les Lentz at LSP Studios, Annapolis, MD" },
        { role: "Live Recording", name: "Tracy Foust (Gaston Hall)" },
        { role: "Producers", name: "Andy Neustaetter and Jeff Gordon" },
        { role: "Photos", name: "Andy Neustaetter" },
        { role: "Design", name: "Amanda Reid" }
      ],
      "Groups": [
        { role: "2001 Group", name: "#119 Jim Walsh, S.J., #182 Rick Bedoya, #183 Max Coslov (Ephus), #184 John Hoy, #185 Andy Neustaetter, #187 Andrew Beaton, #188 Evan Seiler, #189 Nick Giannotti, #190 Ryan Ramagosa, #191 Dan Phillips" },
        { role: "2002 Group", name: "#119 Jim Walsh, S.J., #184 John Hoy, #185 Andy Neustaetter (Ephus), #187 Andrew Beaton, #188 Evan Seiler, #189 Nick Giannotti, #190 Ryan Ramagosa, #191 Dan Phillips, #192 Jeff Gordon, #193 Jeff Civillico, #194 Sean O’Brien" },
        { role: "2003 Group", name: "#119 Jim Walsh, S.J., #190 Ryan Ramagosa, #191 Dan Phillips, #192 Jeff Gordon (Ephus), #193 Jeff Civillico, #194 Sean O’Brien, #195 Steve Alleva, #196 David Foldvary, #197 Jim Helmink, #198 Eddie Keels, #199 Patrick McKegney" }
      ]
    },
    acknowledgements: [
      "Georgetown University",
      "Fr. Leo O’Donovan",
      "President John DeGioia",
      "Ron Lignelli and the Program in Performing Arts",
      "Les Lentz",
      "Tracy Foust",
      "Amanda Reid",
      "Our friends, families, neophytes, and alumni"
    ],
    tracks: [
      { title: "We Meet" }
    ]
  },
  { 
    id: 6, 
    title: "Parsley, Sage, Rosemary, & Chime", 
    year: "2002", 
    cover: "bg-[#B0BCCF]",
    image: IMG_PSRC,
    link: "https://thechimes.lnk.to/parsley-sage-rosemary-chimeAA",
    dedication: "This album is dedicated to Fr. Jim Walsh, S.J., our teacher, mentor, and true friend, celebrating his twentieth year as the Celestial Chime.",
    credits: {
      "Groups": [
        { role: "1998 Group", name: "#119 Jim Walsh S.J., #174 Sameer Patel (Ephus), #170 Greg Lourie, #171 Peter Manice, #172 Dustin King, #173 Nolan Bolduc, #175 Colin Pritchard, #176 Aaron Davis, #177 Federico Stubbe, #178 Charlie Schilling, #179 Nick Amatuzzi, #180 Diego de Soto" },
        { role: "1999 Group", name: "#119 Jim Walsh S.J., #175 Colin Pritchard (Ephus), #176 Aaron Davis, #178 Charlie Schilling, #179 Nick Amatuzzi, #180 Diego de Soto, #181 Justin Kay, #182 Rick Bedoya, #183 Max Coslov, #184 John Hoy, #185 Andy Neustaetter, #186 Mike Pacella" },
        { role: "2000 Group", name: "#119 Jim Walsh S.J., #183 Max Coslov (Ephus), #178 Charlie Schilling, #179 Nick Amatuzzi, #180 Diego de Soto, #181 Justin Kay, #182 Rick Bedoya, #184 John Hoy, #185 Andy Neustaetter, #186 Mike Pacella, #187 Andrew Beaton, #188 Evan Seiler" }
      ]
    },
    acknowledgements: [
      "Georgetown University and Fr. Leo O’Donovan",
      "The Gracenotes, Phantoms, and superfood",
      "Jessica Vippolis, RozLilia Salgado, and Dorigen Horlivy",
      "Les Lentz of LSP Studios",
      "Tracy Foust of Sound Resolution",
      "Derek Hena and Kevin McAfee",
      "Our alumni, friends, girlfriends, and families"
    ],
    tracks: [
      { title: "We Meet" }
    ]
  },
  { 
    id: 7, 
    title: "Let the Good Chimes Roll", 
    year: "1997", 
    cover: "bg-[#C4CDDC]",
    image: IMG_LTGCR,
    link: "https://thechimes.lnk.to/let-the-good-chimes-rollAA",
    linerNotes: [
      {
        
        text: "This album marks two important milestones for the Georgetown Chimes: our 21st official recording and 50 years at the Hilltop. Over this half century the Chimes have become a fixture on the Georgetown campus; Chimes Nights at the Tombs, and Cherry Tree Massacre, have, for many become unique parts of the Georgetown experience. From its barbershop roots the group has expanded over the years into ’50s and ’60s standards, old English and Irish traditionals, jazz, and most recently, pop. It is often taken as a point of pride that every Chime can sing the “old” songs that pre-date him, some of which come from the group’s founding in 1946. As a result, the repertory of the group does not so much change and revolve as it does grow and evolve in new directions. Today the active repertory consists of well over 200 songs, all still sung in the closest of harmony and by the closest of friends. It is in this context that we hope this album will be a commemoration—a tribute to our past—as well as a celebration of and statement about our future."
      }
    ],
    credits: {
      "Groups": [
        { role: "1995 Group", name: "#119 Jim Walsh, S.J., #156 Ryan Johnson, #157 Michael Sucsy, #159 Sean O’Brien, #160 Andy Laird, #161 Zach Glaser, #162 Brian Mullally, #164 Jake Robards, #165 Matt Dexter, #166 Mark Patton, #167 Aaron Klein, #168 M.G. Lemley, #163 Will Longwitz (ephus)" },
        { role: "1996 Group", name: "#119 Jim Walsh S.J., #161 Zach Glaser, #164 Jake Robards, #165 Matt Dexter, #166 Mark Patton, #167 Aaron Klein, #168 M.G. Lemley, #169 Dick Hillenbrand, #170 R. Greg Lourie, #171 Peter Manice, #172 Dustin King, #173 Nolan Bolduc, #174 Sameer Patel, #160 Andy Laird (ephus)" },
        { role: "1997 Group", name: "#119 Jim Walsh, S.J., #164 Jake Robards, #166 Mark Patton, #167 Aaron Klein, #168 M.G. Lemley, #169 Dick Hillenbrand, #170 R Greg Lourie, #171 Peter Manice, #172 Dustin King, #173 Nolan Bolduc, #174 Sameer Patel, #175 Colin Pritchard, #176 Aaron Davis, #177 Federico Stubbe, #165 Matt Dexter (ephus)" }
      ],
      "Production": [
        { role: "Recording & Engineering", name: "Les Lentz at LSP Studios, Annapolis MD" },
        { role: "Live Recording", name: "Tracy Foust (Gonzaga Chapel & Gaston Hall)" },
        { role: "Producer", name: "The Georgetown Chimes" },
        { role: "Graphic Design", name: "Scott Powell" }
      ]
    },
    acknowledgements: [
      "Les Lentz, Tracy Foust, and Brian Johnson",
      "Dorothea Johnson and Sean Redmond",
      "#172 Dustin King and #175 Colin Pritchard",
      "William Watts, the Tombs, and the Clydes Group",
      "The Phantoms and The Gracenotes",
      "Matt Donaghue"
    ],
    tracks: [
      { title: "We Meet" }
    ]
  },
  { 
    id: 8, 
    title: "Hoya Saxa", 
    year: "1984", 
    cover: "bg-[#D8DDE6]",
    image: IMG_HOYA_SAXA,
    link: "https://thechimes.lnk.to/hoya-saxaAA",
    dedication: "This album is dedicated to three groups: our alumni Chimes, the Georgetown Hoyas, and those in France sans clue.",
    linerNotes: [
        {
            author: "Album Notes",
            text: "The Georgetown Chimes treasure their tradition. It is for this reason that several of our seventeen albums are musical anthologies. In a way, this too is an anthology, but unlike the others, we didn’t use tapes of soloists with their own active group, but rather, called them back to sing the songs with our group. Perhaps the most active of our alums is Kevin O’Brien. Throughout the year he has sung “So Much in Love” to the delight of Chimes’ audiences everywhere. He was also M.C. for this year’s Cherry Tree Massacre and was responsible for our appearance on “P.M. Magazine.” Steve Mohyla solos “Great Historical Bum” and helped on many of the baritone parts. Tim Naughton was called in to sing “Good Fellow,” despite his voice, and Bob Gaylord, specialist, was brought in for the final bell chord. Another alumnus we’d like to thank is Mark Ganz. Although he has no solos on this album, he too helped with many of the baritone parts and was part of last year’s active group. He was our only loss this year, but he helped to develop the sound we have now; for that we are grateful. “St. Louis Blues,” with its three solos, posed a particular problem. We had to try to synchronize the schedules of Mark Williams (’59), Dave Walsh (’58), and John Sheridan (’59). Not only that, but we had to put up with them for the recording weekend. In spite of the logistical difficulties of getting all these alumni together for the album, it has been a lot of fun, and it has reminded us once again what the group really means to each one of us. We realize that this camaraderie cannot be conveyed on a 12-inch disc of vinyl; nonetheless, we hope you enjoy this album as much as we enjoyed singing it for you."
        }
    ],
    credits: {
        "Production": [
            { role: "Front Cover", name: "Felix T. Cat" },
            { role: "Producer and Engineer", name: "John Burr" },
            { role: "Photography", name: "Cristina Del Sesto" },
            { role: "Translation of “Bomp”", name: "Brian Freeman" },
            { role: "Layout", name: "George J. Peacock" }
        ]
    },
    acknowledgements: [
        "Father Timothy Healy S.J.",
        "R.J. McCooey",
        "Kevin O'Brien",
        "David J. Walsh",
        "Brian Freeman",
        "The Boston Common"
    ],
    tracks: [
      { title: "St. Louis Blues", soloist: "Mark Williams, Dave Walsh, John Sheridan" },
      { title: "Good Fellow", soloist: "Tim Naughton" },
      { title: "The Great Historical Bum", soloist: "Steve Mohyla" },
      { title: "So Much In Love", soloist: "Kevin O’Brien" }
    ]
  },
  {
    id: 9,
    title: "Chimes ’75",
    year: "1975",
    cover: "bg-[#2A3B55]",
    image: IMG_CHIMES_75,
    link: "https://thechimes.lnk.to/chimes-75AA",
    description: "Tim Naughton; Father Yates; Ken Quinn; John P. Dearie, Jr., ephus; Cliffe Laborde; Kevin O’Neill; Bob Kingsland; Mark O’Connor",
    dedication: "This album dedicated to Gerard F. Yates, S.J.—our Coney Island Baby, a Curbstone Cutie Visiting Professor from Upper Peabody Tech Priest, confidant, friend—just “Yatsie.”",
    linerNotes: [
        {
            author: "Album Notes",
            text: "This record sung live February 5, 1975 in the heart of the Georgetown University community at 1789."
        },
        {
            author: "Le Figaro de Paris (September 1974) by Yann de L’Écotais",
            text: "The bistro is called The Tombs, in Georgetown—the chic, artistic, intellectual neighborhood of Northwest Washington, and it is mainly patronized by students. From the stairway which leads to the basement. there rise the voices of a choral group and the fragrance of beer. Nothing of the boozy, wanton student scene that is dear to Europeans. Down below, a young waiter has his finger to his lips: you have to parley, in a whisper, in order to slip into the great, darkened, crowded room that hangs enthralled by fifteen young men sitting around a large table with three microphones. The Georgetown University Chimes are giving their monthly concert—the house is packed without any advance publicity. “No—there’s no service while they’re singing”—out of respect, so as not to disturb. Everyone has taken his precautions in advance: the beer mugs hold one liter. This choral group has existed for 28 years; it is almost an institution. Students who belong pass on but remain members for life. They present American folklore tunes to which they adapt improvised words and texts in the singing style of “barber shop songs,” after the manner of barber shop customers of a century ago. After each number the room explodes: Glasses are lifted and clinked together, and everyone sits down again. The Chimes would have an assured professional career if they wanted it. They rehearse about three times a week, but they are also students on the side, mostly in political science. There is a professor there, too, the Reverend Gerard F. Yates, S.J., 67 years old, clear-voiced and bright-eyed, and believe me, he doesn’t balk at a pint. Perhaps I began to understand, in that atmosphere which was at once good-natured, very free, and at the same time polite, what it is that makes Americans “tick,” what it is that gives them—all politics aside—that spirit which we so lack on the other side of the Atlantic: confidence confidence which comes from the certainty of not being the prisoner of a past, of being able to choose one’s future and prepare for it, of doing one day what one wants to do—it is that which allows one to laugh. It is midnight, and Washington’s weather is mild. Boys and girls flirt on the campus. Mad pop music floats out from a few wide-open student windows. A party is in progress. America as we don’t know it."
        }
    ],
    credits: {
        "Production": [
            { role: "Layout", name: "R. J. McCooey" },
            { role: "Art Work", name: "Susan Lee" },
            { role: "Photography", name: "Rosemary Suozzi" },
            { role: "Engineering", name: "John Frey" },
            { role: "Recorded By", name: "Omega Recording Studios, Kensington, Maryland" }
        ]
    },
    tracks: [
      { title: "We Meet" }
    ]
  },
  {
    id: 10,
    title: "Chimes ’66",
    year: "1966",
    cover: "bg-[#4A5B75]",
    image: IMG_CHIMES_66,
    link: "https://thechimes.lnk.to/chimes-66AA",
    description: "Tim Mattimore; Fred Cosco, Ephus; Bill Casey; John Reed; Dave Cosco; Bob Flanagan; Bill Edgerton; Jerry Casey.",
    linerNotes: [
        {
            author: "A Chimes “Buff” (1966, Washington, D.C.)",
            text: "For twenty years, a voice of Georgetown has brought to our community as consistent a professional quality of singing as could be found anywhere. As that voice has come down to us over the years little has changed; to hear the Chimes today is to know how they were then. This consistency, this quality is not accidental. It was part of the very design and discipline of the original group whose strength and character are the first things inherited by any would-be Chime or “neophyte.” A voice, yes, but a Chime first. It is this sense of the past—this permanency, this tradition, if you will—that has brought to Alma Mater a distinction few have been able to achieve. And so we have gathered under the “tree” today all the Chimes as we remember them, one in spirit and comradeship with each other, with their university, with all who have known and admired them. As you listen then to this recording of the ’66 Chimes, you will find something of every Chime past, which was left to others to take up, enhance and then to give off again to future generations of Chimes. For us who hold the Chimes in special affection, we see these past twenty years as only the beginning of something already complete."
        }
    ],
    credits: {
        "Production": [
            { role: "Cover Design and Layout", name: "R. McCooey and F. Cosco Ltd." },
            { role: "Cover Photo", name: "Peter Carter" },
            { role: "Art Work", name: "Commercial Art Studios" }
        ]
    },
    tracks: [
      { title: "In the Still of the Night" },
      { title: "Silhouettes" },
      { title: "Blue Moon" },
      { title: "Teenager in Love" },
      { title: "Come Go With Me" },
      { title: "Canadian Railroad Trilogy", soloist: "Dave Cosco" }
    ]
  },
  {
    id: 11,
    title: "1958–1959",
    year: "1959",
    cover: "bg-[#6A7B95]",
    image: IMG_1959,
    link: "https://thechimes.lnk.to/1958-1959AA",
    linerNotes: [
        {
            author: "Album Notes",
            text: "To characterize The Chimes as merely another college singing group would be to overlook much of what has made them one of the most popular and respected organizations, not only on the Georgetown campus, but throughout the East Coast. Since their founding in 1946 by Frank “Ephus” Jones, they have provided countless hours of entertainment for lovers of barbershop harmony. From the original quartet which gave the group its initial impetus, the annual number of Chimes has gradually swelled till the present when the full complement of ten may be heard rendering many of the old favorites as well as an occasional contemporary arrangement. Though their main interest and support are centered in the Washington area, the Chimes are well-known for their weekend safaris up and down the East Coast. In addition to several radio and television engagements, they have appeared at the Ivy Jazz Band Ball in New York. But the highlight of every year’s activities is the Reunion held at Manasquan, New Jersey on Labor Day Weekend when the “actives” join in song and camaraderie with the Chimes of the past. Anyone who has accompanied the Chimes during one of their frequent “hums” at Mac’s Pub or Gusti’s Restaurant soon realizes that the mutual love of singing is not the only bond uniting them. For their common interests, extending to every sphere of Georgetown life, have given rise to a deep and unifying friendship, which has been nurtured by their close and willing association during many hours of rehearsal, travel and extra-curricular sociability. It is hoped that this recording will reflect the musical ability and friendliness of style which has made The Chimes a part of the tradition of Georgetown."
        }
    ],
    tracks: [
      { title: "We Meet" }
    ]
  },
  {
    id: 12,
    title: "Under the Tree",
    year: "1958",
    cover: "bg-[#8A9BB5]",
    image: IMG_UNDER_THE_TREE,
    link: "https://thechimes.lnk.to/UnderTheTreeAA",
    linerNotes: [
        {
            author: "Paul Hume (Music Critic of The Washington Post)",
            text: "The Georgetown Chimes are far too lively to be discussed as any kind of an “Institution.” Nevertheless, they are now a respectable twelve years old, having been brought into corporate existence by Frank Jones back in 1946. During their years of singing, the Chimes have become one of the most popular facets of life around this campus, and many female campuses; they also appear with the Glee Club, whose programs they customarily brighten. The Chimes function autonomously, musically speaking. Their repertoire is chosen by the leader, the Ephus, and is prepared and sung entirely at the impulse of the members of the group. The membership changes from year to year as faces disappear after Commencement and October tryouts bring new faces and voices to their ranks. As I watch and listen to them from concert to concert I often marvel at the easy friendliness of style and the smooth way they toss off their numbers. That the obvious camaraderies of the Chimes pays dividends in the blend of their voices, the unanimity with which they take on a song and the knowledgeable manner they show on stage is a fact more college groups could study. They have found a way of selling whatever they sing to an audience by the way they sing it, and that is the secret of good choral singing any day."
        }
    ],
    credits: {
        "Production": [
            { role: "Pictures", name: "Stan Sitnik" },
            { role: "Recorded and Pressed by", name: "RCA Custom Records" },
            { role: "Cover and Liner Printed by", name: "MacMurray Press, N.Y." }
        ]
    },
    tracks: [
      { title: "We Meet" },
      { title: "Alabamy Bound" },
      { title: "Lullaby of Birdland" },
      { title: "Wimoweh" },
      { title: "Blue Skies" },
      { title: "Sugar Blues" },
      { title: "Mountain Greenery" },
      { title: "Somebody Loves Me & Tea Leaves" },
      { title: "Aloha Medley" },
      { title: "Ohy By Jingo" },
      { title: "Magazine Cover & Police Gazette" },
      { title: "Georgetown Medley" },
      { title: "Some of These Days" },
      { title: "I Love Paris" },
      { title: "Roguish Eyes" },
      { title: "Greensleves" },
      { title: "Coney Island Washboard" },
      { title: "Summertime" },
      { title: "Donegal" },
      { title: "St. Louis Blues" },
      { title: "Wazoo" }
    ]
  }
];

const DONOR_TIERS = [
  {
    title: "The Ictus",
    price: "$19.46/year",
    link: "https://buy.stripe.com/dR67wmceZ3mgdiM9AS",
    description: "In conducting, the ictus is the precise moment the beat occurs. It is the pulse that holds the ensemble together. For $19.46 a year, you provide that pulse, ensuring the beat goes on.",
    cta: "Keep the Beat"
  },
  {
    title: "The Tonic",
    price: "$10/month",
    link: "https://buy.stripe.com/28o3g692N6ysa6AaEJ",
    description: "Ten bucks a month. It funds the casual hospitality that defines the Chimes, ensuring that when we meet again, the green tea with honey (and other beverages) is always flowing.",
    cta: "Fill the Cup"
  },
  {
    title: "The 1946 Society",
    price: "$19.46/month",
    link: "https://buy.stripe.com/6oEbMC7YJf4YbaE5kt",
    description: "The definitive commitment. By matching the year of our founding every month, you cover the operational essentials. You are the backbone of the day-to-day.",
    cta: "Make It Official"
  },
  {
    title: "The Social Chair",
    price: "$27.80/month",
    link: "https://buy.stripe.com/aEUaIy7YJaOI5QkcMW",
    description: "The Chimes are nothing without the gathering. This tier is dedicated to the experience. You help subsidize the cost of events, like reunions or the Cherry Tree Massacre afterglow. You are ensuring that when we get together, we can afford to do it right.",
    cta: "Start the Party"
  },
  {
    title: "The Founder’s League",
    price: "$46/month",
    link: "https://buy.stripe.com/aEUeYO2EpaOI0w04gv",
    description: "At this level, you aren’t just paying dues; you are subsidizing the future. You fund the archival work that keeps our history from fading.",
    cta: "Save the History"
  },
  {
    title: "The Good Fellow",
    price: "$100/month",
    link: "https://buy.stripe.com/5kA17Y92N6ysguYbIY",
    description: "This is the bedrock of the Alumni Association. Your contribution carries the heavy lifting for our most ambitious projects, ensuring the Chimes legacy is secure for decades to come.",
    cta: "Lead the Way"
  }
];

// --- Components ---

const SectionHeader = ({ title, number }) => (
  <div className="flex items-center justify-between border-b border-[#041E42]/20 pb-8 mb-24 fade-in-element">
    <h2 className="text-5xl md:text-7xl font-serif text-[#041E42] tracking-tight">{title}</h2>
    <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#595959] uppercase">{number}</span>
  </div>
);

const HomeView = ({ navigateTo }) => (
    <>
      {/* Hero */}
      <div 
        className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 border-b border-[#041E42]/10 bg-[#041E42] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG_CHERRY_TREE})` }}
      >
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="max-w-[1920px] mx-auto w-full flex flex-col items-center justify-center relative z-10 fade-in-element">
           {/* Architectural Title Stack */}
          <div className="text-center space-y-4 md:space-y-0 mb-12">
            <h1 className="text-[12vw] font-serif leading-[0.85] tracking-tight text-[#F4F4F3] block">
              TRADITION
            </h1>
            <h1 className="text-[12vw] font-serif leading-[0.85] tracking-tight text-[#F4F4F3] block italic opacity-60">
              RESONANCE
            </h1>
            <h1 className="text-[12vw] font-serif leading-[0.85] tracking-tight text-[#F4F4F3] block">
              LEGACY
            </h1>
          </div>

          {/* New CTAs */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
             <a 
                href="https://thechimes.lnk.to/AndSoItGoesAA" 
                target="_blank" 
                rel="noreferrer"
                className="px-12 py-4 bg-[#F4F4F3] text-[#041E42] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D50032] hover:text-[#F4F4F3] transition-colors"
             >
                Stream "And So It Goes"
             </a>
             <a 
                href="https://buytickets.at/chimes/1998396/r/gcaa-site" 
                target="_blank" 
                rel="noreferrer"
                className="px-12 py-4 border border-[#F4F4F3] text-[#F4F4F3] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#F4F4F3] hover:text-[#041E42] transition-colors"
             >
                Book Cherry Tree Tickets
             </a>
          </div>
        </div>
      </div>

      {/* Featured Event Teaser - Split Screen */}
      <section className="min-h-[80vh] flex flex-col md:flex-row border-b border-[#041E42]/10">
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-[#E5E5E4] fade-in-element relative overflow-hidden group">
             <div className="absolute inset-0 z-0">
                 <img 
                 src={IMG_CHERRY_TREE}
                 alt="The Cherry Tree Massacre" 
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
               />
             </div>
        </div>
        
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-[#F4F4F3] fade-in-element">
            <span className="text-xs font-bold tracking-[0.2em] text-[#595959] mb-8 block uppercase">Upcoming Gathering</span>
            <h3 className="text-5xl md:text-7xl font-serif mb-8 text-[#041E42] leading-none">The Cherry Tree Massacre</h3>
            <p className="text-[#63666A] mb-12 max-w-md text-lg font-normal leading-relaxed">
                Experience the 80th annual celebration of song at Gaston Hall. A timeless gathering of harmony, history, and brotherhood.
            </p>
            <button onClick={() => navigateTo('agenda')} className="w-fit pb-2 border-b border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:text-[#D50032] hover:border-[#D50032] transition-colors">
                View Full Agenda
            </button>
        </div>
      </section>
    </>
);

const CherryTreeMassacreView = ({ navigateTo }) => (
    <div className="min-h-screen pt-48 px-8 md:px-16 pb-32 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <button 
          onClick={() => navigateTo('agenda')}
          className="mb-16 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3 hover:text-[#D50032] transition-colors text-[#595959] fade-in-element"
        >
          <ChevronLeft size={12} /> Return to Agenda
        </button>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-24 fade-in-element">
          {/* Sticky Sidebar Area */}
          <div className="lg:w-1/3">
             <div className="sticky top-48">
                <div className="aspect-[4/5] w-full bg-[#E5E5E4] mb-12 relative overflow-hidden">
                    <img 
                        src={IMG_CHERRY_TREE}
                        alt="Gaston Hall" 
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-[#041E42]/20"></div>
                </div>
                
                <div className="flex justify-between items-baseline border-b border-[#041E42]/20 pb-6 mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase">Date</span>
                  <span className="text-2xl font-serif text-[#041E42]">Feb 21, 2026</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-[#041E42]/20 pb-6 mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase">Time</span>
                  <span className="text-2xl font-serif text-[#041E42]">7:00 PM</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-[#041E42]/20 pb-6 mb-12">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase">Venue</span>
                  <span className="text-2xl font-serif text-[#041E42]">Gaston Hall</span>
                </div>
                
                <a 
                    href="https://buytickets.at/chimes/1998443/r/gcaa-site" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-5 bg-[#041E42] text-[#F4F4F3] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#D50032] transition-colors flex items-center justify-center gap-4 mb-4"
                >
                    <Ticket size={14} /> Buy Tickets
                </a>
                <p className="text-center text-xs text-[#63666A] uppercase tracking-widest font-bold">General Admission $30</p>
             </div>
          </div>

          {/* Scrollable Content */}
          <div className="lg:w-2/3 pt-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D50032] uppercase mb-6 block">The 80th Annual</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-12 text-[#041E42] leading-none -ml-1">The Cherry Tree Massacre</h1>
            
            <div className="text-xl font-normal text-[#63666A] mb-16 leading-relaxed max-w-2xl border-l border-[#D50032] pl-8 space-y-8">
                <p>
                    For eight decades, the Cherry Tree Massacre has stood as one of Georgetown’s most enduring musical traditions. 
                    What began as a barbershop gathering has evolved into a showcase of the university's premier a cappella talent.
                </p>
                <p>
                    Join the Chimes as we return to the stage of Gaston Hall for a night of history, harmony, and celebration 
                    during Alumni Weekend 2026.
                </p>
            </div>

            <div className="mb-32">
                <span className="text-xs font-bold tracking-[0.2em] text-[#595959] mb-12 block border-b border-[#041E42]/20 pb-4 uppercase">Guest Groups</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 border border-[#041E42]/10 bg-white">
                        <span className="text-xs font-bold text-[#595959] uppercase tracking-widest mb-2 block">Featured Guest</span>
                        <h4 className="text-2xl font-serif text-[#041E42]">The Georgetown Phantoms</h4>
                    </div>
                    <div className="p-8 border border-[#041E42]/10 bg-white">
                        <span className="text-xs font-bold text-[#595959] uppercase tracking-widest mb-2 block">Featured Guest</span>
                        <h4 className="text-2xl font-serif text-[#041E42]">The Georgetown GraceNotes</h4>
                    </div>
                     <div className="p-8 border border-[#041E42]/10 bg-white">
                        <span className="text-xs font-bold text-[#595959] uppercase tracking-widest mb-2 block">Featured Guest</span>
                        <h4 className="text-2xl font-serif text-[#041E42]">Superfood</h4>
                    </div>
                </div>
            </div>

            <div className="mb-32">
                <span className="text-xs font-bold tracking-[0.2em] text-[#595959] mb-12 block border-b border-[#041E42]/20 pb-4 uppercase">Alumni Events</span>
                <div className="space-y-12">
                    <div>
                        <h4 className="text-3xl font-serif text-[#041E42] mb-4">Welcome Reception</h4>
                        <p className="text-[#63666A] text-lg leading-relaxed mb-4">
                            Pre-concert gathering for alumni and families. Light refreshments will be served.
                        </p>
                        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-[#595959]">
                            <span className="flex items-center gap-2"><Clock size={12}/> 5:00 PM</span>
                            <span className="flex items-center gap-2"><MapPin size={12}/> Dahlgren Quadrangle</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-serif text-[#041E42] mb-4">The Afterglow</h4>
                        <p className="text-[#63666A] text-lg leading-relaxed mb-4">
                            The tradition continues at The Tombs. Join the active group for food, drink, and song immediately following the concert.
                        </p>
                        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-[#595959]">
                            <span className="flex items-center gap-2"><Clock size={12}/> 9:30 PM</span>
                            <span className="flex items-center gap-2"><MapPin size={12}/> The Tombs</span>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
);

const AgendaView = ({ navigateTo }) => (
    <div className="min-h-screen pt-48 px-8 md:px-16 pb-32 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Agenda" number="2026" />
        
        <div className="flex flex-col fade-in-element">
          {EVENTS_DATA.map((event) => (
            <div 
              key={event.id} 
              className="group border-t border-[#041E42]/10 py-16 px-6 md:px-12 hover:bg-[#E5E5E4]/30 transition-colors duration-700 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative"
            >
              <div className="md:col-span-3 flex flex-col">
                 <span className="text-5xl font-serif text-[#041E42] mb-2">{event.date.split(' ')[1]}</span>
                 <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase">{event.date.split(' ')[0]} {event.date.split(' ')[2]}</span>
              </div>
              
              <div className="md:col-span-6 pr-12">
                <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-[#D50032]">{event.type}</span>
                {event.internalLink ? (
                    <button 
                        onClick={() => navigateTo(event.internalLink)} 
                        className="block text-left"
                    >
                        <h3 className="text-4xl md:text-5xl font-serif mb-6 text-[#041E42] group-hover:text-[#D50032] transition-colors">
                        {event.title}
                        </h3>
                    </button>
                ) : (
                    <h3 className="text-4xl md:text-5xl font-serif mb-6 text-[#041E42]">
                        {event.title}
                    </h3>
                )}
                
                <p className="text-[#63666A] font-normal max-w-md leading-relaxed">{event.description}</p>
              </div>

              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-8">
                <div className="text-xs tracking-[0.2em] text-[#63666A] uppercase flex flex-col items-end gap-2 text-right">
                   <span className="flex items-center gap-2">{event.time} <Clock size={12} /></span>
                   <span className="flex items-center gap-2">{event.location} <MapPin size={12} /></span>
                </div>
                
                {event.link && (
                    <a 
                      href={event.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-8 py-4 border border-[#041E42] text-[#041E42] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors duration-500"
                    >
                      Reserve
                    </a>
                )}
              </div>
            </div>
          ))}
          <div className="border-t border-[#041E42]/10"></div>
        </div>
      </div>
    </div>
);

const DiscographyView = ({ openAlbum }) => (
    <div className="min-h-screen pt-48 px-8 md:px-16 pb-32 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Discography" number="ARCHIVE" />
        
        {/* Minimalist Grid - High Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mb-32 fade-in-element">
          {ALBUMS_DATA.map((album) => (
            <div 
              key={album.id} 
              onClick={() => openAlbum(album)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative overflow-hidden aspect-square bg-[#E5E5E4]">
                 {/* Conditionally render Image or CSS Background */}
                 {album.image ? (
                    <img 
                      src={album.image} 
                      alt={album.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                 ) : (
                    <div className={`w-full h-full ${album.cover} transition-transform duration-[1.5s] ease-out group-hover:scale-105`}></div>
                 )}
                 
                 {album.badge && (
                    <div className="absolute top-0 left-0 bg-[#D50032] text-[#F4F4F3] px-3 py-1 text-xs font-bold tracking-[0.25em] uppercase">
                      {album.badge}
                    </div>
                  )}
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-bold tracking-[0.25em] text-[#595959] mb-3 block uppercase">
                  {album.year}
                </span>
                <h3 className="font-serif text-3xl text-[#041E42] group-hover:text-[#D50032] transition-colors duration-500">
                  {album.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Footer */}
        <div className="border-t border-[#041E42]/10 pt-24 flex flex-col items-center text-center fade-in-element">
            <h3 className="text-4xl font-serif text-[#041E42] mb-6">Incomplete Archives</h3>
            <p className="text-[#63666A] text-lg font-normal leading-relaxed max-w-3xl mb-8">
                The digitization of the Chimes catalogue is an ongoing preservation project. We are restoring master tapes for future high-fidelity release.
            </p>
            <a href="https://thechimes.notion.site" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:text-[#D50032] border-b border-[#041E42] pb-1 hover:border-[#D50032] transition-colors">
                Access Preliminary Archives
            </a>
        </div>
      </div>
    </div>
);

const AlbumDetailView = ({ selectedAlbum, navigateTo }) => (
    <div className="min-h-screen pt-48 px-8 md:px-16 pb-32 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <button 
          onClick={() => navigateTo('discography')}
          className="mb-16 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3 hover:text-[#D50032] transition-colors text-[#595959] fade-in-element"
        >
          <ChevronLeft size={12} /> Return to Index
        </button>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-24 fade-in-element">
          {/* Sticky Sidebar Area */}
          <div className="lg:w-1/3">
             <div className="sticky top-48">
                {/* Conditionally render Image or CSS Background */}
                {selectedAlbum?.image ? (
                   <img 
                     src={selectedAlbum.image} 
                     alt={selectedAlbum.title} 
                     className="aspect-square w-full object-cover mb-12 shadow-2xl shadow-[#041E42]/5"
                   />
                ) : (
                   <div className={`aspect-square w-full ${selectedAlbum?.cover || 'bg-[#E5E5E4]'} mb-12 shadow-2xl shadow-[#041E42]/5`}></div>
                )}
                
                <div className="flex justify-between items-baseline border-b border-[#041E42]/20 pb-6 mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase">Issued</span>
                  <span className="text-2xl font-serif text-[#041E42]">{selectedAlbum?.year}</span>
                </div>
                
                {selectedAlbum?.link && (
                    <button 
                        onClick={() => window.open(selectedAlbum.link, '_blank')}
                        className="w-full py-5 border border-[#041E42] text-[#041E42] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors flex items-center justify-center gap-4 mb-8"
                    >
                        <Play size={10} fill="currentColor" /> Listen
                    </button>
                )}
                
                {selectedAlbum?.dedication && (
                     <div className="mt-8">
                        <p className="text-xs text-[#595959] uppercase tracking-[0.2em] font-bold mb-4">Dedication</p>
                        <p className="text-sm font-serif italic text-[#63666A] leading-relaxed">{selectedAlbum.dedication}</p>
                     </div>
                )}
             </div>
          </div>

          {/* Scrollable Content */}
          <div className="lg:w-2/3 pt-4">
            <h1 className="text-6xl md:text-8xl font-serif mb-12 text-[#041E42] leading-none -ml-1">{selectedAlbum?.title}</h1>
            
            {selectedAlbum?.description && (
                <p className="text-xl font-normal text-[#63666A] mb-16 leading-relaxed max-w-2xl border-l border-[#D50032] pl-8">
                    {selectedAlbum.description}
                </p>
            )}
            
            {selectedAlbum?.leadSingle && (
                <div className="bg-[#E5E5E4]/30 p-12 mb-24 border border-[#041E42]/5">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#D50032] uppercase mb-4 block">Featured Track</span>
                    <h3 className="text-4xl font-serif text-[#041E42] mb-2">{selectedAlbum.leadSingle.title}</h3>
                    <p className="text-xs text-[#63666A] uppercase tracking-widest mb-8">{selectedAlbum.leadSingle.composer}</p>
                    {selectedAlbum.leadSingle.link && (
                        <a 
                            href={selectedAlbum.leadSingle.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:text-[#D50032] border-b border-[#041E42] pb-1 hover:border-[#D50032]"
                        >
                            Play Track
                        </a>
                    )}
                </div>
            )}

            <div className="flex flex-col mb-32">
              <span className="text-xs font-bold tracking-[0.2em] text-[#595959] mb-12 block border-b border-[#041E42]/20 pb-4 uppercase">Tracklist</span>
              {selectedAlbum?.tracks.map((track, idx) => (
                <div key={idx} className="group flex items-center justify-between py-6 border-b border-[#041E42]/5 hover:bg-[#E5E5E4]/30 px-6 -mx-6 transition-colors cursor-default text-[#041E42]">
                  <div className="flex items-baseline gap-12 w-full">
                    <span className="text-xs font-bold text-[#595959] w-8">{String(idx + 1).padStart(2, '0')}</span>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between w-full">
                        <span className="font-serif text-2xl">{track.title}</span>
                        <div className="flex flex-col md:text-right mt-2 md:mt-0">
                           {track.composer && (
                               <span className="text-xs text-[#595959] font-sans uppercase tracking-widest">
                                  {track.composer}
                               </span>
                           )}
                           {track.soloist && (
                               <span className="text-xs text-[#63666A] font-sans uppercase tracking-widest mt-1">
                                  Feat. {track.soloist}
                               </span>
                           )}
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Liner Notes Section */}
            {selectedAlbum?.linerNotes && (
                <div className="mb-32">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#595959] mb-16 block border-b border-[#041E42]/20 pb-4 uppercase">Album Notes</span>
                    <div className="space-y-24">
                        {selectedAlbum.linerNotes.map((note, idx) => (
                            <div key={idx} className="pl-4 md:pl-12 border-l border-[#041E42]/10">
                                {note.author && <h4 className="font-serif text-3xl mb-6 italic text-[#041E42]">{note.author}</h4>}
                                <p className="text-[#63666A] leading-loose font-normal text-lg text-justify">
                                    {note.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Credits Section */}
            {selectedAlbum?.credits && (
                <div className="mb-32">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#595959] mb-16 block border-b border-[#041E42]/20 pb-4 uppercase">Production Credits</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {Object.entries(selectedAlbum.credits).map(([section, roles]) => (
                            <div key={section} className="col-span-2 md:col-span-1">
                                <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-[#041E42]">{section}</h5>
                                <ul className="space-y-8">
                                    {roles.map((role, idx) => (
                                        <li key={idx} className="flex flex-col">
                                            <span className="text-[#595959] text-xs uppercase tracking-[0.15em] mb-1">{role.role}</span>
                                            <span className="font-serif text-xl leading-snug text-[#041E42]">{role.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Acknowledgements */}
            {selectedAlbum?.acknowledgements && (
                <div className="py-24 border-t border-b border-[#041E42]/10">
                      <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-12 text-[#041E42] text-center">Acknowledgements</h5>
                      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-2xl mx-auto">
                        {selectedAlbum.acknowledgements.map((name, i) => (
                            <span key={i} className="text-lg text-[#63666A] font-serif italic">{name}</span>
                        ))}
                      </div>
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
);

const StoreView = () => (
    <div className="min-h-screen pt-48 px-8 md:px-16 pb-32 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Atelier" number="COLLECTION" />

        <div className="flex flex-col lg:flex-row gap-24 lg:gap-48 mb-32 fade-in-element">
          {/* Editorial Copy */}
          <div className="lg:w-1/3 pt-12">
             <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase block mb-8">Uniform & Regalia</span>
             <h3 className="text-5xl font-serif mb-12 italic text-[#041E42] leading-tight">C’est une cravate.<br/>C’est un nœud papillon.</h3>
             <div className="text-[#63666A] text-lg leading-relaxed font-normal space-y-8 text-justify">
                <p>Since the Actives are in need of new ties, Nikolai has worked with Drew to produce 50 neckties and 20 bow ties. This allows us to not only fill Active tie needs for the foreseeable future, but also permanently stock ties for any Chime who needs one.</p>
                <p>Therefore, if you’ve lost your tie and need a replacement—or, let’s be honest, a refreshment—you can purchase one below.</p>
             </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            
            {/* Necktie Product */}
            <div className="group cursor-pointer">
               <div className="bg-[#E5E5E4] aspect-[4/5] mb-8 relative overflow-hidden">
                  <img 
                    src={IMG_NECKTIE} 
                    alt="The Silk Necktie"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#041E42] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
               </div>
               <div className="flex flex-col items-center text-center">
                  <h4 className="text-3xl font-serif text-[#041E42] mb-2">The Silk Necktie</h4>
                  <p className="text-xs text-[#63666A] mb-6 font-bold tracking-widest uppercase">Handmade in the UK</p>
                  <span className="text-sm font-serif italic text-[#041E42] mb-6">$75.00</span>
                  <a 
                     href="https://buy.stripe.com/14k6si2EpcWQemQ3co"
                     target="_blank"
                     rel="noreferrer"
                     className="inline-block px-12 py-4 border border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors"
                    >
                     Acquire
                   </a>
               </div>
            </div>

             {/* Bow Tie Product */}
             <div className="group cursor-pointer">
               <div className="bg-[#E5E5E4] aspect-[4/5] mb-8 relative overflow-hidden">
      <img 
                    src={IMG_BOWTIE} 
                    alt="The Silk Necktie"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
               </div>
               <div className="flex flex-col items-center text-center">
                  <h4 className="text-3xl font-serif text-[#041E42] mb-2">The Silk Bow Tie</h4>
                  <p className="text-xs text-[#63666A] mb-6 font-bold tracking-widest uppercase">Handmade in the UK</p>
                  <span className="text-sm font-serif italic text-[#041E42] mb-6">$75.00</span>
                  <a 
                     href="https://buy.stripe.com/eVacQGceZ2icceI28l"
                     target="_blank"
                     rel="noreferrer"
                     className="inline-block px-12 py-4 border border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors"
                    >
                     Acquire
                   </a>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
);

const BackstageView = () => (
    <div className="min-h-screen pt-48 px-8 md:px-16 pb-32 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Backstage" number="INTERNAL ACCESS" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 fade-in-element">
            {/* GleeManager Section */}
            <div className="p-16 border border-[#041E42]/10 hover:border-[#041E42]/30 transition-colors duration-700 bg-[#FFFFFF]">
                <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase mb-8 flex items-center gap-3">
                  Database
                </span>
                <h3 className="text-4xl font-serif mb-8 text-[#041E42]">GleeManager</h3>
                <p className="text-[#63666A] text-lg leading-relaxed font-normal mb-12">
                    Our central repository for historical data, part tapes, and archival recordings. 
                </p>
                <div className="flex flex-col gap-6">
                     <a href="https://thechimes.notion.site" target="_blank" rel="noreferrer" className="w-full text-center py-5 border border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] text-[#041E42] transition-colors flex justify-center items-center gap-3">
                        Launch Notion <ExternalLink size={12} />
                     </a>
                     <a href="https://drive.google.com/uc?export=download&id=1s9YI3af7Y17OpptSKo4LRAsM15QCyOlp" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors flex items-center justify-center gap-2 text-[#595959]">
                        Download Manual <ArrowRight size={12} />
                     </a>
                </div>
            </div>

            {/* Slack Section */}
            <div className="p-16 border border-[#041E42]/10 hover:border-[#041E42]/30 transition-colors duration-700 bg-[#FFFFFF]">
                <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase mb-8 flex items-center gap-3">
                  Messaging
                </span>
                <h3 className="text-4xl font-serif mb-8 text-[#041E42]">Slack Workspace</h3>
                <p className="text-[#63666A] text-lg leading-relaxed font-normal mb-12">
                   Instant messaging for the Active and Alumni community. Channels for coordination, hobbies, and general discourse.
                </p>
                <div className="flex flex-col gap-6">
                     <a href="https://thechimes.slack.com" target="_blank" rel="noreferrer" className="w-full text-center py-5 border border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] text-[#041E42] transition-colors flex justify-center items-center gap-3">
                        Launch Slack <ExternalLink size={12} />
                     </a>
                     <a href="https://drive.google.com/uc?export=download&id=1AeangbSpDCNOv-sHq5yqaz5Djk0YmesR" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors flex items-center justify-center gap-2 text-[#595959]">
                        Download Manual <ArrowRight size={12} />
                     </a>
                </div>
            </div>
        </div>
      </div>
    </div>
);

const PhilanthropyView = () => (
    <div className="min-h-screen bg-[#F4F4F3] text-[#041E42] pt-48 px-8 md:px-16 pb-32">
       <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Fund the Brotherhood" number="PATRONAGE" />
        
        {/* Intro */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32 fade-in-element">
            <div className="lg:w-1/3 pt-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase block mb-6">01. The Donor Guild</span>
                <p className="text-[#63666A] text-xs leading-loose font-bold uppercase tracking-widest max-w-xs">
                   Note: Contributions to the Georgetown Chimes Alumni Association 501(c)(7) are not tax deductible.
                </p>
            </div>
            <div className="lg:w-2/3">
                <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-[#041E42]">
                    The Donor Guild is the steady heartbeat that allows the Alumni Association to operate with confidence.
                </h3>
                <p className="text-xl text-[#63666A] font-normal max-w-2xl leading-relaxed">
                    By subscribing, you ensure the tradition is waiting for you: the tables piled high, the tankards full, and the door open.
                </p>
            </div>
        </div>

        {/* Guild Tiers Grid - Clean Borders, No Fill */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-48 fade-in-element">
            {DONOR_TIERS.map((tier, idx) => (
                <div key={idx} className="border border-[#041E42]/10 p-12 flex flex-col justify-between min-h-[450px] hover:border-[#041E42] transition-colors duration-700 group bg-white">
                    <div>
                        <div className="mb-6">
                            <h4 className="text-3xl font-serif text-[#041E42] mb-3">{tier.title}</h4>
                            <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase block">{tier.price}</span>
                        </div>
                        {/* Tri-stripe Separator - Equal Lengths */}
                        <div className="flex flex-col gap-1 mb-8 w-fit">
                            <div className="w-8 h-[2px] bg-[#BBBCBC]"></div>
                            <div className="w-8 h-[2px] bg-[#BBBCBC]"></div>
                            <div className="w-8 h-[2px] bg-[#BBBCBC]"></div>
                        </div>
                        <p className="text-[#63666A] text-sm leading-loose font-normal">
                            {tier.description}
                        </p>
                    </div>
                    <a 
                        href={tier.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full text-center py-4 border border-[#041E42] text-[#041E42] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors mt-12"
                    >
                        {tier.cta}
                    </a>
                </div>
            ))}
        </div>

        {/* One Time Gift */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 border-t border-[#041E42]/10 pt-32 fade-in-element">
             <div className="lg:w-1/3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#595959] uppercase block mb-6">02. Single Contribution</span>
                <p className="text-[#63666A] text-xs leading-loose font-bold uppercase tracking-widest max-w-xs">
                   Legacy Projects & Capital Improvements
                </p>
            </div>
            <div className="lg:w-2/3">
                <h3 className="text-6xl font-serif mb-12 text-[#041E42]">Upgrade the ride.</h3>
                <p className="text-[#63666A] text-xl leading-relaxed mb-12 font-normal max-w-2xl text-justify">
                    If the Donor Guild keeps the engine running, One-Time Gifts upgrade the ride. Your contributions allow us to hold Cadillac reunions at Chevrolet rates. They are the catalyst that brings our history alive.
                </p>
                <a 
                    href="https://donate.stripe.com/fZe3g6frb6ys92wfZ4"
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block px-16 py-6 border border-[#041E42] text-[#041E42] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors"
                >
                    Make a Contribution
                </a>
            </div>
        </div>

        {/* Management */}
        <div className="mt-32 pt-16 border-t border-[#041E42]/5 text-center fade-in-element">
            <h4 className="font-serif text-2xl mb-4 text-[#041E42] italic">Membership Services</h4>
            <p className="text-[#63666A] text-sm font-normal">
                Manage your guild subscription via the <a href="https://billing.stripe.com/login/eVa00CdRM41u2ZibII" target="_blank" rel="noreferrer" className="text-[#041E42] underline decoration-1 underline-offset-4 hover:text-[#D50032]">Stripe Portal</a>.
            </p>
        </div>

      </div>
    </div>
);

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load Adobe Fonts and Google Fonts
  useEffect(() => {
    const typekitLink = document.createElement('link');
    typekitLink.href = 'https://use.typekit.net/uzl4kqy.css';
    typekitLink.rel = 'stylesheet';
    document.head.appendChild(typekitLink);

    const googleLink = document.createElement('link');
    googleLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;700&display=swap';
    googleLink.rel = 'stylesheet';
    document.head.appendChild(googleLink);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (document.head.contains(typekitLink)) document.head.removeChild(typekitLink);
      if (document.head.contains(googleLink)) document.head.removeChild(googleLink);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (page) => {
    window.scrollTo(0, 0);
    setActivePage(page);
    setIsMenuOpen(false);
    setSelectedAlbum(null);
  };

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setActivePage('album_detail');
    window.scrollTo(0, 0);
  };

  // Logic for dynamic Navbar styling
  const isHome = activePage === 'home';
  const isTransparent = isHome && !scrolled && !isMenuOpen;
  
  // Use White text/logo when transparent (on top of dark background), Navy otherwise
  const navTextColor = isTransparent ? 'text-[#F4F4F3]' : 'text-[#041E42]';
  const currentLogo = isTransparent ? IMG_LOGO_WHITE : IMG_LOGO;

  const NavLink = ({ page, children, mobile }) => (
    <button
      onClick={() => navigateTo(page)}
      className={`${
        mobile 
          ? 'block w-full text-center text-4xl font-serif py-6 text-[#041E42]' 
          : `text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 relative group ${activePage === page ? (isTransparent ? 'text-[#F4F4F3]' : 'text-[#041E42]') : (isTransparent ? 'text-[#F4F4F3]/70 hover:text-[#F4F4F3]' : 'text-[#595959] hover:text-[#041E42]')}`
      }`}
    >
      {children}
      {!mobile && activePage === page && (
          <span className={`absolute -bottom-2 left-1/2 w-full h-px transform -translate-x-1/2 ${isTransparent ? 'bg-[#F4F4F3]' : 'bg-[#041E42]'}`}></span>
      )}
    </button>
  );

  return (
    <div className="font-sans text-[#041E42] bg-[#F4F4F3]">
      {/* Global CSS Overrides */}
      <style>{`
        :root {
          color-scheme: light;
          --font-sans: "neue-haas-unica", sans-serif;
          --font-serif: "adobe-caslon-pro", serif;
        }
        body {
          margin: 0;
          padding: 0;
          background-color: #F4F4F3;
          overflow-x: hidden;
          font-family: "neue-haas-unica", sans-serif !important;
        }
        .font-serif {
          font-family: "adobe-caslon-pro", "Cormorant Garamond", serif !important;
        }
        .font-sans {
          font-family: "neue-haas-unica", "Montserrat", sans-serif !important;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-element {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Navigation - Ultra Minimal */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out border-b ${
          scrolled || isMenuOpen 
            ? 'bg-[#F4F4F3]/95 backdrop-blur-md border-[#041E42]/10 py-4' 
            : 'bg-transparent border-transparent py-10'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className={`cursor-pointer z-50 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-100'}`}
              onClick={() => navigateTo('home')}
            >
              <img 
                src={currentLogo}
                alt="Chimes Wordmark" 
                className={`h-8 w-auto transition-all duration-500`}
              />
            </div>
            
            {/* Desktop Menu - Spaced Out */}
            <div className={`hidden md:flex items-center gap-16`}>
              <NavLink page="agenda">Agenda</NavLink>
              <NavLink page="discography">Archive</NavLink>
              <NavLink page="philanthropy">Patronage</NavLink>
              <NavLink page="store">Atelier</NavLink>
              <NavLink page="backstage">Backstage</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden z-50 p-2 ${isTransparent ? 'text-[#F4F4F3]' : 'text-[#041E42]'}`}
            >
              {isMenuOpen ? <X size={24} strokeWidth={1} className="text-[#041E42]" /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div className={`fixed inset-0 bg-[#F4F4F3] z-40 transition-all duration-[1s] ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="h-full flex flex-col justify-center items-center px-6 text-[#041E42] space-y-4">
            <NavLink page="agenda" mobile>Agenda</NavLink>
            <NavLink page="discography" mobile>Archive</NavLink>
            <NavLink page="philanthropy" mobile>Patronage</NavLink>
            <NavLink page="store" mobile>Atelier</NavLink>
            <NavLink page="backstage" mobile>Backstage</NavLink>
          </div>
        </div>
      </nav>

      <main className="min-h-screen">
        {activePage === 'home' && <HomeView navigateTo={navigateTo} />}
        {activePage === 'agenda' && <AgendaView navigateTo={navigateTo} />}
        {activePage === 'discography' && <DiscographyView openAlbum={openAlbum} />}
        {activePage === 'album_detail' && <AlbumDetailView selectedAlbum={selectedAlbum} navigateTo={navigateTo} />}
        {activePage === 'philanthropy' && <PhilanthropyView />}
        {activePage === 'store' && <StoreView />}
        {activePage === 'backstage' && <BackstageView />}
        {activePage === 'ctm_feb21' && <CherryTreeMassacreView navigateTo={navigateTo} />}
      </main>

      {/* Footer - Minimalist */}
      <footer className="bg-[#F4F4F3] text-[#041E42] border-t border-[#041E42]/10 py-32 px-8 md:px-16">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4 flex flex-col justify-between items-start">
            <img 
              src={IMG_LOGO} 
              alt="Chimes Wordmark" 
              className="h-8 w-auto mb-8 opacity-50 grayscale" 
            />
            <p className="text-xs uppercase tracking-widest leading-loose text-[#595959]">
              Georgetown Chimes Alumni Association, Inc.<br/>
              Alex Newton, Acting Secretary
            </p>
          </div>
          
          <div className="md:col-span-8 flex flex-wrap justify-end gap-24">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#595959]">Index</span>
              <button onClick={() => navigateTo('agenda')} className="text-left text-sm font-serif hover:text-[#D50032] transition-colors">Events</button>
              <button onClick={() => navigateTo('discography')} className="text-left text-sm font-serif hover:text-[#D50032] transition-colors">Archive</button>
              <button onClick={() => navigateTo('philanthropy')} className="text-left text-sm font-serif hover:text-[#D50032] transition-colors">Patronage</button>
              <button onClick={() => navigateTo('store')} className="text-left text-sm font-serif hover:text-[#D50032] transition-colors">Atelier</button>
            </div>
            
             <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#595959]">Members</span>
              <button onClick={() => navigateTo('backstage')} className="text-left text-sm font-serif hover:text-[#D50032] transition-colors">Database</button>
              <button onClick={() => navigateTo('backstage')} className="text-left text-sm font-serif hover:text-[#D50032] transition-colors">Messaging</button>
            </div>

             <div className="flex flex-col justify-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 group hover:text-[#D50032] transition-colors"
              >
                Return to Top <ChevronDown className="rotate-180 group-hover:-translate-y-1 transition-transform duration-500" size={12} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1920px] mx-auto mt-24 pt-8 border-t border-[#041E42]/5 flex justify-between items-center text-xs text-[#595959] uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Georgetown Chimes Alumni Association, Inc.</span>
          <span>Crafted in Canvas</span>
        </div>
      </footer>
    </div>
  );
};
