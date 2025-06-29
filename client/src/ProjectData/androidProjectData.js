import unoteImg from '../assets/Images/unotesandroid.png'
import umoneyImg from '../assets/Images/umoneyandroid.png'
import regretifyImg from '../assets/Images/regretifyandroid.png'
import regretifyImg1 from '../assets/Images/regretifyandroid1.png'
import regretifyImg2 from '../assets/Images/regretifyandroid2.png'
import regretifyImg3 from '../assets/Images/regretifyandroid3.png'


export const androidProjectsData = [
    {
        id: 5,
        imageUrl: regretifyImg,
        title: 'Regretify ',
        description:
            'Share Your Regrets Anonymously  Learn from Others. Grow Together.',
        detailDescription:
            `<p>This is the android app where you can post your own regrets even anonymously and connect to anyone to make your heart feel light</p>
           <ul>
             <li><strong>CRUD Operation :</strong> Easily create, read, update, and delete regrets post .</li>
             <li><strong>Personal Chat Rooms:</strong> Share your regrets with someone who understand you without any judgements:
             <li><strong>Communities and groups:</strong> Share your regrets into groups to feel that you are not alone in your mistake without any judgements:
               <ul>
                <li>Reactions</li>
                <li>Comments</li>
                <li>Bookmarks</li>
                <li>Chatting</li>
                <li>Add friends.</li>
               </ul>
             </li>
             <li><strong>User-Friendly Interface:</strong> A clean, minimalistic, and intuitive design using Jetpack Compose </li>
          </ul>`
        , techStack: ['Kotlin', 'Jetpack Compose', 'Node'],
        // githubLink: 'https://github.com/theprashantkumardas/UNotes',
        liveLink: 'https://regretify.netlify.app/',
        images: [
            regretifyImg1,
            regretifyImg2,
            regretifyImg3,

        ],
        category: 'android'
    },
    {
        id: 6,
        imageUrl: unoteImg,
        title: 'U Notes app ',
        description:
            'U Notes helps you keep track of all your important ideas, tasks, and information in one place.',
        detailDescription:
            `<p>U Notes helps you keep track of all your important ideas, tasks, and information in one place. Accessible anytime, anywhere. Simplify your life with our intuitive and elegant design.</p>
           <ul>
             <li><strong>CRUD Operations:</strong> Easily create, read, update, and delete notes to keep everything organized in one place.</li>
             <li><strong>Share:</strong> Share your notes in two convenient formats:
               <ul>
                <li>PDF: Export your notes as a PDF for easy sharing and printing.</li>
                <li>Text: Share your notes in simple text format.</li>
               </ul>
             </li>
             <li><strong>User-Friendly Interface:</strong> A clean, minimalistic, and intuitive design using Jetpack Compose that makes managing your notes a breeze.</li>
          </ul>`
        , techStack: ['Kotlin', 'Jetpack Compose', 'Room Database'],
        githubLink: 'https://github.com/theprashantkumardas/UNotes',
        liveLink: 'https://unotesapp.netlify.app/',
        images: [
            unoteImg,

        ],
        category: 'android'
    },
    {
        id: 7,
        imageUrl: umoneyImg,
        title: 'U Money app',
        description:
            'U Money a simple ui jetpack compose app for tracking your expenses. ',
        detailDescription:
            `<p>A simple only ui build using jetpack compose  </p>
           <ul>
             <li><strong> UI :</strong> Easily create, read, update, and delete notes to keep everything organized in one place.</li>
             
             <li><strong>User-Friendly Interface:</strong> A clean, minimalistic, and intuitive design using Jetpack Compose that makes managing your notes a breeze.</li>
          </ul>`,
          techStack: ['Kotlin', 'Jetpack Compose', 'Room Database'],
          githubLink: 'https://github.com/theprashantkumardas/U_Money',
        liveLink: '#',
        images: [
            umoneyImg,
        ],
        category: 'android'
    },
    // {
    //     id: 6,
    //     imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Project Title 4',
    //     description:
    //         'Project description for android.',
    //     detailDescription:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada.',
    //     techStack: ['React', 'Node.js', 'Express'],
    //     githubLink: '#',
    //     liveLink: '#',
    //     images: [
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     ],
    //     category: 'android'
    // },
    // {
    //     id: 7,
    //     imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Project Title 4',
    //     description:
    //         'Project description for android.',
    //     detailDescription:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada.',
    //     techStack: ['React', 'Node.js', 'Express'],
    //     githubLink: '#',
    //     liveLink: '#',
    //     images: [
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     ],
    //     category: 'android'
    // },
    // {
    //     id: 8,
    //     imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Project Title 4',
    //     description:
    //         'Project description for android.',
    //     detailDescription:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada.',
    //     techStack: ['React', 'Node.js', 'Express'],
    //     githubLink: '#',
    //     liveLink: '#',
    //     images: [
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     ],
    //     category: 'android'
    // },

];