import { Logo } from "./Logo";
import { Search } from "./Search";
import { Categories } from "./Categories";

export function Navbar() {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Logo />
        <Search />
        <Categories />
      </div>
    </nav>
  );
}
