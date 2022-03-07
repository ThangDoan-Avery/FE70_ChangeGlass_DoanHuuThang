import React, { Component } from 'react';

export default class GlassesItem extends Component {
  render() {
    let { glassItem } = this.props;
    return (
      <div>
        <img
          src={glassItem.url}
          alt='...'
          style={{ width: '110px', cursor: 'pointer' }}
          className='ml-2 p-2 border border-width-1'
          onClick={() => {
            this.props.handleChangeGlasses(glassItem);
          }}
        />
      </div>
    );
  }
}
