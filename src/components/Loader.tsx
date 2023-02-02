import { Spinner } from "flowbite-react";
export function Loader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner aria-label="Center-aligned spinner example" size="xl" />
    </div>
  );
}
