angular.module('ui.components.templates', ['page/templates/page-section.tpl.html', 'page/templates/page.tpl.html', 'stepcard/templates/step-card.tpl.html', 'stepcard/templates/step.tpl.html']);

angular.module("page/templates/page-section.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page/templates/page-section.tpl.html",
    "<div id=\"{{section}}\" ng-transclude>\n" +
    "</div>");
}]);

angular.module("page/templates/page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page/templates/page.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-9\" ng-transclude></div>\n" +
    "    <div class=\"col-md-3 page-section-menu\">\n" +
    "        <div>\n" +
    "            <ul class=\"nav nav-pills nav-stacked\">\n" +
    "                <li ng-repeat=\"section in menu\">\n" +
    "                    <a ng-href=\"#{{section.link}}\">{{section.title}}</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("stepcard/templates/step-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("stepcard/templates/step-card.tpl.html",
    "<div class=\"row slice slice-blue\" ng-model=\"cardData\">\n" +
    "    <h2 ng-bind-html=\"cardData.title\"></h2>\n" +
    "    <div ng-class=\"cardData.class\" ng-repeat=\"items in cardData.items\">\n" +
    "        <div class=\"media step-card\">\n" +
    "            <div class=\"step-num media-object pull-left\">{{$index + 1}}</div>\n" +
    "            <div class=\"media-body step-text\">\n" +
    "                <ul class=\"list-unstyled\">\n" +
    "                    <li ng-repeat=\"item in items\"><span ng-bind-html=\"item\"></span></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<span ng-transclude></span>");
}]);

angular.module("stepcard/templates/step.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("stepcard/templates/step.tpl.html",
    "<span ng-transclude></span>");
}]);
