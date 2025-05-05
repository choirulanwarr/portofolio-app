"use client"
import ListExperience from './pages/experience'
import React, { useEffect, useState } from 'react';
import Footer from './pages/footer';
import Project from './pages/projects';
import Social from './pages/social';
import Nav from './pages/nav';
import Blog from './pages/blog';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseXpx = event.pageX;
      const mouseYpx = event.pageY;

      setMousePosition({ x: mouseXpx, y: mouseYpx });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Choirul Anwar</a></h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Backend Developer</h2>
              <p className="mt-4 max-w-xs leading-normal">I build exceptional and accessible to ensure data storage functions, website and other server-side functions run well. They will focus on databases, scripting, and website architecture.</p>
              <Nav />
            </div>
            <Social/>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-16 lg:mb-16 lg:scroll-mt-16" aria-label="About me">
              <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <p className="mb-4">Hi Im and I graduated from <a href="https://uty.ac.id/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Universitas Teknologi Yogyakarta</a> of Yogyakarta, Indonesia in 2019 with a degree in Computer Science. My interests are in Back End Engineering is less visual, but far more functional. Back-end strength is its utility, you can store and query data, connect with apis, automate anything.</p>
              <p className="mb-4">Experience working in using framework <a href="https://gin-gonic.com/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Gin-Gonic</a>, <a href="https://laravel.com/" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Laravel</a> and language programming is Golang, PHP, Javascript ​as data storage using PostgreSQL, MySQL for ± 3 years for creating, developing, maintaining and testing applications.</p>
              <p className="mb-4">Designed and created more than 20 applications for functional needs according to user needs.</p>
            </section>
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-16 lg:mb-16 lg:scroll-mt-16" aria-label="Work experience">
              <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
              </div>
              <div>
                <ListExperience/>
                <div className="mt-12">
                  <a className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/resume_2.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Resume (opens in a new tab)">
                  <span>View Full<span className="inline-block">&nbsp;Resume<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path></svg>
                  </span></span>
                  </a>
                </div>
              </div>
            </section>
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
              <div>
                <Project/>
                <div className="mt-12">
                  <a className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/project" aria-label="View Full Project Archive">
                  <span>View Full<span className="inline-block">&nbsp;Projects Archive<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path></svg>
                  </span></span>
                  </a>
                </div>
              </div>
            </section>
            <section id="writting" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Writting</h2>
              </div>
              <div>
                <Blog />
              </div>
            </section>
            <Footer/>
          </main>
        </div>
      </div>
    </div>
  )
}
