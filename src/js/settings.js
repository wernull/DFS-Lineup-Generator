/*globals DLG */
DLG.positions = {
  draftkings: {
    nfl: {
      'QB': {count: 1, positions: ['QB']},
      'RB': {count: 2, positions: ['RB']},
      'WR': {count: 3, positions: ['WR']},
      'TE': {count: 1, positions: ['TE']},
      'FLEX': {count: 1, positions: ['RB','WR','TE']},
      'DST': {count: 1, positions: ['DST']}
    },
    nba: {
      'PG': {count: 1, positions: ['PG']},
      'SG': {count: 1, positions: ['SG']},
      'SF': {count: 1, positions: ['SF']},
      'PF': {count: 1, positions: ['PF']},
      'C': {count: 1, positions: ['C']},
      'G': {count: 1, positions: ['PG','SG']},
      'F': {count: 1, positions: ['SF','PF']},
      'UTIL': {count: 1, positions: ['PG','SG','SF','PF']}
    },
    mlb: {
      'P': {count: 2, positions: ['P']},
      'C': {count: 1, positions: ['C']},
      '1B': {count: 1, positions: ['1B']},
      '2B': {count: 1, positions: ['2B']},
      '3B': {count: 1, positions: ['3B']},
      'SS': {count: 1, positions: ['SS']},
      'OF': {count: 3, positions: ['OF']}
    }
  }
};