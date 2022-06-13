import React, { useEffect, useState } from "react";
import axios from "axios";

const User =()=>{
    const [data,setData]=useState({});

    const UserData = async =>{ axios.get('https://refertest.pythonanywhere.com/user/data',{
            Headers:{
                "uid": 136
            }
        }).then(response=>{
            // console.log(response.data.data.college);
            setData(response.data.data);
        });
    };

    useEffect(()=>{
        UserData();
    },[]);

    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="mt-3">
                        <h2>{data.name}</h2>
                        <p>from <span className="font-weight-bold">{data.college}</span></p>
                    </div>
                  <img src={data.pictureUrl} alt="picture" width="120"  className="ml-5 rounded-circle" />
                </div>
            </nav>
        </div>
    );
}

export default User;