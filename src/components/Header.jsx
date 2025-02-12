// import { Home, Calendar, Users } from "lucide-react";

const Header = () => {
	return (
		<header className="bg-black text-white p-4 flex justify-between items-center">
			<div className="flex items-center">
				<div className="w-24 flex items-center justify-center rounded-lg mr-2">
					<img src="./logo.png" alt="ACM" />
				</div>
			</div>
			<nav>
				<ul className="flex space-x-6">
					<li className="flex items-center">
						{/* <Home className='mr-1' size={18} /> */}
						<span>Home</span>
					</li>
					<li className="flex items-center">
						{/* <Calendar className='mr-1' size={18} /> */}
						<span>Events</span>
					</li>
					<li className="flex items-center">
						{/* <Users className='mr-1' size={18} /> */}
						<span>Contibutors</span>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
