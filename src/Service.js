import React from 'react';
import web from './images/12.jpg';
import SData from './SData';
import Card from './Card';
const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services</h1>
            </div>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4 ">
                            {
                                SData.map((val,ind)=>{
                                   return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;