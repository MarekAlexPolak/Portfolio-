import bookwise from "../assets/images/bookwise.PNG";
import lykesongs from "../assets/images/lykesongs.PNG";
import texteditor from "../assets/images/texteditor.PNG";
import notetaker from "../assets/images/notetaker.PNG";
import passwordgen from "../assets/images/passgenerator.PNG";
import scheduler from "../assets/images/scheduler.PNG";

const projectsData = [
    {
        id:1,
        
        title: "Lyksong",
        description: "",
        imageUrl: lykesongs,
        liveDemoUrl:'https://gurverm.github.io/lyrics-application/',
        sourceCodeUrl: "https://github.com/gurverm/lyrics-application",
    },
   
    {
        id:2,
        title: "Bookwise",
        imageUrl: bookwise,
        liveDemoUrl:'',
        sourceCodeUrl: "https://github.com/Saloni0412/BookWise",
    },
    {
        id:3,
        title: "Text Editor",
        imageUrl: texteditor,
        liveDemoUrl:'https://marek-pwa-text-editor-1110b78c964a.herokuapp.com/',
        sourceCodeUrl: "https://github.com/MarekAlexPolak/Progressive-Web-Applications-PWA-Text-Editor",
    },
    {
        id:4,
        title: "Note Taker",
        imageUrl: notetaker,
        liveDemoUrl:'https://note-taker-marekpolak.herokuapp.com/',
        sourceCodeUrl: "https://github.com/MarekAlexPolak/Note-Taker",
    },
    {
        id:5,
        title: "Password Generator",
        imageUrl: passwordgen,
        liveDemoUrl:'https://marekalexpolak.github.io/Password-Generator/',
        sourceCodeUrl: "https://github.com/MarekAlexPolak/Password-Generator",
    },
    {
        id:6,
        title: "Work Day Scheduler",
        imageUrl: scheduler,
        liveDemoUrl:'https://marekalexpolak.github.io/Work-Day-Scheduler/',
        sourceCodeUrl: "https://github.com/MarekAlexPolak/Work-Day-Scheduler",
    },
]

export default projectsData;