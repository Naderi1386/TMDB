import NavigationItems from "./NavigationItems";
const Navigation = () => {
  return (
    <nav className="flex items-center gap-6 text-white">
      <NavigationItems
        title="Movies"
        list={[
          { text: "Popular", href: "/movies?type=popular" },
          { text: "Now Playing", href: "/movies?type=now_playing" },
          { text: "Upcoming", href: "/movies?type=upcoming" },
          { text: "Top Rated", href: "/movies?type=top_rated" },
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
