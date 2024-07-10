import { useState } from 'react';

export default function Nav() {
  const [activeLink, setActiveLink] = useState('#about');
  const handleClick = (link:any) => {
    setActiveLink(link);
  };

  const isActive = (link:any) => activeLink === link;
  const isAboutActive = isActive('#about');
  const isExperienceActive = isActive('#experience');
  const isProjectsActive = isActive('#projects');

  const dynamicWidthClass = isAboutActive ? 'w-16' : 'w-8';
  const dynamicWidthClass1 = isExperienceActive ? 'w-16' : 'w-8';
  const dynamicWidthClass2 = isProjectsActive ? 'w-16' : 'w-8';
  const dynamicBgClass = isAboutActive ? 'bg-slate-200' : 'bg-slate-600';
  const dynamicBgClass1 = isExperienceActive ? 'bg-slate-200' : 'bg-slate-600';
  const dynamicBgClass2 = isProjectsActive ? 'bg-slate-200' : 'bg-slate-600';

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a
            href="#about"
            className={`group flex items-center py-3 ${isActive('#about') ? 'active' : ''}`}
            onClick={() => handleClick('#about')}
          >
            <span className={`nav-indicator mr-4 h-px ${dynamicWidthClass} ${dynamicBgClass} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
            <span className={`nav-text text-xs font-bold uppercase tracking-widest text-${isActive('#about') ? 'slate-200' : 'slate-500'} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
              About
            </span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={`group flex items-center py-3 ${isActive('#experience') ? 'active' : ''}`}
            onClick={() => handleClick('#experience')}
          >
            <span className={`nav-indicator mr-4 h-px ${dynamicWidthClass1} ${dynamicBgClass1} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
            <span className={`nav-text text-xs font-bold uppercase tracking-widest text-${isActive('#experience') ? 'slate-200' : 'slate-500'} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
              Experience
            </span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`group flex items-center py-3 ${isActive('#projects') ? 'active' : ''}`}
            onClick={() => handleClick('#projects')}
          >
            <span className={`nav-indicator mr-4 h-px ${dynamicWidthClass2} ${dynamicBgClass2} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
            <span className={`nav-text text-xs font-bold uppercase tracking-widest text-${isActive('#projects') ? 'slate-200' : 'slate-500'} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}