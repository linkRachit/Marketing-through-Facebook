$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015-03-29',
            AppMakr: 10,
            icicidirect: null,
            Payoneer: null,
            
        }, {
            period: '2015-03-30',
            AppMakr: 10,
            icicidirect: null,
            Payoneer: null,
            
        }, {
            period: '2015-04-02',
            AppMakr: null,
            icicidirect: 0,
            Payoneer: 1,
            
        }, {
            period: '2015-04-03',
            AppMakr: 10,
            icicidirect: 10,
            Payoneer: 1,
            
        }, {
            period: '2015-04-04',
            AppMakr: 7,
            icicidirect: 4,
            Payoneer: 10,
            
        }, {
            period: '2015-04-05',
            AppMakr: 8,
            icicidirect: null,
            Payoneer: 1,
            
        }, {
            period: '2015-04-06',
            AppMakr: null,
            icicidirect: null,
            Payoneer: 0,
            
        }, {
            period: '2015-04-07',
            AppMakr: 5,
            icicidirect: 2,
            Payoneer: 8,
            
        }, {
            period: '2015-04-08',
            AppMakr: null,
            icicidirect: 10,
            Payoneer: 2,
            
        }, {
            period: '2015-04-09',
            AppMakr: 0,
            icicidirect: 5,
            Payoneer: 10,
            
        }, {
            period: '2015-04-10',
            AppMakr: null,
            icicidirect: 0,
            Payoneer: null,
            
        }, {
            period: '2015-04-11',
            AppMakr: 0,
            icicidirect: null,
            Payoneer: null,
            
        }, {
            period: '2015-04-13',
            AppMakr: 8,
            icicidirect: null,
            Payoneer: null,
            
        }, {
            period: '2015-04-14',
            AppMakr: 2,
            icicidirect: null,
            Payoneer: null,
            
        }, {
            period: '2015-04-15',
            AppMakr: 10,
            icicidirect: null,
            Payoneer: null,
            
        }],
        xkey: 'period',
        ykeys: ['AppMakr', 'icicidirect', 'Payoneer'],
        labels: ['AppMakr', 'icicidirect', 'Payoneer'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "AppMakr",
            value: 11
        }, {
            label: "icicidirect",
            value: 7
        }, {
            label: "Payoneer",
            value: 7
        }],
        resize: true
    });

    

});
