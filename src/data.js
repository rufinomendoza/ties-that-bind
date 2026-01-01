// --- Local Imports (Uncomment for Production) ---
import IMG_CTM_BOND from './assets/ctm-bond.jpeg';
import IMG_PUERTO_RICO from './assets/nils-huenerfuerst-SrYs4XxTRfk-unsplash.jpg';
import IMG_NECKTIE from './assets/necktie.jpg';
import IMG_BOWTIE from './assets/bowtie.jpg';

// --- Album Covers ---
import IMG_DCDM from './assets/dcdm.jpeg';
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
export const EVENTS_DATA = [
  { 
    id: 1, 
    slug: "cherry-tree-seniors",
    title: "Cherry Tree Massacre I", 
    date: "February 6, 2026", 
    time: "7:00 p.m.",
    location: "Gaston Hall", 
    type: "Senior Parents & Families Weekend",
    priceInfo: "General Admission $26.04",
    link: "https://buytickets.at/chimes/1998396/r/gcaa-site",
    description: [
      "For 52 years, the Cherry Tree Massacre has stood as one of Georgetown’s most enduring musical traditions. What began as a fundraiser to pay off a bar tab has evolved into a showcase of premier a cappella talent.",
      "Join the Chimes as we return to the stage of Gaston Hall for a night of history, harmony, and celebration during Senior Parents & Families Weekend 2026.",
      "Doors open at 6:30."
      ],
    guestGroups: [
        "The GraceNotes",
        "The Phantoms",
        "Superfood",
        "The Capitol Gs",
        "The Virginia Belles",
        "CUA Take Note",
        "AU Treble in Paradise"
    ],
    image: IMG_CTM_BOND 
  },
  { 
    id: 2, 
    slug: "cherry-tree-alumni",
    title: "Cherry Tree Massacre II", 
    date: "February 21, 2026", 
    time: "7:00 p.m.",
    location: "Gaston Hall", 
    type: "Alumni Weekend", // kept for listing, overridden by eyebrow in detail view
    priceInfo: "General Admission $26.04",
    actions: [
        { label: "Buy Concert Tickets", link: "https://buytickets.at/chimes/1998443/r/gcaa-site", primary: true},
    ],
    description: [
        "For 52 years, the Cherry Tree Massacre has stood as one of Georgetown’s most enduring musical traditions. What began as a fundraiser to pay off a bar tab has evolved into a showcase of premier a cappella talent.",
        "Join the Chimes as we return to the stage of Gaston Hall for a night of history, harmony, and celebration during Alumni Weekend 2026.",
        "Doors open at 6:30."
    ],
    guestGroups: [
        "The Saxatones",
        "The GraceNotes",
        "GU Chamber Singers",
        "GW Troubadours",
        "UVA Sil’hooettes",
        "UVA AcHOOstics",
        "AU Pitches be Trippin’",
        "CUA Redline"
    ],
    schedule: [
        {
            title: "Welcome Reception & Afterglow",
            time: "To Be Announced",
        },
    ],
    image: IMG_CHERRY_TREE
  },
  { 
    id: 3, 
    slug: "john-carroll-weekend",
    title: "John Carroll Weekend", 
    date: "April 16–19, 2026", 
    time: "Four Days of Celebration",
    location: "Puerto Rico", 
    type: "Puerto Rico",
        actions: [
        { label: "Chimes Survey", link: "https://www.surveymonkey.com/r/BJ93CBF", primary: true },
        { label: "More Information", link: "https://jcw.georgetown.edu/", primary: false }
    ],
    link: "",
    description: [
        "Experience an unforgettable Caribbean gathering April 16–19 as we honor Federico Stubbe #177 during John Carroll Weekend 2026.",
        "Set against the vibrant backdrop of Puerto Rico, this weekend blends cultural immersion with exceptional celebration, culminating in the John Carroll Awards Gala. Please refer to Slack announcements or your email to secure your accommodations within our private block."
      ],
      schedule: [
        {
            title: "Welcome Reception",
            description: "Commence the weekend with an evening of historical elegance at the Antiguo Casino, set within the timeless colonial architecture of Old San Juan, the oldest city in the Western Hemisphere.",
            time: "Thursday Evening",
            location: "Antiguo Casino de Puerto Rico"
        },
        {
            title: "Chimes Night",
            description: "Immediately following the reception, adjourn to Arena Medalla for a vibrant celebration blending spirited camaraderie with the distinctive energy of the Chimes.",
            time: "Thursday Night",
            location: "Arena Medalla"
        },
        {
            title: "A Day of Leisure",
            description: "Immerse yourself in a day of relaxation at the legendary Dorado Beach. Enjoy championship Robert Trent Jones golf courses, seven miles of scenic nature trails, and pristine coastlines.",
            time: "Friday",
            location: "Dorado Beach"
        },
        {
            title: "Private Rum Tasting",
            description: "An exclusive tasting journey showcasing the finest heritage spirits of Puerto Rico. (Event confirmation contingent upon interest.)",
            time: "Friday",
            location: "To Be Announced"
        },
        {
            title: "The John Carroll Awards Gala",
            description: "The weekend’s premier event. Join us at the Coca-Cola Music Hall to honor Federico Stubbe #177. The ceremony will be followed by a spectacular after-party in the heart of the plaza.",
            time: "Saturday",
            location: "Coca-Cola Music Hall\nDistrito T-Mobile"
        }

    ],
      image: IMG_PUERTO_RICO
  },
];

export const ALBUMS_DATA = [
  { 
    id: 1, 
    slug: "desperate-chimes-desperate-measures",
    title: "Desperate Chimes, Desperate Measures", 
    year: "2026", 
    cover: "bg-[#2A3B55]", 
    image: IMG_DCDM,
    badge: "PRE-ORDER",
    link: "https://bio.to/ChimesAA",
    ctaText: "Vinyl Early Access",
    description: "Experience the Georgetown Chimes in uncompromising high fidelity. Arriving later this year, Desperate Chimes, Desperate Measures presents the group’s latest arrangements on a premium, 180g double LP. Stream the lead single now and join the waitlist for priority access to the First Pressing.",
    leadSingle: { 
      title: "And So It Goes", 
      composer: "Billy Joel (arr. Bob Chilcott)",
      soloist: "Aidan Metz",
      link: "https://thechimes.lnk.to/AndSoItGoesAA"
    },
    credits: {
      "Production": [
        { role: "Producer", name: "The Georgetown Chimes" },
        { role: "Executive Producer", name: "Michael Luckey" },
        { role: "Musical Direction", name: "Christian Kim" },
        { role: "Artistic Direction", name: "Aidan Metz" },
        { role: "Co-Producers", name: "Robert Della Bernarda, Ben Fosnocht, Aidan Metz, Arjun Singh, Youngsung Sim, and Rufino A. Mendoza II" },
        { role: "Album Sequencing", name: "Aidan Metz" }
      ],
      "Engineering": [
        { role: "Recording Engineer", name: "Blaine Misner at Cue Recording, Falls Church, VA" },
        { role: "Mixing", name: "Blaine Misner at Cue Recording" },
        { role: "Editing", name: "Blaine Misner at Cue Recording" },
        { role: "Mastering", name: "Geoff Pesche at Abbey Road Studios" }
      ],
      "Art & Design": [
        { role: "Cover Art", name: "Caleb Morris" },
        { role: "Art Direction & Design", name: "Rufino A. Mendoza II" }
      ],
      "Administration": [
        { role: "Production Coordinators", name: "Ben Fosnocht, Robert Della Bernarda, and Rufino A. Mendoza II" },
        { role: "Licensing & Clearance", name: "Easy Song" },
        { role: "Licensing Coordinator", name: "Robert Della Bernarda" },
        { role: "Liner Notes & Metadata", name: "Rufino A. Mendoza II and Robert Della Bernarda" }
      ]
    },
    tracks: [
      { title: "And So It Goes", composer: "Billy Joel (arr. Bob Chilcott)", soloist: "Aidan Metz" },
    ]
  },
  { 
    id: 2, 
    slug: "partners-in-chime",
    title: "Partners in Chime", 
    year: "2016", 
    cover: "bg-[#4A5B75]",
    image: IMG_PARTNERS,
    link: "https://thechimes.lnk.to/partners-in-chimeAA",
    tracks: [
      { title: "We Meet (Live)" }, 
      { title: "Little Bitty Pretty One", soloist: "Matthew Demartini" },
      { title: "Friends for Now", soloist: "Peter Fanone" },
      { title: "Wayfaring Stranger", soloist: "Jaewoo Kim" },
      { title: "Bridge Over Troubled Water", soloist: "Junho Lee" },
      { title: "It’s a Beautiful Day (Live)", soloist: "Connor Joseph" },
      { title: "Telephone Line", soloist: "Peter Fanone" },
      { title: "Runaways · When We Were Young", soloist:"Peter Fanone, Jeff Kemp" },
      { title: "How Deep Is Your Love? (Live)", soloist: "Charlie Plissner"},
      { title: "Sixteen Tons", soloist: "Michael Luckey" },
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
    slug: "three-stripes",
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
      { title: "Moondance" },
      { title: "A Beatles Medley: All You Need Is Love · Blackbird · All My Loving · Here Comes the Sun · Hey Jude" },
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
    slug: "36th-and-prospect",
    title: "36th & Prospect", 
    year: "2009", 
    cover: "bg-[#8A9BB5]",
    image: IMG_PROSPECT,
    link: "https://thechimes.lnk.to/36th-prospectAA",
    linerNotes: [
      {
        author: "James P.M. Walsh, S.J. #119",
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
      { title: "We Meet", composer: "Traditional", group:"2006 Group"},
      { title: "Eight Days a Week", composer: "The Beatles (arr. Deke Sharon)", soloist: "Steve Alleva #195", group:"2004 Group" },
      { title: "Soul to Soul", composer: "The Beatles (arr. Deke Sharon)", soloist: "Justin Douds #202", group:"2007 Group" },
      { title: "In the Still of the Night", composer: "The Five Satins (arr. Boyz II Men)", soloist: "Tom Nicholas #203", group:"2006 Group" },
      { title: "Just a Gigolo", composer: "Louis Prima", soloist: "Jeff Civillico #193", group:"2004 Group" },
      { title: "Something Tells Me", composer: "Herman’s Hermits (arr. Jeff Gordon #192)", soloist: "Jeff Carlson #206", group:"2006 Group" },
      { title: "Glory of Love", composer: "Sam Sanders #204", soloist: "Sam Sanders #204", group:"2007 Group" },
      { title: "Cartoon Theme Medley: Duck Tales · Fraggle Rock · Chip ’n’ Dale Rescue Rangers · Inspector Gadget · Gummi Bears", composer: "Various (arr. Gerard Yun)", soloist: "Various", group:"2005 Group" },
      { title: "Maggie", composer: "Traditional Barbershop", group:"2007 Group" },
      { title: "King of Spain", composer: "Moxy Fruvous", soloist: "Jeff Civillico #193", group:"2004 Group" },
      { title: "Come Go with Me", composer: "The Del-Vikings (arr. Jeff Gordon #192)", soloist: "Jeff Gordon #192", group:"2004 Group" },
      { title: "Bright Morning Stars", composer: "The King’s Singers (arr. Stanley Brothers)", soloist: "Father J.P.M. Walsh #119", group:"2004 Group" },
      { title: "Runaway", composer: "Del Shannon (arr. Deke Sharon)", soloist: "Sam Sanders #204", group:"2005 Group" },
      { title: "Change the World", composer: "Eric Clapton (arr. Mark Patton #166)", soloist: "Eddie Keels #198", group:"2006 Group" },
      { title: "Up the Ladder", composer: "The Supremes (arr. Jeff Carlson #206 & Eddie Keels #198)", soloist: "Justin Douds #202", group:"2007 Group" },
      { title: "King of Wishful Thinking", composer: "Go West (arr. Deke Sharon)", soloist: "Pat McKegney #199", group:"2006 Group" },
      { title: "Georgetown University Fight Song", composer: "The Georgetown Chimes", group:"2006 Group" },
      { title: "My Comrades",composer: "Traditional",  soloist: "Eddie Keels #198", group:"2006 Group" }
    ]
  },
  { 
    id: 5, 
    slug: "battle-gear",
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
      { title: "We Meet", composer: "Traditional" },
      { title: "I’ve Just Seen a Face", composer: "John Lennon/Paul McCartney (arr. Evan Seiler ’02)", soloist: "Ryan Ramagosa ’03" },
      { title: "Peaceful Easy Feeling", composer: "Jack Tempchin (arr. Jeff Gordon ’04)", soloist: "Dan Phillips ’03" },
      { title: "Apeman", composer: "Ray Davies (arr. Andy Neustaetter ’02)", soloist: "Andy Neustaetter ’02" },
      { title: "Tempted", composer: "Chris Difford/Glenn Tilbrook (arr. Nick Amatuzzi ’00)", soloist: "Nick Giannotti ’02",},
      { title: "Danny Boy", composer: "Traditional (arr. Jay Spadone)" },
      { title: "I’m Beginning to See the Light", composer: "Duke Ellington (arr. Andrew Cranin)" },
      { title: "Just You, Just Me", composer: "Raymond Klarges/Jesse Greer (arr. Sean Altman/Elliott Kerman; bass line by Barry Carl)", soloist: "O’Brien (Bass), Phillips (Baritone), Gordon (Lead), Ramagosa (Tenor)" },
      { title: "Prodigal Son", composer: "Luke 15:11–32 (arr. Nashville Bluegrass Band)" },
      { title: "Kiss Him Goodbye", composer: "Dale Frashuer/Gary Decarlo/Paul Leko (arr. Bill Henderson/The Nylons)", soloist: "Ryan Ramagosa ’03" },
      { title: "They Can’t Take That Away from Me", composer: "George Gershwin/Ira Gershwin (arr. Sean Collins ’83)", soloist: "Evan Seiler ’02" },
      { title: "Crazy Little Thing Called Love", composer: "Freddie Mercury (arr. Jeff Gordon ’04)", soloist: "Jeff Gordon ’04" },
      { title: "Poor Heart", composer: "Michael Gordon (arr. FRED)", soloist: "Quartet: Beaton (Bass), Seiler (Baritone), Giannotti (Lead), Neustaetter (Tenor)" },
      { title: "California Dreamin’", composer: "John and Michelle Phillips (arr. Mike Taylor)" },
      { title: "Sixty Minute Man", composer: "by: William “Billy” Ward, a.p.b. the Persuasions and Rockapella", soloist: "Sean O’Brien ’04" },
      { title: "Jet Airliner", composer: "Paul Pena (arr. Evan Seiler ’02)", soloist: "Nick Giannotti ’02" },
      { title: "When I’m 64", composer: "John Lennon/Paul McCartney (arr. Andrew Cranin)", soloist: "Ryan Ramagosa ’03" },
      { title: "Georgetown University Fight Song", composer: "Traditional" },
      { title: "My Comrades", composer: "Traditional" }
    ]
  },
  { 
    id: 6, 
    slug: "parsley-sage-rosemary-chime",
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
      { title: "We Meet" },
      { title: "All Night Long", composer: "Richie (arr. Ryan)", soloist: "Giannotti" },
      { title: "Donne", composer: "Zuchero, a.p.b. Neri Per Caso (arr. Patton ’97)", soloist: "Pritchard & Stubbe" },
      { title: "Another Saturday Night", composer: "Cooke (arr. Lockart)", soloist: "Bedoya" },
      { title: "My Love Is Like a Red, Red Rose", composer: "Traditional (arr. King’s Singers)", soloist: "Kay, Coslov, and Hoy" },
      { title: "Soul to Soul", composer: "Carter / Nevada", soloist: "Patel" },
      { title: "All of Me (Live)", composer: "Simmons & Marks (arr. Laird, Patton)", soloist: "Stubbe" },
      { title: "Running to Stand Still (Live)", composer: "Bono (arr. Hall)", soloist: "Pritchard" },
      { title: "Loch Lomond", composer: "Traditional (arr. Mattimore ’92)", soloist: "Kay" },
      { title: "Kiss the Brown Eyed Girl", composer: "Menkin & Ashman · Morrison (arr. Amatuzzi)", soloist: "Amatuzzi & Neustaetter" },
      { title: "Medley: Just a Gigolo · I Ain’t Got Nobody", composer: "Casucci & Caesar · Williams & Graham (arr. Manassee)", soloist: "Pritchard" },
      { title: "And So It Goes", composer: "Joel (arr. King’s Singers", soloist: "Walsh" },
      { title: "Hold Me Tight", composer: "Rand (’86)", soloist: "Stubbe" },
      { title: "Don’t Blame Me", composer: "Traditional, a.p.b. Boston Common" },
      { title: "Viva La Mamma", composer: "a.p.b. Neri Per Caso (arr. Patton ’97)" },
      { title: "The Georgetown University Fight Song" },
      { title: "My Comrades" }
    ]
  },
  { 
    id: 7, 
    slug: "let-the-good-chimes-roll",
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
      { title: "We Meet (Live)", composer: "Traditional" },
      { title: "L.O.V.E.", composer: "B. Kaempfert/M. Gabler (arr. Patton ’97)", soloist: "Robards ’97" },
      { title: "Operator", composer: "Spivery (arr. Collins ’83)", soloist: "Lemley ’97" },
      { title: "Loch Lomond", composer: "Traditional (arr. Mattimore ’92)", soloist: "Laird ’96" },
      { title: "Every Little Kiss", composer: "Hornsby (arr. Lemley ’97, based on Prindle/Amherst Zumbyes)", soloist: "Hillenbrand ’97" },
      { title: "Bring Him Home", composer: "Webber (arr. Mattimore ’92)", soloist: "Patel ’98" },
      { title: "Naturally (Live)", composer: "Lewis (arr. Collins ’83)", soloist: "O’Brien ’95" },
      { title: "Qui Belles Amours A", composer: "Josquin des Prez" },
      { title: "Georgia on My Mind", composer: "Gorrell/Carmichael (arr. Patton ’97)", soloist: "Patton" },
      { title: "Since I Fell for You", composer: "Johnson (arr. Grannis ’85)", soloist: "Laird" },
      { title: "Danny Boy", composer: "Traditional (arr. Patton ’97, based on King’s Singers)", soloist: "Glaser ’96" },
      { title: "What’ll I Do", soloist: "Hillenbrand" },
      { title: "Shape of My Heart (Live)", composer: "Sting (arr. Patton ’97)", soloist: "Robards" },
      { title: "And So It Goes", composer: "Joel (arr. King’s Singers)", soloist: "Glaser" },
      { title: "All of Me", composer: "S. Simons/G. Marks (arr. Laird/Patton, based on Prindle/Amherst Zumbyes)", soloist: "Laird" },
      { title: "Some Folks’ Lives Roll Easy", composer: "Simon (arr. Patton ’97)", soloist: "Lemley, Patel" },
      { title: "MLK", composer: "Evans, Hewson, Clayton, Mullen Jr. (arr. Hall)", soloist: "Hillenbrand" },
      { title: "Zombie Jamboree (Live)", composer: "Mauge (arr. Sharon/Raugh)", soloist: "Klein ’97" },
      { title: "Georgetown University Fight Song", composer: "Georgetown Traditional" },
      { title: "My Comrades", composer: "Traditional" }
    ]
  },
  { 
    id: 8, 
    slug: "hoya-saxa",
    title: "Hoya Saxa", 
    year: "1984", 
    cover: "bg-[#D8DDE6]", 
    image: IMG_HOYA_SAXA,
    link: "https://thechimes.lnk.to/hoya-saxaAA",
    dedication: "This album is dedicated to three groups: our alumni Chimes, the Georgetown Hoyas, and those in France sans clue.",
    linerNotes: [
        {
            author: "Lie Down, Forever, Lie Down",
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
      { title: "We Meet" },
      { title: "I’ve Been Feelin’ Blue" },
      { title: "Somebody Loves Me", composer: "arr. Sean Collins", soloist: "Sean Collins SFS ’83" },
      { title: "It’s A Good Day" },
      { title: "I’m Gonna Sit Right Down and Write Myself a Letter", soloist: "Sean Collins" },
      { title: "Great Historical Bum", soloist: "Steve Mohyla SBA ’79" },
      { title: "Sh-Boom (Life Could Be a Dream)", composer: "arr. Sean Collins", soloist: "Sean Collins" },
      { title: "Temptation", soloist: "Kevin Laborde SBA ’78 and Ed Robinson CAS ’74" },
      { title: "Georgetown Fight Song", soloist: "Tim Naughton SBA ’77" },
      { title: "Good Fellow", soloist: "Tim Naughton SBA ’77" },
      { title: "Who Put The Bomp (In The Bomp, Bomp, Bomp)", composer: "arr. Mark Grannis", soloist: "Kevin O’Brien CAS ’65 and Mark Grannis CAS ’85" },
      { title: "So Much in Love", composer: "arr. Mark Grannis", soloist: "Kevin O’Brien CAS ’65" },
      { title: "Chattanooga Shoe Shine Boy", soloist: "Sean Collins" },
      { title: "Ten Feet Off the Ground" },
      { title: "I Got Rhythm", soloist: "Sean Collins", composer: "arr. Mark Grannis" },
      { title: "Come Go With Me", composer: "arr. Mark Grannis", soloist: "Mark Grannis" },
      { title: "St. Louis Blues", soloist: "David J. Walsh CAS ’58" },
      { title: "At the Moving Picture Ball" },
      { title: "Sons of Georgetown" },
      { title: "Yes Sir, That’s My Baby" },
      { title: "My Comrades", soloist: "George Peacock CAS ’84" },
      { title: "Wazoo" }
    ]
  },
  {
    id: 9,
    slug: "chimes-75",
    title: "Chimes ’75",
    year: "1975",
    cover: "bg-[#2A3B55]",
    image: IMG_CHIMES_75,
    link: "https://thechimes.lnk.to/chimes-75AA",
    dedication: "This album dedicated to Gerard F. Yates, S.J.—our Coney Island Baby, a Curbstone Cutie Visiting Professor from Upper Peabody Tech Priest, confidant, friend—just “Yatsie.”",
    linerNotes: [
        {
            author: "Featuring",
            text: "Left-to-right on album cover: Tim Naughton; Father Yates; Ken Quinn; John P. Dearie, Jr., ephus; Cliffe Laborde; Kevin O’Neill; Bob Kingsland; and Mark O’Connor."
        },
        {
            author: "Recorded Live",
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
      { title: "We Meet (Live)" },
      { title: "Hoya Saxa Joe (Live)" },
      { title: "More I Cannot Wish You", soloist: "Dearie, O’Connor; Kingsland" },
      { title: "My Cutie’s Due (Live)", soloist: "O’Neill" },
      { title: "Mood Indigo (Live)", soloist: "Kingsland" },
      { title: "Lady Is a Tramp (Live)", soloist: "Naughton" },
      { title: "Sons Of", soloist: "Kingsland" },
      { title: "Piano Roll Blues (Live)" },
      { title: "I’ll Fly Away (Live)" },
      { title: "Hey Boys (Live)" },
      { title: "Canadian Railroad Trilogy", soloist: "Cosco" },
      { title: "Sitting on Top of the World (Live)" },
      { title: "Big Babaloo (Live)", soloist: "Dearie" },
      { title: "Georgetown Fight Song (Live)" },
      { title: "Upper Peabody Tech (Live)", soloist: "Yates" },
      { title: "My Comrades (Live)" },
      { title: "Wazoo (Live)" }
    ]
  },
  {
    id: 10,
    slug: "chimes-66",
    title: "Chimes ’66",
    year: "1966",
    cover: "bg-[#4A5B75]",
    image: IMG_CHIMES_66,
    link: "https://thechimes.lnk.to/chimes-66AA",
    linerNotes: [
        {
            author: "On the Album",
            text: "Tim Mattimore; Fred Cosco, Ephus; Bill Casey; John Reed; Dave Cosco; Bob Flanagan; Bill Edgerton; and Jerry Casey."
        },
        {
            author: "A Chimes “Buff” (1966, Washington, D.C.)",
            text: "For twenty years, a voice of Georgetown has brought to our community as consistent a professional quality of singing as could be found anywhere. As that voice has come down to us over the years little has changed; to hear the Chimes today is to know how they were then. This consistency, this quality is not accidental. It was part of the very design and discipline of the original group whose strength and character are the first things inherited by any would-be Chime or “neophyte.” A voice, yes, but a Chime first. It is this sense of the past—this permanency, this tradition, if you will—that has brought to Alma Mater a distinction few have been able to achieve. And to think that Frank Jones planned the whole thing, right from the outset!"
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
      { title: "We Meet" },
      { title: "Roguish Eyes" },
      { title: "Betty Coed", composer: "arr. D. Colleton" },
      { title: "The Mountains O’Mourne", soloist: "J. Reed" },
      { title: "Mandy" },
      { title: "Wouldn’t It Be Loverly", composer: "arr. D. Colleton" },
      { title: "Barefoot Days and Hey There Boys", soloist: "F. Cosco" },
      { title: "The Hunter", composer: "arr. D. Colleton", soloist: "B. Casey and F. Cosco" },
      { title: "Good Fellow" },
      { title: "Old Grey Bonnet", composer: "arr. B. Casey and F. Cosco", soloist: "B. Casey" },
      { title: "Our Strong Band", soloist: "B. Edgerton" },
      { title: "Rimsky-Korsakov Concerto for Violin and Chorus in E Flat, Opus 16", soloist: "F. Cosco", composer: "arr. B. Casey and F. Cosco" },
      { title: "The Patriot Game", composer: "arr. B. Casey and F. Cosco", soloist: "J. Reed" },
      { title: "The Great Historical Bum", composer: "arr. B. Casey and F. Cosco", soloist: "F. Cosco" },
      { title: "Come Along Home", composer: "arr. D. Colleton" },
      { title: "Wazoo" }
    ]
  },
  {
    id: 11,
    slug: "1958-1959",
    title: "1958–1959",
    year: "1959",
    cover: "bg-[#6A7B95]",
    image: IMG_1959,
    link: "https://thechimes.lnk.to/1958-1959AA",
    linerNotes: [
        {
            text: "To characterize The Chimes as merely another college singing group would be to overlook much of what has made them one of the most popular and respected organizations, not only on the Georgetown campus, but throughout the East Coast. Since their founding in 1946 by Frank “Ephus” Jones, they have provided countless hours of entertainment for lovers of barbershop harmony. From the original quartet which gave the group its initial impetus, the annual number of Chimes has gradually swelled till the present when the full complement of ten may be heard rendering many of the old favorites as well as an occasional contemporary arrangement. Though their main interest and support are centered in the Washington area, the Chimes are well-known for their weekend safaris up and down the East Coast. In addition to several radio and television engagements, they have appeared at the Ivy Jazz Band Ball in New York. But the highlight of every year’s activities is the Reunion held at Manasquan, New Jersey on Labor Day Weekend when the “actives” join in song and camaraderie with the Chimes of the past. Anyone who has accompanied the Chimes during one of their frequent “hums” at Mac’s Pub or Gusti’s Restaurant soon realizes that the mutual love of singing is not the only bond uniting them. For their common interests, extending to every sphere of Georgetown life, have given rise to a deep and unifying friendship, which has been nurtured by their close and willing association during many hours of rehearsal, travel and extra-curricular sociability. It is hoped that this recording will reflect the musical ability and friendliness of style which has made The Chimes a part of the tradition of Georgetown."
        }
    ],
    tracks: [
      { title: "We Meet" },
      { title: "Here She Comes" },
      { title: "Love Walked In", composer:"arr. O’Neill ’61", soloist:"Kelly" },
      { title: "Hearts Win" },
      { title: "Katie Malone", soloist: "Murphy" },
      { title: "Down the Old Ox Road", composer:"arr. O’Neill ’61" },
      { title: "Skinnamarink" },
      { title: "Mood Indigo", soloist:"Kelly" },
      { title: "Zingy Wing", soloist:"Williams" },
      { title: "Temptation", composer:"arr. O’Neill ’61", soloist:"Reardon, Scannell" },
      { title: "Good Fellow" },
      { title: "The Georgetown Chimes", soloist:"Kelly" },
      { title: "Let’s Get Away From It All", composer:"arr. Cramsie ’54", soloist:"Kelly" },
      { title: "I Love the Ladies" },
      { title: "A Foggy Day in London Town", composer:"arr. O’Neill ’61" },
      { title: "Wait Till the Sun Shines Nellie" },
      { title: "Sweet Roses of Morn" },
      { title: "Hoya Saxa Joe" },
      { title: "The Three Bells", composer:"arr. O’Neill ’61", soloist:"Scannell" },
      { title: "Mandy" },
      { title: "Serenade", soloist:"Kelly" },
      { title: "Wazoo" }
    ]
  },
  {
    id: 12,
    slug: "under-the-tree",
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
      { title: "Lullaby of Birdland", soloist:"Tanger" },
      { title: "Wimoweh", soloist:"Walsh" },
      { title: "Blue Skies", soloist:"Kelly" },
      { title: "Sugar Blues" },
      { title: "Mountain Greenery", soloist:"Scannell" },
      { title: "Somebody Loves Me & Tea Leaves", soloist:"Tanger" },
      { title: "Aloha Medley" },
      { title: "Oh By Jingo" },
      { title: "Magazine Cover & Police Gazette" },
      { title: "Georgetown Medley" },
      { title: "Some of These Days" },
      { title: "I Love Paris", soloist:"Reardon" },
      { title: "Roguish Eyes" },
      { title: "Greensleeves", soloist:"Kelly" },
      { title: "Coney Island Washboard" },
      { title: "Summertime", soloist:"Walsh" },
      { title: "Donegal", soloist:"Walsh" },
      { title: "St. Louis Blues", soloist:"Tanger" },
      { title: "Wazoo" }
    ]
  }
];

export const DONOR_TIERS = [
  {
    title: "The Ictus",
    price: "$19.46/year",
    link: "https://buy.stripe.com/dR67wmceZ3mgdiM9AS",
    description: "In conducting, the ictus is the precise moment the beat occurs. It is the pulse that holds the ensemble together. For $19.46 a year, you provide that pulse, ensuring the beat goes on.",
    cta: "Join the Guild"
  },
  {
    title: "The Tonic",
    price: "$10/month",
    link: "https://buy.stripe.com/28o3g692N6ysa6AaEJ",
    description: "Ten bucks a month. It funds the casual hospitality that defines the Chimes, ensuring that when we meet again, the green tea with honey (and other beverages) is always flowing.",
    cta: "Join The Guild"
  },
  {
    title: "The 1946 Society",
    price: "$19.46/month",
    link: "https://buy.stripe.com/6oEbMC7YJf4YbaE5kt",
    description: "The definitive commitment. By matching the year of our founding every month, you cover the operational essentials. You are the backbone of the day-to-day.",
    cta: "Join the Guild"
  },
  {
    title: "The Social Chair",
    price: "$27.80/month",
    link: "https://buy.stripe.com/aEUaIy7YJaOI5QkcMW",
    description: "The Chimes are nothing without the gathering. This tier is dedicated to the experience. You are ensuring that when we get together, we can afford to do it right.",
    cta: "Join the Guild"
  },
  {
    title: "The Founder’s League",
    price: "$46/month",
    link: "https://buy.stripe.com/aEUeYO2EpaOI0w04gv",
    description: "At this level, you aren’t just paying dues; you are subsidizing the future. You fund the archival work that keeps our history from fading.",
    cta: "Join the Guild"
  },
  {
    title: "The Good Fellow",
    price: "$100/month",
    link: "https://buy.stripe.com/5kA17Y92N6ysguYbIY",
    description: "This is the bedrock of the Alumni Association. Your contribution carries the heavy lifting for our most ambitious projects, ensuring the Chimes legacy is secure for decades to come.",
    cta: "Join the Guild"
  }
];

export const STORE_DATA = [
  {
    id: "01",
    name: "The Silk Necktie",
    price: "75",
    image: IMG_NECKTIE,
    link: "https://buy.stripe.com/14k6si2EpcWQemQ3co",
    desc: "Traditional cut. 100% woven silk."
  },
  {
    id: "02",
    name: "The Silk Bow Tie",
    price: "75",
    image: IMG_BOWTIE,
    link: "https://buy.stripe.com/eVacQGceZ2icceI28l",
    desc: "Self-tie. Adjustable sizing. 100% woven silk."
  }
];