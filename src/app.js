angular.module('ualib.ui', [
    'ngSanitize',
    'ui.bootstrap',
    'duScroll',
    'ualib.ui.templates'
])
    .value('duScrollBottomSpy', true)
    .value('duScrollOffset', 30);
