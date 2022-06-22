// QUOTES 
return(
    <Section Settings={ settings }>
        <Container>
                {content.heading &&
                    <> 
                        <h2>
                            <span 
                                className={ 
                                            theme.text['H2'] 
                                            + ' text-' + content.textColor 
                                            + ' text-' + content.textAlign
                                        }> 
                                { content.heading }
                            </span>
                        </h2>
                    </>
                }
                <div className="hidden invisible" aria-hidden="true">
                    <style type="text/css">
                        {/* { animationClass }
                        { animationKeyframes } */}
                        {styles}
                    </style>
                </div>
                <div className={` mt-12 flex w-full flex-wrap justify-between relative `}>
                    <div className={ `frosted-glass p-8 lg:p-14 w-full` }>
                        {/* will be content.slides.map once accurately passing data */}
                       {slides.map(slide => {
                        return (
                            <>
                            <p className={ theme.text['Q'] + slide.class + ' block transition-all ease-in-out' }>
                                {slide.heading}
                            </p>
                            <p className={ theme.text['P_BLD'] }>
                                { content.quote.name }
                            </p>
                            <small className={ theme.text['FOOTER'] }>
                                { content.quote.company }
                            </small>
                        </>
                        )
                       })}
                    </div>
                    <div className={`w-36 flex bg-rm-pale-grey`}>
                        <button className={`flex-1 px-5 py-3 text-40px`} onClick={prevSlide}>
                            {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
                        </button>
                        <button className={`flex-1 px-5 py-3 text-40px`} onClick={nextSlide}>
                            {/* <FontAwesomeIcon icon={faAngleRight} /> */}
                        </button>
                    </div>
                </div>  
                <div>
                    <span
                        aria-hidden="true" 
                        className={ 
                            theme.text['STATS'] + 
                            'text-rm-green absolute -z-10 '}>
                        “
                    </span>
                    <span
                        aria-hidden="true" 
                        className={ 
                            theme.text['STATS'] + 
                            'text-rm-green absolute -z-10 '}>
                        ”
                    </span>

                </div>
        </Container>
    </Section>
)


// POSTCARDS 
return(
    <Section Settings={ settings }>
        <Container>
            {content.heading &&
                <> 
                    <h2>
                        <span 
                            className={ 
                                        theme.text['H2'] 
                                        + ' text-' + content.textColor 
                                        + ' text-' + content.textAlign
                                    }> 
                            { content.heading }
                        </span>
                    </h2>
                </>
            }
            {content.bodyText &&
                <>
                    <p>
                        <span className={ 
                                        theme.text['P_STD'] 
                                        + ' text-' + content.textColor 
                                        + ' text-' + content.textAlign
                                    }>
                            { content.bodyText }
                        </span>
                    </p>
                </>
            }
                <div className="mt-12 flex w-full flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:justify-between lg:items-baseline">

                    <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                       
                        <BlogCard
                            heading = { `Elevate Your Next Content Marketing Campaign Today. Download our Field Guide` }
                            link = {{
                                    'url': ''
                            }}
                            image = { `` }
                        />

                    </div>

                </div>
        </Container>
    </Section>
)