function rando(limit) {
  return Math.floor(Math.random()*limit);
}

const LOREM = 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function buildSentence(parts, puncuation) {
  const segments = ['','','','',''];
  return segments
    .map(()=> parts[rando(parts.length - 1)])
    .reduce( (accum, entry, ix) => {
        let rtn = '';
        if (ix === 0) {
          rtn = accum + entry.charAt(0).toUpperCase() + entry.slice(1);
        } else {
          rtn = accum + ' ' + entry;
        }

        if (ix === segments.length) {
          rtn = rtn + puncuation[rando(puncuation.length - 1)];
        }

        return rtn;
    }, '');
}

export default {
    build: function(textparts, ending, puncuation, isLastP) {
    const PSIZE = LOREM.split(' ').length; //word count

    let text = '';
    while ( (text.split(' ')).length < PSIZE) {
      text += buildSentence(textparts, puncuation) + ' ';
    }

    if (isLastP) {
      text += ending;
    }

    return text;
  }
}
