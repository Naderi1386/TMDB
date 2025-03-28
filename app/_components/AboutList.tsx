import AboutListItems, { AboutItemType } from "./AboutListItems";

const items: AboutItemType[] = [
  {
    number: 1,
    text: "Every year since 2008, the number of contributions to our database has increased  With over 1,500,000 developers and companies using our platform, TMDB has become a premiere source for metadata.",
  },
  {
    number: 2,
    text: "Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and backdrops. On average, over 1,000 images are added every single day.",
  },
  {
    number: 3,
    text: "We're international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.",
  },
  {
    number: 4,
    text: "Our community is second to none. Between our staff and community moderators, we're always here to help. We're passionate about making sure your experience on TMDB is nothing short of amazing.",
  },
  {
    number: 5,
    text: "Trusted platform. Every single day our service is used by millions of people while we process over 10 billion requests. We've proven for years that this is a service that can be trusted and relied on.",
  },
];

const AboutList = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-3xl mt-20 mb-6">
        The TMDB advantage
      </h2>
      <ul className="w-[800px] mx-auto space-y-8">
        {items.map((item) => (
          <AboutListItems item={item} key={item.number} />
        ))}
      </ul>
    </div>
  );
};

export default AboutList;
