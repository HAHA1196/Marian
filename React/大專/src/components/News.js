import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/News.css";
import "../js/news";
import news1 from "../img/c01.jpg";
import news2 from "../img/c02.jpg";
import news3 from "../img/c03.jpg";
import { Link, useHistory } from "react-router-dom";
import moment from 'moment';

export default function News() {
  const [postList, setPostList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:8000/api/news").then((data) => {
      console.log(data.data[2]);
      console.log(data.data[2].newsTitle);
      setPostList(data.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div id="welcomeC">
        <div id="welcomecInner">
          <div className="welcomecCont">
            <h2>News</h2>
          </div>
          <div className="wCarousel">
            <div className="slide">
              <img src={news1} alt="" />
            </div>
            <div className="slide">
              <img src={news2} alt="" />
            </div>
            <div className="slide">
              <img src={news3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <main className="newsMain">
        <div class="news">
          <div className="newsSectionDiv">
            {postList.map((val, key) => {
              return (
                <section className="newsSection">
                  <div class="newsPic">
                    {/* <Link to="/marian/newsinside"> */}
                    <div className="newsClick" 
                      onClick={() => history.push(`/marian/news/${val.newsId}`)}
                    >
                     <img src={`https://picsum.photos/400/200/?random=${val.newsId}`} />
                    </div>
                  </div>
                  <div class="newsContent">
                    <div class="newsTag">
                      <p>{val.newsId}</p>
                    </div>
                    <h2>
                      <div className="newsClick"
                        onClick={() => history.push(`/marian/news/${val.newsId}`)}
                      >
                        {val.newsTitle}
                      </div>
                    </h2>
                    <div class="newsDate">
                      <p>{moment(val.newsDate).format('MMMM Do YYYY')}</p>
                    </div>
                    <div class="newsExtend">
                      <p>
                        <div className="newsClick"
                          onClick={() => history.push(`/marian/news/${val.newsId}`)}
                        >Read More
                        </div>
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <section className="newsSection">
            <div class="newsPic">
              <Link to="/marian/newsinside">
              <img src="https://picsum.photos/400/200/?random=1" />
              </Link>
            </div>
            <div class="newsContent">
              <div class="newsTag">
                <p>Asshole</p>
              </div>
              <h2>
                <Link to="/marian/newsinside">Lorem ipsum dolor sit.</Link>
              </h2>
              <div class="newsDate">
                <p>2021.08.31</p>
              </div>
              <div class="newsExtend">
                <p>
                  <Link to="/marian/newsinside">Read More</Link>
                </p>
              </div>
            </div>
          </section>
          <section className="newsSection">
            <div class="newsPic">
              <Link to="/marian/newsinside">
                <img src="https://picsum.photos/400/200/?random=2" />
              </Link>
            </div>
            <div class="newsContent">
              <div class="newsTag">
                <p>Tag</p>
              </div>
              <h2>
                <Link to="/marian/newsinside">Lorem ipsum dolor sit.</Link>
              </h2>
              <div class="newsDate">
                <p>2021.08.31</p>
              </div>
              <div class="newsExtend">
                <p>
                  <Link to="/marian/newsinside">Read More</Link>
                </p>
              </div>
            </div>
          </section>
          <section className="newsSection">
            <div class="newsPic">
              <Link to="/marian/newsinside">
                <img src="https://picsum.photos/400/200/?random=3" />
              </Link>
            </div>
            <div class="newsContent">
              <div class="newsTag">
                <p>wpqfovjwmpzocmp[wd;mpw</p>
              </div>
              <h2>
                <Link to="/marian/newsinside">Lorem ipsum dolor sit.</Link>
              </h2>
              <div class="newsDate">
                <p>2021.08.31</p>
              </div>
              <div class="newsExtend">
                <p>
                  <Link to="/marian/newsinside">Read More</Link>
                </p>
              </div>
            </div>
          </section>
          <section className="newsSection">
            <div class="newsPic">
              <Link to="/marian/newsinside">
                <img src="https://picsum.photos/400/200/?random=4" />
              </Link>
            </div>
            <div class="newsContent">
              <div class="newsTag">
                <p>Tag</p>
              </div>
              <h2>
                <Link to="/marian/newsinside">Lorem ipsum dolor sit.</Link>
              </h2>
              <div class="newsDate">
                <p>2021.08.31</p>
              </div>
              <div class="newsExtend">
                <p>
                  <Link to="/marian/newsinside">Read More</Link>
                </p>
              </div>
            </div>
          </section>
          <section className="newsSection">
            <div class="newsPic">
              <Link to="/marian/newsinside">
                <img src="https://picsum.photos/400/200/?random=5" />
              </Link>
            </div>
            <div class="newsContent">
              <div class="newsTag">
                <p>Tag</p>
              </div>
              <h2>
                <Link to="/marian/newsinside">Lorem ipsum dolor sit.</Link>
              </h2>
              <div class="newsDate">
                <p>2021.08.31</p>
              </div>
              <div class="newsExtend">
                <p>
                  <Link to="/marian/newsinside">Read More</Link>
                </p>
              </div>
            </div>
          </section>
          <section className="newsSection">
            <div class="newsPic">
              <Link to="/marian/newsinside">
                <img src="https://picsum.photos/400/200/?random=6" />
              </Link>
            </div>
            <div class="newsContent">
              <div class="newsTag">
                <p>Tag</p>
              </div>
              <h2>
                <Link to="/marian/newsinside">Lorem ipsum dolor sit.</Link>
              </h2>
              <div class="newsDate">
                <p>2021.08.31</p>
              </div>
              <div class="newsExtend">
                <p>
                  <Link to="/marian/newsinside">Read More</Link>
                </p>
              </div>
            </div>
          </section>
          <section className="newsSection">
            <div class="newsPic">
              <Link to="/marian/newsinside">
                <img src="https://picsum.photos/400/200/?random=7" />
              </Link>
            </div>
            <div class="newsContent">
              <div class="newsTag">
                <p>Tag</p>
              </div>
              <h2>
                <Link to="/marian/newsinside">Lorem ipsum dolor sit.</Link>
              </h2>
              <div class="newsDate">
                <p>2021.08.31</p>
              </div>
              <div class="newsExtend">
                <p>
                  <Link to="/marian/newsinside">Read More</Link>
                </p>
              </div>
            </div>
          </section>
          <section className="newsSection">
            <div class="newsPic">
              <Link to="/marian/newsinside">
                <img src="https://picsum.photos/400/200/?random=8" />
              </Link>
            </div>
            <div class="newsContent">
              <div class="newsTag">
                <p>Tag</p>
              </div>
              <h2>
                <Link to="/marian/newsinside">Lorem ipsum dolor sit.</Link>
              </h2>
              <div class="newsDate">
                <p>2021.08.31</p>
              </div>
              <div class="newsExtend">
                <p>
                  <Link to="/marian/newsinside">Read More</Link>
                </p>
              </div>
            </div>
          </section>
          <div class="loadMore" id="loadMore">
            Load More
            <p class="loadMoreArrow">ｖ</p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

