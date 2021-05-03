import React from 'react';
import { Link } from 'react-router-dom';

const Home=()=>{
    return(
        <React.Fragment>
            <section className="bg-dark">
                <div className="container py-3 ">
                    <p className="text-white m-0" style={{fontSize:23,fontWeight:'normal'}}>Popular Titels</p>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-2">
                            <Link to='/series'>
                                <div>
                                    <div className=" d-flex" style={{height:210,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
                                        <p className="h3 text-white">SERIES</p>
                                    </div>
                                </div>
                            </Link>
                            <p>Popular  Series</p>
                        </div>
                        <div className="col-md-2">
                            <Link to='/movies'>
                                <div>
                                    <div className=" d-flex" style={{height:210,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
                                        <p className="h3 text-white">MOVIES</p>
                                    </div>
                                </div>
                            </Link>
                            <p>Popular  Movies</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Home;

