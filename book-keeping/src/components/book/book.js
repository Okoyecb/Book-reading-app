/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export default class Book extends React.Component{
    render(){
        return (
            <a href="" className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://prodimage.images-bn.com/pimages/9780670881468_p0_v1_s550x406.jpg" alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </a>
        );
    }
}