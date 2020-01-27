export const natureArr = [
  'Adamant (+Atk, -Spa)',
  'Bashful',
  'Bold (+Def, -Atk)',
  'Brave (+Atk, -Spe)',
  'Calm (+Spd, -Atk)',
  'Careful (+Spd, -Spa)',
  'Docile',
  'Gentle (+Spd, -Def)',
  'Hardy',
  'Hasty (+Spe, -Def)',
  'Impish (+Def, -Spa)',
  'Jolly (+Spe, -Spa)',
  'Lax (+Def, -Spd)',
  'Lonely (+Atk, -Def)',
  'Mild (+Spa, -Def)',
  'Modest (+Spa, -Atk)',
  'Naive (+Spe, -Spd)',
  'Naughty (+Atk, -Spd)',
  'Quiet (+Spa, -Spe)',
  'Quirky',
  'Rash (+Spa, -Spd)',
  'Relaxed (+Def, -Spe)',
  'Sassy (+Spd, -Spe)',
  'Serious',
  'Timid (+Spe, -Atk)'
];

export const evArr = [
  { id: 'hpev', text: 'HP' },
  { id: 'atkev', text: 'ATK' },
  { id: 'spaev', text: 'SPA' },
  { id: 'defev', text: 'DEF' },
  { id: 'spdev', text: 'SPD' },
  { id: 'speev', text: 'SPE' }
];

export const moveArr = [
  { id: 'move1', text: 'Move 1' },
  { id: 'move2', text: 'Move 2' },
  { id: 'move3', text: 'Move 3' },
  { id: 'move4', text: 'Move 4' }
];

export const pokemon = {
  name: '',
  sprite: '',
  type: {
    type1: '',
    type2: ''
  },
  ability: '',
  item: '',
  EVs: {
    hpev: 0,
    atkev: 0,
    defev: 0,
    spaev: 0,
    spdev: 0,
    speev: 0
  },
  nature: '',
  moves: {
    move1: '',
    move2: '',
    move3: '',
    move4: ''
  }
};
