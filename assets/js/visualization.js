$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Bayesian Logistic Regression Coefficient by Professor'
        },
        subtitle: {
            text: 'Higher coefficients correspond to higher probabilty of a CTEC instructor rating greater than five and vice versa. A positive coefficient means more likely to have a CTEC score higher than a five'

        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Professor Index'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Coefficient'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1,
            enabled: false
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x}, {point.y}'
                }
            }
        },
        series: [{"name":"Jenna Lyle ","color":"rgba(223, 83, 83, 0.5)","data":[[1,-3.377988772]]},{"name":"Thrasyvoulos Pappas ","color":"rgba(223, 83, 83, 0.5)","data":[[2,-2.194254362]]},{"name":"Margaret Andrews ","color":"rgba(223, 83, 83, 0.5)","data":[[3,-1.844018009]]},{"name":"Steven Daut ","color":"rgba(223, 83, 83, 0.5)","data":[[4,-1.724819277]]},{"name":"Jonathan Katz ","color":"rgba(223, 83, 83, 0.5)","data":[[5,-1.539427307]]},{"name":"John Lake ","color":"rgba(223, 83, 83, 0.5)","data":[[6,-1.376632135]]},{"name":"Jeanne Elizabeth Herrick ","color":"rgba(223, 83, 83, 0.5)","data":[[7,-1.232350256]]},{"name":"Bradley Sageman ","color":"rgba(223, 83, 83, 0.5)","data":[[8,-1.142551691]]},{"name":"Paul Reber ","color":"rgba(223, 83, 83, 0.5)","data":[[9,-1.057520577]]},{"name":"Kenneth Forbus ","color":"rgba(223, 83, 83, 0.5)","data":[[10,-0.733468147]]},{"name":"Chi-Haur Wu ","color":"rgba(223, 83, 83, 0.5)","data":[[11,-0.661508584]]},{"name":"Morteza Amir Rahimi ","color":"rgba(223, 83, 83, 0.5)","data":[[12,-0.314464611]]},{"name":"Fabian Bustamante ","color":"rgba(223, 83, 83, 0.5)","data":[[13,-0.067989784]]},{"name":"Peter Dinda ","color":"rgba(223, 83, 83, 0.5)","data":[[14,-0.06303506]]},{"name":"Ilya Mikhelson ","color":"rgba(223, 83, 83, 0.5)","data":[[15,-0.057500818]]},{"name":"Ming-Yang Kao ","color":"rgba(223, 83, 83, 0.5)","data":[[16,-0.029038725]]},{"name":"Lawrence Joseph Henschen ","color":"rgba(223, 83, 83, 0.5)","data":[[17,0.325440811]]},{"name":"Allen Taflove ","color":"rgba(223, 83, 83, 0.5)","data":[[18,0.338437785]]},{"name":"Goce Trajcevski ","color":"rgba(223, 83, 83, 0.5)","data":[[19,0.431508975]]},{"name":"Yan Chen ","color":"rgba(223, 83, 83, 0.5)","data":[[20,0.502380495]]},{"name":"Richard Walker ","color":"rgba(223, 83, 83, 0.5)","data":[[21,0.519887142]]},{"name":"Douglas Downey ","color":"rgba(83, 223, 83, 0.5)","data":[[22,0.606317503]]},{"name":"Robert Gjerdingen ","color":"rgba(223, 83, 83, 0.5)","data":[[23,0.658061064]]},{"name":"Dongning Guo ","color":"rgba(223, 83, 83, 0.5)","data":[[23,0.680024786]]},{"name":"Marianne Hopman ","color":"rgba(223, 83, 83, 0.5)","data":[[24,0.757164384]]},{"name":"Gail Berger ","color":"rgba(223, 83, 83, 0.5)","data":[[24,0.80373176]]},{"name":"Todd Murphy ","color":"rgba(223, 83, 83, 0.5)","data":[[25,0.916506206]]},{"name":"Walter Herbst ","color":"rgba(223, 83, 83, 0.5)","data":[[26,0.986000239]]},{"name":"Florent Blanc ","color":"rgba(223, 83, 83, 0.5)","data":[[27,1.055799661]]},{"name":"Matthew Grayson ","color":"rgba(223, 83, 83, 0.5)","data":[[28,1.151787555]]},{"name":"Eric Schulz ","color":"rgba(223, 83, 83, 0.5)","data":[[29,1.243850681]]},{"name":"Nikolaos Hardavellas ","color":"rgba(223, 83, 83, 0.5)","data":[[30,1.384581315]]},{"name":"Sara Black ","color":"rgba(223, 83, 83, 0.5)","data":[[31,1.441537024]]},{"name":"Jeff Nelson ","color":"rgba(223, 83, 83, 0.5)","data":[[32,1.552409556]]},{"name":"Jason Hartline ","color":"rgba(223, 83, 83, 0.5)","data":[[33,1.597731337]]},{"name":"Robin Bakal ","color":"rgba(223, 83, 83, 0.5)","data":[[34,1.763852994]]},{"name":"Gregory Ward ","color":"rgba(223, 83, 83, 0.5)","data":[[35,1.887065553]]},{"name":"Veerle Dierickx ","color":"rgba(223, 83, 83, 0.5)","data":[[36,1.955598985]]},{"name":"Maria Moran ","color":"rgba(223, 83, 83, 0.5)","data":[[37,2.180844824]]},{"name":"Donald Nally ","color":"rgba(223, 83, 83, 0.5)","data":[[38,2.258796838]]},{"name":"Robert Sullivan ","color":"rgba(223, 83, 83, 0.5)","data":[[39,2.590010198]]},{"name":"Marie-Therese Pent ","color":"rgba(223, 83, 83, 0.5)","data":[[40,2.692383426]]},{"name":"Patricia Scarampi ","color":"rgba(223, 83, 83, 0.5)","data":[[41,2.780804141]]},{"name":"Margaret Kritzler ","color":"rgba(223, 83, 83, 0.5)","data":[[42,2.939022563]]},{"name":"Ian Horswill ","color":"rgba(223, 83, 83, 0.5)","data":[[43,3.110058123]]},{"name":"Elizabeth McCabe ","color":"rgba(223, 83, 83, 0.5)","data":[[44,3.323527631]]},{"name":"Bryan Pardo ","color":"rgba(223, 83, 83, 0.5)","data":[[45,3.520347847]]},{"name":"Randy Freeman ","color":"rgba(223, 83, 83, 0.5)","data":[[46,3.762054883]]},{"name":"Mark Alznauer ","color":"rgba(223, 83, 83, 0.5)","data":[[47,4.165008119]]}]
    });

    
});



