import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import Divider from '../components/Divider'
import useFetch from '../hooks/useFetch'
import HorizontalScollCard from '../components/HorizontalScollCard'
import img from '../assets/user.png'

const CastDetails = () => {
    const { movieId, castId } = useParams();  // Destructure movieId and castId from useParams
    const imageURL = useSelector(state => state.movieoData.imageURL);
    const { data: castDetails, loading: castLoading } = useFetchDetails(`/person/${castId}`);
    const { data: movieCredits, loading: creditsLoading, error: creditsError } = useFetchDetails(`/person/${castId}/movie_credits`);

    if (castLoading || creditsLoading) {
        return <div>Loading...</div>;
    }

    if (creditsError) {
        console.error('Error fetching movie credits:', creditsError);
        return <div>Error loading actor's movies.</div>;
    }

    console.log("Cast Details", castDetails);
    console.log("Similar Data", movieCredits);

    return (
        <div>
            <div className='w-full h-[280px] relative hidden lg:block'>
                <div className='w-full h-full'>
                    <img
                        src={imageURL + castDetails?.profile_path || img}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
            </div>

            <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 '>
                <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60'>
                    <img
                        src={imageURL + castDetails?.profile_path || img}
                        className='h-80 w-60 object-cover rounded'
                    />
                </div>

                <div>
                    <h2 className='text-2xl lg:text-4xl font-bold text-white '>{castDetails?.name}</h2>
                    <p className='text-neutral-400'>{castDetails?.biography}</p>

                    <Divider />

                    <div className='flex items-center gap-3'>
                        <p>
                            Born: {castDetails?.birthday ? new Date(castDetails?.birthday).toLocaleDateString() : 'N/A'}, {castDetails?.place_of_birth}
                        </p>
                    </div>
                    <Divider />

                    <div className='flex items-center gap-3'>
                        <p>
                            Known For: {castDetails?.known_for_department}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <HorizontalScollCard data={movieCredits?.cast} heading={`Movies Featuring ${castDetails?.name}`} media_type="movie" />
            </div>
        </div>
    )
}

export default CastDetails
