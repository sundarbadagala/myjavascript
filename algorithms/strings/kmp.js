//Knuth-Morris-Pratt Algorithm

//position of text in given sentence/word

const content = 'hello world'
const text = 'llos'

function kmp(string='', word=''){
    var index = -1;
    var m = 0;
    var i = 0;
    var T = makeKMPTable(word);

    while (m + i < string.length) {
        if (word[i] == string[m + i]) {
            if (i == word.length - 1) {
                return m;
            }
            i++;
        } else {
            m = m + i - T[i];
            if (T[i] > -1) {
                i = T[i];
            } else {
                i = 0;
            }
        }
    }
    return index;
}


function makeKMPTable(word=''){
    var results = [];
    var pos = 2;
    var cnd = 0;

    results[0] = -1;
    results[1] = 0;
    while (pos < word.length) {
        if (word[pos - 1] == word[cnd]) {
            cnd++;
            results[pos] = cnd;
            pos++;
        } else if (cnd > 0) {
            cnd = results[cnd];
        } else {
            results[pos] = 0;
            pos++;
        }
    }
    return results;
}

console.log(kmp(content, text));