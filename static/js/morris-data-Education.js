$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015-03-26',
            acadgild: null,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-03-29',
            acadgild: null,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-03-30',
            acadgild: null,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-01',
            acadgild: 3,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-02',
            acadgild: 3,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-03',
            acadgild: 10,
            edurekaIN: null,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-04',
            acadgild: 7,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-05',
            acadgild: 8,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-07',
            acadgild: 5,
            edurekaIN: null,
            JamboreeIndia: 5,
            
        }, {
            period: '2015-04-08',
            acadgild: null,
            edurekaIN: null,
            JamboreeIndia: 10,
            
        }, {
            period: '2015-04-09',
            acadgild: 0,
            edurekaIN: 10,
            JamboreeIndia: 5,
            
        }, {
            period: '2015-04-10',
            acadgild: 0,
            edurekaIN: null,
            JamboreeIndia: 0,
            
        }, {
            period: '2015-04-13',
            acadgild: 8,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-14',
            acadgild: 2,
            edurekaIN: null,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-15',
            acadgild: 10,
            edurekaIN: null,
            JamboreeIndia: 0,
            
        }, {
            period: '2015-04-18',
            acadgild: null,
            edurekaIN: 10,
            JamboreeIndia: 1,
            
        }, {
            period: '2015-04-19',
            acadgild: null,
            edurekaIN: 10,
            JamboreeIndia: null,
            
        }, {
            period: '2015-04-20',
            acadgild: null,
            edurekaIN: null,
            JamboreeIndia: 0,
            
        }, ],
        xkey: 'period',
        ykeys: ['acadgild', 'edurekaIN', 'JamboreeIndia'],
        labels: ['acadgild', 'edurekaIN', 'JamboreeIndia'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "acadgild",
            value: 10
        }, {
            label: "edurekaIN",
            value: 11
        }, {
            label: "JamboreeIndia",
            value: 7
        }],
        resize: true
    });

    

});
