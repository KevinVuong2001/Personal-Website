"use client"

import timelineElements from "./timelineElement";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Professional = () => {
    return (
        <div>
            <h2 className="text-3xl md:text-5xl">Timeline</h2>
            <VerticalTimeline
            >
                {
                    timelineElements.map(element => {
                        return(
                            <VerticalTimelineElement
                                contentArrowStyle={{ borderRight: `7px solid  ${element.iconColor}` }}
                                contentStyle={{ 
                                    background: '#202027',
                                }}
                                dateClassName='text-left text-bold'
                                key={element.id}
                                date={element.date}
                                icon={element.icon}
                                iconStyle={{ background: element.iconColor }}
                            >
                                <div className="space-y-2">
                                    <h3 className="font-bold text-2xl">{element.title}</h3>
                                    <h4 className="font-bold text-xl">{element.company || element.institution}</h4>
                                    <h5 className="font-bold text-lg">{element.location}</h5>
                                    <p className="text-left text-white/70 text-sm md:text-base leading-relaxed">{element.details || element.achievements}</p>
                                    {element.notable_coursework && (
                                        <div className="text-left">
                                            <h5 className="text-left font-bold">Notable Coursework:</h5>
                                            <ul className="grid grid-cols-2 list-disc pl-6 gap-x-4 gap-y-2 marker:text-secondary">
                                                {element.notable_coursework.map((course, index) => (
                                                    <li key={index} className="text-white/70 text-sm md:text-base leading-relaxed">
                                                        {course}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {element.tech && (
                                        <ul className="flex flex-wrap gap-4">
                                            {element.tech.map((tech, index) =>{
                                                return (
                                                    <li 
                                                        key={index} 
                                                        className="text-sm md:text-base leading-relaxed"
                                                        style={{ color: element.iconColor }}
                                                    >
                                                        #{tech}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Professional;