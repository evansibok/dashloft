import {
  BuildingLibraryIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

export const baseURL = "https://api-test.innoloft.com/";

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const navigation = [
  {
    title: "Home",
    href: "/",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Products",
    href: "/product",
    icon: NewspaperIcon,
  },
];
