import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  ExternalLink,
  ChevronLeft,
  Play,
  Ticket
} from 'lucide-react';

// --- Assets Configuration ---
// NOTE: The local imports are commented out to ensure the preview runs without build errors.
// When running this code locally with your assets folder, uncomment the "Local Imports" block
// and comment out the "Preview Placeholders" block.

// --- Local Imports (Uncomment for Production) ---
import IMG_CHERRY_TREE from './assets/composite-set-compressed.jpg';
import IMG_CTM_BOND from './assets/ctm-bond.jpeg';
import IMG_LOGO from './assets/logo.png';
import IMG_LOGO_WHITE from './assets/logo-white.png';
import IMG_NECKTIE from './assets/necktie.jpg';
import IMG_BOWTIE from './assets/bowtie.jpg';
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
import IMG_PUERTO_RICO from './assets/nils-huenerfuerst-SrYs4XxTRfk-unsplash.jpeg';

// --- Preview Placeholders (Comment out for Production) ---
// const IMG_CHERRY_TREE = "https://placehold.co/1920x1080/0A0A0A/FFFFFF?text=The+Classic";
// const IMG_CTM_BOND = "https://placehold.co/1200x1600/111111/EEEEEE?text=Cherry+Tree+Massacre";
// const IMG_LOGO = "https://placehold.co/400x100/F5F5F0/041E42?text=CHIMES";
// const IMG_LOGO_WHITE = "https://placehold.co/400x100/041E42/F5F5F0?text=CHIMES";
// const IMG_NECKTIE = "https://placehold.co/1000x1200/E5E5E4/041E42?text=Necktie";
// const IMG_BOWTIE = "https://placehold.co/1000x1200/E5E5E4/041E42?text=Bowtie";
// const IMG_DCDM = "https://placehold.co/1000x1000/2A3B55/FFFFFF?text=DCDM";
// const IMG_PARTNERS = "https://placehold.co/1000x1000/4A5B75/FFFFFF?text=Partners";
// const IMG_THREE_STRIPES = "https://placehold.co/1000x1000/6A7B95/FFFFFF?text=Three+Stripes";
// const IMG_PROSPECT = "https://placehold.co/1000x1000/8A9BB5/FFFFFF?text=36th+%26+Prospect";
// const IMG_BATTLE_GEAR = "https://placehold.co/1000x1000/9AABCA/FFFFFF?text=Battle+Gear";
// const IMG_PSRC = "https://placehold.co/1000x1000/B0BCCF/FFFFFF?text=PSRC";
// const IMG_LTGCR = "https://placehold.co/1000x1000/C4CDDC/FFFFFF?text=LTGCR";
// const IMG_HOYA_SAXA = "https://placehold.co/1000x1000/D8DDE6/FFFFFF?text=Hoya+Saxa";
// const IMG_CHIMES_75 = "https://placehold.co/1000x1000/2A3B55/FFFFFF?text=Chimes+75";
// const IMG_CHIMES_66 = "https://placehold.co/1000x1000/4A5B75/FFFFFF?text=Chimes+66";
// const IMG_1959 = "https://placehold.co/1000x1000/6A7B95/FFFFFF?text=1959";
// const IMG_UNDER_THE_TREE = "https://placehold.co/1000x1000/8A9BB5/FFFFFF?text=Under+The+Tree";
// const IMG_PUERTO_RICO = "https://placehold.co/1200x800/111111/EEEEEE?text=Puerto+Rico";


// --- Data ---
const EVENTS_DATA = [
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
        { label: "Buy Concert Tickets", link: "https://buytickets.at/chimes/1998443/r/gcaa-site", primary: true, icon: Ticket },
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

const ALBUMS_DATA = [
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

const DONOR_TIERS = [
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

// --- Typographic Helper: The Typesetter ---
const typeset = (text) => {
  if (!text) return text;
  if (Array.isArray(text)) return text.map(t => typeset(t));
  return text
    .replace(/(\W|^)"/g, '$1“').replace(/"/g, '”') // Smart Quotes
    .replace(/'/g, '’') // Smart Apostrophes
    .replace(/(\d)-(\d)/g, '$1–$2') // En-dashes for ranges
    .replace(/ - /g, ' — ') // Em-dashes for breaks
    .replace(/ \/ /g, ' · '); // ADDED: Slashes to Interpuncts
};

// --- Shared Components ---
const SectionHeader = ({ title, number }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#041E42] pb-8 mb-32 fade-in-element gap-4">
    <h2 className="text-6xl md:text-9xl font-serif text-[#041E42] tracking-tight leading-none [text-wrap:balance]">
      {typeset(title)}
    </h2>
    <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/60 uppercase md:mb-4">
      {number}
    </span>
  </div>
);

// --- Swiss System NavBar ---
const NavBar = ({ activePage, navigateTo, mobileMenuOpen, setMobileMenuOpen }) => {
  const NavButton = ({ page, children, mobile = false }) => (
    <button onClick={() => { navigateTo(page); if (mobile) setMobileMenuOpen(false); }} className={`${mobile ? 'block w-full text-center text-4xl font-serif py-6 text-[#041E42] border-b border-[#041E42]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-inset' : `h-full flex items-center text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-500 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4 ${activePage === page ? 'text-[#041E42]' : 'text-[#595959] hover:text-[#041E42]'}`}`}>
      {children}
      {!mobile && <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#041E42] transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${activePage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>}
    </button>
  );
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F4F3] border-b-2 border-[#041E42] h-20 md:h-24 px-6 md:px-12 transition-all duration-500">
        <div className="max-w-[1920px] mx-auto h-full flex justify-between items-center">
          <button className="flex items-center gap-4 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4" onClick={() => navigateTo('home')}>
            <img src={IMG_LOGO} alt="Georgetown Chimes" className="h-6 w-auto grayscale mix-blend-multiply opacity-100 transition-opacity" />
          </button>
          <div className="hidden lg:flex items-stretch h-full gap-12">
            {[{ id: 'agenda', label: 'Box Office' }, { id: 'discography', label: 'Listening Room' }, { id: 'store', label: 'Haberdasher' }, { id: 'philanthropy', label: 'Patronage' }, { id: 'backstage', label: 'Backstage' }].map((link) => (<NavButton key={link.id} page={link.id}>{link.label}</NavButton>))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-3 -mr-3 text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032]" aria-label="Toggle Menu">{mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}</button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-40 bg-[#F4F4F3] px-6 md:px-12 pt-32 pb-12 overflow-y-auto transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-[1920px] mx-auto flex flex-col h-full justify-between">
          <div className="flex flex-col"><span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase border-b border-[#041E42]/20 pb-4">Directory</span>{[{ id: 'home', label: 'Home' }, { id: 'agenda', label: 'Box Office' }, { id: 'discography', label: 'Listening Room' }, { id: 'store', label: 'Haberdasher' }, { id: 'philanthropy', label: 'Patronage' }, { id: 'backstage', label: 'Backstage' }].map((link) => (<NavButton key={link.id} page={link.id} mobile={true}>{link.label}</NavButton>))}</div>
          <div className="mt-12 space-y-8"><div className="grid grid-cols-2 gap-8"><div><span className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#041E42]/40 uppercase block mb-4">External</span><div className="flex flex-col gap-4"><a href="https://georgetownchimes.org" target="_blank" rel="noreferrer" className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">The Actives ↗</a><a href="https://3611.georgetownchimes.org" target="_blank" rel="noreferrer" className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">The House ↗</a></div></div></div><p className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#041E42]/20 uppercase">© {new Date().getFullYear()} GCAA, Inc.</p></div>
        </div>
      </div>
    </>
  );
};

// --- Home View ---
cconst HomeView = ({ navigateTo, openAlbumBySlug, openEvent }) => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setIsHeroVisible(true), 100); }, []);

  return (
    <>
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Brotherhood, Harmony, History. The official home of the Georgetown Chimes Alumni Association." />
      </Helmet>
      {/* ----------------------- */}

      <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 border-b-2 border-[#041E42] bg-[#F4F4F3] overflow-hidden antialiased selection:bg-[#D50032] selection:text-white">
        <div 
          className={`absolute inset-0 z-0 w-full h-full bg-cover bg-center grayscale bg-[#041E42] bg-blend-screen mix-blend-multiply pointer-events-none transition-opacity duration-[2000ms] ease-in-out ${isHeroVisible ? 'opacity-15' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${IMG_CHERRY_TREE})` }}
        />
        <div className={`max-w-[1920px] mx-auto w-full flex flex-col items-center justify-center relative z-10 py-12 transition-all duration-[2000ms] ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
           <div className="flex flex-col items-center justify-center text-center select-none mb-24 leading-none text-[#041E42]">
            <h1 className="text-[12.5vw] font-serif leading-[0.75] tracking-tighter relative z-10">BROTHERHOOD</h1>
            <h1 className="text-[19vw] font-serif leading-[0.75] tracking-tighter opacity-40 italic -mt-[4vw] relative z-0 px-[0.2em]">HARMONY</h1>
            <h1 className="text-[18vw] font-serif leading-[0.75] tracking-tighter block -mt-[4.5vw] relative z-10">HISTORY</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center z-20">
             <button onClick={() => openAlbumBySlug('desperate-chimes-desperate-measures')} className="group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors">
                Stream “And So It Goes”
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>
             </button>
             <button onClick={() => openEvent(EVENTS_DATA[1])} className="group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors">
                Book Cherry Tree Tickets
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>
             </button>
          </div>
        </div>
      </div>

      <section className="py-32 px-6 md:px-12 bg-[#F4F4F3] text-[#041E42] antialiased">
        <div className="max-w-[1920px] mx-auto border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
             <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">01 — The Directory</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#041E42] leading-[0.9] tracking-tighter mb-12">
                      Welcome the time, my boys: <span className="italic">we meet again.</span>
                    </h2>
                    <div className="w-12 h-[2px] bg-[#041E42]"></div>
                </div>
                <div className="hidden lg:block pt-24">
                    <button onClick={() => navigateTo('backstage')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/40 hover:text-[#041E42] transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#041E42] rounded-full"></div>
                        Authorized Access
                    </button>
                </div>
             </div>
             <div className="lg:col-span-8 flex flex-col">
                {[
                  { sub: "Tickets & Gatherings", room: "Box Office", slug: 'events', id: "01" },
                  { sub: "The Recorded Archive", room: "Listening Room", slug: 'albums', id: "02" },
                  { sub: "Specially Commissioned", room: "Haberdashery", slug: 'store', id: "03" },
                  { sub: "Fund the Brotherhood", room: "Patronage", slug: 'philanthropy', id: "04" },
                ].map((item) => (
                  <div key={item.id} onClick={() => navigateTo(item.slug)} className="group flex flex-row items-baseline justify-between py-12 border-b border-[#041E42]/20 transition-all duration-500 hover:bg-white hover:pl-6 -ml-6 pl-6 pr-6 cursor-pointer">
                    <div className="flex items-baseline gap-12 md:gap-16">
                      <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 group-hover:text-[#D50032] transition-colors uppercase">{item.id}</span>
                      <span className="text-5xl md:text-6xl font-serif text-[#041E42] italic leading-none">{item.room}</span>
                    </div>
                    <div className="flex items-center gap-8">
                       <span className="hidden md:block text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/40">{item.sub}</span>
                       <span className="text-xl font-light text-[#041E42] group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                ))}
                <div className="lg:hidden pt-12 flex justify-center">
                    <button onClick={() => navigateTo('backstage')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/40 hover:text-[#041E42] transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#041E42] rounded-full"></div>
                        Authorized Access
                    </button>
                </div>
             </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 border-t-2 border-[#041E42]">
        <div className="relative bg-[#E5E5E4] overflow-hidden group min-h-[50vh] md:min-h-auto">
             <div className="absolute inset-0 z-0">
                 <img src={IMG_CTM_BOND} alt="The Cherry Tree Massacre Event Poster" className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal opacity-90 group-hover:scale-105 transition-all duration-[2s] ease-out" />
             </div>
             <div className="absolute top-6 left-6 md:hidden">
                <span className="bg-[#041E42] text-white px-3 py-1 text-[9px] font-sans font-bold tracking-[0.1em] uppercase">Upcoming</span>
             </div>
        </div>
        <div className="bg-[#F4F4F3] p-12 md:p-24 flex flex-col justify-center border-l-0 md:border-l border-[#041E42]">
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase">02 — Upcoming Concert</span>
            <h3 className="text-6xl md:text-8xl font-serif mb-12 text-[#041E42] leading-[0.85] tracking-tighter -ml-1">The Cherry Tree Massacre</h3>
            <div className="w-24 h-[2px] bg-[#041E42]/10 mb-12"></div>
            <div className="mb-16 max-w-md text-[#041E42]">
                <h4 className="text-2xl font-serif font-bold leading-tight mb-6">Most traditions fade. <br/> This one just gets louder.</h4>
                <p className="text-lg font-serif italic leading-relaxed opacity-80">In 1974, we sang for survival. In 2026, we sing for the legacy. Two nights. One historic setlist.</p>
            </div>
            {/* FEATURE LINK: Direct to CTM II instead of generic Agenda */}
            <button onClick={() => openEvent(EVENTS_DATA[1])} className="w-full md:w-auto flex items-center justify-between md:justify-start gap-8 py-5 border-t border-b border-[#041E42] md:border-0 hover:pl-4 transition-all duration-300 group/btn">
                <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">Event Details & Tickets</span>
                <span className="text-xl font-light group-hover/btn:translate-x-2 transition-transform">→</span>
            </button>
        </div>
      </section>
    </>
  );
};

// --- Agenda View ---
const AgendaView = ({ navigateTo, openEvent }) => (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Box Office | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Upcoming concerts, events, and reunions for the Georgetown Chimes." />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="The 2026 Season" number="Tickets & Gatherings" />
        {/* ... (Rest of AgendaView Logic remains unchanged) ... */}
        <div className="hidden md:grid grid-cols-12 gap-12 pb-4 mb-4 border-b-2 border-[#041E42] opacity-100">
            <span className="col-span-2 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Date</span>
            <span className="col-span-7 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Program</span>
            <span className="col-span-3 text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-right">Logistics</span>
        </div>
        <div className="flex flex-col group/list border-t-2 md:border-t-0 border-[#041E42]">
          {EVENTS_DATA.map((event) => (
            <div key={event.id} role="button" tabIndex={0} onClick={() => openEvent(event)} className="group border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline relative cursor-pointer transition-all duration-500 hover:pl-4 -ml-4 pl-4 pr-4 group-hover/list:opacity-30 hover:!opacity-100 focus-visible:opacity-100 focus-visible:outline-none">
              <div className="md:col-span-2 flex flex-col">
                 <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/60 uppercase mb-2">{event.date.split(' ')[0]}</span>
                 <span className="text-4xl font-serif text-[#041E42] italic">{event.date.split(' ')[1].replace(',', '')}</span>
              </div>
              <div className="md:col-span-7">
                <span className="inline-block mb-6 text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#D50032]">{event.type}</span>
                <h3 className="text-5xl md:text-7xl font-serif mb-6 text-[#041E42] leading-[0.85] tracking-tight group-hover:italic transition-all duration-500 [text-wrap:balance]">{typeset(event.title)}</h3>
                <p className="text-[#041E42] font-serif text-lg md:text-xl max-w-xl leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-700">{Array.isArray(event.description) ? typeset(event.description[0]) : typeset(event.description)}</p>
              </div>
              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-8">
                <div className="text-right">
                    <span className="block text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] mb-1">{event.time}</span>
                    <span className="block text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/60">{event.location}</span>
                </div>
                <span className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors"><span>Details</span><span className="text-lg font-light translate-y-[-1px]">→</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);

// --- Event Detail View ---
const EventDetailView = ({ event, navigateTo }) => {
  if (!event) return null;

  // Helper to extract plain text for meta description
  const metaDescription = Array.isArray(event.description) 
    ? event.description[0] 
    : event.description;

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>{`${typeset(event.title)} | Georgetown Chimes Alumni Association`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            <button onClick={() => navigateTo('agenda')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase flex items-center gap-4 hover:text-[#D50032] transition-colors opacity-60 hover:opacity-100 group py-4 -my-4">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Box Office
            </button>
        </div>
        {/* ... (Rest of EventDetailView Logic remains unchanged) ... */}
        <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                 <div className="aspect-[3/4] w-full bg-[#E5E5E4] mb-12 relative overflow-hidden shadow-2xl shadow-[#041E42]/5">
                    {event.image ? (
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal hover:grayscale-0 transition-all duration-[1.5s]" />
                    ) : <div className="w-full h-full bg-[#041E42]/5" />}
                </div>
                <div className="space-y-0 border-t border-[#041E42]">
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">Date</span><span className="text-lg font-sans font-bold tracking-tight">{event.date}</span></div>
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/60">Time</span><span className="text-lg font-sans font-bold tracking-tight">{event.time}</span></div>
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/60">Venue</span><span className="text-lg font-sans font-bold tracking-tight text-right max-w-[60%]">{event.location}</span></div>
                </div>
                <div className="mt-12 space-y-4">
                {event.actions ? event.actions.map((action, idx) => (
                    <a key={idx} href={action.link} target="_blank" rel="noopener noreferrer" className={`group w-full flex items-center justify-between border-t border-b py-5 px-6 transition-all duration-300 ${action.primary ? "border-[#041E42] bg-[#041E42] text-[#F4F4F3] hover:bg-[#D50032] hover:border-[#D50032]" : "border-[#041E42]/20 text-[#041E42] hover:bg-[#041E42] hover:text-[#F4F4F3] hover:border-[#041E42]"}`}><span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">{action.label}</span><span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span></a>
                )) : event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="group w-full flex items-center justify-between border-t border-b border-[#041E42] bg-[#041E42] text-[#F4F4F3] py-5 px-6 hover:bg-[#D50032] hover:border-[#D50032] transition-colors"><span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">{event.type === 'CONCERT' ? 'Purchase Tickets' : 'Event Info'}</span><span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span></a>
                )}
                </div>
             </div>
          </div>
          <div className="lg:col-span-8">
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase">{event.eyebrow || event.type}</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 text-[#041E42] leading-[0.85] tracking-tighter [text-wrap:balance]">{typeset(event.title)}</h1>
            <div className="text-xl md:text-3xl font-serif italic text-[#041E42] mb-24 leading-relaxed max-w-[65ch] space-y-8 pl-6 border-l-2 border-[#041E42]/10">
                {Array.isArray(event.description) ? event.description.map((para, i) => <p key={i}>{typeset(para)}</p>) : <p>{typeset(event.description)}</p>}
            </div>
            {event.guestGroups && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Guest Groups</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {event.guestGroups.map((group, idx) => (
                           <div key={idx} className="border-b border-[#041E42]/10 pb-4"><h4 className="text-3xl font-serif text-[#041E42]">{typeset(group)}</h4></div>
                        ))}
                    </div>
                </div>
            )}
            {event.schedule && (
              <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Itinerary</span>
                {event.schedule.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#041E42]/20 py-8 items-baseline">
                      <div className="md:col-span-3 text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42] uppercase">{item.time && <div className="block mb-2">{item.time}</div>}{item.location && <div className="block opacity-60 whitespace-pre-line">{item.location}</div>}</div>
                      <div className="md:col-span-9"><h4 className="text-3xl md:text-4xl font-serif text-[#041E42] mb-4 italic">{typeset(item.title)}</h4><p className="text-[#041E42] text-lg font-serif leading-relaxed max-w-xl opacity-80">{typeset(item.description)}</p></div>
                    </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Discography View ---
const DiscographyView = ({ openAlbum, navigateTo }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [triggerAnim, setTriggerAnim] = useState(false);
  useEffect(() => {
    const promises = ALBUMS_DATA.map((album) => {
        if (!album.image) return Promise.resolve();
        return new Promise((resolve) => { const img = new Image(); img.src = album.image; img.onload = resolve; img.onerror = resolve; });
    });
    Promise.all(promises).then(() => { setImagesLoaded(true); setTimeout(() => setTriggerAnim(true), 100); });
  }, []);

  if (!imagesLoaded) return <div className="min-h-screen bg-[#F4F4F3]" />;

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Listening Room | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Explore the recorded history of the Georgetown Chimes, featuring albums from 1958 to present." />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="The Listening Room" number="Recorded Works" />
        {/* ... (Rest of DiscographyView Logic remains unchanged) ... */}
        <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-4"><span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">01 — The Preservation</span></div>
            <div className="lg:col-span-8">
                <h3 className="text-5xl md:text-7xl font-serif leading-[0.9] text-[#041E42] tracking-tighter mb-12">A living record, currently undergoing restoration.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
                    <p className="text-xl text-[#041E42] font-serif leading-relaxed">Our preservationists are currently digitizing master tapes from the 1960s and ’70s to high-fidelity standards.</p>
                    <div className="flex flex-col items-start gap-4">
                        <button onClick={() => window.open('https://thechimes.notion.site', '_blank')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1">Explore the Rough Cuts ↗</button>
                        <button onClick={() => navigateTo('philanthropy')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1">Support Digitization</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-48">
            <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-12"><span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">02 — The Discography</span></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {ALBUMS_DATA.map((album, index) => (
                <div key={album.id} onClick={() => openAlbum(album)} className={`group cursor-pointer flex flex-col gap-6 transition-all duration-[1000ms] ${triggerAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="relative aspect-square w-full bg-[#E5E5E4] overflow-hidden shadow-xl shadow-[#041E42]/5">
                    {album.image ? <img src={album.image} alt={album.title} className="w-full h-full object-cover transition-all duration-[2s] grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:scale-105" /> : <div className={`w-full h-full ${album.cover}`}></div>}
                    {album.badge && <div className="absolute top-0 right-0 bg-[#D50032] text-[#F4F4F3] px-4 py-2 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">{album.badge}</div>}
                </div>
                <div className="flex flex-col items-start border-t border-[#041E42]/20 pt-4">
                    <div className="flex justify-between w-full items-baseline mb-2"><span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 uppercase tabular-nums">Issue {album.year}</span></div>
                    <h3 className="font-serif text-3xl md:text-4xl text-[#041E42] leading-[0.9] group-hover:italic transition-all duration-500">{typeset(album.title)}</h3>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Album Detail View ---
const AlbumDetailView = ({ selectedAlbum, navigateTo }) => {
  if (!selectedAlbum) return null;
  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>{`${typeset(selectedAlbum.title)} | Georgetown Chimes Alumni Association`}</title>
        <meta name="description" content={selectedAlbum.description || `Listen to ${selectedAlbum.title} (${selectedAlbum.year}) by the Georgetown Chimes.`} />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            <button onClick={() => navigateTo('discography')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase flex items-center gap-4 hover:text-[#D50032] transition-colors opacity-60 hover:opacity-100 group py-4 -my-4">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Archive
            </button>
        </div>
        
        {/* ... (Rest of AlbumDetailView Logic remains unchanged) ... */}
        
        <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <div className="aspect-square w-full overflow-hidden bg-[#E5E5E4] mb-12 shadow-2xl shadow-[#041E42]/5">
                  {selectedAlbum.image ? (
                    <img src={selectedAlbum.image} alt={selectedAlbum.title} className="w-full h-full object-cover grayscale mix-blend-multiply transition-all duration-[2s] hover:grayscale-0 hover:mix-blend-normal" />
                  ) : (
                    <div className={`aspect-square w-full ${selectedAlbum.cover}`}></div>
                  )}
                </div>
                <div className="space-y-0 border-t border-[#041E42]">
                   <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20">
                        <span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">Issue</span>
                        <span className="text-xl font-serif italic tabular-nums">{selectedAlbum.year}</span>
                   </div>
                </div>
                {selectedAlbum.link && (
                    <button onClick={() => window.open(selectedAlbum.link, '_blank', 'noopener,noreferrer')} className="mt-12 w-full py-5 border border-[#041E42] bg-[#041E42] text-[#F4F4F3] text-[11px] font-sans font-bold tracking-[0.1em] uppercase hover:bg-[#D50032] hover:border-[#D50032] transition-all">
                        {selectedAlbum.ctaText || "Listen on Streaming"}
                    </button>
                )}
                {selectedAlbum.dedication && (
                    <div className="mt-12 pt-8 border-t border-[#041E42]/20 space-y-4">
                        <p className="text-[10px] opacity-60 uppercase tracking-[0.1em] font-sans font-bold text-[#041E42]">Dedication</p>
                        <p className="text-lg font-serif italic leading-relaxed text-[#041E42] opacity-90">{typeset(selectedAlbum.dedication)}</p>
                    </div>
                )}
             </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] tracking-tighter mb-16 antialiased text-[#041E42] [text-wrap:balance] pt-2">
                {typeset(selectedAlbum.title)}
            </h1>
            
            {selectedAlbum.description && (
                <p className="text-xl md:text-3xl font-serif italic mb-24 leading-relaxed pl-8 border-l-2 border-[#D50032] text-[#041E42] max-w-[65ch]">
                    {typeset(selectedAlbum.description)}
                </p>
            )}

            {selectedAlbum.leadSingle && (
              <div className="border border-[#041E42]/10 p-12 mb-32 relative group/single bg-white shadow-sm">
                 <div className="absolute top-0 right-0 w-1 h-full bg-[#D50032] opacity-0 group-hover/single:opacity-100 transition-opacity"></div>
                 <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase mb-8 block">Featured Track</span>
                 <h3 className="text-5xl md:text-6xl font-serif text-[#041E42] mb-6 italic leading-none">{typeset(selectedAlbum.leadSingle.title)}</h3>
                 <div className="flex flex-col gap-2 mb-8">
                    {selectedAlbum.leadSingle.composer && <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/60">{selectedAlbum.leadSingle.composer}</span>}
                    {selectedAlbum.leadSingle.soloist && <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#D50032]">Feat. {selectedAlbum.leadSingle.soloist}</span>}
                 </div>
                 {selectedAlbum.leadSingle.link && <button onClick={() => window.open(selectedAlbum.leadSingle.link, '_blank', 'noopener,noreferrer')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42] pb-1 hover:text-[#D50032] hover:border-[#D50032] transition-all">Play Track ↗</button>}
              </div>
            )}

            {/* REPERTOIRE SECTION */}
            <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Repertoire</span>
                <div>
                    {selectedAlbum.tracks.map((track, idx) => (
                        <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-[#041E42]/10 py-6 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4 transition-all duration-300 items-baseline">
                            
                            {/* Left Col: Index & Title (Spans 7 Cols) */}
                            <div className="md:col-span-7 flex items-baseline gap-8">
                                <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 tabular-nums w-8 flex-shrink-0">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <span className="font-serif text-2xl md:text-3xl text-[#041E42] group-hover:italic transition-all leading-tight pb-1 block [text-wrap:balance]">
                                        {typeset(track.title)}
                                    </span>
                                </div>
                            </div>

                            {/* Right Col: Metadata (Spans 5 Cols) */}
                            <div className="hidden md:block md:col-span-5 text-right opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] leading-tight block [text-wrap:balance]">
                                    {[
                                        track.composer, 
                                        track.group, 
                                        track.soloist ? `Feat. ${track.soloist}` : null
                                    ].filter(Boolean).join(" · ")}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {selectedAlbum.credits && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Technical Specifications</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {Object.entries(selectedAlbum.credits).map(([section, roles]) => (
                            <div key={section}>
                                <h5 className="font-sans font-bold text-[11px] uppercase tracking-[0.1em] text-[#041E42] mb-8 border-b border-[#041E42]/20 pb-2">{section}</h5>
                                <div className="space-y-6">
                                    {roles.map((role, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <span className="text-[9px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/40 mb-1">{role.role}</span>
                                            <span className="font-serif text-xl text-[#041E42] leading-tight [text-wrap:balance]">{role.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedAlbum.linerNotes && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Album Notes</span>
                    <div className="space-y-16">
                        {selectedAlbum.linerNotes.map((note, idx) => (
                            <div key={idx} className="max-w-2xl">
                                {note.author && <h4 className="font-serif text-3xl mb-6 italic">{typeset(note.author)}</h4>}
                                <p className="leading-relaxed font-serif text-lg opacity-90 antialiased">{typeset(note.text)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedAlbum.acknowledgements && (
                <div className="py-24 border-t border-[#041E42]/10 mb-24">
                    <h5 className="font-sans font-bold text-[11px] uppercase tracking-[0.1em] mb-12 text-[#041E42]/40">Acknowledgements</h5>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-4xl">
                        {selectedAlbum.acknowledgements.map((name, i) => (
                            <span key={i} className="text-xl text-[#041E42] font-serif italic opacity-60 hover:opacity-100 transition-opacity cursor-default">{typeset(name)}</span>
                        ))}
                    </div>
                </div>
            )}

            <div className="pt-24 border-t border-[#041E42] opacity-40 text-left">
                <p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Transcribed from the Physical Liner Notes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StoreView = () => (
  <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] antialiased text-[#041E42] selection:bg-[#D50032] selection:text-white">
    {/* --- SEO INTEGRATION --- */}
    <Helmet>
      <title>Haberdashery | Georgetown Chimes Alumni Association</title>
      <meta name="description" content="Official Battle Gear of the Georgetown Chimes. Specially commissioned silk neckwear." />
    </Helmet>
    {/* ----------------------- */}

    <div className="max-w-[1920px] mx-auto">
      <SectionHeader title="The Haberdashery" number="Specially Commissioned" />

      {/* MANIFESTO: The Big Statement (Heavy Top Border) */}
      <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12">
        {/* ... (Rest of StoreView Logic remains unchanged) ... */}
        <div className="lg:col-span-4">
          <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#d50032] uppercase block mb-4">
            01 — Battle Gear
          </span>
        </div>
        <div className="lg:col-span-8">
          <h3 className="text-5xl md:text-7xl font-serif leading-[0.9] text-[#041E42] tracking-tighter mb-12">
            Standard Issue.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
            <p className="text-xl text-[#041E42] font-serif leading-relaxed">
              Commissioned for the Active group and curated for the Alumni. Woven in pure silk, these pieces are designed to replace the lost, the stained, and the borrowed.
            </p>
            <div>
              <p className="text-[#041E42] text-[10px] leading-relaxed font-sans font-bold uppercase tracking-[0.05em] opacity-60">
                 Provenance: A Drew Poling original, produced in collaboration with our master weavers in the United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THE CATALOG: Vignelli List Layout */}
      <div className="mb-48">
        {/* Header Row */}
        <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-0">
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">
                02 — The Collection
            </span>

        </div>

        {[
            {
              id: "01",
              name: "The Silk Necktie",
              price: "75",
              img: IMG_NECKTIE,
              link: "https://buy.stripe.com/14k6si2EpcWQemQ3co",
              desc: "Traditional cut. 100% woven silk."
            },
            {
              id: "02",
              name: "The Silk Bow Tie",
              price: "75",
              img: IMG_BOWTIE,
              link: "https://buy.stripe.com/eVacQGceZ2icceI28l",
              desc: "Self-tie. Adjustable sizing. 100% woven silk."
            }
          ].map((item) => (
            <div key={item.id} className="group relative border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-8 items-start transition-colors duration-500 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4">
                
                {/* Col 1: REF ID */}
                <div className="md:col-span-2 pt-2">
                    <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 uppercase group-hover:text-[#D50032] transition-colors">
                        Ref. {item.id}
                    </span>
                </div>

                {/* Col 2: THE IMAGE (The Artifact) */}
                <div className="md:col-span-3">
                    {/* CHANGED: aspect-[4/5] -> aspect-[3/4] for stricter geometry */}
                    <div className="aspect-[3/4] bg-[#E5E5E4] overflow-hidden w-full max-w-[240px]">
                        <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Col 3: TITLE & DETAILS */}
                <div className="md:col-span-5 flex flex-col justify-between h-full py-2">
                    <div>
                        <h4 className="text-5xl md:text-6xl font-serif text-[#041E42] italic leading-[0.85] mb-6">
                            {item.name}
                        </h4>
                        {/* CHANGED: Added typeset() and [text-wrap:balance] */}
                        <p className="text-[#041E42] text-lg font-serif leading-tight opacity-60 [text-wrap:balance]">
                            {typeset(item.desc)}
                        </p>
                    </div>
                </div>

                {/* Col 4: PRICE & ACTION */}
                <div className="md:col-span-2 flex flex-col justify-between h-full py-2 items-start md:items-end">
                    <span className="text-xl font-sans font-bold text-[#041E42] tracking-wide tabular-nums block opacity-80">
                        ${item.price}
                    </span>
                    
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors mt-8 md:mt-0"
                    >
                        <span>Acquire</span>
                        <span className="text-lg font-light translate-y-[-1px]">→</span>
                    </a>
                </div>
            </div>
        ))}
      </div>

      {/* Archive Stamp: Left Aligned */}
      <div className="mt-48 pt-4 border-t border-[#041E42] flex justify-start opacity-40">
        <p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase antialiased">
          Official Battle Gear of the Georgetown Chimes
        </p>
      </div>

    </div>
  </div>
);

const PhilanthropyView = () => (
    <div className="min-h-screen bg-[#F4F4F3] text-[#041E42] pt-40 px-6 md:px-12 pb-32 antialiased selection:bg-[#D50032] selection:text-white">
       {/* --- SEO INTEGRATION --- */}
       <Helmet>
         <title>Patronage | Georgetown Chimes Alumni Association</title>
         <meta name="description" content="Fund the Brotherhood. Join the Donor Guild and support the Georgetown Chimes Alumni Association." />
       </Helmet>
       {/* ----------------------- */}

       <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Patronage" number="Fund the Brotherhood" />
        {/* ... (Rest of PhilanthropyView Logic remains unchanged) ... */}
        
        {/* MANIFESTO: The Big Statement */}
        <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-4">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">
                    01 — The Mission
                </span>
            </div>
            <div className="lg:col-span-8">
                <h3 className="text-5xl md:text-7xl font-serif leading-[0.9] text-[#041E42] tracking-tighter mb-12">
                    The heartbeat of the Association.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
                    <p className="text-xl text-[#041E42] font-serif leading-relaxed">
                        By subscribing, you ensure the tradition remains uninterrupted: the history documented, the reunions funded, and the legacy secured.
                    </p>
                    <div>
                        <p className="text-[#041E42] text-[10px] leading-relaxed font-sans font-bold uppercase tracking-[0.05em] opacity-60">
                           Legal Notice: Contributions to the Georgetown Chimes Alumni Association 501(c)(7) are not tax deductible.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* THE GUILD LIST: Vignelli Data Table */}
        <div className="mb-48">
            {/* Header Row */}
            <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-0">
                 <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">
                    02 — The Donor Guild
                </span>
            </div>

            {DONOR_TIERS.map((tier, idx) => {
                const [amount, frequency] = tier.price.includes('/') 
                    ? tier.price.split('/') 
                    : [tier.price, 'annually'];

                return (
                    <div key={idx} className="group relative border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-4 items-start transition-colors duration-500 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4">
                        
                        {/* Col 1: Level ID (Technical) */}
                        <div className="md:col-span-2 pt-2">
                            <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 uppercase group-hover:text-[#D50032] transition-colors">
                                Level 0{idx + 1}
                            </span>
                        </div>

                        {/* Col 2: The Title & Description (The Narrative) */}
                        <div className="md:col-span-6 pr-8">
                            <h4 className="text-5xl font-serif text-[#041E42] italic leading-[0.85] mb-6">
                                {tier.title}
                            </h4>
                            {/* CHANGED: Added typeset() and [text-wrap:balance] */}
                            <p className="text-[#041E42] text-lg font-serif leading-tight opacity-60 max-w-md [text-wrap:balance]">
                                {typeset(tier.description)}
                            </p>
                        </div>

                        {/* Col 3: The Price (The Data) */}
                        <div className="md:col-span-2 pt-3">
                             <span className="text-lg font-sans font-bold text-[#041E42] tracking-wide tabular-nums block opacity-100">
                                    {amount}
                            </span>
                            <span className="text-[9px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 uppercase">
                                    per {frequency}
                            </span>
                        </div>

                        {/* Col 4: Action (The Input) */}
                        <div className="md:col-span-2 flex md:justify-end items-start pt-3">
                             <a 
                                href={tier.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors"
                             >
                                <span>Join</span>
                                <span className="text-lg font-light translate-y-[-1px]">→</span>
                             </a>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* ONE TIME GIFT: Heavy Divider */}
        <div className="border-t-2 border-[#041E42] pt-12">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
                 <div className="lg:col-span-4">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">
                        03 — Capital Projects
                    </span>
                 </div>
                 <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                     <h3 className="text-5xl md:text-7xl font-serif text-[#041E42] leading-[0.9] tracking-tighter">
                        Legacy &<br/><span className="italic">Restoration.</span>
                    </h3>
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-[#041E42] text-xl font-serif leading-relaxed mb-12">
                            Single contributions fund the archival restoration of our master tapes and the capital projects that define our future infrastructure.
                        </p>
                        
                        {/* The Indented Action Block */}
                        <a 
                            href="https://donate.stripe.com/fZe3g6frb6ys92wfZ4"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group w-full flex items-center justify-between border-t border-b border-[#041E42] py-6 px-8 hover:bg-[#041E42] hover:text-white transition-all duration-500"
                        >
                            <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">
                                Make a Contribution
                            </span>
                            <span className="text-xl font-light group-hover:translate-x-2 transition-transform">
                                →
                            </span>
                        </a>
                    </div>
                 </div>
             </div>
        </div>

        {/* Footer: Left Aligned */}
        <div className="mt-48 pt-4 border-t border-[#041E42] flex justify-start opacity-40 hover:opacity-100 transition-opacity">
            <a href="https://billing.stripe.com/login/eVa00CdRM41u2ZibII" target="_blank" rel="noopener noreferrer" className="text-[#041E42] text-[10px] font-sans font-bold tracking-[0.1em] uppercase hover:text-[#D50032] transition-colors">
                Manage Existing Subscription →
            </a>
        </div>

      </div>
    </div>
);

const BackstageView = () => (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] antialiased text-[#041E42] selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Backstage | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Authorized Access Only. Internal tools and database management for Alumni." />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Backstage" number="Authorized Access" />
        {/* ... (Rest of BackstageView Logic remains unchanged) ... */}
        
        {/* Heavy Anchor Line */}
        <div className="border-t-2 border-[#041E42] pt-0">
             <div className="grid grid-cols-1 md:grid-cols-2">
                 
                 {/* SYSTEM 01: GLEEMANAGER */}
                 <div className="group flex flex-col h-full justify-between border-b md:border-b-0 md:border-r border-[#041E42] py-12 md:pr-12">
                     <div>
                         <div className="border-b border-[#041E42] pb-4 mb-12">
                             <span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">
                                 System 01 — Database
                             </span>
                         </div>
                         
                         <h3 className="text-7xl font-serif text-[#041E42] italic mb-4 leading-[0.8] -ml-1">
                             GleeManager
                         </h3>
                         
                         {/* THE FIX: Notion as a Technical Spec */}
                         <div className="flex items-center gap-4 mb-12 opacity-60">
                             <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase">
                                Platform: Notion
                             </span>
                         </div>

                         <p className="text-xl font-serif leading-relaxed opacity-80 max-w-sm mb-24">
                             Central Archive: Historical data, part tapes, and repertoire management.
                         </p>
                     </div>

                     <div className="space-y-0 border-t border-[#041E42]">
                          <a 
                            href="https://thechimes.notion.site" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between py-6 border-b border-[#041E42]/20 hover:bg-white hover:pl-4 -ml-2 pl-2 pr-6 transition-all duration-300 group/link"
                          >
                             <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">Initialize Session</span>
                             <span className="text-lg opacity-0 group-hover/link:opacity-100 transition-opacity pl-4">↗</span>
                          </a>
                          <a 
                            href="https://drive.google.com/uc?export=download&id=1s9YI3af7Y17OpptSKo4LRAsM15QCyOlp" 
                            className="flex items-center justify-between py-6 border-b border-[#041E42]/20 hover:bg-white hover:pl-4 -ml-2 pl-2 pr-6 transition-all duration-300 group/link"
                          >
                             <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase opacity-50 group-hover/link:opacity-100">System Protocol</span>
                             <span className="text-lg opacity-0 group-hover/link:opacity-100 transition-opacity pl-4">↓</span>
                          </a>
                     </div>
                 </div>

                 {/* SYSTEM 02: SLACK */}
                 <div className="group flex flex-col h-full justify-between py-12 md:pl-12">
                     <div>
                         <div className="border-b border-[#041E42] pb-4 mb-12">
                             <span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">
                                 System 02 — Comms
                             </span>
                         </div>
                         
                         <h3 className="text-7xl font-serif text-[#041E42] italic mb-4 leading-[0.8] -ml-1">
                             Slack
                         </h3>

                         {/* Slack as a Technical Spec */}
                         <div className="flex items-center gap-4 mb-12 opacity-60">
                             <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase">
                                Platform: Slack
                             </span>
                         </div>

                         <p className="text-xl font-serif leading-relaxed opacity-80 max-w-sm mb-24">
                             Encrypted Channel: Real-time messaging for Active and Alumni units.
                         </p>
                     </div>

                     <div className="space-y-0 border-t border-[#041E42]">
                          <a 
                            href="https://thechimes.slack.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between py-6 border-b border-[#041E42]/20 hover:bg-white hover:pl-4 -ml-2 pl-2 pr-6 transition-all duration-300 group/link"
                          >
                             <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">Launch App</span>
                             <span className="text-lg opacity-0 group-hover/link:opacity-100 transition-opacity pl-4">↗</span>
                          </a>
                          <a 
                            href="https://drive.google.com/uc?export=download&id=1AeangbSpDCNOv-sHq5yqaz5Djk0YmesR" 
                            className="flex items-center justify-between py-6 border-b border-[#041E42]/20 hover:bg-white hover:pl-4 -ml-2 pl-2 pr-6 transition-all duration-300 group/link"
                          >
                             <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase opacity-50 group-hover/link:opacity-100">System Protocol</span>
                             <span className="text-lg opacity-0 group-hover/link:opacity-100 transition-opacity pl-4">↓</span>
                          </a>
                     </div>
                 </div>

             </div>
        </div>

        {/* Security Stamp: Left Aligned */}
        <div className="mt-12 text-left opacity-30">
            <p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase">
                Restricted Access — Alumni Personnel Only
            </p>
        </div>

      </div>
    </div>
);

const NotFoundView = ({ navigateTo }) => (
    <div className="min-h-screen pt-40 px-6 md:px-12 flex flex-col items-center justify-center bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
        {/* --- SEO INTEGRATION --- */}
        <Helmet>
            <title>404 | Georgetown Chimes Alumni Association</title>
            <meta name="description" content="Page not found." />
        </Helmet>
        {/* ----------------------- */}

        <div className="w-full max-w-3xl border-t-2 border-[#041E42] pt-12">
            
            {/* 1. Meta Label */}
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">
                Error 404 — Missing Record
            </span>
            
            {/* 2. Massive Serif Headline */}
            <h1 className="text-6xl md:text-9xl font-serif text-[#041E42] mb-12 italic leading-[0.85] tracking-tighter [text-wrap:balance]">
                Discordant note.
            </h1>
            
            {/* 3. The Explanation (Indented) */}
            <p className="text-xl md:text-2xl font-serif text-[#041E42] leading-relaxed mb-16 max-w-lg pl-8 border-l-2 border-[#041E42]/10">
                The page you requested cannot be found in our repertoire. It may have been moved, deleted, or never existed at all.
            </p>
            
            {/* 4. Primary Action */}
            <div className="flex flex-col items-start gap-8">
                <button 
                    onClick={() => navigateTo('home')} 
                    className="group flex items-center gap-4 text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032]"
                >
                    <span>Return to Harmony</span>
                    <span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span>
                </button>

                {/* 5. Concierge Links: Added Patronage */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-[#041E42]/10 w-full max-w-md opacity-60">
                    <button onClick={() => navigateTo('agenda')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Box Office</button>
                    <button onClick={() => navigateTo('discography')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Archive</button>
                    <button onClick={() => navigateTo('philanthropy')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Patronage</button>
                </div>
            </div>

        </div>
    </div>
);

export default function App() {
  const getRouteFromPath = () => {
    const path = window.location.pathname;
    const cleanPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
    if (cleanPath === '/his-successes') return { view: 'external-redirect', slug: null };
    if (cleanPath === '/' || cleanPath === '') return { view: 'home', slug: null };
    if (cleanPath === '/events') return { view: 'agenda', slug: null };
    if (cleanPath === '/albums') return { view: 'discography', slug: null };
    if (cleanPath === '/store') return { view: 'store', slug: null };
    if (cleanPath === '/give') return { view: 'philanthropy', slug: null };
    if (cleanPath === '/comms') return { view: 'backstage', slug: null };
    const eventMatch = cleanPath.match(/^\/event\/([\w-]+)$/);
    if (eventMatch) return { view: 'event', slug: eventMatch[1] };
    const albumMatch = cleanPath.match(/^\/album\/([\w-]+)$/);
    if (albumMatch) return { view: 'album', slug: albumMatch[1] };
    return { view: '404', slug: null };
  };

  const [route, setRoute] = useState(getRouteFromPath());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => { setRoute(getRouteFromPath()); setIsMenuOpen(false); window.scrollTo(0, 0); };
    window.addEventListener('popstate', handlePopState);
    return () => { window.removeEventListener('popstate', handlePopState); };
  }, []);

  useEffect(() => {
    if (route.view === 'external-redirect') { window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScYnADpitsc31nvqlJvj7f5tnMfS0uArn-PnsGJnj_cSNBqWA/viewform"; }
  }, [route]);

  const navigateTo = (view, slug = null) => {
    let path = '/';
    switch(view) {
        case 'home': path = '/'; break;
        case 'agenda': path = '/events'; break;
        case 'discography': path = '/albums'; break;
        case 'store': path = '/store'; break;
        case 'philanthropy': path = '/give'; break;
        case 'backstage': path = '/comms'; break;
        case 'event': path = `/event/${slug}`; break;
        case 'album': path = `/album/${slug}`; break;
        default: path = '/';
    }
    try { window.history.pushState({}, '', path); } catch (err) { console.log('History API not available'); }
    setRoute({ view, slug });
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openAlbumBySlug = (slug) => navigateTo('album', slug);
  const openAlbum = (album) => navigateTo('album', album.slug);
  const openEvent = (event) => navigateTo('event', event.slug);

  const activePage = route.view;
  const selectedEvent = activePage === 'event' && route.slug ? EVENTS_DATA.find(e => e.slug === route.slug) : null;
  const selectedAlbum = activePage === 'album' && route.slug ? ALBUMS_DATA.find(a => a.slug === route.slug) : null;

  useEffect(() => {
    const typekitLink = document.createElement('link'); typekitLink.href = 'https://use.typekit.net/uzl4kqy.css'; typekitLink.rel = 'stylesheet'; document.head.appendChild(typekitLink);
    const googleLink = document.createElement('link'); googleLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;700&display=swap'; googleLink.rel = 'stylesheet'; document.head.appendChild(googleLink);
    return () => { if (document.head.contains(typekitLink)) document.head.removeChild(typekitLink); if (document.head.contains(googleLink)) document.head.removeChild(googleLink); };
  }, []);

  return (
    <div className="font-sans text-[#041E42] bg-[#F4F4F3] selection:bg-[#D50032] selection:text-[#F4F4F3]">
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
        
        /* LUXURY RENDERING SETTINGS */
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .font-serif {
        font-family: "adobe-caslon-pro", "Cormorant Garamond", serif !important;
      }
      .font-sans {
        font-family: "neue-haas-unica", "Montserrat", sans-serif !important;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-in-element {
        animation: fadeIn 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      }
      .bg-texture {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        
        /* CHANGE: Lower Z-Index so Navbar (z-50) sits on top */
        z-index: 40; 
        
        opacity: 0.4;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
      }
    `}</style>
    
    <div className="bg-texture"></div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] px-6 py-4 bg-[#041E42] text-[#F4F4F3] text-xs font-bold uppercase tracking-widest border border-[#D50032]">Skip to main content</a>
      <NavBar activePage={activePage} navigateTo={navigateTo} mobileMenuOpen={isMenuOpen} setMobileMenuOpen={setIsMenuOpen} />
      <main id="main-content" className="min-h-screen">
        {activePage === 'home' && <HomeView navigateTo={navigateTo} openAlbumBySlug={openAlbumBySlug} openEvent={openEvent} />}
        {activePage === 'agenda' && <AgendaView navigateTo={navigateTo} openEvent={openEvent} />}
        {activePage === 'discography' && <DiscographyView openAlbum={openAlbum} navigateTo={navigateTo} />}
        {activePage === 'album' && <AlbumDetailView selectedAlbum={selectedAlbum} navigateTo={navigateTo} />}
        {activePage === 'event' && <EventDetailView event={selectedEvent} navigateTo={navigateTo} />}
        {activePage === 'philanthropy' && <PhilanthropyView />}
        {activePage === 'store' && <StoreView />}
        {activePage === 'backstage' && <BackstageView />}
        {activePage === '404' && <NotFoundView navigateTo={navigateTo} />}
        {activePage === 'external-redirect' && <div className="min-h-screen bg-[#F4F4F3] flex items-center justify-center"><p className="text-[#041E42] font-serif italic text-xl animate-pulse">Redirecting...</p></div>}
      </main>
      <footer className="bg-[#F4F4F3] text-[#041E42] pt-32 pb-12 px-6 md:px-12 antialiased selection:bg-[#D50032] selection:text-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
            <div className="md:col-span-4 flex flex-col justify-between h-full"><div><img src={IMG_LOGO} alt="Chimes Wordmark" className="h-8 w-auto mb-12 opacity-80 mix-blend-multiply grayscale" /><div className="space-y-6 max-w-xs"><p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase leading-relaxed text-[#041E42]/60">Incorporated in Delaware<br/>501(c)(7) Non-Profit</p><p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase leading-relaxed text-[#041E42]/40">Kindly be advised that contributions are not tax-deductible.</p></div></div></div>
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032] border-b border-[#041E42]/20 pb-4 block">Index</span>{[{ name: 'Box Office', slug: 'agenda' }, { name: 'Listening Room', slug: 'discography' }, { name: 'Haberdasher', slug: 'store' }, { name: 'Patronage', slug: 'philanthropy' }].map((item) => (<button key={item.name} onClick={() => navigateTo(item.slug)} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">{item.name}</button>))}</div>
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/40 border-b border-[#041E42]/20 pb-4 block">Backstage</span><button onClick={() => navigateTo('backstage')} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">Database</button><button onClick={() => navigateTo('backstage')} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">Messaging</button></div>
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/40 border-b border-[#041E42]/20 pb-4 block">External</span>{[{ name: 'The House', url: 'https://3611.georgetownchimes.org' }, { name: 'The Actives', url: 'https://georgetownchimes.org' }].map((site) => (<button key={site.name} onClick={() => window.open(site.url, '_blank', 'noopener,noreferrer')} className="group flex items-center gap-2 text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">{site.name}<span className="text-lg font-light leading-none opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-1px]">↗</span></button>))}</div>
            </div>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto mt-24 pt-6 border-t border-[#041E42]/10 flex flex-col md:flex-row justify-between items-center text-[9px] font-sans font-bold text-[#041E42]/40 uppercase tracking-[0.2em] gap-8"><span>© {new Date().getFullYear()} Georgetown Chimes Alumni Association, Inc.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032]">Return to Top <span className="text-lg font-light leading-none rotate-180">↓</span></button></div>
      </footer>
    </div>
  );
}