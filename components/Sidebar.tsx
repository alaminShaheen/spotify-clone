"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import Box from "./Box";
import { ROUTES } from "@/constants/Routes";

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
					<div>
						{Object.entries(ROUTES).map(([label, routeInfo]) => {
							return <div key={label}>{label}</div>;
						})}
					</div>
				</Box>
				<Box className="overflow-y-auto h-full">Song Library</Box>
			</div>
		</div>
	);
};

export default Sidebar;
