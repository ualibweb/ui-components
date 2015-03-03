angular.module('ui.components.templates', ['megamenu/templates/megamenu-button.tpl.html', 'megamenu/templates/megamenu-dropdown.tpl.html', 'megamenu/templates/megamenu-navbar.tpl.html', 'megamenu/templates/megamenu.tpl.html', 'page/templates/page-section.tpl.html', 'page/templates/page.tpl.html', 'stepcard/templates/step-card.tpl.html', 'stepcard/templates/step.tpl.html']);

angular.module("megamenu/templates/megamenu-button.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("megamenu/templates/megamenu-button.tpl.html",
    "<li class=\"yamm-fw\">\n" +
    "    <a ng-href=\"{{link}}\" ng-if=\"!icon\" ng-transclude></a>\n" +
    "</li>");
}]);

angular.module("megamenu/templates/megamenu-dropdown.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("megamenu/templates/megamenu-dropdown.tpl.html",
    "<li class=\"dropdown yamm-fw\">\n" +
    "    <a ng-href=\"{{link}}\" class=\"dropdown-toggle\" ng-if=\"!icon\">{{title}}</a>\n" +
    "    <a ng-href=\"{{link}}\" class=\"dropdown-toggle\" ng-if=\"icon\">\n" +
    "        <span class=\"fa\" ng-class=\"icon\"></span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "        <li>\n" +
    "            <div class=\"yamm-content\">\n" +
    "                <div ng-transclude></div>\n" +
    "                <div class=\"row megamenu-all-link\" ng-if=\"link\">\n" +
    "                   <a ng-href=\"{{link}}\"> All {{title}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</li>");
}]);

angular.module("megamenu/templates/megamenu-navbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("megamenu/templates/megamenu-navbar.tpl.html",
    "<ul class=\"nav navbar-nav magamenu-navbar\" ng-transclude></ul>");
}]);

angular.module("megamenu/templates/megamenu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("megamenu/templates/megamenu.tpl.html",
    "<nav class=\"navbar navbar-inverse mega-menu yamm\" role=\"navigation\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-transclude ng-cloak>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>");
}]);

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
    "        <div data-spy=\"affix\" data-offset-top=\"101\">\n" +
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
