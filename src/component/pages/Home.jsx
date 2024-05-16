import React from "react";
import Cards from "../Cards";
import { Link } from "react-router-dom";

function Home() {

    let data = [
        {
            id: 7,
            image: "https://m.media-amazon.com/images/I/61V-uzan3wL._AC_UL320_.jpg",
            name: "Noise",
            desc: "Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.3 TFT Display, up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Jet Black)",
            sales:"1000+ bought in past month",
            price: "20,999",
            mrp: "39,900",
            discount: "(80% off)",
            ModelName:"	NoiseFit",
            Style:"Twist",
            Colour:"Jet Black",
            ScreenSize:"1.38 Inches",
        },
        {
            id: 8,
            image: "https://m.media-amazon.com/images/I/71Q8czKqSIL._AC_UL320_.jpg",
            name: "Noise",
            desc: "Noise Pulse 2 Max 1.8 Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes , for Men and Women (Jet Black)",
            sales:"500+ bought in past month",
            price: "1,999",
            mrp: "9,900",
            discount: "(89% off)",
            ModelName:"		ColorFit Smart Watch",
            Style:"Square",
            Colour:"Jet Black",
            ScreenSize:"	1.85 Inches",
        },
        {
            id: 9,
            image: "https://m.media-amazon.com/images/I/71aTghUQfqL._AC_UL320_.jpg",
            name: "Noise",
            desc: "NoiseFit Halo 1.43 AMOLED Display, Bluetooth Calling Round Dial Smart Watch, Premium Metallic Build, Always on Display, Smart Gesture Control, 100 Sports Modes (Vintage Brown)",
            sales:"2k+ bought in past month",
            price: "4,999",
            mrp: "9,900",
            discount: "(37% off)",
            ModelName:"		NoiseFit Halo",
            Style:"	Leather strap",
            Colour:"Vintage Brown",
            ScreenSize:"	1.43",
        },
        {
            id: 10,
            image: "https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_UL320_.jpg",
            name: "boAt",
            desc: "boAt Xtend Smart Watch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Pitch Black)",
            sales:"100+ bought in past month",
            price: "1,999",
            mrp: "9,900",
            discount: "(89% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 11,
            image: "https://m.media-amazon.com/images/I/61R8aiy+-9L._AC_UL320_.jpg",
            name: "boAt",
            desc: "boAt Xtend Smart Watch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, HR & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery Life(Olive Green)",
            sales:"100+ bought in past month",
            price: "1,999",
            mrp: "9,900",
            discount: "(89% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 12,
            image: "https://m.media-amazon.com/images/I/61DZclqQ4RL._AC_UL320_.jpg",
            name: "boAt",
            desc: "boAt Wave Lite Smart Watch with 1.6 HD Display, Sleek Metal Body, HR & SpO2 Level Monitor, 140+ Watch Faces, Activity Tracker, Multiple Sports Modes, IP68 & 7 Days Battery Life(Active Black)",
            sales:"100+ bought in past month",
            price: "1,999",
            mrp: "9,900",
            discount: "(89% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
    ]

    return (
        <>
            <section className="product mt-5">
                <div className="container">
                    <h1 className="text-center">Home</h1>
                    <div className="row">

                        {data.map((val, index) => {
                            return (
                                <>
                                    <div className="col-4">
                                        <div className="card-data">
                                            <Cards id={val.id} image={val.image} name={val.name} desc={val.desc} price={val.price}
                                                mrp={val.mrp} discount={val.discount} />
                                            <Link to={`/${val.id}`} class="btn btn-outline-dark">More Details</Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
            </>
    )
}

export default Home;