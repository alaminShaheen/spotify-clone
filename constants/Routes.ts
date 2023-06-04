import { RiHome2Fill, RiHome2Line, RiSearchFill, RiSearchLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

export const ROUTES = {
	Home: {
		path: "/",
		activeIcon: RiHome2Fill,
		inactiveIcon: RiHome2Line,
	},
	Search: {
		path: "/search",
		activeIcon: RiSearchFill,
		inactiveIcon: RiSearchLine,
	},
} as const;
