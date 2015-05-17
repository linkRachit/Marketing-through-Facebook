$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015-03-26',
            ararazustudio: null,
            housing: 5,
            Runscope: null,
            
        }, {
            period: '2015-03-29',
            ararazustudio: null,
            housing: null,
            Runscope: 10,
            
        }, {
            period: '2015-03-30',
            ararazustudio: null,
            housing: null,
            Runscope: 10,
            
        }, {
            period: '2015-03-31',
            ararazustudio: null,
            housing: 6,
            Runscope: null,
            
        }, {
            period: '2015-04-01',
            ararazustudio: null,
            housing: 8,
            Runscope: 10,
            
        }, {
            period: '2015-04-02',
            ararazustudio: null,
            housing: null,
            Runscope: 10,
            
        }, {
            period: '2015-04-04',
            ararazustudio: 0,
            housing: null,
            Runscope: 10,
            
        }, {
            period: '2015-04-05',
            ararazustudio: null,
            housing: null,
            Runscope: 10,
            
        }, {
            period: '2015-04-07',
            ararazustudio: 0,
            housing: null,
            Runscope: null,
            
        }, {
            period: '2015-04-08',
            ararazustudio: 0,
            housing: null,
            Runscope: null,
            
        }, {
            period: '2015-04-09',
            ararazustudio: null,
            housing: null,
            Runscope: 10,
            
        }, {
            period: '2015-04-20',
            ararazustudio: null,
            housing: null,
            Runscope: 10,
            
        }],
        xkey: 'period',
        ykeys: ['ararazustudio', 'housing', 'Runscope'],
        labels: ['ararazustudio', 'housing', 'Runscope'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "ararazustudio",
            value: 3
        }, {
            label: "housing.com",
            value: 3
        }, {
            label: "Runscope",
            value: 8
        }],
        resize: true
    });

    

});
