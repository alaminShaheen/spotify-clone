"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ROUTES } from "@/constants/Routes";
import Box from "./Box";
import SidebarElement from "./SidebarElement";
import Library from "./Library";

type SidebarProps = {
	children: ReactNode;
};

const Sidebar = (props: SidebarProps) => {
	const { children } = props;
	const pathname = usePathname();

	return (
		<div className="flex h-full">
			<div className="md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
				<Box>
					<div className="flex flex-col gap-y-4 px-5 py-4">
						{Object.entries(ROUTES).map(([label, routeInfo]) => {
							const activeRoute = pathname === routeInfo.path;
							return (
								<SidebarElement
									href={routeInfo.path}
									Icon={
										activeRoute ? routeInfo.activeIcon : routeInfo.inactiveIcon
									}
									active={activeRoute}
									key={label}
									label={label}
								/>
							);
						})}
					</div>
				</Box>
				<Box className="overflow-y-auto h-full">
					<Library />
				</Box>
			</div>
			<main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
		</div>
	);
};

export default Sidebar;
