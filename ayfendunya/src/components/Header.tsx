import { FaUserLarge } from "react-icons/fa6";
import { AiFillAppstore } from "react-icons/ai";

import { Navigations } from '@/ui/db'

export default function Header() {
	return (
		<header className="z-50 text-[16px]/[16px]">
			<div className='px-12'>
				<div className='flex justify-between items-center'>
					<a href='/' className='text-[--black] transition-all duration-300 h-[49px] aspect-auto '>
						<img src="https://sempapompa.com/public/assets/frontend/img/svg/logo.svg" />
					</a>
					<div className='flex items-center justify-end gap-5 lg:gap-[1.5vw]'>
						<ul className="pt-[24px] px-[15px] pb-[14px] rounded-t-lg relative flex">
							{Navigations.map((e, e_index) =>
								<li key={e_index} className="relative group px-2 py-4 text-center hover:bg-black rounded-t-xl hover:text-white">
									<a href='/'>{e.NavTitle}</a>
									{e.Category &&
										<ul className="absolute left-0 hidden group-hover:flex flex-col px-[40px] pt-[50px] pb-[40px] space-y-6 top-full bg-black min-w-[400px] min-h-max rounded-e-xl rounded-bl-xl">
											{e.Category?.map((i, i_index) => <li key={i_index} className='text-start hover:text-red-700'>
												<a href='/'>{i.ItemTitle}</a>
											</li>)}
										</ul>}
								</li>)}
						</ul>
						<div className="flex justify-center items-center h-8 w-8">
							<a href="https://sempapompa.com/login">
								<FaUserLarge />
							</a>
						</div>
						<div className="flex justify-center items-center h-8 w-8">
							<a href="https://sempapompa.com/login">
								<FaUserLarge />
							</a>
						</div>
						<span className="block h-10 w-0.5 bg-black rouned-full"></span>
						<div className="relative p-5">
							<div className="font-semibold tracking-wide text-black">
								<span>EN</span>
							</div>
							<div className="absolute bg-black pointer-events-none text-white opacity-0 left-0 right-0 t-full flex flex-col py-1 px-4">
								<a href="/tr"> <span>TR</span> </a>
								<a href="/es"> <span>ES</span> </a>
								<a href="/ru"> <span>RU</span> </a>
							</div>
						</div>
						<div className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center">
							<div className="">
								<AiFillAppstore />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
