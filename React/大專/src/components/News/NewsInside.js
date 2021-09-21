import React, { useEffect, useState } from "react";
import Axios from "axios";
import '../../css/News/NewsInside.css'
import { Link, useParams } from "react-router-dom";
import moment from 'moment';

export default function NewsInside() {
    let { newsId } = useParams();
    const [news, setNews] = useState({});
    const [title, setTitle] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/news/${newsId}`).then((data) => {
          console.log(data);
          console.log(data.data[0]);
          console.log(data.data[0].newsTitle);
          console.log(data.data[0].newsFigcaption);
          setNews({
            id: data.data[0].newsId,
            title: data.data[0].newsTitle,
            date: moment(data.data[0].newsDate).format('MMMM Do YYYY'),
            figcaption: data.data[0].newsFigcaption,
          });
        });
      }, [newsId]);

    return (
        <React.Fragment>
            <main className="newsInsideMain">
                <div className="newsInsideTitle">
                    <h1>{news.title}</h1>
                </div>
                <section className="newsInsideShare">
                    <div className="newsInsideShareItem">
                        <p>{news.date}</p>
                        <div>
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
                        <div>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </div>
                        <div>
                            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </section>
                <div className="newsInsidePic">
                    <img src={`https://picsum.photos/400/200/?random=${news.id}`}/>
                </div>
                <section className="newsInsideArticle">
                    <article className="newsInsideArticleItem">
                        <div className="newsInsideArticleTitle">
                            <h2>{news.title}</h2>
                        </div>
                        <div className="newsInsideArticleText">
                            <p>まず思いついたのは、サッカーなどのスポーツのトレーニングで使われるマーカーコーンのようなプロダクトです。マーカーコーンをペグに被せることで、ペグやロープの存在を認識しやすくできると考えました。そこで、マーカーコーンを作っている中国の工場を探し出し製造を依頼することになりました。工場は既製品を多く持っていましたが、キャンプシーンにおける理想の形状を追求するために、オリジナル形状で金型から開発することになりました。</p>
                        </div>
                        <figure>
                            <img src={`https://picsum.photos/400/200/?random=${news.figcaption}`}/>
                            <figcaption>{news.figcaption}</figcaption>
                        </figure>
                    </article>
                </section>
                <div className="newsInsideSocial">
                    <div className="newsInsideSocialItem">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i><p>Facebook</p></a>
                    </div>
                    <div className="newsInsideSocialItem">
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i><p>Twitter</p></a>
                    </div>
                    <div className="newsInsideSocialItem">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i><p>Instagram</p></a>
                    </div>
                </div>
            </main>
            <div className="newsInsidePage">
                <div className="newsInsidePageItem">
                    <a href="./newsInfo.html">Newer</a>
                    <Link to="/marian/news">Back to list</Link>
                    <a href="./newsInfo.html">Older</a>
                </div>
            </div>
        </React.Fragment>
    )
}
