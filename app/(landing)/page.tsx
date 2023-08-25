import { Button } from "@/components/ui/button";
// import { ReloadIcon } from "@radix-ui/react-icons";
import Landingnav from "@/components/Landingnav";
import Landinghero from "@/components/Landinghero";
import Landingvideo from "@/components/Landingvideo";
import Footer from "@/components/Footer";
import Cloudinarysamplephotodisplay from "@/components/cloudinarysamplephotodisplay"
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Landingnav />
      <Landinghero />
      <h3 className="dark:text-white text-zinc-900 tracking-wider text-[10px] md:text-[12px] lg:text-[14px] font-extrabold opacity-90 dark:bg-amber-700 bg-yellow-100 flex items-center pt-6 px-9 pb-9">
        <span className="italic bold text-saffron dark:text-yellow-500">The LOGO:</span>The circle
        represents the universe, and the lotus flower represents purity and
        enlightenment. The lamp represents knowledge and wisdom, and the bell
        represents peace and harmony.
      </h3>
      <Landingvideo />
      <h3 className="dark:text-white text-zinc-900 tracking-wider text-[10px] md:text-[12px] lg:text-[14px] font-extrabold opacity-90 dark:bg-amber-700 bg-yellow-100 flex items-center pt-6 px-9 pb-9">
        <span className="italic bold dark:text-yellow-500 text-saffron pr-3">OM:</span>
        The OM mantra is a sacred sound in Hinduism, Buddhism, Sikhism, and
        Jainism. It is considered to be the primordial sound of the universe,
        and it is said to represent the union of the physical and spiritual
        worlds. Chanting Om is a powerful practice that can have a number of
        benefits for the mind, body, and spirit.
      </h3>

      <ul className="hidden lg:flex lg:flex-col dark:text-white text-zinc-900 text-[8px] md:text-[10px] lg:text-[14px] opacity-70 px-24 py-3 font-bold italic">
        <li>
          <span className="font-extrabold uppercase" >The circle: </span>The circle is a universal symbol of wholeness and unity.
          It represents the interconnectedness of all things in the universe. In
          Hinduism, the circle is also a symbol of the soul.
        </li>
        <br />
        <li>
          <span className="font-extrabold uppercase">The word "OM": </span>The word "OM" is a sacred syllable in Hinduism. It is
          said to represent the universe and the three states of consciousness:
          waking, dreaming, and deep sleep.
        </li>
        <br />
        <li>
          <span className="font-extrabold uppercase">The lotus flower: </span>The lotus flower is a symbol of purity and
          enlightenment in Hinduism. It grows in muddy water, but it blossoms
          into a beautiful flower. This symbolizes the ability to rise above our
          challenges and achieve enlightenment.
        </li>
        <br />
        <li>
          <span className="font-extrabold uppercase">The lamp: </span>The lamp is a symbol of knowledge and wisdom in Hinduism. It
          represents the light of truth that dispels the darkness of ignorance.
        </li>
        <br />
        <li>
          <span className="font-extrabold uppercase">The bell:</span> The bell is a symbol of peace and harmony in Hinduism. It is
          said to awaken us from our slumber and remind us of our true nature.
        </li>
      </ul>

      
      
  <Cloudinarysamplephotodisplay />
      <Footer />
    </>
  );
}
