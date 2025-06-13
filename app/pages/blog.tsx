import Image from "next/image"
import { blogs } from "../data"

export default function Blog() {
   return (<>
      <ul className="group/list">
         {blogs.map((blog, index) => (
            <li className="mb-12" key={index}>
               <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <Image src={blog.image} alt="Blog 1" loading="lazy" width={200} height={100} decoding="async" className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2" />
                  <div className="z-10 col-span-6">
                     <p className="-mt-1 text-sm font-semibold leading-6">{blog.year}</p>
                     <h3 className="-mt-1">
                        <a href={blog.link} target="_blank" rel="noreferrer noopener" aria-label={blog.title} className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                           <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                           <span className="inline-block">{blog.title}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"></path></svg></span>
                        </a>
                     </h3>
                  </div>
               </div>
            </li>
         ))}
      </ul>
   </>)
}