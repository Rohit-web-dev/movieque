import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'

const CastDetails = () => {
    const params = useParams()
    const imageURL = useSelector(state => state.movieoData.imageURL)
    const { data :castDetails} = useFetchDetails(`/${params?.id}/credits`)

    console.log("Cast Details", castDetails);
    console.log(params);

    return (
        <div className="cast-details">
            {castDetails ? (
                <>
                    <h1>{castDetails.name}</h1>
                    {castDetails.profile_path && (
                        <img src={`${imageURL}${castDetails.profile_path}`} alt={castDetails.name} />
                    )}
                    <p>{castDetails.biography}</p>
                    <p><strong>Birthday:</strong> {castDetails.birthday}</p>
                    <p><strong>Place of Birth:</strong> {castDetails.place_of_birth}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default CastDetails
