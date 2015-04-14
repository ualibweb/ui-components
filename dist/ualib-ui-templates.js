angular.module('ualib.ui.templates', ['page/templates/page-section.tpl.html', 'page/templates/page.tpl.html', 'stepcard/templates/step-card.tpl.html', 'stepcard/templates/step.tpl.html', 'tabs/templates/tab.tpl.html', 'tabs/templates/tabset.tpl.html', 'tmp.tpl.html']);

angular.module("page/templates/page-section.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page/templates/page-section.tpl.html",
    "<div id=\"{{section}}\" ng-transclude>\n" +
    "</div>");
}]);

angular.module("page/templates/page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page/templates/page.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-9\" ng-transclude></div>\n" +
    "  <div class=\"col-md-3 page-section-menu\">\n" +
    "    <div>\n" +
    "      <ul class=\"nav nav-pills nav-stacked\">\n" +
    "        <li ng-repeat=\"section in menu\">\n" +
    "          <a ng-href=\"#{{section.link}}\">\n" +
    "            <span class=\"fa fa-fw\" ng-class=\"section.icon\" ng-if=\"section.icon\"></span>\n" +
    "            {{section.title}}\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("stepcard/templates/step-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("stepcard/templates/step-card.tpl.html",
    "<div class=\"row step-card\">\n" +
    "  <h3 ng-if=\"heading\">{{heading}}</h3>\n" +
    "  <div ng-transclude></div>\n" +
    "</div>");
}]);

angular.module("stepcard/templates/step.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("stepcard/templates/step.tpl.html",
    "<div class=\"step-card-step\" ng-class=\"stepcard.colSize\">\n" +
    "  <div class=\"step-num pull-left\">{{}}</div>\n" +
    "</div>");
}]);

angular.module("tabs/templates/tab.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tabs/templates/tab.tpl.html",
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "    <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</li>");
}]);

angular.module("tabs/templates/tabset.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tabs/templates/tabset.tpl.html",
    "<div ng-class=\"{'row tabset-vertical': vertical}\">\n" +
    "    <div ng-class=\"tabClass\">\n" +
    "        <ul class=\"nav nav-{{type || (vertical ? 'pills' : 'tabs')}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-content\" ng-class=\"contentClass\">\n" +
    "        <div class=\"tab-pane\"\n" +
    "             ng-repeat=\"tab in tabs\"\n" +
    "             ng-class=\"{active: tab.active}\"\n" +
    "             tab-content-transclude=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tmp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tmp.tpl.html",
    "<div class=\"container home-slice\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6\" style=\"padding: 15px; background-color: rgba(255,255,255,.9); display: table;\">\n" +
    "            <div class=\"event-card\" style=\"display: table-row\">\n" +
    "                <div style=\"text-align: right; font-size: 20px; color: #999; display: table-cell; vertical-align: top; padding-right: 15px;\">          News        </div>\n" +
    "                <div style=\"display: table-cell; vertical-align: top;\">\n" +
    "                    <div class=\"media\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <a href=\"#\">\n" +
    "                                <div class=\"media-object\" style=\"background-color: #999; height: 64px; width: 64px;\"/>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h4 class=\"media-heading\">Visiting Poet To Give Reading on UA Campus</h4>\n" +
    "                            The Coal Royalty Fund of the English Department at the University of Alabama presents Cathy Park Hong.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"event-card\" style=\"display: table-row\">\n" +
    "                <div style=\"text-align: right; font-size: 20px; color: #999; display: table-cell; vertical-align: top; padding-right: 15px;\">          Events        </div>\n" +
    "                <div style=\"display: table-cell; vertical-align: top;\">\n" +
    "                    <div class=\"media\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <a href=\"#\">\n" +
    "                                <div class=\"media-object\" style=\"background-color: #999; height: 64px; width: 64px;\"/>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h4 class=\"media-heading\">UA Eco-Health Workshop</h4>\n" +
    "                            Sponsored by: Office for Research and Economic Development/ Office for Sponsored Programs\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"media\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <a href=\"#\">\n" +
    "                                <div class=\"media-object\" style=\"background-color: #999; height: 64px; width: 64px;\"/>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">\n" +
    "                            <h4 class=\"media-heading\">Visiting Poet To Give Reading on UA Campus</h4>\n" +
    "                            Sponsored by: Office for Sponsored Programs/Office for Research and Economic Development\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"event-card\" style=\"display: table-row\">\n" +
    "                <div style=\"text-align: right; font-size: 20px; color: #999; display: table-cell; vertical-align: top; padding-right: 15px;\">          Exhibits        </div>\n" +
    "                <div style=\"display: table-cell; vertical-align: top;\">\n" +
    "                    <div class=\"media\">\n" +
    "                        <div class=\"media-left\">\n" +
    "                            <a href=\"#\">\n" +
    "                                <div class=\"media-object\" style=\"background-color: #999; height: 64px; width: 64px;\"/>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"media-body\">              Lorem ipsum dolor sit amet, consectetur adipiscing elit.              Donec vitae.            </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6\" style=\"background-color: rgba(255, 255, 255, 0.9); display: table; color: #999; margin-top: 30px; padding-bottom:15px;\">\n" +
    "            <h3>Available Computers</h3>\n" +
    "            <div class=\"col-xs-2 text-center\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 20px;\">\n" +
    "                        <small>Gorgas</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 40px; color:#333333;\">97</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2 text-center\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 20px;\">\n" +
    "                        <small>Rodgers</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 40px; color:#333333;\">15</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2 text-center\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 20px;\">\n" +
    "                        <small>McLure</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 40px; color:#333333;\">36</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2 text-center\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 20px;\">\n" +
    "                        <small>Bruno</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 40px; color:#333333;\">21</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-4 text-center\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 20px;\">\n" +
    "                        <small>Sanford Media</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"font-size: 40px; color:#333333;\">2</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6\"></div>\n" +
    "</div>");
}]);
