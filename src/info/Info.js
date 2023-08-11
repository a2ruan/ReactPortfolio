import self from "../img/self.png"
import mock1 from "../img/redis_priority_queue.PNG"
import mock2 from "../img/mock2.png"
import mock3 from "../img/ardunet_banner.jpg"
import mock4 from "../img/report_demo.gif"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Andy",
    lastName: "Ruan",
    initials: "ar", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Systems Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Canada'
        },
        {
            emoji: "💼",
            text: "Sr. Systems Engineer at AMD"
        },
        {
            emoji: "📧",
            text: "andyruan@outlook.com"
        }
    ],
    socials: [
        /*{
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },*/
        /*{
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },*/
        {
            link: "https://github.com/a2ruan",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/andy-ruan/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }/*,
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }*/
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Andy. I'm a systems engineer at AMD. I am currently working on developing software infrastructure for driver and hardware validation.",
    skills:
        {
            languages: ['Python','Java','Javascript','C++'],
            frameworks:['Flask', 'FastAPI','React.js'],
            tools: ['Docker','Jenkins','Git','Linux'],
            databases: ['PostgreSQL','MySQL','Redis'],
            exposedTo: ['NodeJS', 'Ansible','Kubernetes','AWS Services']
        }
    ,
    hobbies: [
		{
            label: 'coding',
            emoji: '💻'
        },
		{
            label: 'travelling',
            emoji: '✈️'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Priority Queue Scheduler (Redis)",
            //live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/a2ruan/api_scheduler", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Bluetooth Gas Sensor App",
            live: "https://paytonpierce.dev",
            source: "https://github.com/a2ruan/ArduNetApp/tree/master",
            image: mock3
        },
        {
            title: "Log Analyzer Server",
            live: "https://paytonpierce.dev",
            source: "https://github.com/a2ruan/analyzer_server",
            image: mock4
        }
    ]
}