import React, { Component } from 'react'

export default class ContactInfo extends Component {
  render() {
    return (
      <div>
         <div onClick={this.props.onClick}>{this.props.contact.name} </div>
      </div>
    );
  }
}
