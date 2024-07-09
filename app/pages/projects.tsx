import {projects} from "../data"

export default function Project() {
   return (
   <>
      {projects.map((project,index) => (
         <li className="mb-12" key={index}>
            <div
               className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
               <div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
               </div>
               <img src={project.img} width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" alt="" />
               <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">{project.title}</h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
               </div>
            </div>
         </li>
      ))}
   </>
   
   )
}