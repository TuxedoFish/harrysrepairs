// Importing React
import React, { useState, useEffect } from "react"

// Querying via apollo client
import { useQuery } from "@apollo/client"
import { GET_REVIEWS } from "../../queries/reviews"

// Animation
import { 
    FadeUp
} from '../../animations'
import {
    Loader,
    Column
} from '../../components'

// Facebook components
import { EmbeddedPost } from 'react-facebook';

const ReviewSection = () => {
    
    const {loading, error, data} = useQuery(GET_REVIEWS)

    const [intervalId, setIntervalId] = useState(null)
    const [hasCommentsLoaded, setHasCommentsLoaded] = useState(false)

    useEffect( () => {

        if(!loading && intervalId===null) {
            let newIntervalId = setInterval(checkCommentsVisibility, 500);
            setIntervalId(newIntervalId)
        }

    }, [loading])
    

    const checkCommentsVisibility = () => {

        const post = document.getElementsByClassName("fb-post")[0].getElementsByTagName('span')[0].getElementsByTagName('iframe')[0]
        
        if(post.style.visibility == "visible") {
            clearInterval(intervalId)
            setHasCommentsLoaded(true)
        }

    }

    return (
    <>
        <div style={{display: hasCommentsLoaded ? "" : "none"}}>
            {!loading && (
                data.reviews.map( (review) => 
                    <Column size="one-third">
                        <FadeUp animate={hasCommentsLoaded ? "closed" : "open"}>
                            <EmbeddedPost width="auto" href={review.URL}/>
                        </FadeUp>
                    </Column>
                )
            )}
        </div>
        {(!hasCommentsLoaded || loading) && <Loader inverted/>}
    </>
    )

}

export default ReviewSection