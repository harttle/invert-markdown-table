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
        var columns = line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|');
        maxColumn = Math.max(columns.length, maxColumn);
        return columns;
    });

    lines.splice(1, 1);

    var ret = '';
    for (var i=0; i<maxColumn; i++) {
        for (var j=0; j<lines.length; j++) {
            ret += lines[j][i];
            if (j != lines.length - 1) {
                ret += '|';
            }
        }
        ret += '\n';

        if (i === 0) {
            var n = lines.length;
            while(n--) {
                ret += '---';
                if (n > 0) {
                    ret += '|';
                } else {
                    ret += '\n';
                }
            }
        }
    }
    return ret;
}
})();
