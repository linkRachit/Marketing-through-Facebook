$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015-03-26',
            AmericanSwan: 0,
            ShopFashionara: 4,
            voxpopclothing: null,
            
        }, {
            period: '2015-03-29',
            AmericanSwan: 0,
            ShopFashionara: null,
            voxpopclothing: 3,
            
        }, {
            period: '2015-03-30',
            AmericanSwan: 1,
            ShopFashionara: 10,
            voxpopclothing: 1,
            
        }, {
            period: '2015-03-31',
            AmericanSwan: null,
            ShopFashionara: null,
            voxpopclothing: 10,
            
        }, {
            period: '2015-04-01',
            AmericanSwan: 0,
            ShopFashionara: 5,
            voxpopclothing: null,
            
        }, {
            period: '2015-04-02',
            AmericanSwan: 0,
            ShopFashionara: 0,
            voxpopclothing: null,
            
        }, {
            period: '2015-04-03',
            AmericanSwan: 8,
            ShopFashionara: 0,
            voxpopclothing: 10,
            
        }, {
            period: '2015-04-04',
            AmericanSwan: 2,
            ShopFashionara: 1,
            voxpopclothing: 10,
            
        }, {
            period: '2015-04-05',
            AmericanSwan: 10,
            ShopFashionara: 0,
            voxpopclothing: 1,
            
        }, {
            period: '2015-04-06',
            AmericanSwan: null,
            ShopFashionara: null,
            voxpopclothing: 0,
            
        }, {
            period: '2015-04-07',
            AmericanSwan: null,
            ShopFashionara: null,
            voxpopclothing: 8,
            
        }, {
            period: '2015-04-08',
            AmericanSwan: null,
            ShopFashionara: null,
            voxpopclothing: 2,
            
        }, {
            period: '2015-04-09',
            AmericanSwan: null,
            ShopFashionara: null,
            voxpopclothing: 10,
            
        }],
        xkey: 'period',
        ykeys: ['AmericanSwan', 'ShopFashionara', 'voxpopclothing'],
        labels: ['AmericanSwan', 'ShopFashionara', 'voxpopclothing'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "AmericanSwan",
            value: 8
        }, {
            label: "ShopFashionara",
            value: 8
        }, {
            label: "voxpopclothing",
            value: 10
        }],
        resize: true
    });

    

});
