import React from 'react';

const memberBioStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '180px',
    minWidth: '180px',
    height: '220px',
    borderRadius: '8px',
    paddingTop: '10px',
}


const h2style = {
    fontWeight: 'bold',
    fontSize: '130%',
}

const imgStyle = {
    height: '180px',
    borderRadius: '4px'
}

export const MemberBio = class extends React.Component {

    render() {
        return( 
            <div style={memberBioStyle} onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut}>

                    <img style={imgStyle} src={this.props.biopic}></img>
                    <h2 style={h2style}>{this.props.name}</h2>

            </div>
        );
    }
}