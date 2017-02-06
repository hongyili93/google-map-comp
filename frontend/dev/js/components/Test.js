import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');
import Map from 'google-maps-react'

const Test = () => (
    <div>
        <h2>testing code</h2>
        <Map google={this.props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    </div>
);

export default Test;
/**
 * Created by Sven on 2/5/2017.
 */
