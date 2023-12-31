import { Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../../../../components/card/Card'
import settings from '../../../../constanta/experience-setting/ExperienceSetting'
import './Experience.css'
// import tkr from '../../../../assets/PDAMTKR.png'

const Experience = () =>{
    const data = [
        {
            title : "PDAM Tirta Kerta Raharja administration",
            description : "Administration website for internal PDAM Tirta Kerta Raharja",
            image : "/portofolio/PDAMTKR.png"
        },
        {
            title : "PDAM Tirta Kerta Raharja Training center",
            description : "Training website for External or PDAM Tirta Kerta Raharja employee ",
            image : "/portofolio/PDAMTKR.png"
        },
        {
            title : "PT Rahayu Antara Nusindo",
            description : "Company profile website for PT Rahayu Antara Nusindo",
            image : "/portofolio/RAN.png"
        },
        {
            title : "PT Rahayu Antara Nusindo",
            description : "Company profile website for PT Rahayu Antara Nusindo",
            image : "/portofolio/RAN.png"
        }
    ]

    return (
        <Fragment>
            <div className="experience-container">
                <h1>Experience</h1>
                <p>here is few my past project or under constructing project</p>
                <div className="card-experience">
                    <Slider {...settings}>
                        {data.map((dataItem,idx) => (
                            <Card
                                key = {idx}
                                title = {dataItem.title}
                                description = {dataItem.description}
                                image = {dataItem.image}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience