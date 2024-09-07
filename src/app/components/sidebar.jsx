// import {
//   LayoutGrid,
//   Library,
//   ListMusic,
//   Mic2,
//   Music,
//   Music2,
//   PlayCircle,
//   Radio,
//   User,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"


// export function Sidebar({ className, playlists }) {
//   return (
//     <div className={cn("pb-12", className)}>
//       <div className="space-y-4 py-4">
//         <div className="px-4 py-2">
//           <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
//             Discover
//           </h2>
//           <div className="space-y-1">
//             <Button
//               variant="secondary"
//               size="sm"
//               className="w-full justify-start"
//             >
//               <PlayCircle className="mr-2 h-4 w-4" />
//               Listen Now
//             </Button>
//             <Button variant="ghost" size="sm" className="w-full justify-start">
//               <LayoutGrid className="mr-2 h-4 w-4" />
//               Browse
//             </Button>
//             <Button variant="ghost" size="sm" className="w-full justify-start">
//               <Radio className="mr-2 h-4 w-4" />
//               Radio
//             </Button>
//           </div>
//         </div>
//         <div className="px-4 py-2">
//           <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
//             Library
//           </h2>
//           <div className="space-y-1">
//             <Button variant="ghost" size="sm" className="w-full justify-start">
//               <ListMusic className="mr-2 h-4 w-4" />
//               Playlists
//             </Button>
//             <Button variant="ghost" size="sm" className="w-full justify-start">
//               <Music2 className="mr-2 h-4 w-4" />
//               Songs
//             </Button>
//             <Button variant="ghost" size="sm" className="w-full justify-start">
//               <User className="mr-2 h-4 w-4" />
//               Made for You
//             </Button>
//             <Button variant="ghost" size="sm" className="w-full justify-start">
//               <Mic2 className="mr-2 h-4 w-4" />
//               Artists
//             </Button>
//             <Button variant="ghost" size="sm" className="w-full justify-start">
//               <Library className="mr-2 h-4 w-4" />
//               Albums
//             </Button>
//           </div>
//         </div>
//         <div className="py-2">
//           <h2 className="relative px-6 text-lg font-semibold tracking-tight">
//             Playlists
//           </h2>
//           <ScrollArea className="h-[300px] px-2">
//             <div className="space-y-1 p-2">
//               {playlists?.map((playlist) => (
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="w-full justify-start font-normal"
//                 >
//                   <ListMusic className="mr-2 h-4 w-4" />
//                   {playlist}
//                 </Button>
//               ))}
//             </div>
//           </ScrollArea>
//         </div>
//       </div>
//     </div>
//   )
// }

// <Sidebar />

// ------------------------------------------------------------

// import Link from "next/link";
// import { PanelsTopLeft } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { useStore } from "@/hooks/use-store";
// import { Button } from "@/components/ui/button";
// import { Menu } from "@/components/admin-panel/menu";
// import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
// import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle";

// export function Sidebar() {
//   const sidebar = useStore(useSidebarToggle, (state) => state);

//   if (!sidebar) return null;

//   return (
//     <aside
//       className={cn(
//         "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
//         sidebar?.isOpen === false ? "w-[90px]" : "w-72"
//       )}
//     >
//       <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
//       <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
//         <Button
//           className={cn(
//             "transition-transform ease-in-out duration-300 mb-1",
//             sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
//           )}
//           variant="link"
//           asChild
//         >
//           <Link href="/dashboard" className="flex items-center gap-2">
//             <PanelsTopLeft className="w-6 h-6 mr-1" />
//             <h1
//               className={cn(
//                 "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
//                 sidebar?.isOpen === false
//                   ? "-translate-x-96 opacity-0 hidden"
//                   : "translate-x-0 opacity-100"
//               )}
//             >
//               Brand
//             </h1>
//           </Link>
//         </Button>
//         <Menu isOpen={sidebar?.isOpen} />
//       </div>
//     </aside>
//   );
// }

// ----------------------------------

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"


// No need for type annotations in JavaScript
export function Sidebar({ className, playlists }) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Listen Now
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Browse
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                <circle cx="12" cy="12" r="2" />
                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
              </svg>
              Radio
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Playlists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="8" cy="18" r="4" />
                <path d="M12 18V2l7 4" />
              </svg>
              Songs
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Made for You
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
              Artists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m16 6 4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>
              Albums
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

