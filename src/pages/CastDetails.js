import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import Divider from '../components/Divider'
import useFetch from '../hooks/useFetch'
import HorizontalScollCard from '../components/HorizontalScollCard'
import img from '../assets/user.png'

const CastDetails = () => {
    const params = useParams()
    const imageURL = useSelector(state => state.movieoData.imageURL)
    // const { data: castDetails } = useFetchDetails(`/person/${castId}`);
    const { data: similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`)

    // console.log("Cast Details", castDetails);
    // console.log(castId);

    const handlePlayVideo = (data) => {
        alert(data)
    }

    return (
        <div>

            <div className='w-full h-[280px] relative hidden lg:block'>
                <div className='w-full h-full'>
                    <img
                        src={img}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
            </div>

            <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 '>
                <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60'>
                    <img
                        src={img}
                        className='h-80 w-60 object-cover rounded'
                    />
                </div>

                <div>
                    <h2 className='text-2xl lg:text-4xl font-bold text-white '>Sushant Singh Rajput</h2>
                    <p className='text-neutral-400'>Sushant Singh Rajput was an Indian actor known for his work in Hindi cinema. He starred in a number of commercially successful Hindi films such as M.S. Dhoni: The Untold Story, Kedarnath and Chhichhore. He received a Screen Award and was nominated for the Filmfare Awards on three occasions</p>

                    <Divider />

                    <div className='flex items-center gap-3'>
                        <p>
                            Born :  21 January 1986, Patna
                        </p>
                    </div>
                    <Divider />

                    <div className='flex items-center gap-3'>
                        <p>
                            Education : Delhi Technological University, Kulachi Hansraj Model School, St. Karen's High School
                        </p>
                    </div>
                    <Divider />

                    <div className='flex items-center gap-3'>
                        <p>Parents : Usha Singh, Mr K.K Singh</p>
                    </div>

                    <Divider />

                </div>
            </div>

            <div>
                <HorizontalScollCard data={similarData} heading={"Movies " + params?.explore} media_type={params?.explore} />
            </div>

            {/* {
            playVideo && (
              <VideoPlay data={playVideoId} close={()=>setPlayVideo(false)} media_type={params?.explore}/>
            )
          } */}

        </div>
    )
}

export default CastDetails
