import React from 'react';

const memberBioStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '8px',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#eee'
}

const left = {
    float: "left"
}

const leftBlock = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '180px',
    minWidth: '180px',
    height: '220px',
    marginRight: "20px"
}

const right = {
    float: "right",
    paddingLeft: '12px',
    fontSize: '90%'
}
const h2style = {
    fontWeight: 'bold',
    fontSize: '120%',
}

const imgStyle = {
    height: '180px',
    borderRadius: '50%'
}

export const MemberBio = class extends React.Component {

    render() {
        return( 
            <div style={memberBioStyle} onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut}>
                <div style={right}>
                    <div style={left}>
                        <div style={leftBlock}>
                            <img style={imgStyle} src={this.props.biopic}></img>
                            <h2 style={h2style}>{this.props.name}</h2>
                        </div>
                    </div>
                    <p>{this.props.bio}</p>
                </div>
            </div>
        );
    }
}