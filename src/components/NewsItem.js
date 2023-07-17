import React from "react";

const NewsItem= (props)=> {
  
    let { title, description, imgurl,newsurl,author,date,source } = props;
    return (
      
        <div className="my-3"> 
          <div className="card" >
            <div style={{
              display:'flex',
              justifyContent:'flex-end',
              position:'absolute',
              right:'0'
            }} >

          <span className="badge rounded-pill bg-danger">
    {source}
  </span>
  </div>
            <img src={!imgurl?"https://www.livemint.com/lm-img/img/2023/06/15/600x338/Adani_share_price_1686812315884_1686812316143.jpg":imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-danger">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl} className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      
    );
  
}

export default NewsItem;
