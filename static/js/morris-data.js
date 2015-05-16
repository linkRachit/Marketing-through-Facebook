$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015 W13',
            iphone: 2666,
            ipad: null,
            itouch: 2647,
            touch: 2356
        }, {
            period: '2015 W14',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2015 W15',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2015 W16',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    

});
