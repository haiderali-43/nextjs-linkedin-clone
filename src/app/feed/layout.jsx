import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar/Navbar";
import Left from "@/components/LeftSide/Left";
import Area from "@/components/FeedArea/Area";
import Right from "@/components/RightSide/Right";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linkedin Clone",
  description: "Developed by Haider Ali",
};

export default function RootLayout({ children }) {
  return (
 
      <html lang="en">
        <body>
            <Navbar/>
            <div className="flex">
                <Left/>
                <Area/>
                <Right/>
            </div>
        </body>
      </html>
  
  );
}
