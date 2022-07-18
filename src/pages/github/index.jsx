import React, { useState, useEffect } from "react";
import ArrowForward from '../../assets/arrow_forward_black_24dp.svg'
import ArrowBack from '../../assets/arrow_back_black_24dp.svg'
import Cancel from '../../assets/close_black_24dp.svg'
import Home from '../../assets/home_black_24dp.svg'
import Search from '../../assets/search_black_24dp.svg'
import './styles.css'
import axios from "axios";
import moment from "moment";





const Github = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      const getAllData = async (pageNumber) => {
        try {
          const { data } = await axios.get(
            `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc/?page=${pageNumber}`
          );
          setData(data.items);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
      getAllData();
    }, [currentPage]);

    // format number of star with string greater than 1000
    function kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    }


  return (
    <div className="github-page">
      <nav>
        <div>
          <span>Trending Repo</span>
        </div>
        <div className="nav-container">
          <div className="nav-btn">
            <img src={ArrowBack} alt="" onClick={(e) => {
              console.log(e.target.currentPage)
            }} />
            <img src={ArrowForward} alt="" />
            <img src={Cancel} alt="" />
            <img src={Home} alt="" />
          </div>
          <div className="search">
            <img src={Search} alt="" />
            <input type="text" />
          </div>
        </div>
      </nav>
      <section>
        {data.map((data, index) => (
          <div key={index} className="userInfo">
            <div className="userImage">
              <img src={data.owner.avatar_url} alt="" />
            </div>
            <div className="userDesc">
              <p >{data.name}</p>
              <p>{data.description}</p>
              <div className="userIsuues">
                <p className="Border">stars: {kFormatter(data.stargazers_count)}</p>
                <p className="Border">issues: {data.open_issues}</p>
                <div>
                  <p>
                    Submitted {moment(data.created_at).fromNow()} by {data.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  ); 
};

export default Github;
