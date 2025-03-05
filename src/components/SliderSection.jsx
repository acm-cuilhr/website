import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "../components/SliderItem";

const SliderSection = (props) => {
	const { SliderData } = props;

	return (
		<section className="lg:h-[414px] py-[60px] lg:py-0 bg-black">
			{/* SLIDER */}
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper h-full w-full 2xl:w-[1300px]">
				{SliderData.map((item, index) => {
					return (
						<SwiperSlide key={item.id}>
							<SliderItem key={item.id} item={item} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default React.memo(SliderSection);
