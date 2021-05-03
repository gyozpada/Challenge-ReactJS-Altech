import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/contacts/movies.actions';
import { MOVIE_FEATURE_KEY } from '../../redux/contacts/movies.reducer';

const Movies=()=>{
    let dispatch=useDispatch();

    let moviesInfo = useSelector((state) => {
        return state[MOVIE_FEATURE_KEY];
    });

    let {datas,loading} =moviesInfo

    let first21=datas.slice(0,21);
    let afterSortData=first21.sort((a, b) => a.title.localeCompare(b.title))

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch]);

    return(
        <React.Fragment>
            {/* <small>{JSON.stringify(movies)}</small> */}
            <section className="bg-dark">
                <div className="container py-3 ">
                    <p className="text-white m-0" style={{fontSize:23,fontWeight:'normal'}}>Popular Movies</p>
                </div>
            </section>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        {loading?
                        <p className="h4 m-5">Loading...</p>:
                        <React.Fragment>
                            {afterSortData.length>0?
                                afterSortData.map((data,index)=>{
                                    return(
                                        <React.Fragment key={index}>
                                            <div className="col-lg-2 col-md-3 col-sm-4 mb-4 d-flex align-items-stretch justify-content-center">
                                                <div> 
                                                    <div className="card align-items-center">
                                                        <div className="view overlay">
                                                            <img src={data["images"]["Poster Art"]["url"]} className="card-img-top" style={{height:250,maxWidth:200}} alt="Banner_Image"/>
                                                        </div>
                                                    </div>
                                                    <p className="mt-2">{data.title}</p>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                           : <p className="h4 m-5">Something went Wrong...</p>}
                        </React.Fragment>
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Movies;