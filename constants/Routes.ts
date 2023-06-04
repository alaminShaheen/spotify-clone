import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Route } from "@/models/Route";

export const ROUTES: Record<string, Route> = {
	HOME: {
		path: "/",
		icon: HiHome,
	},
	SEARCH: {
		path: "/search",
		icon: BiSearch,
	},
} as const;
