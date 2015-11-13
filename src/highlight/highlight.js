angular.module('ualib.ui')

    .filter('highlight',[function() {
        return function(text, filterPhrase, strict) {
            if (filterPhrase) {
                var tag_re = /(<\S[^><]*>)/g;
                var tokens = strict ? filterPhrase : [].concat.apply([], filterPhrase.split('"').map(function(v,i){
                    return i%2 ? v : v.split(' ');
                })).filter(Boolean).join('|');

                var filter_re = new RegExp('(' + tokens + ')', 'gi');
                text = text.split(tag_re).map(function(string) {
                    if (string.match(tag_re)) {
                        return string;
                    } else {
                        return string.replace(filter_re,
                            '<span class="mark">$1</span>');
                    }
                }).join('');

            }
            return text;
        };
    }]);