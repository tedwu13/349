$(function () {
    $('#professorChart').highcharts({
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

    $('#wordsChart').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Words Chart'
        },
        subtitle: {
            text: 'Words with higher coefficients correspond to higher probabilty of a CTEC rating greater than five and vice versa. '

        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Word Index'
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
        series: [{"name":"worst","color":"rgb(255, 0, 0)","data":[[1,-1.111955039]]},{"name":"waste","color":"rgb(255, 0, 0)","data":[[2,-0.68295768]]},{"name":"frustrating","color":"rgb(255, 0, 0)","data":[[3,-0.668742193]]},{"name":"boring","color":"rgb(255, 0, 0)","data":[[4,-0.634978999]]},{"name":"impossible","color":"rgb(255, 0, 0)","data":[[5,-0.591508151]]},{"name":"guest","color":"rgb(255, 0, 0)","data":[[6,-0.567053011]]},{"name":"confusing","color":"rgb(255, 0, 0)","data":[[7,-0.546121281]]},{"name":"labs","color":"rgb(255, 0, 0)","data":[[8,-0.508486816]]},{"name":"programming","color":"rgb(255, 0, 0)","data":[[9,-0.485197454]]},{"name":"decent","color":"rgb(255, 0, 0)","data":[[10,-0.469757135]]},{"name":"project","color":"rgb(255, 0, 0)","data":[[11,-0.423735592]]},{"name":"anything","color":"rgb(255, 0, 0)","data":[[12,-0.340210741]]},{"name":"midterm","color":"rgb(255, 0, 0)","data":[[13,-0.297565593]]},{"name":"terrible","color":"rgb(255, 0, 0)","data":[[14,-0.281306397]]},{"name":"guy","color":"rgb(255, 0, 0)","data":[[15,-0.276869575]]},{"name":"slides","color":"rgb(255, 0, 0)","data":[[16,-0.273295192]]},{"name":"sometimes","color":"rgb(255, 0, 0)","data":[[17,-0.270146736]]},{"name":"office","color":"rgb(255, 0, 0)","data":[[18,-0.268238364]]},{"name":"harder","color":"rgb(255, 0, 0)","data":[[19,-0.265089336]]},{"name":"dry","color":"rgb(255, 0, 0)","data":[[20,-0.245657084]]},{"name":"focus","color":"rgb(255, 0, 0)","data":[[21,-0.242390177]]},{"name":"required","color":"rgb(255, 0, 0)","data":[[22,-0.235197344]]},{"name":"projects","color":"rgb(255, 0, 0)","data":[[23,-0.202071]]},{"name":"cool","color":"rgb(255, 0, 0)","data":[[24,-0.201590334]]},{"name":"fine","color":"rgb(255, 0, 0)","data":[[25,-0.198834317]]},{"name":"major","color":"rgb(255, 0, 0)","data":[[26,-0.198408699]]},{"name":"future","color":"rgb(255, 0, 0)","data":[[27,-0.197854996]]},{"name":"little","color":"rgb(255, 0, 0)","data":[[28,-0.19762055]]},{"name":"lecture","color":"rgb(255, 0, 0)","data":[[29,-0.196309334]]},{"name":"spent","color":"rgb(255, 0, 0)","data":[[30,-0.193068551]]},{"name":"good","color":"rgb(255, 0, 0)","data":[[31,-0.187538634]]},{"name":"content","color":"rgb(255, 0, 0)","data":[[32,-0.186326146]]},{"name":"day","color":"rgb(255, 0, 0)","data":[[33,-0.169118553]]},{"name":"bad","color":"rgb(255, 0, 0)","data":[[34,-0.16748432]]},{"name":"nice","color":"rgb(255, 0, 0)","data":[[35,-0.164120256]]},{"name":"half","color":"rgb(255, 0, 0)","data":[[36,-0.163662789]]},{"name":"care","color":"rgb(255, 0, 0)","data":[[37,-0.160362436]]},{"name":"tests","color":"rgb(255, 0, 0)","data":[[38,-0.157011008]]},{"name":"grammar","color":"rgb(255, 0, 0)","data":[[39,-0.156334248]]},{"name":"section","color":"rgb(255, 0, 0)","data":[[40,-0.155368735]]},{"name":"keep","color":"rgb(255, 0, 0)","data":[[41,-0.154139552]]},{"name":"pretty","color":"rgb(255, 0, 0)","data":[[42,-0.152906623]]},{"name":"consuming","color":"rgb(255, 0, 0)","data":[[43,-0.152123736]]},{"name":"structure","color":"rgb(255, 0, 0)","data":[[44,-0.151044697]]},{"name":"paper","color":"rgb(255, 0, 0)","data":[[45,-0.144367609]]},{"name":"interesting","color":"rgb(255, 0, 0)","data":[[46,-0.141209159]]},{"name":"busy","color":"rgb(255, 0, 0)","data":[[47,-0.117478075]]},{"name":"came","color":"rgb(255, 0, 0)","data":[[48,-0.111743939]]},{"name":"field","color":"rgb(255, 0, 0)","data":[[49,-0.110079977]]},{"name":"instruction","color":"rgb(255, 0, 0)","data":[[50,-0.103650066]]},{"name":"graded","color":"rgb(255, 0, 0)","data":[[51,-0.09781056]]},{"name":"group","color":"rgb(255, 0, 0)","data":[[52,-0.097561524]]},{"name":"requirement","color":"rgb(255, 0, 0)","data":[[53,-0.096238992]]},{"name":"tough","color":"rgb(255, 0, 0)","data":[[54,-0.088930572]]},{"name":"put","color":"rgb(255, 0, 0)","data":[[55,-0.085866485]]},{"name":"hard","color":"rgb(255, 0, 0)","data":[[56,-0.084723001]]},{"name":"winter","color":"rgb(255, 0, 0)","data":[[57,-0.084449872]]},{"name":"people","color":"rgb(255, 0, 0)","data":[[58,-0.065822017]]},{"name":"exactly","color":"rgb(255, 0, 0)","data":[[59,-0.065475439]]},{"name":"workload","color":"rgb(255, 0, 0)","data":[[60,-0.064403189]]},{"name":"annoying","color":"rgb(255, 0, 0)","data":[[61,-0.064206866]]},{"name":"design","color":"rgb(255, 0, 0)","data":[[62,-0.062359067]]},{"name":"nothing","color":"rgb(255, 0, 0)","data":[[63,-0.060439771]]},{"name":"culture","color":"rgb(255, 0, 0)","data":[[64,-0.060439262]]},{"name":"though","color":"rgb(255, 0, 0)","data":[[65,-0.059825547]]},{"name":"points","color":"rgb(255, 0, 0)","data":[[66,-0.058324035]]},{"name":"difficult","color":"rgb(255, 0, 0)","data":[[67,-0.057868893]]},{"name":"test","color":"rgb(255, 0, 0)","data":[[68,-0.056576685]]},{"name":"gave","color":"rgb(255, 0, 0)","data":[[69,-0.056375971]]},{"name":"speaking","color":"rgb(255, 0, 0)","data":[[70,-0.056363116]]},{"name":"tedious","color":"rgb(255, 0, 0)","data":[[71,-0.053577272]]},{"name":"overall","color":"rgb(255, 0, 0)","data":[[72,-0.053353335]]},{"name":"exams","color":"rgb(255, 0, 0)","data":[[73,0.015121706]]},{"name":"students","color":"rgb(255, 0, 0)","data":[[74,0.022486168]]},{"name":"teachers","color":"rgb(255, 0, 0)","data":[[75,0.02288403]]},{"name":"recommend","color":"rgb(255, 0, 0)","data":[[76,0.025268014]]},{"name":"solid","color":"rgb(255, 0, 0)","data":[[77,0.028120545]]},{"name":"clear","color":"rgb(255, 0, 0)","data":[[78,0.028917254]]},{"name":"straight","color":"rgb(255, 0, 0)","data":[[79,0.031034822]]},{"name":"high","color":"rgb(255, 0, 0)","data":[[80,0.032773374]]},{"name":"funny","color":"rgb(255, 0, 0)","data":[[81,0.032826915]]},{"name":"know","color":"rgb(255, 0, 0)","data":[[82,0.033157087]]},{"name":"spend","color":"rgb(255, 0, 0)","data":[[83,0.034136915]]},{"name":"back","color":"rgb(255, 0, 0)","data":[[84,0.035914405]]},{"name":"effort","color":"rgb(255, 0, 0)","data":[[85,0.03733336]]},{"name":"knowledgeable","color":"rgb(255, 0, 0)","data":[[86,0.047376121]]},{"name":"open","color":"rgb(255, 0, 0)","data":[[87,0.054036453]]},{"name":"end","color":"rgb(255, 0, 0)","data":[[88,0.054991263]]},{"name":"learn","color":"rgb(255, 0, 0)","data":[[89,0.056042595]]},{"name":"relatively","color":"rgb(255, 0, 0)","data":[[90,0.057683923]]},{"name":"enjoyed","color":"rgb(255, 0, 0)","data":[[91,0.057905817]]},{"name":"thought","color":"rgb(255, 0, 0)","data":[[92,0.058174253]]},{"name":"writing","color":"rgb(255, 0, 0)","data":[[93,0.058269789]]},{"name":"next","color":"rgb(255, 0, 0)","data":[[94,0.064458205]]},{"name":"courses","color":"rgb(255, 0, 0)","data":[[95,0.064935913]]},{"name":"organized","color":"rgb(255, 0, 0)","data":[[96,0.065911512]]},{"name":"always","color":"rgb(255, 0, 0)","data":[[97,0.066921224]]},{"name":"understand","color":"rgb(255, 0, 0)","data":[[98,0.067809898]]},{"name":"review","color":"rgb(255, 0, 0)","data":[[99,0.068363212]]},{"name":"instructor","color":"rgb(255, 0, 0)","data":[[100,0.069336127]]},{"name":"essays","color":"rgb(255, 0, 0)","data":[[101,0.069405706]]},{"name":"follow","color":"rgb(255, 0, 0)","data":[[102,0.071065147]]},{"name":"studying","color":"rgb(255, 0, 0)","data":[[103,0.071214943]]},{"name":"discussions","color":"rgb(255, 0, 0)","data":[[104,0.079485104]]},{"name":"learned","color":"rgb(255, 0, 0)","data":[[105,0.080166809]]},{"name":"helps","color":"rgb(255, 0, 0)","data":[[106,0.085789371]]},{"name":"pace","color":"rgb(255, 0, 0)","data":[[107,0.088145676]]},{"name":"understanding","color":"rgb(255, 0, 0)","data":[[108,0.090092721]]},{"name":"easily","color":"rgb(255, 0, 0)","data":[[109,0.097749008]]},{"name":"online","color":"rgb(255, 0, 0)","data":[[110,0.098998384]]},{"name":"concepts","color":"rgb(255, 0, 0)","data":[[111,0.099058338]]},{"name":"passionate","color":"rgb(255, 0, 0)","data":[[112,0.099068767]]},{"name":"interested","color":"rgb(255, 0, 0)","data":[[113,0.100873328]]},{"name":"classes","color":"rgb(255, 0, 0)","data":[[114,0.102749278]]},{"name":"final","color":"rgb(255, 0, 0)","data":[[115,0.103552481]]},{"name":"study","color":"rgb(255, 0, 0)","data":[[116,0.111056173]]},{"name":"straightforward","color":"rgb(255, 0, 0)","data":[[117,0.112341639]]},{"name":"improved","color":"rgb(255, 0, 0)","data":[[118,0.132313611]]},{"name":"glad","color":"rgb(255, 0, 0)","data":[[119,0.137838334]]},{"name":"thinking","color":"rgb(255, 0, 0)","data":[[120,0.13811353]]},{"name":"fair","color":"rgb(255, 0, 0)","data":[[121,0.138911184]]},{"name":"answer","color":"rgb(255, 0, 0)","data":[[122,0.140693759]]},{"name":"around","color":"rgb(255, 0, 0)","data":[[123,0.141547545]]},{"name":"extra","color":"rgb(255, 0, 0)","data":[[124,0.142114008]]},{"name":"participation","color":"rgb(255, 0, 0)","data":[[125,0.143701526]]},{"name":"completely","color":"rgb(255, 0, 0)","data":[[126,0.149948534]]},{"name":"quickly","color":"rgb(255, 0, 0)","data":[[127,0.157197056]]},{"name":"else","color":"rgb(255, 0, 0)","data":[[128,0.157890276]]},{"name":"everyone","color":"rgb(255, 0, 0)","data":[[129,0.159563728]]},{"name":"experience","color":"rgb(255, 0, 0)","data":[[130,0.164584757]]},{"name":"enjoyable","color":"rgb(255, 0, 0)","data":[[131,0.16579478]]},{"name":"helpful","color":"rgb(255, 0, 0)","data":[[132,0.170594624]]},{"name":"reasonable","color":"rgb(255, 0, 0)","data":[[133,0.172360523]]},{"name":"possible","color":"rgb(255, 0, 0)","data":[[134,0.175197521]]},{"name":"teacher","color":"rgb(255, 0, 0)","data":[[135,0.176081779]]},{"name":"gives","color":"rgb(255, 0, 0)","data":[[136,0.17990991]]},{"name":"northwestern","color":"rgb(255, 0, 0)","data":[[137,0.180380872]]},{"name":"heavy","color":"rgb(255, 0, 0)","data":[[138,0.183437701]]},{"name":"love","color":"rgb(255, 0, 0)","data":[[139,0.204734554]]},{"name":"world","color":"rgb(255, 0, 0)","data":[[140,0.215726989]]},{"name":"knowledge","color":"rgb(255, 0, 0)","data":[[141,0.216039161]]},{"name":"engaging","color":"rgb(255, 0, 0)","data":[[142,0.223984066]]},{"name":"enthusiastic","color":"rgb(255, 0, 0)","data":[[143,0.224501594]]},{"name":"applicable","color":"rgb(255, 0, 0)","data":[[144,0.244739431]]},{"name":"highly","color":"rgb(255, 0, 0)","data":[[145,0.24797248]]},{"name":"entertaining","color":"rgb(255, 0, 0)","data":[[146,0.251770779]]},{"name":"early","color":"rgb(255, 0, 0)","data":[[147,0.25221934]]},{"name":"fun","color":"rgb(255, 0, 0)","data":[[148,0.254889368]]},{"name":"favorite","color":"rgb(255, 0, 0)","data":[[149,0.257516849]]},{"name":"social","color":"rgb(255, 0, 0)","data":[[150,0.271546672]]},{"name":"relevant","color":"rgb(255, 0, 0)","data":[[151,0.275122019]]},{"name":"manageable","color":"rgb(255, 0, 0)","data":[[152,0.284511094]]},{"name":"helped","color":"rgb(255, 0, 0)","data":[[153,0.291321886]]},{"name":"informative","color":"rgb(255, 0, 0)","data":[[154,0.299790438]]},{"name":"forward","color":"rgb(255, 0, 0)","data":[[155,0.329903516]]},{"name":"loved","color":"rgb(255, 0, 0)","data":[[156,0.331292615]]},{"name":"fascinating","color":"rgb(255, 0, 0)","data":[[157,0.372684188]]},{"name":"wonderful","color":"rgb(255, 0, 0)","data":[[158,0.376485295]]},{"name":"great","color":"rgb(255, 0, 0)","data":[[159,0.396471546]]},{"name":"man","color":"rgb(255, 0, 0)","data":[[160,0.411139879]]},{"name":"fantastic","color":"rgb(255, 0, 0)","data":[[161,0.463833722]]},{"name":"best","color":"rgb(255, 0, 0)","data":[[162,0.467462527]]},{"name":"incredible","color":"rgb(255, 0, 0)","data":[[163,0.502826082]]},{"name":"amazing","color":"rgb(255, 0, 0)","data":[[164,0.623247657]]},{"name":"excellent","color":"rgb(255, 0, 0)","data":[[165,0.625609614]]},{"name":"awesome","color":"rgb(255, 0, 0)","data":[[166,0.696073512]]}]
    });

    
});



