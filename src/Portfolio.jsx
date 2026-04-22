import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import chat from "./image/chatyou.png"
import socialImg from "./image/socialmedia.jpg";
import eletro from "./image/a1.png"
/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const NAME = "Thirupathi Krishnan";

const skills = [
  { icon: "⚛️",  name: "React JS",     color: "#61dafb" },
  { icon: "☕",  name: "Java",          color: "#f89820" },
  { icon: "🟨",  name: "JavaScript",   color: "#f7df1e" },
 
   
  { icon: "🌿",  name: "Spring Boot",  color: "#6db33f" },
  { icon: "🐬",  name: "MySQL",        color: "#4479a1" },
  { icon: "🍃",  name: "MongoDB",      color: "#4db33d" },
  
];
const projects = [
  {
    id: 1,
    title: "Chat You",
    description: "A real-time chat application that allows users to send and receive messages instantly with a clean UI.",
    technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    features: [
      "Real-time messaging",
      "User authentication",
      "Responsive UI design",
      "Private and group chats"
    ],
    github: "https://github.com/thiru781/chatyou.git",
    live: "https://chatyou-pi.vercel.app/",
    image: chat
  },
  
  {
    id: 2,
    title: "Eletro",
    description: "An e-commerce electronics website where users can browse products, view details, and add items to cart.",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "Product listing and filtering",
      "Add to cart functionality",
      "Responsive design",
      "User-friendly UI",
      "Product detail page"
    ],
    github: "https://github.com/thiru781/frontenteletro.git",
    
    image: eletro,
    status: "Completed",
    role: "Frontend Developer",
    year: "2026"
  },
  {
  id: 3,
  title: "Social Media Platform",
  description: "A full-stack social media web application built using Java Spring Boot where users can create posts, like, comment, and interact with other users.",
  technologies: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
  features: [
    "User authentication and authorization",
    "Create, edit, and delete posts",
    "Like and comment system",
    "Follow/unfollow users",
    "Responsive UI design"
  ],
  github: "https://github.com/thiru781/socialmediabackend.git",
  live: null,
  image: socialImg,   // import this like others
  status: "Completed",
  role: "Full Stack Developer",
  year: "2026"
},

];



const experiences = [
  // {
  //   emoji: "🚀",
  //   title: "Full Stack Developer",
  //   company: "Absrve Tech",
  //   location: "Madurai",
  //   period: "Present",
  //   type: "Full-time",
  //   bullets: [
  //     "Building full-stack web applications using React JS and Spring Boot.",
  //     "Designing and developing RESTful APIs with Java Spring Boot backend.",
  //     "Managing databases with MySQL and MongoDB for scalable data solutions.",
  //     "Collaborating with cross-functional teams to deliver production-ready features.",
  //   ],
  // },
  {
    emoji: "💡",
    title: "Software Engineer Intern",
    company: "Absrve Tech",
    location: "Madurai",
    period: "Internship",
    type: "Internship",
    bullets: [
      "Worked as a Software Engineer Intern at Absrve Tech, Madurai.",
      "Learned and implemented full-stack development practices.",
      "Contributed to real-world projects using Java, React JS, and MySQL.",
      "Gained hands-on experience in REST API design and integration.",
    ],
  },
  // {
  //   emoji: "🌱",
  //   title: "Software Engineer Intern",
  //   company: "LivNSense GreenOps",
  //   location: "Bengaluru",
  //   period: "Feb 2025 – Present",
  //   type: "Internship",
  //   bullets: [
  //     "Developing and maintaining backend web applications using Python (Django) and PostgreSQL.",
  //     "Designing and managing RESTful API endpoints to enhance application features.",
  //     "Optimized API performance, reducing execution time by up to 50%.",
  //   ],
  // },
];

const contactItems = [
  { icon: "📍", label: "Location",  val: "thirupathur,sivagangai, India" },
  { icon: "✉️", label: "Email",     val: "thirupathiff007@gmail.com" },
  { icon: "🐙", label: "GitHub",    val: "github.com/thiru781" },
  { icon: "💼", label: "LinkedIn",  val: "www.linkedin.com/in/thiru-pathi" },
];

/* ─────────────────────────────────────────
   CSS
───────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
:root{
  --bg:#080c14; --bg2:#0e1420; --bg3:#141b2d;
  --acc:#00d4ff; --acc2:#7c3aed; --acc3:#f59e0b;
  --text:#e2e8f0; --muted:#64748b; --border:rgba(255,255,255,0.06);
}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:'Outfit',sans-serif;overflow-x:hidden;}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 6vw;display:flex;justify-content:space-between;align-items:center;background:rgba(8,12,20,0.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);}
.nav-logo{font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:3px;color:var(--acc);}
.nav-links{display:flex;gap:32px;}
.nav-links a{font-size:.85rem;font-weight:500;color:var(--muted);text-decoration:none;letter-spacing:1px;text-transform:uppercase;transition:color .2s;}
.nav-links a:hover{color:var(--acc);}

/* HERO */
.hero{min-height:100vh;display:flex;align-items:center;padding:120px 8vw 80px;position:relative;overflow:hidden;}
.grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(0,212,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,.03) 1px,transparent 1px);background-size:60px 60px;pointer-events:none;}
.glow1{position:absolute;width:700px;height:700px;background:radial-gradient(circle,rgba(0,212,255,.07) 0%,transparent 65%);top:-100px;right:-150px;pointer-events:none;animation:gpulse 6s ease-in-out infinite;}
.glow2{position:absolute;width:500px;height:500px;background:radial-gradient(circle,rgba(124,58,237,.07) 0%,transparent 65%);bottom:-50px;left:-80px;pointer-events:none;animation:gpulse 8s ease-in-out infinite reverse;}
@keyframes gpulse{0%,100%{transform:scale(1);opacity:1;}50%{transform:scale(1.08);opacity:.7;}}

.hero-inner{display:flex;align-items:center;justify-content:space-between;width:100%;gap:60px;flex-wrap:wrap;position:relative;z-index:1;}
.hero-left{flex:1;min-width:280px;}

.hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);border-radius:20px;padding:6px 16px;font-size:.78rem;font-weight:600;color:var(--acc);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:28px;opacity:0;animation:fadeUp .6s ease forwards .1s;}

.hero-name{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,8vw,7rem);line-height:.92;letter-spacing:2px;color:var(--text);display:flex;flex-wrap:wrap;gap:0 4px;}
.letter{display:inline-block;opacity:0;transform:translateY(50px) rotateX(-90deg);animation:ldrop .5s cubic-bezier(.22,1,.36,1) forwards;transition:color .15s;}
.letter:hover{color:var(--acc);}
.word-space{display:inline-block;width:.28em;}
@keyframes ldrop{to{opacity:1;transform:translateY(0) rotateX(0);}}

.hero-sub{margin-top:24px;font-size:1.05rem;color:var(--muted);line-height:1.75;max-width:460px;font-weight:300;opacity:0;animation:fadeUp .6s ease forwards 1.6s;}
.hero-sub strong{color:var(--acc);font-weight:600;}

.hero-ctas{display:flex;gap:16px;flex-wrap:wrap;margin-top:36px;opacity:0;animation:fadeUp .6s ease forwards 1.8s;}
.btn-p{padding:14px 32px;background:var(--acc);color:var(--bg);border:none;border-radius:8px;font-family:'Outfit',sans-serif;font-size:.9rem;font-weight:700;cursor:pointer;transition:all .25s;}
.btn-p:hover{background:#33dcff;transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,212,255,.3);}
.btn-o{padding:14px 32px;background:transparent;color:var(--text);border:1px solid var(--border);border-radius:8px;font-family:'Outfit',sans-serif;font-size:.9rem;font-weight:500;cursor:pointer;transition:all .25s;}
.btn-o:hover{border-color:var(--acc);color:var(--acc);transform:translateY(-2px);}

.stats-row{display:flex;gap:36px;flex-wrap:wrap;margin-top:48px;opacity:0;animation:fadeUp .6s ease forwards 2s;}
.stat-num{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:var(--acc);letter-spacing:1px;line-height:1;}
.stat-lbl{font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-top:4px;}

/* AVATAR */
.av-ring{width:280px;height:280px;border-radius:50%;position:relative;flex-shrink:0;opacity:0;animation:fadeIn .8s ease forwards 2s;}
.av-ring::before{content:'';position:absolute;inset:-4px;border-radius:50%;background:conic-gradient(var(--acc),var(--acc2),var(--acc3),var(--acc));animation:spin 4s linear infinite;z-index:0;}
.av-inner{position:relative;z-index:1;width:calc(100% - 8px);height:calc(100% - 8px);margin:4px;border-radius:50%;background:var(--bg2);display:flex;align-items:center;justify-content:center;font-size:5rem;overflow:hidden;}
@keyframes spin{to{transform:rotate(360deg);}}

/* SECTION */
.section{padding:100px 8vw;}
.sec-hdr{display:flex;align-items:center;gap:20px;margin-bottom:60px;}
.sec-num{font-family:'Bebas Neue',sans-serif;font-size:5rem;color:rgba(255,255,255,.04);line-height:1;letter-spacing:2px;user-select:none;}
.sec-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);letter-spacing:2px;color:var(--text);}
.sec-line{flex:1;height:1px;background:var(--border);}

/* SKILLS */
.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:16px;}
.sk-card{background:var(--bg2);border:1px solid var(--border);border-radius:16px;padding:28px 16px;display:flex;flex-direction:column;align-items:center;gap:12px;cursor:default;transition:all .3s;position:relative;overflow:hidden;}
.sk-card:hover{transform:translateY(-5px);border-color:rgba(255,255,255,.15);box-shadow:0 16px 40px rgba(0,0,0,.3);}
.sk-icon{font-size:2.2rem;line-height:1;}
.sk-name{font-size:.78rem;font-weight:600;color:var(--muted);letter-spacing:.5px;text-align:center;}

/* EXPERIENCE */
.exp-list{display:flex;flex-direction:column;gap:24px;}
.exp-card{background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:32px;display:grid;grid-template-columns:auto 1fr;gap:24px;transition:border-color .3s;position:relative;}
.exp-card::after{content:'';position:absolute;top:0;left:0;width:3px;height:100%;background:linear-gradient(180deg,var(--acc),var(--acc2));opacity:0;transition:opacity .3s;border-radius:20px 0 0 20px;}
.exp-card:hover{border-color:rgba(0,212,255,.22);}
.exp-card:hover::after{opacity:1;}
.exp-emoji{width:56px;height:56px;background:var(--bg3);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.7rem;flex-shrink:0;border:1px solid var(--border);}
.exp-title{font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:1px;color:var(--text);}
.exp-badge{font-size:.7rem;font-weight:600;padding:4px 12px;border-radius:20px;background:rgba(0,212,255,.1);color:var(--acc);border:1px solid rgba(0,212,255,.2);}
.exp-top{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:8px;}
.exp-company{font-size:.93rem;font-weight:600;color:var(--acc);margin-top:4px;}
.exp-meta{font-size:.8rem;color:var(--muted);margin-top:2px;}
.exp-bullets{list-style:none;margin-top:18px;display:flex;flex-direction:column;gap:10px;}
.exp-bullets li{font-size:.88rem;color:var(--muted);line-height:1.6;padding-left:20px;position:relative;}
.exp-bullets li::before{content:'▸';position:absolute;left:0;color:var(--acc);font-size:.75rem;top:3px;}

/* PROJECTS */
.projects-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:28px;
}

.project-card{
  background:var(--bg2);
  border:1px solid var(--border);
  border-radius:18px;
  overflow:hidden;
  transition:all .3s;
  display:flex;
  flex-direction:column;
}

.project-card:hover{
  transform:translateY(-6px);
  border-color:rgba(0,212,255,.25);
  box-shadow:0 12px 40px rgba(0,0,0,.3);
}

/* Image */
.project-img{
  width:100%;
  height:180px;
  overflow:hidden;
}

.project-img img{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform .4s;
}

.project-card:hover img{
  transform:scale(1.08);
}

/* Content */
.project-content{
  padding:20px;
}

.project-content h3{
  font-size:1.2rem;
  margin-bottom:10px;
}

.project-content p{
  font-size:.85rem;
  color:var(--muted);
  line-height:1.5;
}

/* Tech Stack */
.tech-stack{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:12px;
}

.tech-stack span{
  background:var(--bg3);
  border:1px solid var(--border);
  padding:4px 10px;
  font-size:.7rem;
  border-radius:20px;
  color:var(--acc);
}

/* Links */
.project-links{
  display:flex;
  gap:12px;
  margin-top:16px;
}

.project-links a{
  flex:1;
  text-align:center;
  padding:8px;
  font-size:.8rem;
  border-radius:8px;
  text-decoration:none;
  border:1px solid var(--border);
  color:var(--text);
  transition:.3s;
}

.project-links a:hover{
  border-color:var(--acc);
  color:var(--acc);
}

/* CONTACT */
.ct-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.ct-card{background:var(--bg2);border:1px solid var(--border);border-radius:16px;padding:26px;display:flex;align-items:center;gap:18px;transition:all .3s;cursor:pointer;}
.ct-card:hover{border-color:rgba(0,212,255,.25);transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,212,255,.07);}
.ct-icon{width:46px;height:46px;background:var(--bg3);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;}
.ct-lbl{font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:1px;font-weight:600;}
.ct-val{font-size:.88rem;color:var(--text);font-weight:500;margin-top:3px;word-break:break-all;}

/* FOOTER */
.footer{border-top:1px solid var(--border);padding:26px 8vw;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
.ft-logo{font-family:'Bebas Neue',sans-serif;font-size:1.05rem;letter-spacing:2px;color:var(--muted);}
.ft-copy{font-size:.78rem;color:var(--muted);}

/* ANIMATIONS */
@keyframes fadeUp{to{opacity:1;transform:translateY(0);}}
@keyframes fadeIn{to{opacity:1;}}

/* RESPONSIVE */
@media(max-width:768px){
  .hero-inner{flex-direction:column-reverse;text-align:center;}
  .hero-sub{margin:24px auto 0;}
  .hero-ctas{justify-content:center;}
  .stats-row{justify-content:center;}
  .av-ring{width:200px;height:200px;}
  .ct-grid{grid-template-columns:1fr;}
  .exp-card{grid-template-columns:1fr;}
  .nav-links{display:none;}
}
`;

/* ─────────────────────────────────────────
   LETTER ANIMATION COMPONENT
───────────────────────────────────────── */
function AnimatedName({ name }) {
  const words = name.split(" ");
  let charIdx = 0;
  return (
    <div className="hero-name">
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-flex" }}>
          {word.split("").map((ch) => {
            const delay = 0.3 + charIdx++ * 0.055;
            return (
              <span
                key={`${wi}-${ch}-${delay}`}
                className="letter"
                style={{ animationDelay: `${delay}s` }}
              >
                {ch}
              </span>
            );
          })}
          {wi < words.length - 1 && <span className="word-space" />}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   PORTFOLIO
───────────────────────────────────────── */
export default function Portfolio() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <style>{css}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-logo">TK</div>
        <div className="nav-links">
          {["home", "skills","Projects", "experience", "contact"].map((s) => (
            <a key={s} href={`#${s}`}>
              {s}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="grid-bg" />
        <div className="glow1" />
        <div className="glow2" />

        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">
              <span>●</span>&nbsp;Available for opportunities
            </div>

            <AnimatedName name={NAME} />

            <p className="hero-sub">
              Hello! I'm a <strong>Full Stack Developer</strong> from Madurai
              . Expert in{"React js"}
              <strong>React JS · Java Spring Boot · </strong>,
              MySQL, MongoDB .
            </p>

            <div className="hero-ctas">
              <button className="btn-p" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
              <button className="btn-o" onClick={() => scrollTo("experience")}>
                View Work ↓
              </button>
            </div>

            <div className="stats-row">
           <button style={{background:"blue" , border:"none" ,height:"30px",width:"300px" ,borderRadius:"10px"}}><a style={{color:"white"}} href="resume.pdf" download><b>Resume</b></a></button>   
            </div>
          </div>

          <div className="av-ring">
            <div className="av-inner">👨‍💻</div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <div className="sec-hdr">
          
          <h2 className="sec-title">Skills & Technologies</h2>
       
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="sk-card" key={s.name}>
              <span className="sk-icon">{s.icon}</span>
              <span className="sk-name">{s.name}</span>
            </div>
          ))}
        </div>
 
      </section>

{/* {Projects } */}
<section className="section" id="Projects">
  <div className="sec-hdr">
    <h2 className="sec-title">My Projects</h2>
  </div>

  <div className="projects-grid">
    {projects.map((item) => (
      <div className="project-card" key={item.id}>
        
        {/* Image */}
        <div className="project-img">
          <img src={item.image} alt={item.title} />
        </div>

        {/* Content */}
        <div className="project-content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          {/* Tech Stack */}
          <div className="tech-stack">
            {item.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>

          {/* Buttons */}
          <div className="project-links">
            <a href={item.github} target="_blank">GitHub</a>  
<a
  href={item.live || "#"}
  target="_blank"
  style={{
    pointerEvents: item.live ? "auto" : "none",
    opacity: item.live ? 1 : 0.5
  }}
>
    Live
</a>
          </div>
        </div>

      </div>
    ))}
  </div>
</section>

      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience">
        <div className="sec-hdr">
          <div className="sec-num"></div>
          <h2 className="sec-title">Work Experience</h2>
           
        </div>
        <div className="exp-list">
          {experiences.map((e, i) => (
            <div className="exp-card" key={i}>
              <div className="exp-emoji">{e.emoji}</div>
              <div>
                <div className="exp-top">
                  <div className="exp-title">{e.title}</div>
                  <span className="exp-badge">{e.type}</span>
                </div>
                <div className="exp-company">{e.company}</div>
                <div className="exp-meta">
                  📍 {e.location}&nbsp;·&nbsp;🗓 {e.period}
                </div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section" id="contact">
        <div className="sec-hdr">
          <div className="sec-num"></div>
          <h2 className="sec-title">Get In Touch</h2>
          
        </div>
        <div className="ct-grid">
          {contactItems.map((c) => (
            <div className="ct-card" key={c.label}>
              <div className="ct-icon">{c.icon}</div>
              <div>
                <div className="ct-lbl">{c.label}</div>
                <div className="ct-val">{c.val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="ft-logo">THIRUPATHI KRISHNAN</div>
        <div className="ft-copy">
          © {new Date().getFullYear()} — Crafted with ❤️ in India
        </div>
      </footer>
    </div>
  );
}
