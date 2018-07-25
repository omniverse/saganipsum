import Ipsum from './ipsum.config.js';

function rando(limit) {
  return Math.floor(Math.random()*limit);
}

function shuffle(words) {
    var o, x;
    var ix = words.length - 1;
    var rtn = [];
    while (ix) {
        o = Math.floor(Math.random() * (ix + 1));
        x = words[ix];
        rtn.push(words[o]);
        words[o] = x;
        ix--;
    }
    rtn.push(words[0]);

    return rtn;
}

const LOREM = 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function buildSentence(parts, puncuation) {
  const shuffled = shuffle(parts).slice(0,6);
  return shuffled.reduce( (accum, entry, ix) => {
        let rtn = '';
        if (ix === 0) {
          rtn = accum + entry.charAt(0).toUpperCase() + entry.slice(1);
        } else {
          rtn = accum + ' ' + entry;
        }

        if (ix === shuffled.length - 1) {
          rtn = rtn + puncuation[rando(puncuation.length - 1)];
        }

        return rtn;
    }, '');
}

export default {
    build: function(isLastP) {
      const PSIZE = LOREM.split(' ').length; //word count

      let text = '';
      while ( (text.split(' ')).length < PSIZE) {
        text += buildSentence(Ipsum.words.concat(Ipsum.phrases), Ipsum.puncuation) + ' ';
      }

      if (isLastP) {
        text += ending;
      }

      return text;
    }
}
