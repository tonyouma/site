import React, { Component } from "react";
import Slider from "react-slick";

interface IProps {
    index: number
}

function CustomSlide({ index }: IProps) {

    return (

        <div className="mx-3 h-72 bg-primary">
            <h3>{index}</h3>
        </div>

    )
}

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 5000,
        };
        return (
            <div>
                <Slider {...settings}>
                    <CustomSlide index={1} />
                    <CustomSlide index={2} />
                    <CustomSlide index={3} />
                    <CustomSlide index={4} />
                    <CustomSlide index={5} />
                    <CustomSlide index={6} />
                </Slider>
            </div>
        );
    }
}
