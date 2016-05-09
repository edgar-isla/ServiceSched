/**
 * Created by Owner on 4/11/2016.
 */

(function(){
    'use strict';
    angular.module('printController', []).controller('printController', printController);

    printController.$inject = ["$localStorage"];
    function printController($localStorage) {
        var pc = this;
        //pc.workers =homeController.workers;
        pc.name="what";
        pc.workers=$localStorage.workers;
        pc.printDiv = function() {
            //console.log(divName);
            //var printContents = document.getElementById(divName).innerHTML;
            //var originalContents = document.body.innerHTML;
            //
            //document.body.innerHTML = printContents;
            //
            window.print();
            //
            //document.body.innerHTML = originalContents;
        }

    }



}());
