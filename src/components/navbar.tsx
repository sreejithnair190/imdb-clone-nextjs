import NavItem from "./navItem";

function Navbar() {
  return (
    <div className="flex justify-center gap-4 bg-amber-100 dark:bg-gray-600 p-4 lg:text-lg">
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
