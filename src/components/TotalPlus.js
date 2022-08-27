import React from 'react';
import Chart from './Chart';
import ContentRowMovies from './ContentRowMovies';


function ContentRowCenter(){
    let spacing = '15px'
    return (
        <div className="row"  style={{marginLeft: spacing}}>
            
            {/*<!-- Last Movie in DB -->*/}
            <ContentRowMovies />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Chart />

        </div>
    )
}

export default ContentRowCenter;