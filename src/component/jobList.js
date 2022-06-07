import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList =()=>{
    const [list,setList]=useState([]);

    const JobData = async =>{ axios.get('http://refertest.pythonanywhere.com/job/openings',{
            Headers:{
                "tid": 3441
            }
        }).then(response=>{
            setList(response.data.data);
        });
        
    }
    useEffect(()=>{
        JobData();
    },[]);

    const data = list.map((job,index)=>{

        const Exprnc=()=>{
            if(job.min_experience==0){
                return <span className="card-text font-weight-bold">For Freshers</span>
            }else{
                return <p className="card-text">
                            Minimun years of Experience: 
                            <span className="font-weight-bold">{job.min_experience}</span>
                        </p>
            }
        }

        return (
            <div key={index} className="align-items-center mt-4">
            <div className="card w-50 m-auto " key={index}>
            <div className="card-body">
              <h4 className="card-title">{job.designation}</h4>
              <p className="card-text font-weight-bold">
                  {job.company} - 
                  <span className="font-weight-normal">{job.location}</span>
              </p>
              <p className="card-text">
                    Skills: {job.skills.map((skill,indx)=><span className="card-link" key={indx}>{skill}</span>)}
              </p>
              {Exprnc()}
            </div>
          </div>
          </div>
        );
    });

    return (
        <div>
            {data}
        </div>
    )
}

export default JobList;
