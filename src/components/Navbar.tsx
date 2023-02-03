import { Logo } from "./Logo";
import { Categories } from "./Categories";

export function Navbar() {
  return (
    <nav className="flex justify-center items-center border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Logo />
        <Categories />
      </div>
    </nav>
  );
}
