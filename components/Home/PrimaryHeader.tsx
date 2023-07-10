import Image from "next/image";
import React from "react";

type Props = {};

function PrimaryHeader({}: Props) {
    return (
        <div className='hero-section'>Hello world</div>
        // <div className='relative'>
        //     <div className='hero-section' />
        //     <div className='z-10 relative'>
        //         <p>Hello world</p>
        //     </div>
        // </div>
    );
}

export default PrimaryHeader;
