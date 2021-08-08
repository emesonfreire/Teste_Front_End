import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    .then(response => response.json())
    .then(json => this.setState({photos: json}))
  }

  render() {
    return (
      <div className="container-fluid p-0">

        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

          <a className="navbar-brand" href="#">coreBi</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto pr-3">
              <a className="nav-item nav-link" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Channel</a>
              <a className="nav-item nav-link" href="#">Login</a>
            </div>
            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control mr-1" placeholder="Username" />
              </div>
              <button className="btn btn-outline-success">Login</button>
            </form>
          </section>
        </nav>


        <section id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="3000">
          <ol className="carousel-indicators">
            <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
            <li data-target="#carouselSection" data-slide-to="1"></li>
            <li data-target="#carouselSection" data-slide-to="2"></li
            >
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://sergios.com.br/blog/wp-content/uploads/2012/06/BANNER-2_OK.jpg" alt="Imagem 1" className="d-block w-100  image-fluid" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://blog.roccolorenzzo.com.br/wp-content/uploads/2018/06/blog-post-2.png" alt="Imagem 2" className="d-block w-100  image-fluid" />
            </div>
            <div className="carousel-item">
              <img src="https://images.tcdn.com.br/img/img_prod/451927/1617211552_gasparini_banner_2.jpg" alt="Imagem 3" className="d-block w-100  image-fluid" />
            </div>
          </div>
          <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </div>
          <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </div>

        </section>
=======
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        <section className="container p-3 mt-5 mb-5">
          <ul className="list-unstyled">

            {
              this.state.photos.map(photo => {
                return (
                  <li className="media pt-2">
                    <img src={photo.thumbnailUrl} alt="" className="mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">{photo.productName}</h5>
                    
                      <div className="imageUrl">
                      <img src="https://corebiz-test.herokuapp.com/images/product-1.png" alt="Imagem 1" className="d-block  image-fluid " />
                     
                      </div>
                    <p> {photo.stars} estrela(s)</p>
                    <h5><strong>{photo.price.toFixed(2).toLocaleString('pt-br',{Style: 'currency', currency: 'BRL'})}</strong></h5>
                    <p>ou 9 X 28,87 </p>
                    <button type="button">COMPRAR</button> 
                    </div>
                  </li>
                )
              })
            }


          </ul>
        </section>


        <footer className="container col-12 pt-3 footer  ">
          <container className="container col-6 col-md-2 endereco d-flex justify-content-around">
            <strong className=" container col">Localização</strong>
           
          </container>
        </footer>

      </div>
    );
  }
}

export default App;
