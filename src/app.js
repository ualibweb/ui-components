angular.module('ualib.ui', [
    'ui.bootstrap',
    'duScroll',
    'ualib.ui.templates'
])
    .value('duScrollBottomSpy', true)
    .value('duScrollOffset', 30);
