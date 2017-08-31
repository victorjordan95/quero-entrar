(function() {
    'use strict';
    angular.module('medpass-app', []);


    var inputLabelActive = function() {
        var form = document.getElementById("form");
        form.addEventListener("focus", function( event ) {
            event.target.classList.add('active');
        }, true);

        form.addEventListener("blur", function( event ) {
            if(event.target.value == "") {
                event.target.classList.remove('active');
            }

        }, true);
    };

    inputLabelActive();

})();
