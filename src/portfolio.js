/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashiqul Islam", // Your name
  title: "Hi all, I'm Ashiqul Islam",
  subTitle: emoji(
    "🌐 Engineering tomorrow’s network resilience, today ⚡\n" +
      "🚀 Leading Bangladesh’s largest core IP backbone with precision and impact ⚡ — ensuring nationwide network resilience where uptime isn’t optional ⏱️ and milliseconds define critical momentum. I combine deep-rooted networking expertise 🌐 with a forward-thinking mindset 🧠, driving automation 🤖, scalability 📈, and operational excellence 🛠️ to modernize legacy systems and power the digital backbone of Bangladesh 🇧🇩"
  ),

  resumeLink:
    "https://drive.google.com/file/d/1FStgPMWZWmOJtiN5Zay75k5eXVCfWcSE/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/iamashiqul",
  linkedin: "https://www.linkedin.com/in/md-ashiqul-islam-150107/",
  gmail: "ashiqulislam.eashan@gmail.com",
  facebook: "https://www.facebook.com/ashiqulislam.eashan",
  medium: "https://medium.com/@ashiqulislam.eashan",
  //gitlab: "https://gitlab.com/abcd",
  //stackoverflow: "https://stackoverflow.com/users/xxxxx/abcd",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Real-world experience meets strategic leadership.\n" +  
              "Driving nationwide network operations, resolving high-impact incidents, optimizing performance, and ensuring resilient, SLA-compliant services. I focus on automation, scalability, and multi-vendor network excellence, while mentoring engineers and driving operational innovation",
  skills: [
    emoji(
      "🔌 Maintain and provision L2/L3 services over IP/MPLS & GPON architectures"
    ),
    emoji("🔧 Troubleshoot mission-critical networks in live environments under real-time pressure  "),
    emoji(
      "📡 Ensure uninterrupted connectivity for Telcos, ISPs, IIGs, IGWs, and Govt. sectors"
    ),

    emoji(
      "🛠️ Analyze and optimize network performance using specialized monitoring platforms"
    ),
    emoji(
      "🎟️ Streamline provisioning and support via structured ticket workflows"
    ),
    emoji(
      "🤝 Collaborate across field, planning, and NOC teams to uphold strict SLAs"
    ),
    emoji(
      "⚙️ Experiment with DevOps tools (Docker, Git, Ansible) to explore network automation and IaC"
    ),
    emoji(
      "🧠 Learning cloud-native concepts to align legacy networks with modern architectures"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "IP/Ethernet",
      fontAwesomeClassname: "fas fa-ethernet"
    },
    {
      skillName: "Routing Protocols",
      fontAwesomeClassname: "fas fa-route"
    },
    {
      skillName: "MPLS L2/L3 VPN",
      fontAwesomeClassname: "fas fa-road"
    
    },
    {
      skillName: "GPON/FTTX",
      fontAwesomeClassname: "fas fa-lightbulb"
      
    },
    {
      skillName: "Optical Network",
      fontAwesomeClassname: "fas fa-wave-square"
    },
    {
      skillName: "Cisco/Huawei CLIs",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "SDH/DWDM",
      fontAwesomeClassname: "fas fa-satellite-dish"
    },
    {
      skillName: "Python for Automation",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "NMS Tools",
      fontAwesomeClassname: "fas fa-desktop"
    },
    {
      skillName: "Ticketing System",
      fontAwesomeClassname: "fas fa-clipboard-list"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
     {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "MacOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
     {
      //skillName: "docker",
      //fontAwesomeClassname: "fab fa-docker"
    },
    {
      //skillName: "firebase",
      //fontAwesomeClassname: "fas fa-fire"
    },
    {
      //skillName: "python",
      //fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pabna University of Science and Technology",
      logo: require("./assets/images/pustLogo.png"),
      subHeader: "B.Sc. Engineering in Computer Science and Engineering",
      duration: "January 2015 - December 2018",
      desc: "Studied core computer science with focus on networking, systems, programming and applied machine learning. Completed a deep learning–based thesis on abstractive text summarization.",
      descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Dhaka City College",
      logo: require("./assets/images/dccLogo.png"),
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "July 2011 - April 2013",
      desc: "Focused on Physics, Mathematics, and ICT—paving the way for engineering.",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Service-Centric Network Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "High-Precision Fault Isolation ",
      progressPercentage: "92%"
    },
    {
      Stack: "Legacy-to-Modern Infra Transitioning",
      progressPercentage: "88%"
    },
    {
      Stack: "Real-Time Operational Decision-Making",
      progressPercentage: "95%"
    },
    {
      Stack: "Infrastructure-Aware Automation",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior IP Engineer",
      company: "Fiber@Home Ltd.",
      companylogo: require("./assets/images/fhllogonew.png"),
      date: "July 2025 – Present",
      desc: "Leading Bangladesh’s core IP backbone operations with end-to-end ownership across escalations, coordination, and disaster recovery",
      descBullets: [
        "Delivered stable nationwide operations by leading across nationwide MPLS, IP, GPON, and FTTx networks, consistently meeting SLA targets in multi-vendor environments",
        "Eliminated recurring outages through advanced root-cause analysis, proactive health audits, and capacity optimization, significantly improving backbone reliability and convergence performance",
        "Accelerated service restoration during high-impact incidents and national emergencies by coordinating NOC, DWDM Transmission, and Field O&M teams, ensuring rapid rerouting and minimal customer downtime"
      ]
    },
    {
      role: "IP Engineer",
      company: "Fiber@Home Ltd.",
      companylogo: require("./assets/images/fhllogonew.png"),
      date: "December 2022 – June 2025",
      desc: "Supported Bangladesh’s core transmission backbone through high-pressure ops, national-scale service coordination, and disaster recovery efforts.",
      descBullets: [
        "Resolved 2,500+ high-severity tickets involving outages, performance degradation, and complex provisioning across backbone and access layers",
        "Led nationwide emergency recovery operations during Cyclone Midhili, Cyclone Remal, and the 2024 Feni–Noakhali–Chattogram floods, ensuring rapid restoration of critical services",
        "Enabled fast rerouting and traffic restoration during major backbone incidents (including the Khaja incident) affecting core PoPs and long-haul transmission rings"
      ]
    },
    {
      role: "Infrastructure Planning Intern",
      company: "Fiber@Home Ltd.",
      companylogo: require("./assets/images/fhllogonew.png"),
      date: "March 2022 – July 2022",
      desc: "Gained hands-on exposure to nationwide transmission infrastructure and service planning.",
      descBullets: [
        "Assisted in link design and capacity mapping using GIS and network topology tools.",
        "Shadowed senior engineers during PoP deployment and fiber route validation.",
        "Helped prepare documentation for link feasibility, provisioning plans, and rollout schedules.",
        "Observed NTTN coordination workflows and multi-operator integration scenarios."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set true to show this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set true to show this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      subtitle:
        "Completed training at Linux Pathshala, covering core networking concepts and Cisco technologies.",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1BHnj92F6ePCN60kATLQu5znzgXoU2UI5/view?usp=drive_link"
        }
        /*{
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      */]
    },
    /*{
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  */],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Curious by nature, engineer by profession—I write to connect the dots between systems, code, and real-world impact.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@ashiqulislam.eashan/network-security-for-engineers-real-threats-practical-defenses-03c0bcfc2f54",
      title: "Network Security for Engineers: Real Threats & Practical Defenses",
      description:
        "A comprehensive guide for engineers to understand network security threats and implement effective defenses."
    },
    {
      url: "https://medium.com/@ashiqulislam.eashan/understanding-the-linux-operating-system-and-its-file-system-d7de1bac3f98",
      title: "Understanding the Linux Operating System and its File System",
      description:
        "A deep dive into the Linux operating system, exploring its architecture, components, and the intricacies of its file system."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest 2022",
      slides_url: "https://bit.ly/abcd",
      event_url: "https://www.facebook.com/events/xxxxxxxx/"
    }
  ],
  display: false // Set true to show this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://abcd.xyz/podcast/episode1",
  ],
  display: false // Set true to show this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Tech is better when shared. Ping me anytime",
  number: "+880-1747163387",
  email_address: "ashiqulislam.eashan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
