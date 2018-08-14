import React from 'react'
import TournamentContainer from './Tournament';
import CssBaseline from '@material-ui/core/CssBaseline';


export default () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <TournamentContainer {...TestData} />
      </React.Fragment>
  );
}


const TestData = {
  rounds: [
    {
      pairings: [
        {contestants: ["Dino", "Horst", "Nana"]}
      ]
    }, {
      pairings: [
        {contestants: ["123", "45435", "23424"]},
        {contestants: ["aaaa", "asdaddad", "1111111111111"]}
      ]
    },
    {
      pairings: [
        {contestants: ["Dino", "Horst", "Nana"]}
      ]
    }, {
      pairings: [
        {contestants: ["123", "45435", "23424"]},
        {contestants: ["aaaa", "asdaddad", "1111111111111"]}
      ]
    },
    {
      pairings: [
        {contestants: ["Dino", "Horst", "Nana"]}
      ]
    }, {
      pairings: [
        {contestants: ["123", "45435", "23424"]},
        {contestants: ["aaaa", "asdaddad", "1111111111111"]}
      ]
    }
  ]
}