import React from 'react';
import Chart from './Chart';
import ContentRowMovies from './ContentRowMovies';


function ContentRowCenter(){
    let spacing = '15px'
    return (
        <div className="row position-relative"  style={{marginLeft: spacing}}>
            
            {/*<!-- Last Movie in DB -->*/}
            <div className='top-50 start-50 translate-middle' style={{margin:   'auto'}}>
            <ContentRowMovies />

            </div>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <div className='col-12'>
            <Chart />

            </div>

        </div>
    )
}

export default ContentRowCenter;