import NavigationItems from "./NavigationItems";

const Navigation = () => {
  return (
    <nav className="flex items-center gap-6 text-white">
      <NavigationItems
        title="Movies"
        list={[
          { text: "Popular", href: "/" },
          { text: "Now Playing", href: "/" },
          { text: "Upcoming", href: "/" },
          { text: "Top Rated", href: "/" },
        ]}
      />
      <NavigationItems
        title="TV Shows"
        list={[
          { text: "Popular", href: "/" },
          { text: "Airing Today", href: "/" },
          { text: "On TV", href: "/" },
          { text: "Top Rated", href: "/" },
        ]}
      />
    </nav>
  );
};

export default Navigation;
