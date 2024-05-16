import React from "react";
import { useParams } from "react-router-dom";

import Cards from "../Cards";

function Details() {

    let { id } = useParams();

    let data = [
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/71eyMLZwktL._AC_UL320_.jpg",
            name: "Apple",
            desc: "Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
            sales:"100+ bought in past month",
            price: "32,999",
            mrp: "48,900",
            discount: "(33% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_UL320_.jpg",
            name: "Apple",
            desc: "Apple Watch Series 9 [GPS 41mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band S/M. Fitness Tracker, Blood & ECG Apps, Always-On Retina Display, Water Resistant",
            sales:"100+ bought in past month",
            price: "19,999",
            mrp: "33,900",
            discount: "(78% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 3,
            image: "https://m.media-amazon.com/images/I/71XBcl6bNjL._AC_UL320_.jpg",
            name: "Apple",
            desc: "Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant",
            sales:"100+ bought in past month",
            price: "9,800",
            mrp: "15,900",
            discount: "(45% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 4,
            image: "https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL320_.jpg",
            name: "Fire Boltt",
            desc: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
            sales:"100+ bought in past month",
            price: "12,999",
            mrp: "19,900",
            discount: "(91% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 5,
            image: "https://m.media-amazon.com/images/I/61YVUOHcrqL._AC_UL320_.jpg",
            name: "Fire Boltt",
            desc: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
            sales:"100+ bought in past month",
            price: "2,500",
            mrp: "5,900",
            discount: "(49% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 6,
            image: "https://m.media-amazon.com/images/I/61ZrPtiuqSL._AC_UL320_.jpg",
            name: "Fire Boltt",
            desc: "Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fitness Tracker,ECG Apps,Retina Display, Water Resistant",
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
        {
            id: 13,
            image: "https://m.media-amazon.com/images/I/71elbYR1eEL._AC_UL320_.jpg",
            name: "Samsung",
            desc: "Samsung Galaxy Watch6 Classic LTE (47mm, Black, Compatible with Android only) | Introducing BP & ECG Features",
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
            id: 14,
            image: "https://m.media-amazon.com/images/I/61nBzBREzGL._AC_UL320_.jpg",
            name: "Samsung",
            desc: "Samsung Galaxy Watch4 Bluetooth(4.0 cm, Black, Compatible with Android only)",
            sales:"100+ bought in past month",
            price: "4,999",
            mrp: "9,900",
            discount: "(39% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 15,
            image: "https://m.media-amazon.com/images/I/61ftRB6KycL._AC_UL320_.jpg",
            name: "Samsung ",
            desc: "Samsung Galaxy Watch4 Classic Bluetooth(4.6cm, Black, Compatible with Android only)",
            sales:"100+ bought in past month",
            price: "1,999",
            mrp: "5,900",
            discount: "(49% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 16,
            image: "https://m.media-amazon.com/images/I/71eyMLZwktL._AC_UL320_.jpg",
            name: "Apple",
            desc: "Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
            sales:"100+ bought in past month",
            price: "32,999",
            mrp: "48,900",
            discount: "(33% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 17,
            image: "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_UL320_.jpg",
            name: "Apple",
            desc: "Apple Watch Series 9 [GPS 41mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band S/M. Fitness Tracker, Blood & ECG Apps, Always-On Retina Display, Water Resistant",
            sales:"100+ bought in past month",
            price: "19,999",
            mrp: "33,900",
            discount: "(78% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 18,
            image: "https://m.media-amazon.com/images/I/71XBcl6bNjL._AC_UL320_.jpg",
            name: "Apple",
            desc: "Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant",
            sales:"100+ bought in past month",
            price: "9,800",
            mrp: "15,900",
            discount: "(45% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 19,
            image: "https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL320_.jpg",
            name: "Fire Boltt",
            desc: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
            sales:"100+ bought in past month",
            price: "12,999",
            mrp: "19,900",
            discount: "(91% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 20,
            image: "https://m.media-amazon.com/images/I/61YVUOHcrqL._AC_UL320_.jpg",
            name: "Fire Boltt",
            desc: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
            sales:"100+ bought in past month",
            price: "2,500",
            mrp: "5,900",
            discount: "(49% off)",
            ModelName:"	Pheonix Pro Ultra",
            Style:"Phoenix U Steel",
            Colour:"Gold",
            ScreenSize:"	1.39 Inches",
        },
        {
            id: 21,
            image: "https://m.media-amazon.com/images/I/61ZrPtiuqSL._AC_UL320_.jpg",
            name: "Fire Boltt",
            desc: "Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fitness Tracker,ECG Apps,Retina Display, Water Resistant",
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
            id: 22,
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
            id: 23,
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
            id: 24,
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
            id: 25,
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
    ]
    let result = data.filter((val) => val.id == id)
    return (
        <>
            <div className="all-details mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={result[0].image} alt="" />
                        </div>
                        <div className="col-6">
                            <div className="first-part">
                                <a href="#" class="card-text add-text">{result[0].desc}</a>
                                <p className="sales-data"> {result[0].sales}</p>
                            </div>
                            <div className="card-price my-2">

                                <p className="time-deals m-0">Limited Time Deals</p>

                                <div className="about-price d-flex align-items-center ">
                                    <div className="about-discunt">
                                        {result[0].discount}
                                    </div>
                                    <i class="fa-solid fa-indian-rupee-sign px-2"></i> <span>{result[0].price}</span>
                                </div>

                                <div className="about-mrp mb-2">
                                    M.R.P: <del>{result[0].mrp}</del>
                                </div>

                                <div className="taxes-data">
                                    <p className="m-0"> Inclusive of all taxes</p>
                                    <p className="m-0"> starts at ₹1,600. No Cost EMI available </p>
                                </div>

                                <div className="more-about mt-3">
                                    <p className="m-0">Model Name :- <span>{result[0].ModelName}</span></p>
                                    <p className="m-0">Style :- <span>{result[0].Style}</span></p>
                                    <p className="m-0">Colour :- <span>{result[0].Colour}</span></p>
                                    <p className="m-0">Screen Size :- <span>{result[0].ScreenSize}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Cards id={result[0].id} image={result[0].image} name={result[0].name} desc={result[0].desc} price={result[0].price}
                mrp={result[0].mrp} discount={result[0].discount} /> */}


        </>
    )

}

export default Details