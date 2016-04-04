//TODO   need to create button am/pm.
//TODO   need to work on week
//TODO   check for inputs.  empty name field, text fields.


(function(){
    'use strict';
    angular.module('homeController', []).factory("myData", [function(){

        var names = [
            {firstName: "Edgar Isla"},
            {firstName: "Alex G"},
            {firstName: "Brian A"}
        ];
        return {
            getNames: names
        };
    }]).controller('homeController', homeController);

    homeController.$inject = ['$firebase','myData'];
    function homeController( $firebaseArray, myData) {
        var hc = this;
        var ref = new Firebase("https://authservice.firebaseio.com/");
        hc.workers = $firebaseArray(ref);
        //hc.people = myData.getNames; // above factory that I may implement
        //hc.people= myData.getNames;
        hc.addWorkers = addWorkers;
        hc.saveSchedule=saveSchedule;
        hc.saveWeek=saveWeek;
        hc.deleteWorker=deleteWorker;
        hc.send= send;
        hc.people=[];
        hc.useId="";

        //monday
        hc.MonHourS=[]; // create array for all the
        hc.MonHalfS=[];
        hc.MonHourE=[]; // create array for all the
        hc.MonHalfE=[];
        //tuesday
        hc.TuesHourS=[]; // create array for all the
        hc.TuesHalfS=[];
        hc.TuesHourE=[]; // create array for all the
        hc.TuesHalfE=[];
        //Wednesday
        hc.WedHourS=[]; // create array for all the
        hc.WedHalfS=[];
        hc.WedHourE=[]; // create array for all the
        hc.WedHalfE=[];
        //Thurs
        hc.ThursHourS=[]; // create array for all the
        hc.ThursHalfS=[];
        hc.ThursHourE=[]; // create array for all the
        hc.ThursHalfE=[];
        //Friday
        hc.FriHourS=[]; // create array for all the
        hc.FriHalfS=[];
        hc.FriHourE=[]; // create array for all the
        hc.FriHalfE=[];
        //SatSat
        hc.SatHourS=[]; // create array for all the
        hc.SatHalfS=[];
        hc.SatHourE=[]; // create array for all the
        hc.SatHalfE=[];

        hc.lastId="";
        function send(id, index){
            hc.currentId=id;

            console.log("Monday start time: "+hc.MonHourS[index]+":"+ hc.MonHalfS[index]);
            console.log("Monday end time: "+hc.MonHourE[index]+":"+ hc.MonHalfE[index]);
            //Monday
            hc.workers[hc.currentId].MondayStart= hc.MonHourS[index]+":"+ hc.MonHalfS[index];
            hc.workers[hc.currentId].MondayEnd= hc.MonHourE[index]+":"+ hc.MonHalfE[index];
            //Tuesday send to firebase
            hc.workers[hc.currentId].TuesdayStart= hc.TuesHourS[index]+":"+ hc.TuesHalfS[index];
            hc.workers[hc.currentId].TuesdayEnd= hc.TuesHourE[index]+":"+ hc.TuesHalfE[index];
            //Wednesday
            hc.workers[hc.currentId].WednesdayStart= hc.WedHourS[index]+":"+ hc.TuesHalfS[index];
            hc.workers[hc.currentId].WednesdayEnd= hc.WedHourE[index]+":"+ hc.TuesHalfE[index];
            //Thursday
            hc.workers[hc.currentId].ThursdayStart= hc.ThursHourS[index]+":"+ hc.TuesHalfS[index];
            hc.workers[hc.currentId].ThursdayEnd= hc.ThursHourE[index]+":"+ hc.TuesHalfE[index];
            //Friday
            hc.workers[hc.currentId].FridayStart= hc.FriHourS[index]+":"+ hc.TuesHalfS[index];
            hc.workers[hc.currentId].FridayEnd= hc.FriHourE[index]+":"+ hc.TuesHalfE[index];
            //Saturday
            hc.workers[hc.currentId].SaturdayStart= hc.SatHourS[index]+":"+ hc.TuesHalfS[index];
            hc.workers[hc.currentId].SaturdayEnd= hc.SatHourE[index]+":"+ hc.TuesHalfE[index];
            hc.workers.$save(hc.currentId);
        }
        function getNames(){
            return hc.workers.$add({
            }).then(function (ref) {
                var keys = hc.workers.$getIndex();
                angular.forEach(keys, function(key) {
                    hc.people.push({ firstName: hc.workers[key].firstName});
                });
                hc.useId=keys[0];
            });

        }
        function addWorkers() {
            return hc.workers.$add({
                firstName: hc.firstName

            }).then(function (ref) {
                hc.firstName="";
                hc.lastId= ref.name();
                hc.workers[hc.lastId].Id=hc.lastId;
                hc.workers.$save(hc.lastId);
            });
        }
        function saveSchedule(event) {
            return hc.workers.$add({


            }).then(function (ref) {

            });
        }
        hc.ARRAY_SIZE=15; //I know this is a mix of c++; sorry
        for(var i= 0; i<hc.ARRAY_SIZE; i++)
        {
            hc.MonHourS[i]=7;
            hc.MonHalfS[i]=30;
            hc.MonHourE[i]=5;
            hc.MonHalfE[i]=30;
            hc.TuesHourS[i]=7; // create array for all the
            hc.TuesHalfS[i]=30;
            hc.TuesHourE[i]=5; // create array for all the
            hc.TuesHalfE[i]=30;
            //wed
            hc.WedHourS[i]=7; // create array for all the
            hc.WedHalfS[i]=30;
            hc.WedHourE[i]=5; // create array for all the
            hc.WedHalfE[i]=30;
            //thurs
            hc.ThursHourS[i]=7; // create array for all the
            hc.ThursHalfS[i]=30;
            hc.ThursHourE[i]=5; // create array for all the
            hc.ThursHalfE[i]=30;
            //Friday
            hc.FriHourS[i]=7; // create array for all the
            hc.FriHalfS[i]=30;
            hc.FriHourE[i]=5; // create array for all the
            hc.FriHalfE[i]=30;
            //Saturday
            hc.SatHourS[i]=7; // create array for all the
            hc.SatHalfS[i]=30;
            hc.SatHourE[i]=5; // create array for all the
            hc.SatHalfE[i]=30;
        }
        function saveWeek(){
            return hc.workers.$add({
            }).then(function (ref) {
                var keys = hc.workers.$getIndex();
                console.log(keys + "Length" + keys.length);

                var subStringWeek=hc.week.toString();
                var week=subStringWeek[8]+subStringWeek[9];
                for(var i=0; i<keys.length; i++)
                {
                    hc.workers[keys[i]].currentWeek=week;
                    hc.workers.$save(keys[i]);
                }
            });

        }
        function deleteWorker(id, index){
            hc.workers.$remove(id)
        }
    getNames();

    }


}());
