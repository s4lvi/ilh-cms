import React from 'react';

const memberBioStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '240px',
    height: '300px',
    borderRadius: '8px',
    //border: '1px solid #eee',
    overflow: 'hidden',
    paddingTop: '10px'
}

const h2style = {
    fontWeight: 'bold',
    fontSize: '140%',
}

const imgStyle = {
    height: '240px',
    borderRadius: '4px'
}

export const MemberBio = class extends React.Component {

    render() {
        return( 
            <div style={memberBioStyle}>
                <img style={imgStyle} src={this.props.biopic}></img>
                <h2 style={h2style}>{this.props.name}</h2>
            </div>
        );
    }
}