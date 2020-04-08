import React from 'react';
import { MemberBio } from './MemberBio';
import pamelahines from '../img/pamelahines.jpg';
import blankprofile from '../img/blankProfile.png';

const memberContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '110%',
    position: 'relative',
    backgroundColor: 'white',
    borderTop: "6px solid #e65010",
    borderBottom: "6px solid #e65010",
    marginTop: "40px",
    overflow: "auto"
}

const memberTitle = {
    position: "relative",
    top: "-244px",
    backgroundColor: "white",
    paddingLeft: "8px",
    paddingRight: "8px",
    fontWeight: "bold",
    fontSize: "120%",
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}
const MemberContainer = class extends React.Component {
    render() {
        return (
            <div style={style}>
                <div style={memberContainerStyle}>
                    <MemberBio name='Ruth Shortie' biopic={blankprofile} />
                    <MemberBio name='Chantal Moore' biopic={blankprofile} />
                    <MemberBio name='Pamela Hines' biopic={pamelahines} />
                    <MemberBio name='Tyrone Anderson' biopic={blankprofile} />
                    <MemberBio name='Kristal Anderson' biopic={blankprofile} />
                    <MemberBio name='Michael Choney' biopic={blankprofile} />
                </div>
                <h2 style={memberTitle}>Our Members:</h2><br />
            </div>
        );
    }
}

export default MemberContainer;