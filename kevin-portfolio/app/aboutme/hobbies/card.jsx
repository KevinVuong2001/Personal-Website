import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"
import { FiSend } from "react-icons/fi"
import { BsBookmark } from "react-icons/bs"
import { FiMoreHorizontal } from "react-icons/fi"

const Card = ({ index, description, media, type }) => {
    return(
        <div className="flex flex-col gap-2 bg-white rounded-xl border border-slate-200 text-black">
            <div className="flex flex-row justify-between items-center mt-2 mx-4">
                {/* Heading */}
                <div className="flex flex-row items-center gap-4">
                    <img
                        src="/Profile_Pic.jpg"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <span>KevinVuong</span>
                </div>
                <FiMoreHorizontal className="w-6 h-6"/>
            </div>
            <div>
                {type==="video" ? (
                    <video
                        src={media}
                        controls
                        className="w-full xs:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] rounded-lg object-cover"
                    />
                ) : (
                    <img
                        src={media}
                        className=""
                    />
                )}
            </div>
        </div>
    )
}

export default Card;