import React, { Component } from 'react';
import GlassesList from './GlassesList';

export default class BaiTapThuKinh extends Component {
  dataGlasses = [
    {
      id: 1,
      price: 30,
      name: 'GUCCI G8850U',
      url: './glassesImage/v1.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 2,
      price: 50,
      name: 'GUCCI G8759H',
      url: './glassesImage/v2.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 3,
      price: 30,
      name: 'DIOR D6700HQ',
      url: './glassesImage/v3.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 4,
      price: 70,
      name: 'DIOR D6005U',
      url: './glassesImage/v4.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 5,
      price: 40,
      name: 'PRADA P8750',
      url: './glassesImage/v5.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 6,
      price: 60,
      name: 'PRADA P9700',
      url: './glassesImage/v6.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 7,
      price: 80,
      name: 'FENDI F8750',
      url: './glassesImage/v7.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 8,
      price: 100,
      name: 'FENDI F8500',
      url: './glassesImage/v8.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 9,
      price: 60,
      name: 'FENDI F4300',
      url: './glassesImage/v9.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
  ];

  state = {
    itemGlass: {
      id: 9,
      price: 60,
      name: 'FENDI F4300',
      url: './glassesImage/v9.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
  };

  handleChangeGlasses = (itemGlasses) => {
    this.setState({
      itemGlass: itemGlasses,
    });
  };
  render() {
    let { url, name, desc } = this.state.itemGlass;
    const styleGlasses = {
      width: '143px',
      top: '75px',
      right: '73px',
      opacity: ' 0.7',
    };
    const infoGlasses = {
      width: '250px',
      top: '200px',
      left: '270px',
      backgroundColor: 'rgba(255,127,0,0.5)',
      textAlign: 'left',
      paddingLeft: '15px',
      paddingRight: '15px',
      height: '105px',
    };

    return (
      <div
        style={{
          backgroundImage: 'url(./glassesImage/background.jpg)',
          minHeight: '1000px',
          backgroundSize: '100% 100%',
        }}
      >
        <div
          style={{ backgroundColor: 'rgba(0,0,0 ,.3)', minHeight: '1000px' }}
        >
          <h3
            className='display-5 text-white text-center p-4'
            style={{ backgroundColor: 'rgba(54, 54, 54, 0.7)' }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-6 text-center'>
                <div className='position-relative'>
                  <img
                    className='position-absolute'
                    src='./glassesImage/model.jpg'
                    width={250}
                  />

                  <img
                    className='position-absolute'
                    style={styleGlasses}
                    src={url}
                  />
                  <div style={infoGlasses} className='position-relative'>
                    <span
                      style={{ color: '#660099', fontSize: '17px' }}
                      className='font-weight-bold'
                    >
                      {name}
                    </span>
                    <br />
                    <span style={{ fontSize: '13px', fontWeight: '400' }}>
                      {desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <img src='./glassesImage/model.jpg' width={250} />
              </div>
            </div>
          </div>
          <GlassesList
            dataGlasses={this.dataGlasses}
            handleChangeGlasses={this.handleChangeGlasses}
          />
        </div>
      </div>
    );
  }
}
