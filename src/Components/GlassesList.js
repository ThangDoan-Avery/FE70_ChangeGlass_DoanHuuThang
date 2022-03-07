import React, { Component } from 'react';
import GlassesItem from './GlassesItem';

export default class GlassesList extends Component {
  renderGlassesList = () => {
    let { dataGlasses } = this.props;
    return dataGlasses.map((glassItem, index) => {
      return (
        <GlassesItem
          key={index}
          glassItem={glassItem}
          handleChangeGlasses={this.props.handleChangeGlasses}
        />
      );
    });
  };
  render() {
    return (
      <div className='bg-light container text-center mt-5 d-flex justify-content-center p-3'>
        {this.renderGlassesList()}
      </div>
    );
  }
}
