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
  Database
} from 'lucide-react';

// --- Assets & Placeholders ---
// Mapped to ensure rendering in preview. In local dev, revert these to imports.
import IMG_CHERRY_TREE from './assets/Composite-Set-Monochrome-Compressed.jpg';
import IMG_CHERRY_LOGO from './assets/navy-horizontal@4x.png';

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
    link: "https://buytickets.at/chimes/1998443/r/gcaa-site",
    description: "Alumni weekend, with Welcome Reception & Afterglow details to be announced. The longest-running a cappella tradition at Georgetown."
  },
  { 
    id: 3, 
    title: "John Carroll Weekend", 
    date: "APR 18–21 2026", 
    time: "TBD",
    location: "PUERTO RICO", 
    type: "REUNION",
    link: "https://jcw.georgetown.edu/",
    description: "Join us in celebrating Federico Stubbe #177. Specific performance times and locations to be announced closer to the date."
  },
];

const ALBUMS_DATA = [
  { 
    id: 1, 
    title: "Desperate Chimes, Desperate Measures", 
    year: "2026", 
    cover: "bg-[#2A3B55]", // Muted blue placeholder
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
    link: "https://thechimes.lnk.to/three-stripesAA",
    tracks: [
      { title: "We Meet" }
    ]
  },
  { 
    id: 4, 
    title: "36th & Prospect", 
    year: "2009", 
    cover: "bg-[#8A9BB5]",
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
      { title: "We Meet" }
    ]
  },
  { 
    id: 5, 
    title: "Battle Gear", 
    year: "2003", 
    cover: "bg-[#9AABCA]",
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
    title: "Parsley, Sage...", 
    year: "2002", 
    cover: "bg-[#B0BCCF]",
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
    link: "https://thechimes.lnk.to/let-the-good-chimes-rollAA",
    linerNotes: [
      {
        author: "Album Notes",
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
    price: "$10/month or $100/year",
    link: "https://buy.stripe.com/28o3g692N6ysa6AaEJ",
    description: "Ten bucks a month. It funds the casual hospitality that defines the Chimes, ensuring that when we meet again, the green tea with honey (and other beverages) is always flowing.",
    cta: "Fill the Cup"
  },
  {
    title: "The 1946 Society",
    price: "$19.46/month or $194.60/year",
    link: "https://buy.stripe.com/6oEbMC7YJf4YbaE5kt",
    description: "The definitive commitment. By matching the year of our founding every month, you cover the operational essentials. You are the backbone of the day-to-day.",
    cta: "Make It Official"
  },
  {
    title: "The Social Chair",
    price: "$27.80/month or $278/year",
    link: "https://buy.stripe.com/aEUaIy7YJaOI5QkcMW",
    description: "The Chimes are nothing without the gathering. This tier is dedicated to the experience. You help subsidize the cost of events, like reunions or the Cherry Tree Massacre afterglow. You are ensuring that when we get together, we can afford to do it right.",
    cta: "Start the Party"
  },
  {
    title: "The Founder’s League",
    price: "$46/month or $460/year",
    link: "https://buy.stripe.com/aEUeYO2EpaOI0w04gv",
    description: "At this level, you aren’t just paying dues; you are subsidizing the future. You fund the archival work that keeps our history from fading.",
    cta: "Save the History"
  },
  {
    title: "The Good Fellow",
    price: "$100/month or $1,000/year",
    link: "https://buy.stripe.com/5kA17Y92N6ysguYbIY",
    description: "This is the bedrock of the Alumni Association. Your contribution carries the heavy lifting for our most ambitious projects, ensuring the Chimes legacy is secure for decades to come.",
    cta: "Lead the Way"
  }
];

// --- Components ---

const SectionHeader = ({ title, number }) => (
  <div className="flex items-baseline justify-between border-b border-[#041E42] pb-4 mb-12 fade-in-element">
    <h2 className="text-4xl md:text-6xl font-serif text-[#041E42]">{title}</h2>
    <span className="text-xs font-sans font-bold tracking-widest text-[#BBBCBC]">{number}</span>
  </div>
);

const HomeView = ({ navigateTo }) => (
    <>
      {/* Hero */}
      <div className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 border-b border-[#041E42]">
        <div className="max-w-[1920px] mx-auto w-full flex-grow flex flex-col justify-center relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-8 text-[#041E42] fade-in-element">
              TRADITION<br />
              <span className="italic font-light opacity-50">RESONANCE</span><br />
              LEGACY
            </h1>
          </div>
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-6 fade-in-element">
          <p className="max-w-md text-sm leading-relaxed text-[#63666A] font-medium font-sans">
            THE GEORGETOWN CHIMES ALUMNI ASSOCIATION PRESERVES THE HISTORY AND FUTURE OF ONE OF THE NATION’S OLDEST A CAPPELLA GROUPS.
          </p>
          <button onClick={() => navigateTo('agenda')} className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors">
            Discover Events 
            <span className="w-8 h-[1px] bg-[#041E42] group-hover:w-16 group-hover:bg-[#D50032] transition-all duration-500"></span>
          </button>
        </div>
      </div>

      {/* Featured Event Teaser */}
      <section className="py-24 px-6 md:px-12 border-b border-[#BBBCBC]">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start fade-in-element">
            <div className="md:w-1/3">
               <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] mb-4 block">NEXT GATHERING</span>
               <h3 className="text-3xl font-serif mb-4 text-[#041E42]">The Cherry Tree Massacre</h3>
               <p className="text-[#63666A] mb-8 max-w-sm">Experience the 80th annual celebration of song at Gaston Hall.</p>
               <button onClick={() => navigateTo('agenda')} className="text-xs font-bold tracking-[0.2em] border-b border-[#041E42] pb-1 uppercase text-[#041E42] hover:text-[#D50032] hover:border-[#D50032] transition-colors">View Agenda</button>
            </div>
            <div className="md:w-2/3 w-full aspect-video flex items-center justify-center overflow-hidden bg-[#E5E5E4]">
               {/* Cherry Tree Image */}
               <img 
                 src={IMG_CHERRY_TREE}
                 alt="The Cherry Tree Massacre" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>
    </>
);

const AgendaView = () => (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-24">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Agenda" number="2026" />
        <div className="flex flex-col border-t border-[#041E42] fade-in-element">
          {EVENTS_DATA.map((event) => (
            <div 
              key={event.id} 
              className="group border-b border-[#BBBCBC] py-12 hover:bg-[#E5E5E4] transition-colors duration-500 flex flex-col md:flex-row gap-8 md:gap-0 relative"
            >
              <div className="md:w-1/4 flex flex-col gap-2">
                <span className="text-3xl font-serif block text-[#041E42]">{event.date.split(' ')[0]} <span className="text-[#BBBCBC]">{event.date.split(' ')[1]}</span></span>
                <span className="text-[10px] tracking-widest text-[#BBBCBC] uppercase flex items-center gap-2">
                   <Clock size={10} /> {event.time}
                </span>
              </div>
              <div className="md:w-1/2 pr-12">
                <h3 className="text-4xl md:text-5xl font-serif mb-4 text-[#041E42] transition-all duration-500">
                  {event.title}
                </h3>
                <p className="text-[#63666A] leading-relaxed max-w-lg">{event.description}</p>
              </div>
              <div className="md:w-1/4 flex flex-col items-end justify-between">
                <span className="inline-block px-4 py-1 border border-[#041E42] text-[10px] font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:bg-[#041E42] group-hover:text-[#F4F4F3] transition-all duration-500 mb-4 md:mb-0">
                  {event.type}
                </span>
                
                {event.link && (
                    <a 
                      href={event.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="mt-4 px-6 py-3 bg-[#041E42] text-[#F4F4F3] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D50032] transition-colors"
                    >
                      Tickets / Info
                    </a>
                )}
                
                <div className="text-[10px] tracking-widest text-[#BBBCBC] uppercase flex items-center gap-2 mt-auto">
                   <MapPin size={10} /> {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);

const DiscographyView = ({ openAlbum }) => (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-24 bg-[#E5E5E4]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Discography" number="ARCHIVE" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#BBBCBC] border border-[#BBBCBC] mb-24 fade-in-element">
          {ALBUMS_DATA.map((album) => (
            <div 
              key={album.id} 
              onClick={() => openAlbum(album)}
              className="bg-[#F4F4F3] p-8 aspect-[4/5] flex flex-col justify-between group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-4 right-4 text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center gap-1 text-[#041E42]">
                VIEW <ArrowRight size={10} />
              </div>
              
              {album.badge && (
                <div className="absolute top-4 left-4 bg-[#041E42] text-[#F4F4F3] px-2 py-1 text-[8px] font-bold tracking-widest uppercase z-10">
                  {album.badge}
                </div>
              )}
              
              <div className={`w-full h-full absolute inset-0 ${album.cover} flex items-center justify-center opacity-0 group-hover:opacity-1 transition-opacity duration-700`}></div>

              <div className="mt-auto relative z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#BBBCBC] block mb-2">
                  {album.year}
                </span>
                <h3 className="font-serif text-2xl leading-none text-[#041E42] group-hover:text-[#D50032] transition-colors">
                  {album.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Albums Section */}
        <div className="border-t border-[#041E42] pt-12 flex flex-col md:flex-row gap-12 fade-in-element">
            <div className="md:w-1/3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] uppercase block mb-4">ADDITIONAL ALBUMS</span>
                <h3 className="text-3xl font-serif text-[#041E42]">Where are the rest of the albums?</h3>
            </div>
            <div className="md:w-2/3">
                <p className="text-[#63666A] text-lg leading-relaxed mb-8 max-w-2xl">
                    We are in the process of releasing the rest of our back catalogue onto streaming platforms. In many cases, this involves going back to the studio tapes, since they are of much higher quality compared to the vinyls. If needed, the digital transfers will then go through restoration and remastering. Finally, we need to obtain licenses for each song prior to commercial distribution.
                </p>
                <p className="text-[#BBBCBC] text-sm">
                    In the meantime, you can preview the rough transfers we have so far via the <a href="https://thechimes.notion.site" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 text-[#041E42] hover:text-[#D50032]">GleeManager archives on Notion</a>.
                </p>
            </div>
        </div>
      </div>
    </div>
);

const AlbumDetailView = ({ selectedAlbum, navigateTo }) => (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-24 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <button 
          onClick={() => navigateTo('discography')}
          className="mb-12 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 hover:text-[#D50032] transition-colors text-[#041E42] fade-in-element"
        >
          <ChevronLeft size={14} /> Back to Archive
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 fade-in-element">
          {/* Cover Art Area */}
          <div className="lg:w-1/3">
            <div className={`aspect-square w-full ${selectedAlbum?.cover || 'bg-[#E5E5E4]'} mb-8 flex items-center justify-center border border-[#E5E5E4]`}>
              <span className="font-serif italic text-[#BBBCBC]">Album Art</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-[#041E42] pb-4 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC]">RELEASED</span>
              <span className="text-lg font-serif text-[#041E42]">{selectedAlbum?.year}</span>
            </div>
            
            {selectedAlbum?.link && (
                <button 
                    onClick={() => window.open(selectedAlbum.link, '_blank')}
                    className="w-full py-4 bg-[#041E42] text-[#F4F4F3] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#63666A] transition-colors flex items-center justify-center gap-4 mb-4"
                >
                    <Play size={12} fill="currentColor" /> {selectedAlbum.title === "Desperate Chimes" ? "Pre-Order Vinyl" : "Stream Album"}
                </button>
            )}
            
            {selectedAlbum?.description && (
                <p className="text-sm font-sans text-[#63666A] mt-6 leading-relaxed">
                    {selectedAlbum.description}
                </p>
            )}

            {selectedAlbum?.dedication && (
                 <div className="mt-6 border-l-2 border-[#BBBCBC] pl-4">
                    <p className="text-xs text-[#63666A] uppercase tracking-widest font-bold mb-2">Dedication</p>
                    <p className="text-sm font-serif italic text-[#041E42]">{selectedAlbum.dedication}</p>
                 </div>
            )}

             {selectedAlbum?.highlights && (
                 <div className="mt-6 space-y-2 text-[#041E42]">
                    {selectedAlbum.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                            <Disc size={12} /> {h}
                        </div>
                    ))}
                 </div>
            )}
          </div>

          {/* Tracklist & Editorial Content */}
          <div className="lg:w-2/3">
            <h1 className="text-5xl md:text-7xl font-serif mb-12 text-[#041E42]">{selectedAlbum?.title}</h1>
            
            {selectedAlbum?.leadSingle && (
                <div className="bg-[#E5E5E4] p-6 mb-12 border border-[#BBBCBC]">
                    <span className="text-[10px] font-bold tracking-widest text-[#63666A] uppercase mb-2 block">Lead Single</span>
                    <h3 className="text-2xl font-serif text-[#041E42]">{selectedAlbum.leadSingle.title}</h3>
                    <p className="text-xs text-[#63666A] uppercase tracking-wider mt-1">{selectedAlbum.leadSingle.composer}</p>
                    {selectedAlbum.leadSingle.link && (
                        <a 
                            href={selectedAlbum.leadSingle.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:text-[#D50032] border-b border-[#041E42] pb-1"
                        >
                            Listen Now
                        </a>
                    )}
                </div>
            )}

            <div className="flex flex-col mb-24">
              <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] mb-6 block border-b border-[#041E42] pb-4">TRACKLIST</span>
              {selectedAlbum?.tracks.map((track, idx) => (
                <div key={idx} className="group flex items-center justify-between py-4 border-b border-[#E5E5E4] hover:bg-[#E5E5E4] px-4 -mx-4 transition-colors cursor-pointer text-[#041E42]">
                  <div className="flex items-baseline gap-8">
                    <span className="text-xs font-bold text-[#BBBCBC] w-4">{String(idx + 1).padStart(2, '0')}</span>
                    <div className="flex flex-col">
                        <span className="font-serif text-lg">{track.title}</span>
                        {track.composer && (
                             <span className="text-[10px] text-[#BBBCBC] font-sans uppercase tracking-widest mt-1">
                                Composer: <span className="text-[#63666A] font-bold">{track.composer}</span>
                             </span>
                        )}
                        {track.soloist && (
                             <span className="text-[10px] text-[#BBBCBC] font-sans uppercase tracking-widest mt-1">
                                Soloist: <span className="text-[#63666A] font-bold">{track.soloist}</span>
                             </span>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Liner Notes Section */}
            {selectedAlbum?.linerNotes && (
                <div className="mb-24">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] mb-12 block border-b border-[#041E42] pb-4">ALBUM NOTES</span>
                    <div className="space-y-16">
                        {selectedAlbum.linerNotes.map((note, idx) => (
                            <div key={idx}>
                                {note.author && <h4 className="font-serif text-2xl mb-4 italic text-[#041E42]">{note.author}</h4>}
                                <p className="text-[#63666A] leading-relaxed font-light text-lg">
                                    {note.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Credits Section */}
            {selectedAlbum?.credits && (
                <div className="mb-24">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] mb-12 block border-b border-[#041E42] pb-4">CREDITS</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {Object.entries(selectedAlbum.credits).map(([section, roles]) => (
                            <div key={section} className="col-span-2 md:col-span-1">
                                <h5 className="font-bold text-xs uppercase tracking-widest mb-6 text-[#041E42]">{section}</h5>
                                <ul className="space-y-6">
                                    {roles.map((role, idx) => (
                                        <li key={idx} className="text-sm">
                                            <span className="text-[#BBBCBC] block text-[10px] uppercase tracking-wider mb-2">{role.role}</span>
                                            <span className="font-serif text-lg leading-snug block text-[#041E42]">{role.name}</span>
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
                <div className="bg-[#E5E5E4] p-12 border border-[#BBBCBC]">
                      <h5 className="font-bold text-xs uppercase tracking-widest mb-8 text-[#041E42] text-center">Acknowledgements</h5>
                      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-[#63666A] font-serif italic text-center leading-relaxed">
                        {selectedAlbum.acknowledgements.map((name, i) => (
                            <span key={i}>{name}</span>
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
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-24 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Store" number="COLLECTION" />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 fade-in-element">
          {/* Editorial Copy */}
          <div className="lg:w-1/3">
             <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] uppercase block mb-6">Need a replacement tie?</span>
             <h3 className="text-4xl font-serif mb-8 italic text-[#041E42]">C’est une cravate.<br/>C’est un nœud papillon.</h3>
             <div className="text-[#63666A] text-lg leading-relaxed font-light space-y-6">
                <p>Since the Actives are in need of new ties, Nikolai has worked with Drew to produce 50 neckties and 20 bow ties. This allows us to not only fill Active tie needs for the foreseeable future, but also permanently stock ties for any Chime who needs one.</p>
                <p>Therefore, if you’ve lost your tie and need a replacement—or, let’s be honest, a refreshment—you can purchase one below.</p>
                <p>We’re also making bow ties, so if you’ve always wanted one of those or have misplaced yours, you can order them here as well.</p>
             </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Necktie Product */}
            <div className="group">
               <div className="bg-[#E5E5E4] aspect-[3/4] mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[#BBBCBC] font-serif italic text-3xl">Necktie Image</div>
                  <div className="absolute inset-0 bg-[#041E42]/0 group-hover:bg-[#041E42]/5 transition-colors duration-500"></div>
               </div>
               <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-serif text-[#041E42]">Necktie</h4>
                  <span className="text-xs font-bold tracking-widest text-[#BBBCBC]">£45.00</span>
               </div>
               <p className="text-sm text-[#63666A] mb-6 font-light">Handmade in the United Kingdom of 100% silk.</p>
               <a 
                 href="https://buy.stripe.com/14k6si2EpcWQemQ3co"
                 target="_blank"
                 rel="noreferrer"
                 className="block w-full text-center py-4 border border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors"
                >
                 Order Now
               </a>
            </div>

             {/* Bow Tie Product */}
             <div className="group">
               <div className="bg-[#E5E5E4] aspect-[3/4] mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[#BBBCBC] font-serif italic text-3xl">Bow Tie Image</div>
                  <div className="absolute inset-0 bg-[#041E42]/0 group-hover:bg-[#041E42]/5 transition-colors duration-500"></div>
               </div>
               <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-serif text-[#041E42]">Bow Tie</h4>
                  <span className="text-xs font-bold tracking-widest text-[#BBBCBC]">£45.00</span>
               </div>
               <p className="text-sm text-[#63666A] mb-6 font-light">Handmade in the United Kingdom of 100% silk.</p>
               <a 
                 href="https://buy.stripe.com/eVacQGceZ2icceI28l"
                 target="_blank"
                 rel="noreferrer"
                 className="block w-full text-center py-4 border border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase text-[#041E42] hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors"
                >
                 Order Now
               </a>
            </div>

          </div>
        </div>

      </div>
    </div>
);

const BackstageView = () => (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-24 bg-[#F4F4F3]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Backstage" number="INTERNAL ACCESS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 fade-in-element">
            {/* GleeManager Section */}
            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] uppercase block mb-6 flex items-center gap-2">
                   <Database size={12} /> Database
                </span>
                <h3 className="text-4xl font-serif mb-6 text-[#041E42]">GleeManager on Notion</h3>
                <p className="text-[#63666A] text-lg leading-relaxed font-light mb-8">
                    Looking for The Database? Looking for Part Tapes? Looking for an album not yet available on Spotify? Visit <a href="https://thechimes.notion.site" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 text-[#041E42] hover:text-[#D50032]">thechimes.notion.site</a> to access GleeManager on Notion, our database of databases.
                </p>
                <div className="flex flex-col gap-4">
                     <a href="https://thechimes.notion.site" target="_blank" rel="noreferrer" className="w-fit px-8 py-4 border border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] text-[#041E42] transition-colors flex items-center gap-3">
                        Launch Notion <ExternalLink size={14} />
                     </a>
                     <a href="https://drive.google.com/uc?export=download&id=1s9YI3af7Y17OpptSKo4LRAsM15QCyOlp" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors flex items-center gap-2 text-[#041E42]">
                        Download Instructions (PDF) <ArrowRight size={14} />
                     </a>
                </div>
            </div>

            {/* Slack Section */}
            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] uppercase block mb-6 flex items-center gap-2">
                    <MessageSquare size={12} /> Messaging
                </span>
                <h3 className="text-4xl font-serif mb-6 text-[#041E42]">Slack</h3>
                <p className="text-[#63666A] text-lg leading-relaxed font-light mb-6">
                    To keep up with the latest developments, please visit <a href="https://thechimes.slack.com" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 text-[#041E42] hover:text-[#D50032]">thechimes.slack.com</a> to access our internal instant messaging platform.
                </p>
                <p className="text-[#63666A] text-sm leading-relaxed font-light mb-8">
                    In addition to the General and Actives Hotline channels, there are also hobby-based channels you can tune into, such as Basketball, Fishing, and Wine.
                </p>
                <div className="flex flex-col gap-4">
                     <a href="https://thechimes.slack.com" target="_blank" rel="noreferrer" className="w-fit px-8 py-4 border border-[#041E42] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] text-[#041E42] transition-colors flex items-center gap-3">
                        Launch Slack <ExternalLink size={14} />
                     </a>
                     <a href="https://drive.google.com/uc?export=download&id=1AeangbSpDCNOv-sHq5yqaz5Djk0YmesR" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors flex items-center gap-2 text-[#041E42]">
                        Download Instructions (PDF) <ArrowRight size={14} />
                     </a>
                </div>
            </div>
        </div>
      </div>
    </div>
);

const PhilanthropyView = () => (
    <div className="min-h-screen bg-[#F4F4F3] text-[#041E42] pt-32 px-6 md:px-12 pb-24">
       <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Fund the Brotherhood" number="Two ways to keep the Chimes singing" />
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24 fade-in-element">
            <div className="md:w-1/3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] uppercase block mb-4">01. The Donor Guild</span>
                <p className="text-[#63666A] text-xs leading-relaxed">
                   Please Note: Contributions to the Georgetown Chimes Alumni Association, a 501(c)(7) organization, are <span className="text-[#041E42]">not deductible</span> for tax purposes. They are, however, essential for the preservation of the brotherhood.
                </p>
            </div>
            <div className="md:w-2/3">
                <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight text-[#041E42]">
                    The Donor Guild is the steady heartbeat that allows the Alumni Association to operate with confidence and consistency. 
                    <span className="text-[#BBBCBC]"> These contributions are the lifeblood of our social calendar.</span>
                </h3>
                <p className="text-lg text-[#63666A] font-light max-w-2xl">
                    By subscribing, it ensures that when you return, the tradition is waiting for you: the tables are piled high with Wisey’s, the tankards are full, and the door is open.
                </p>
            </div>
        </div>

        {/* Guild Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#BBBCBC] border border-[#BBBCBC] mb-32 fade-in-element">
            {DONOR_TIERS.map((tier, idx) => (
                <div key={idx} className="bg-[#E5E5E4] p-8 flex flex-col justify-between min-h-[400px] hover:bg-[#F4F4F3] transition-colors duration-500 group">
                    <div>
                        <h4 className="text-2xl font-serif mb-2 text-[#041E42]">{tier.title}</h4>
                        <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] block mb-6 uppercase">{tier.price}</span>
                        <p className="text-[#63666A] text-sm leading-relaxed mb-8 font-light">
                            {tier.description}
                        </p>
                    </div>
                    <a 
                        href={tier.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full block text-center py-4 border border-[#041E42] text-[#041E42] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#041E42] hover:text-[#F4F4F3] transition-colors"
                    >
                        {tier.cta}
                    </a>
                </div>
            ))}
        </div>

        {/* One Time Gift */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-[#041E42] pt-24 fade-in-element">
             <div className="md:w-1/3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#BBBCBC] uppercase block mb-4">02. One-Time Gift</span>
                <p className="text-[#63666A] text-xs leading-relaxed">
                   Please Note: Contributions to the Georgetown Chimes Alumni Association, a 501(c)(7) organization, are <span className="text-[#041E42]">not deductible</span> for tax purposes.
                </p>
            </div>
            <div className="md:w-2/3">
                <h3 className="text-4xl font-serif mb-8 text-[#041E42]">Upgrade the ride.</h3>
                <p className="text-[#63666A] text-lg leading-relaxed mb-8 font-light max-w-2xl">
                    Already a member? Or looking to make a major impact? If the Donor Guild keeps the engine running, One-Time Gifts upgrade the ride. Your contributions allow us to hold Cadillac reunions at Chevrolet rates. They are the catalyst that brings our history alive—whether it’s capturing a studio-quality recording of Chimes Night in Providence or bringing “Under the Tree” to streaming services.
                </p>
                <p className="text-[#041E42] text-lg font-serif italic mb-12">
                    Help us bridge the gap between maintaining a tradition and making history.
                </p>
                <a 
                    href="https://donate.stripe.com/fZe3g6frb6ys92wfZ4"
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block px-12 py-5 bg-[#041E42] text-[#F4F4F3] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#63666A] transition-colors"
                >
                    Make a Contribution
                </a>
            </div>
        </div>

        {/* Management */}
        <div className="mt-32 pt-12 border-t border-[#BBBCBC]/20 text-center fade-in-element">
            <h4 className="font-serif text-2xl mb-4 text-[#041E42]">Manage Guild Membership</h4>
            <p className="text-[#63666A] text-sm">
                You can manage your Guild membership through the <a href="https://billing.stripe.com/login/eVa00CdRM41u2ZibII" target="_blank" rel="noreferrer" className="text-[#041E42] underline decoration-1 underline-offset-4 hover:text-[#D50032]">Stripe portal</a> or email <a href="mailto:treasurer@alumni.georgetownchimes.org" className="text-[#041E42] underline decoration-1 underline-offset-4 hover:text-[#D50032]">treasurer@alumni.georgetownchimes.org</a>.
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

  const NavLink = ({ page, children, mobile }) => (
    <button
      onClick={() => navigateTo(page)}
      className={`${
        mobile 
          ? 'block w-full text-left text-3xl font-serif py-4 border-b border-[#BBBCBC] text-[#041E42]' 
          : `text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${activePage === page ? 'text-[#041E42] border-b border-[#041E42] pb-1' : 'text-[#BBBCBC] hover:text-[#D50032]'}`
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="font-sans text-[#041E42] bg-[#F4F4F3]">
      {/* Global CSS Overrides to match Tailwind Config behavior */}
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
        /* Custom Font Mappings from tailwind.config.js */
        .font-serif {
          font-family: "adobe-caslon-pro", "Cormorant Garamond", serif !important;
        }
        .font-sans {
          font-family: "neue-haas-unica", "Montserrat", sans-serif !important;
        }
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-element {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>

      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ease-out border-b ${
          scrolled || isMenuOpen 
            ? 'bg-[#F4F4F3] border-[#041E42] py-4' 
            : 'bg-transparent border-transparent py-8'
        } ${activePage === 'philanthropy' && !scrolled && !isMenuOpen ? 'bg-[#F4F4F3] border-[#041E42] text-[#041E42]' : ''}`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className={`cursor-pointer z-50`}
              onClick={() => navigateTo('home')}
            >
              <img 
                src={IMG_LOGO}
                alt="Chimes Wordmark" 
                className={`h-10 w-auto transition-all duration-500 ${
                  isMenuOpen ? '' : (activePage === 'philanthropy' && !scrolled ? '' : '')
                }`}
              />
            </div>
            
            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center gap-12 ${activePage === 'philanthropy' && !scrolled ? 'text-[#041E42]' : 'text-[#041E42]'}`}>
              <NavLink page="agenda">Agenda</NavLink>
              <NavLink page="discography">Discography</NavLink>
              <NavLink page="philanthropy">Philanthropy</NavLink>
              <button 
                onClick={() => navigateTo('store')}
                className={`text-xs font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors duration-500 flex items-center gap-2 ${activePage === 'philanthropy' && !scrolled ? 'text-[#041E42] hover:text-[#D50032]' : ''}`}
              >
                Store <ExternalLink size={12} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden z-50 p-2 ${isMenuOpen ? 'text-[#041E42]' : (activePage === 'philanthropy' && !scrolled ? 'text-[#041E42]' : 'text-[#041E42]')}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div className={`fixed inset-0 bg-[#F4F4F3] z-40 transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="h-full flex flex-col justify-center px-6 text-[#041E42]">
            <NavLink page="agenda" mobile>Agenda</NavLink>
            <NavLink page="discography" mobile>Discography</NavLink>
            <NavLink page="philanthropy" mobile>Philanthropy</NavLink>
            <NavLink page="store" mobile>Store</NavLink>
            <NavLink page="backstage" mobile>Backstage</NavLink>
          </div>
        </div>
      </nav>

      <main className="fade-in-element">
        {activePage === 'home' && <HomeView navigateTo={navigateTo} />}
        {activePage === 'agenda' && <AgendaView />}
        {activePage === 'discography' && <DiscographyView openAlbum={openAlbum} />}
        {activePage === 'album_detail' && <AlbumDetailView selectedAlbum={selectedAlbum} navigateTo={navigateTo} />}
        {activePage === 'philanthropy' && <PhilanthropyView />}
        {activePage === 'store' && <StoreView />}
        {activePage === 'backstage' && <BackstageView />}
      </main>

      {/* Footer */}
      <footer className={`${activePage === 'philanthropy' ? 'bg-[#041E42] text-[#F4F4F3] border-[#041E42]' : 'bg-[#F4F4F3] text-[#041E42] border-[#041E42]'} py-20 px-6 md:px-12 border-t transition-colors duration-500`}>
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/3">
            <img 
              src={IMG_LOGO} 
              alt="Chimes Wordmark" 
              className={`h-10 w-auto mb-6 ${activePage === 'philanthropy' ? 'brightness-0 invert' : ''}`} 
            />
            <p className="text-xs opacity-50 leading-relaxed uppercase tracking-wider max-w-xs">
              Georgetown Chimes Alumni Association, Inc.<br/>
              A 501(c)(7) Corporation
            </p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] mb-4 block opacity-50">Events</span>
              <button onClick={() => navigateTo('agenda')} className="text-left text-sm hover:underline decoration-1 underline-offset-4 hover:text-[#D50032]">The Cherry Tree Massacre</button>
              <button onClick={() => navigateTo('agenda')} className="text-left text-sm hover:underline decoration-1 underline-offset-4 hover:text-[#D50032]">John Carroll</button>
              <button onClick={() => navigateTo('agenda')} className="text-left text-sm hover:underline decoration-1 underline-offset-4 hover:text-[#D50032]">Puerto Rico</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] mb-4 block opacity-50">Discover</span>
              <button onClick={() => navigateTo('discography')} className="text-left text-sm hover:underline decoration-1 underline-offset-4 hover:text-[#D50032]">Albums</button>
              <button onClick={() => navigateTo('philanthropy')} className="text-left text-sm hover:underline decoration-1 underline-offset-4 hover:text-[#D50032]">Fund the Brotherhood</button>
              <button onClick={() => navigateTo('store')} className="text-left text-sm hover:underline decoration-1 underline-offset-4 hover:text-[#D50032]">Store</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-[0.2em] mb-4 block opacity-50">Members</span>
              <button onClick={() => navigateTo('backstage')} className="text-left text-sm hover:underline decoration-1 underline-offset-4 hover:text-[#D50032]">Backstage</button>
            </div>
            <div className="flex flex-col gap-4 ml-auto">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 group hover:text-[#D50032]"
              >
                Back to Top <ChevronDown className="rotate-180 group-hover:-translate-y-1 transition-transform duration-500" size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className={`max-w-[1920px] mx-auto mt-20 pt-8 border-t ${activePage === 'philanthropy' ? 'border-[#BBBCBC]/20' : 'border-[#BBBCBC]'} flex flex-col md:flex-row justify-between items-center text-[10px] opacity-40 uppercase tracking-widest`}>
          <span>© {new Date().getFullYear()} Georgetown Chimes Alumni Association, Inc.</span>
          <span className="mt-2 md:mt-0">Design: Canvas</span>
        </div>
      </footer>
    </div>
  );
};