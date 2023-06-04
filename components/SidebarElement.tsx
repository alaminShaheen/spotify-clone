import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type SidebarElementProps = {
	Icon: IconType;
	active?: boolean;
	href: string;
	label: string;
};

const SidebarElement = (props: SidebarElementProps) => {
	const { Icon, href, active, label } = props;
	return (
		<Link
			href={href}
			className={twMerge(
				`flex flex-row h-auto items-center w-full gap-x-4 text-sm font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
				active && "text-white"
			)}
		>
			<Icon size={26} />
			<p className="truncate w-full">{label}</p>
		</Link>
	);
};

export default SidebarElement;
