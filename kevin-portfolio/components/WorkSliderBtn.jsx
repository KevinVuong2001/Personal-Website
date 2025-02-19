"use client";
import { useSwiper } from "swiper/react";
import { BiCaretLeftSquare, BiCaretRightSquare } from "react-icons/bi"

const WorkSliderBtn = ( {containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles}>
                <BiCaretLeftSquare className={iconStyles} onClick={() => swiper.slidePrev()}/>
            </button>
            <button className={btnStyles}>
                <BiCaretRightSquare className={iconStyles} onClick={() => swiper.slideNext()}/>
            </button>
        </div>
    );
};

export default WorkSliderBtn;