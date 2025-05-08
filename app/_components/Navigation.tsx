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
          { text: "Popular", href: "/tv?type=popular" },
          { text: "Airing Today", href: "/tv?type=airing_today" },
          { text: "On TV", href: "/tv?type=on_the_air" },
          { text: "Top Rated", href: "/tv?type=top_rated" },
        ]}
      />
     
    </nav>
  );
};

export default Navigation;
