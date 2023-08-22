import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Bell } from "lucide-react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const menulinks = [
  { name: "Virtual Puja", icon: 'om/zuffhowlgwycbjljvld5', pagelink: "/virtualpuja", color:"text-sky-600"},
  { name: "Guided Puja", icon: "om/ggztjhor8gbkwesud7oa", pagelink: "/guidedpuja" },
  { name: "Puja Scheduler", icon: "om/mssgudlvcvmgqx5fxc1q", pagelink: "/pujascheduler" },
  { name: "Sanatana Resources", icon: "om/f0cmtw5dbubexyzppoed", pagelink: "/resources" },
  { name: "Ishta Devtas", icon: "om/t3ysu7svdprndvx73vmo", pagelink: "/ishtadevtas" },
  { name: "Temple Details", icon: "om/esfphmeax1shrofhjo1l", pagelink: "/templedetails" },
  { name: "Hindu Community", icon: "om/amdoyds7rm8mbgbrcehp", pagelink: "/community" },
  { name: "Q and A", icon: "om/fzxvkkr5p6p8z3daoppo", pagelink: "/qna" },
  { name: "Donations", icon: "om/txprm2rq2r8rgygwmyb1", pagelink: "/volunteering" },
];
