import { ThemeProvider } from '@emotion/react';
import { createTheme, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// CSS
import "./style.css";

function Hero(props) {
    const [summary, setSummary] = useState({})

    const getSummary = async () => {
        try {
            let response = await axios.get('https://sleman.geschool.net/_api/main/stats')
            setSummary(response.data.summary)
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getSummary();
    }, [])

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#fff',
                dark: '#fff',
            }
        },
    });
    
    return (
        <div className="col-12 hero-container">
            <div style={{ backgroundImage: `linear-gradient(171.31deg, rgba(0, 0, 0, 0.63) 81.78%, rgba(255, 255, 255, 0) 95.16%), url(${props.background})` }} className="hero-background col-12"></div>
            <div className="col-12 hero">
                <div className="content-container mb-5">
                    <div className="col-xs-12 col-sm-7 col-md-6 col-lg-8 left-side text-light" data-page={props.appName}>
                        <div className="title-container">
                            <div className="mb-3 logo">
                                <img src={props.logo} alt={props.appName} />
                            </div>
                            <div className="">
                                <div className="mb-2 deskripsi">
                                    <h5>
                                        {props.deskripsi}
                                    </h5>
                                </div>
                                <div className="mb-2 title">
                                    <h1>
                                        {props.title}
                                    </h1>
                                </div>
                            </div>
                            <div className="slogan">
                                <p>
                                    {props.slogan}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 right-side" data-page={props.appName}>
                        <div className="logo-title mt-5 mb-2">
                            <div className="d-flex justify-content-center mb-5">
                                <div className="logo d-flex justify-content-center col-3">
                                    <img src={props.logo} alt={props.appName} />
                                </div>
                                <div className="d-flex align-items-center deskripsi">
                                    <h2>
                                        <b>
                                            Sleman Sembada <br /> Blended Learning
                                        </b>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {props.children}
                    </div>

                </div>
                <div className="data-container mb-5">
                    <div className="data-box d-flex mb-5">
                        <div className="data-item">
                            <div className="col-12 px-3 mb-4">
                                <h4>Guru</h4>
                            </div>
                            <div className="d-flex justify-content-center">
                                <fieldset className="col-5 mr-3 fieldset">
                                    <legend className="legend float-none">Harian</legend>
                                    {summary.teachers_1d}
                                </fieldset>
                                <fieldset className="col-5 fieldset">
                                    <legend className="legend float-none">Total</legend>
                                    {summary.teachers}
                                </fieldset>
                            </div>
                            
                            
                        </div>
                        <div className="data-item border-white">
                            <div className="col-12 px-3 mb-4">
                                <h4>Sekolah</h4>
                            </div>
                            <div className="d-flex justify-content-center">
                                <fieldset className="col-5 mr-3 fieldset">
                                    <legend className="legend float-none">Harian</legend>
                                    {summary.schools_1d}
                                </fieldset>
                                <fieldset className="col-5 fieldset">
                                    <legend className="legend float-none">Total</legend>
                                    {summary.schools}
                                </fieldset>
                            </div>
                        </div>
                        <div className="data-item">
                            <div className="col-12 px-3 mb-4">
                                <h4>Siswa</h4>
                            </div>
                            <div className="d-flex justify-content-center">
                                <fieldset className="col-5 mr-3 fieldset">
                                    <legend className="legend float-none">Harian</legend>
                                    {summary.students_1d}
                                </fieldset>
                                <fieldset className="col-5 fieldset">
                                    <legend className="legend float-none">Total</legend>
                                    {summary.students}
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className="school-list-container">
                        <h4>Mereka telah bergabung bersama Geschool</h4>
                        <div className="carousel-container">
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
        
    );
}

export default Hero;