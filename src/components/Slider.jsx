import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../Css/Main.scss'



function Slider() {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 3000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><p>Enhance Your Beauty <br />with Our Premium Products.</p></div>
                <div className="keen-slider__slide number-slide2"><p>Fresh and Healthy, Delivered to Your Doorstep.</p></div>
                <div className="keen-slider__slide number-slide3">Transform Your Space into a Dream Home.</div>
                <div className="keen-slider__slide number-slide4"><p>Redefine Your Wardrobe with the Latest Trends.</p></div>
                <div className="keen-slider__slide number-slide5"><p>Gear Up for Success in Every Sport.</p></div>
                <div className="keen-slider__slide number-slide6"><p>Innovative Gadgets for a Smarter Tomorrow.</p></div>
                <div className="keen-slider__slide number-slide7"><p>&gt;&gt;Drive Into the Future with Our Top-Rated Vehicles.</p></div>
                <div className="keen-slider__slide number-slide8"><p>Empower Your Style with Our Exclusive Collection.</p></div>
            </div>
        </>
    )
}

export default Slider
