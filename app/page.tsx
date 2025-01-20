import Header from "./ui/components/home/header";
import Carosel from "./ui/components/home/carosel";
import Banner from "./ui/components/home/banner";
import Services from "./ui/components/home/services";
import Processes from "./ui/components/home/processes";
import Ratings from "./ui/components/home/ratings";
import FaqsContainer from "./ui/components/home/faqs-container";

export default function Home() {
  return (
    <>
      <Header />
      <Carosel />
      <Banner />
      <Services />
      <Processes />
      <Ratings />
      <FaqsContainer />
    </>
  );
}
