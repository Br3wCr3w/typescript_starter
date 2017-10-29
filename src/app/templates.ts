namespace root {
    angular
        .module('templates', [])
        .run(['$templateCache', function($templateCache: any) {
            $templateCache.put('./root.html','<div class="root"><div>Hello World</div></div>');
        }]);    
}