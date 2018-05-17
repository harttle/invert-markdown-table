(function () {
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = invertMarkdownTable;
}
else if (typeof define === 'function' && define.amd) {
    define('invert-markdown-table', function() {
        return invertMarkdownTable;
    });
} else {
    window.invertMarkdownTable = invertMarkdownTable;
}

function invertMarkdownTable(markdown) {
    markdown = markdown.trim();

    var maxColumn = 0;
    var lines = markdown.split('\n').map(function (line) {
        var columns = line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(trim);
        columns.maxLength = columns.reduce(function (prev, curr) {
            return Math.max(prev, curr.length);
        }, 0);
        maxColumn = Math.max(columns.length, maxColumn);
        return columns;
    });
    lines.splice(1, 1);

    var revertedLines = [];
    for (var i=0; i<maxColumn; i++) {
        var line = [];
        for (var j=0; j<lines.length; j++) {
            line.push(lines[j][i]);
        }
        revertedLines.push(line);
    }

    revertedLines.splice(1, 0, array('---', lines.length));
    return revertedLines
    .map(function (revertedLine) {
        return revertedLine
        .map(function (cell, i) {
            return pad(cell, lines[i].maxLength);
        })
        .join(' | ');
    })
    .join('\n');
    return text;
}

function pad(word, len) {
    return word + array(' ', len).join('').substr(word.length);
}
function trim(word) {
    return word.trim();
}
function array(val, n) {
    var ret = [];
    while (n--) ret.push(val);
    return ret;
}
})();
