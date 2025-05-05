import { Footer, Navbar } from "./components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "./sections";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full overflow-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Explore />

      {/* <WhatsNew /> */}
      {/* <World /> */}
      <Insights />
      <GetStarted />
      <Feedback />
      {/* <Footer /> */}
    </div>
  );
}
