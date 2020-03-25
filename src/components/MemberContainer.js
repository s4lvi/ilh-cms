import React from 'react';
import { MemberBio } from './MemberBio';
import pamelahines from '../img/pamelahines.jpg';
import blankprofile from '../img/blankProfile.png';

const memberContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '160%',
    position: 'relative',
    left: '-30%'
}

const MemberContainer = class extends React.Component {
    render() {
        return (
            <div style={memberContainerStyle}>
                <MemberBio name='Ruth Shortie' biopic={blankprofile} />
                <MemberBio name='Chantal Moore' biopic={blankprofile} />
                <MemberBio name='Pamela Hines' biopic={pamelahines} />
                <MemberBio name='Tyrone Anderson' biopic={blankprofile} />
                <MemberBio name='Kristal Anderson' biopic={blankprofile} />
                <MemberBio name='Michael Choney' biopic={blankprofile} />
            </div>
        );
    }
}

export default MemberContainer;