import { useEffect, useState } from 'react';

export default function Nav() {
  const [activeLink, setActiveLink] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#about', '#experience', '#projects'];
      let current: string = activeLink;

      for (const id of sections) {
        const section = document.querySelector(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
            break;
          }
        }
      }

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleClick = (link:any) => {
    setActiveLink(link);
  };

  const isActive = (link:any) => activeLink === link;

  const getClasses = (link: string) => {
    const isActiveLink = isActive(link);
    return {
      width: isActiveLink ? 'w-16' : 'w-8',
      bg: isActiveLink ? 'bg-slate-200' : 'bg-slate-600',
      text: `text-${isActiveLink ? 'slate-200' : 'slate-500'}`
    };
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {['#about', '#experience', '#projects'].map((link) => {
          const label = link.replace('#', '').replace(/^\w/, (c) => c.toUpperCase());
          const { width, bg, text } = getClasses(link);

          return (
            <li key={link}>
              <a
                href={link}
                className={`group flex items-center py-3 ${isActive(link) ? 'active' : ''}`}
                onClick={() => handleClick(link)}
              >
                <span className={`nav-indicator mr-4 h-px ${width} ${bg} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest ${text} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}