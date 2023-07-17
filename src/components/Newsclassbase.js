// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Loading from "./Loading";
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: 'in',
//     pageSize:5,
//     Category:"general"
    
//   }
//   // static PropTypes = {
//   //   country:PropTypes.string,
//   //   pageSize:PropTypes.number,
//   //      Category:PropTypes.string,
//   // } 

//   capitalizefirstLetter=(String)=>{
//     return String.charAt(0).toUpperCase()+String.slice(1);
//   }
//   constructor(props) {
//     super(props);
//     console.log("this is constructor");
//     this.state = {
//       articles: [],
//       loading: false,
//       page:1,
//       totalResults:0
//     };

//     document.title= `${this.capitalizefirstLetter(this.props.Category)}-NewsMonkey`
//   }


//   async updatenews(){
//     this.props.setProgress(10);
//     const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&Category=${this.props.Category}&apiKey=3deec10c3c67492399b045ac2b426ecd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data=await fetch(url);
//     this.props.setProgress(30);
//     let parsedData=await data.json();
//     this.props.setProgress(70);
//     console.log(parsedData);
//     this.setState({
//       articles:parsedData.articles,
//       totalResults:parsedData.totalResults,
//       loading:false,
   
//     })
//     this.props.setProgress(100);
//    }
  

//    async  componentDidMount(){
      
//       // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&Category=${this.props.Category}&apiKey=3deec10c3c67492399b045ac2b426ecd&page=1}&pageSize=${this.props.pageSize}`;
//       // this.setState({loading:true});
//       // let data=await fetch(url);
//       // let parsedData=await data.json();
//       // console.log(parsedData);
//       // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
//       // loading:false})
//       this.updatenews();
//       this.setState({
//         page:2
//       })
//      }

//   //   handalPreviousClick= async ()=>{
   
       
//   //     // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&Category=${this.props.Category}&apiKey=3deec10c3c67492399b045ac2b426ecd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//   //     // this.setState({loading:true});
//   //     // let data=await fetch(url);
//   //     // let parsedData=await data.json();
//   //     // console.log(parsedData);
//   //     // this.setState({
//   //     //   page:this.state.page-1,
//   //     //   articles:parsedData.articles,
//   //     //   loading:false
//   //     // })


//   //     this.setState({
//   //       page:this.state.page-1
//   //     })
//   //     this.updatenews();
       
//   //   }

//   //  handalNextClick= async()=>{
//   //     // console.log("next");
//   //     //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){ 
//   //     // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&Category=${this.props.Category}&apiKey=3deec10c3c67492399b045ac2b426ecd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//   //     // this.setState({loading:true});
//   //     // let data=await fetch(url);
//   //     // let parsedData=await data.json();
//   //     // console.log(parsedData);
//   //     // this.setState({
//   //     //   page:this.state.page+1,
//   //     //   articles:parsedData.articles,
//   //     //   loading:false

//   //       this.setState({
//   //         page:this.state.page+1,
//   //       })
//   //     this.updatenews();
      
//   //   //   })
//   //   // }

//   // }

  
//   fetchMoreData = async () => {
//    this.setState({page:this.state.page+1})
//    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&Category=${this.props.Category}&apiKey=3deec10c3c67492399b045ac2b426ecd&page=${this.state.page}&pageSize=${this.props.pageSize}`;

//    let data=await fetch(url);
//    let parsedData=await data.json();
//    console.log(parsedData);
//    this.setState({
//      articles:this.state.articles.concat(parsedData.articles),
//      totalResults:parsedData.totalResults,
  
  
//    })
//     }

//   render() {
//     return (
//        <>
     
//         <h2 className="text-center">NewsMonkey- Top {this.capitalizefirstLetter(this.props.Category)} Headlines</h2>
//                 {this.state.loading &&<Loading/>}          
//     {/* !this.state.loading && this.state.articles.map((element) => { */}
//     <InfiniteScroll
//   dataLength={this.state.articles ? this.state.articles.length : 0}
//   next={this.fetchMoreData}
//   hasMore={this.state.articles ? this.state.articles.length !== this.state.totalResults : false}
//   loader={<Loading />}
// >
//   <div className="container">
//     <div className="row">
//       {this.state.articles &&
//         this.state.articles.map((element) => (
//           <div className="col-md-4 my-3" key={element.url}>
//             <NewsItem
//               title={element.title ? element.title.slice(0, 45) : ""}
//               description={element.description ? element.description.slice(0, 88) : ""}
//               imgurl={element.urlToImage}
//               newsurl={element.url}
//               author={element.author}
//               date={element.publishedAt}
//               source={element.source.name}
//             />
//           </div>
//         ))}
//     </div>
//   </div>
// </InfiniteScroll>

//         </>

//         /* <div className="container d-flex justify-content-between">
//         <button disabled={this.state.page<=1}type="button" className="btn btn-outline-dark"onClick={this.handalPreviousClick}>&laquo; Previous</button> 
//         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-dark" onClick={this.handalNextClick}>Next&raquo;</button>


//         </div> */
     
//     );
//   }
// }

// export default News;
