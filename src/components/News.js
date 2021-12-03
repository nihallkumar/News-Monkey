import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1);
    const [TotalResults, setTotalResults] = useState(0);


    const updateNews = async () => {
        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${Page}&pageSize=${props.pageSize}`;

        setLoading(true);
        let data = await fetch(url);
                props.setProgress(30);
        let parsedData = await data.json();
                props.setProgress(50);
        console.log(parsedData);
                props.setProgress(70);
        setarticles(parsedData.articles);
        setTotalResults(parsedData.TotalResults);
        setLoading(false)

        props.setProgress(100);
    }

    useEffect(() => {

        document.title = `NewsMonkey - ${props.category}`;
        updateNews();

    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${Page+1}&pageSize=${props.pageSize}`;
        setPage(Page + 1);
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        setarticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.TotalResults);
    };

    return (
        <>
            <h2 className="text-center" style={{marginTop:"68px"}}>NewsMonkey- Top Head Lines</h2>

            {Loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== TotalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row justify-content-around">
                        {articles.map((element) => {
                            return <div className="col-md-3 my-3 mx-4" key={element.url}>
                                <Newsitem title={element.title} source={element.source.name} description={element.description} imgurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
}
export default News


// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {

//     // articles= [];

//     static defaultProps = {
//         country: 'us',
//         pageSize: 8,

//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,

//     }


//     constructor(props) {
//         super(props);
//         console.log("im in news component");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0,
//         }
//         document.title = `NewsMonkey - ${this.props.category}`;
//     }

//     async updateNews() {
//         this.props.setProgress(10);
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true })
//         let data = await fetch(url);
//         this.props.setProgress(30);
//         let parsedData = await data.json();
//         this.props.setProgress(50);
//         console.log(parsedData);
//         this.props.setProgress(70);
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false
//         })
//         this.props.setProgress(100);
//     }

//     async componentDidMount() {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
//         // this.setState({ loading: true })
//         // let data = await fetch(url);
//         // let parsedData = await data.json();
//         // console.log(parsedData);

//         // this.setState({
//         //     articles: parsedData.articles,
//         //     totalResults: parsedData.totalResults,
//         //     loading: false
//         // })
//         this.updateNews();
//     }

//     handleNextClick = async () => {
//         console.log("next");

//         if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

//             // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//             // this.setState({ loading: true })
//             // let data = await fetch(url);
//             // let parsedData = await data.json();

//             // this.setState({
//             //     page: this.state.page + 1,
//             //     articles: parsedData.articles,
//             //     loading: false
//             // })
//             this.setState({ page: this.state.page + 1 });
//             this.updateNews();
//         }

//     }

//     handlePreClick = async () => {
//         console.log("previous");

//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//         // this.setState({ loading: true })
//         // let data = await fetch(url);
//         // let parsedData = await data.json();
//         // console.log(parsedData);

//         // this.setState({
//         //     page: this.state.page - 1,
//         //     articles: parsedData.articles,
//         //     loading: false
//         // })

//         this.setState({ page: this.state.page - 1 });
//         this.updateNews();
//     }

//     fetchMoreData = async () => {
//         this.setState({ page: this.state.page + 1 })
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         // this.setState({ loading: true })
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);

//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults,
//             // loading: false
//         })
//     };

//     render() {
//         return (
//             <>
//                 <h2 className="text-center my-3">NewsMonkey- Top Head Lines</h2>

//                 {this.state.loading && <Spinner />}

//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Spinner />}
//                 >   <div className="container">
//                         <div className="row justify-content-around">
//                             {this.state.articles.map((element) => {
//                                 return <div className="col-md-3 my-3 mx-4" key={element.url}>
//                                     <Newsitem title={element.title} source={element.source.name} description={element.description} imgurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
//                                 </div>
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>

//                 {/* <div className="row justify-content-around">
//                     {!this.state.loading && this.state.articles.map((element) => {
//                         return <div className="col-md-3 my-3 mx-4" key={element.url}>
//                             <Newsitem title={element.title} source={element.source.name} description={element.description} imgurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
//                         </div>
//                     })}
//                 </div>

//                 <div className="container d-flex justify-content-between my-5">
//                     <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreClick}>&#8592;Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
//                 </div> */}
//             </>
//         )
//     }
// }

// export default News