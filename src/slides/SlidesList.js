import React from 'react';
import { Impress, Step } from 'react-impressjs';

import Slides from '../config/SlidesData.config';

const SlidesList = (props) => {
    const pageWidth = 1024;

    const renderSlides = function () {
        const { data } = Slides;

        return (
            data.map((slide, index) => {
                const coord = {
                    x: index * pageWidth,
                    y: 0
                };
                console.log(coord);
                return (
                    <Step id={slide.title} data={coord} key={index}>
                        <h1 dangerouslySetInnerHTML={{ __html: slide.innerHtml }}></h1>
                    </Step>
                );
            })
        );
    };

    return (
        <Impress fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}>
            {renderSlides()}
        </Impress>
    );
}

export default SlidesList;