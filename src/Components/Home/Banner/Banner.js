import React from 'react';

const Banner = () => {
    return (
        <div>

            {/* carosuel  bannner */}

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                {/* carosuel button  */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    {/* item-1  */}
                    <div className="carousel-item active" data-bs-interval="10000">
                        
                    <img src="https://www.japanrailpass.com.au/wp-content/uploads/2016/05/800x250xTop-Japan-Mount-Fuji.jpg.pagespeed.ic.DrP3jcOfPd.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption text-white  d-none d-md-block">
                        <h2 className="brand-name text-white  ">Sigma Travel</h2>
                        <p>Lets make a wordwide tour with us.Mount Fuji is world-renowned for its impressive cone shape.</p>
                        <button  className="bg-warning fw-bold rounded-3 border-0 p-2 text-dark">View Tour</button>
                    </div>
                    </div>

                    {/* item-2  */}
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://www.japanrailpass.com.au/wp-content/uploads/2016/05/661x207xTop-Japan-Onsen.jpg.pagespeed.ic.5kKiVofoZO.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption text-white d-none d-md-block">
                        <h3 className="brand-name">Himeji Castle</h3>
                        <p className="text-white fs-4">Himeji Castle is one of the most important tourist attractions in Japan. Nicknamed the ‘White Heron’, it is instantly recognisable by its glistening white exterior.</p>
                    </div>
                    </div>

                    {/* item-3  */}
                    <div className="carousel-item">
                        
                    <img  src="https://www.japanrailpass.com.au/wp-content/uploads/2016/05/800x250xTop-Japan-Heritage-Kyoto.jpg.pagespeed.ic.c5y_pSILhm.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption text-white fw-bold d-none d-md-block">
                        <h3 className="brand-name ">The Kyoto Prefecture</h3>
                        <p className="fs-6">Kyoto Prefecture is home to 17 UNESCO World Heritage Sites, including the “big three” temples (Kiyomizu-dera, Ginkaku-ji, Kinkaku-ji), Nijo Castle, Kamigami-jinja Shrine, and Ujigami-jinja Shrine.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
};

export default Banner;