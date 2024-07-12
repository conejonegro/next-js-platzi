
import { Montserrat, Roboto_Mono } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: '--font-montserrat',
  });
  
 export  const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: '--font-roboto-mono',
  });