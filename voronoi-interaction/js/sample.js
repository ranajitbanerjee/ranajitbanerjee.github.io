/* eslint-disable */
const layerFactory = picasso.default.layerFactory;
const SimpleAxis = picasso.default.SimpleAxis;
const DataTable = picasso.default.DataTable;
const point = picasso.default.PointLayer;
const ColorAxis = picasso.default.ColorAxis;
const SPLOMGroup = picasso.default.SPLOMGroup;
const TrellisGroup = picasso.default.TrellisGroup;
const IdentityGroup = picasso.default.IdentityGroup;
const Picasso = picasso.default;
// const renderBars = (jsonData, schema) => {
//     const dataTable = new DataTable(jsonData, schema),
//         config = {
//             encoding: {
//                 x: {
//                     field: 'variety',
//                     fieldType: 'nominal',
//                     axis: 'x'
//                 },
//                 y: {
//                     field: 'yield',
//                     fieldType: 'quantitative',
//                     axis: 'y'
//                 },
//                 color: {
//                     field: 'site',
//                     axis: 'color'
//                 }
//             },
//             innerPadding: '0.1',
//             transform: {
//                 type: 'group',
//                 groupBy: 'site'
//             }
//         },
//         xScale = new SimpleAxis({
//             name: 'xScale',
//             type: 'band',
//             range: [0, 800],
//             orientation: 'bottom',
//             yOffset: 300,
//             xOffset: 100,
//             style: {
//                 'fill': 'steelblue'
//             }
//         }),
//         yScale = new SimpleAxis({
//             name: 'yScale',
//             type: 'linear',
//             range: [300, 0],
//             orientation: 'left',
//             xOffset: 100,
//             style: {
//                 'fill': 'steelblue'
//             }
//         });

//     xScale.scale.padding(0.1);

//     const axes = {
//         x: xScale,
//         y: yScale,
//         color: new ColorAxis({
//             name: 'color-axis',
//             type: 'ordinal'
//         })
//     };

//     var bar2 = layerFactory.getLayer('bar', ['123', {
//             dataTable,
//             config,
//             axes
//         }]);

//     var svg = d3.select('body').append('div').attr('class', 'chart')
//         .style('float', 'left')
//         .append('svg').style('margin-left', '30px')
//         .attr('width', '1000').attr('height', '400');
//     var barGroup = svg.append('g');
//     barGroup.attr('transform', 'translate(100,0)');
//     var xScaleGroup = svg.append('g');
//     var yScaleGroup = svg.append('g');
//     // bar2.render(barGroup.node());
//     xScale.render(xScaleGroup);
//     yScale.render(yScaleGroup);


//     const xScale2 = new SimpleAxis({
//         name: 'xScale',
//         type: 'linear',
//         range: [0, 900],
//         orientation: 'bottom',
//         yOffset: 350,
//         xOffset: 50,
//         style: {
//             'fill': 'steelblue'
//         }
//     });

//     const yScale2 = new SimpleAxis({
//         name: 'yScale',
//         type: 'band',
//         range: [300, 0],
//         orientation: 'left',
//         xOffset: 50,
//         yOffset: 50,
//         style: {
//             'fill': 'steelblue'
//         }
//     });

//     yScale2.scale.padding(0.2);
//     const axes2 = {
//         x: xScale2,
//         y: yScale2,
//         color: axes.color
//     };

//     const config2 = {
//         encoding: {
//             y: {
//                 field: 'variety',
//                 fieldType: 'nominal',
//                 axis: 'y'
//             },
//             x: {
//                 field: 'yield',
//                 fieldType: 'quantitative',
//                 axis: 'x'
//             },
//             color: {
//                 field: 'site',
//                 axis: 'color'
//             }
//         },
//         transform: {
//             type: 'group',
//             groupBy: 'site'
//         }
//     };

//     var bar3 = layerFactory.getLayer('bar', ['123', {
//             dataTable,
//             config: config2,
//             axes: axes2
//         }]);

//     var svg = d3.select('body').append('div').attr('class', 'chart').append('svg').style('margin-left', '50px')
//         .attr('width', '600').attr('height', '400');
//     var barGroup2 = svg.append('g');
//     barGroup2.attr('transform', 'translate(50,50)');
//     // bar3.render(barGroup2.node());
//     xScale2.render(svg.append('g'));
//     yScale2.render(svg.append('g'));
// };

// const renderArea = (jsonData, schema) => {
//     let dataTable = new DataTable(jsonData, schema);
//     const xScale3 = new SimpleAxis({
//         name: 'xScale',
//         type: 'temporal',
//         range: [0, 700],
//         orientation: 'bottom',
//         yOffset: 450,
//         xOffset: 50,
//         style: {
//             'fill': 'steelblue'
//         }
//     });

//     const yScale3 = new SimpleAxis({
//         name: 'yScale',
//         type: 'linear',
//         range: [400, 0],
//         orientation: 'left',
//         xOffset: 50,
//         yOffset: 50,
//         style: {
//             'fill': 'steelblue'
//         }
//     });
//     var areaLayer = layerFactory.getLayer('area', ['1233', {
//             dataTable,
//             config: {
//                 encoding: {
//                     x: {
//                         field: 'year',
//                         fieldType: 'temporal',
//                         axis: 'x'
//                     },
//                     y: {
//                         field: 'count',
//                         fieldType: 'quantitative',
//                         axis: 'y'
//                     },
//                     color: {
//                         field: 'job',
//                         axis: 'color'
//                     }
//                 },
//                 transition: {
//                     effect: 'poly',
//                     duration: 1000
//                 },
//                 interpolate: 'linear',
//                 transform: {
//                     type: 'stack',
//                     groupBy: 'job'
//                 }
//             },
//             axes: {
//                 x: xScale3,
//                 y: yScale3,
//                 color: new ColorAxis({
//                     type: 'ordinal'
//                 })
//             }
//         }]);

//     var svg = d3.select('body').append('div').attr('class', 'chart')
//     .style('float', 'left')
//         .append('svg').style('margin-left', '30px')
//         .style('float', 'left')
//         .attr('width', '800').attr('height', '600');
//     var areaGroup = svg.append('g');
//     areaGroup.attr('transform', 'translate(50,50)');
//     // areaLayer.render(areaGroup.node());
//     xScale3.render(svg.append('g'));
//     yScale3.render(svg.append('g'));

//     const pointLayerScale = new SimpleAxis({
//         name: 'xScale',
//         type: 'linear',
//         range: [0, 700],
//         orientation: 'bottom',
//         yOffset: 450,
//         xOffset: 50,
//         style: {
//             'fill': 'steelblue'
//         }
//     });

//     // var lineLayer = layerFactory.getLayer('point', ['1233', {
//     //         dataTable,
//     //         config: {
//     //             encoding: {
//     //                 x: {
//     //                     field: 'perc',
//     //                     fieldType: 'quantitative',
//     //                     axis: 'x'
//     //                 },
//     //                 y: {
//     //                     field: 'count',
//     //                     fieldType: 'quantitative',
//     //                     axis: 'y'
//     //                 },
//     //                 shape: {
//     //                     field: 'job',
//     //                     axis: 'shape'
//     //                 },
//     //                 color: {
//     //                     field: 'sex',
//     //                     axis: 'color'
//     //                 },
//     //                 size: {
//     //                     field: 'year',
//     //                     axis: 'size'
//     //                 }
//     //             },
//     //             transform: {
//     //                 type: 'group'
//     //             }
//     //         },
//     //         axes: {
//     //             x: pointLayerScale,
//     //             y: yScale3,
//     //             shape: new SimpleAxis({
//     //                 type: 'ordinal',
//     //                 range: ['circle','wye','triangle','diamond']
//     //             }),
//     //             color: new ColorAxis({
//     //                 type: 'ordinal'
//     //             }),
//     //             size: new SimpleAxis({
//     //                 type: 'ordinal',
//     //                 range: [10, 20, 30, 40, 50, 60, 100]
//     //             })
//     //         }
//     //     }]);

//     // var svg = d3.select('body').append('div').attr('class', 'chart')
//     //     .style('float', 'left')
//     //     .append('svg').style('margin-left', '50px')
//     //     .attr('width', '600').attr('height', '600');
//     // var lineGroup = svg.append('g');
//     // lineGroup.attr('transform', 'translate(50,50)');
//     // lineLayer.render(lineGroup.node());
//     // xScale3.render(svg.append('g'));
//     // yScale3.render(svg.append('g'));
// };

// const renderLine = (jsonData, schema) => {
//     var dataTable = new DataTable(jsonData, schema);
//     let xScale3 = new SimpleAxis({
//         name: 'xScale',
//         type: 'temporal',
//         range: [0, 700],
//         orientation: 'bottom',
//         yOffset: 400,
//         xOffset: 50,
//         style: {
//             'fill': 'steelblue'
//         }
//     });

//     let yScale3 = new SimpleAxis({
//         name: 'yScale',
//         type: 'linear',
//         range: [400, 0],
//         orientation: 'left',
//         xOffset: 50,
//         yOffset: 0,
//         style: {
//             'fill': 'steelblue'
//         }
//     });
//     var lineLayer = layerFactory.getLayer('line', ['1233', {
//             dataTable,
//             config: {
//                 encoding: {
//                     x: {
//                         field: 'date',
//                         fieldType: 'temporal',
//                         axis: 'x'
//                     },
//                     y: {
//                         field: 'price',
//                         fieldType: 'quantitative',
//                         axis: 'y'
//                     },
//                     color: {
//                         field: 'symbol',
//                         axis: 'color'
//                     }
//                 },
//                 transition: {
//                     effect: 'poly',
//                     duration: 1000
//                 },
//                 interpolate: 'linear',
//                 transform: {
//                     type: 'group'
//                 }
//             },
//             axes: {
//                 x: xScale3,
//                 y: yScale3,
//                 color: new ColorAxis({
//                     type: 'ordinal'
//                 })
//             }
//         }]);

//     var svg = d3.select('body').append('div').attr('class', 'chart')
//         .style('float', 'left')
//         .append('svg').style('margin-left', '50px')
//         .attr('width', '1200').attr('height', '600');
//     var lineGroup = svg.append('g');
//     lineGroup.attr('transform', 'translate(50,0)');
//     // lineLayer.render(lineGroup.node());
//     xScale3.render(svg.append('g'));
//     yScale3.render(svg.append('g'));
// };

// d3.json('data/barley.json', (data) => {
//     const jsonData = data,
//         schema = [{
//             name: 'variety',
//             type: 'dimension'
//         },
//         {
//             name: 'yield',
//             type: 'measure'
//         },
//         {
//             name: 'year',
//             type: 'dimension'
//         },
//         {
//             name: 'site',
//             type: 'dimension'
//         }
//         ];
//     renderBars(jsonData, schema);
// });

// d3.csv('data/stocks.csv', (data) => {
//     const jsonData = data,
//         schema = [{
//             name: 'symbol',
//             type: 'dimension'
//         },
//         {
//             name: 'date',
//             type: 'datetime',
//             format: '%b %e %Y'
//         },
//         {
//             name: 'price',
//             type: 'measure'
//         }
//         ];
//     renderVisualUnit(jsonData, schema);
// });

d3.csv('data/stocks.csv', (data) => {
    const jsonData = data.map(d => {
        d.calPrice = Number(d.price) + 20;
        return d;
    }),
        schema = [{
            name: 'symbol',
            type: 'dimension'
        },
        {
            name: 'date',
            type: 'datetime',
            format: '%b %e %Y'
        },
        {
            name: 'price',
            type: 'measure'
        },
        {
            name: 'calPrice',
            type: 'measure'
        }
    ];
        // schema = [
        //     {
        //         "name": "Name",
        //         "type": "dimension"
        //     },
        //     {
        //         "name": "Miles_per_Gallon",
        //         "type": "measure"
        //     },
        //     {
        //         "name": "Cylinders",
        //         "type": "dimension"
        //     },
        //     {
        //         "name": "Displacement",
        //         "type": "measure"
        //     },
        //     {
        //         "name": "Horsepower",
        //         "type": "measure"
        //     },
        //     {
        //         "name": "Weight_in_lbs",
        //         "type": "measure"
        //     },
        //     {
        //         "name": "Acceleration",
        //         "type": "measure"
        //     },
        //     {
        //         "name": "Year",
        //         "type": "dimension"
        //     },
        //     {
        //         "name": "Origin",
        //         "type": "dimension"
        //     }
        // ];
    renderVisualUnit(jsonData, schema);
});

// d3.json('data/jobs.json', (data) => {
//     const jsonData = data,
//         schema = [{
//             name: 'year',
//             type: 'datetime',
//             format: '%Y-%m'
//         },{
//             name: 'sex',
//             type: 'dimension'
//         },{
//             name: 'count',
//             type: 'measure'
//         },{
//             name: 'perc',
//             type: 'measure'
//         },{
//             name: 'job',
//             type: 'dimension'
//         }];
//     renderArea(jsonData, schema);
// });

// d3.json('data/jobs.json', (data) => {
//     const jsonData = data,
//         schema = [{
//             name: 'year',
//             type: 'dimension'
//         },{
//             name: 'sex',
//             type: 'dimension'
//         },{
//             name: 'count',
//             type: 'measure'
//         },{
//             name: 'perc',
//             type: 'measure'
//         },{
//             name: 'job',
//             type: 'dimension'
//         }];
//     renderVisualUnit(jsonData, schema);
// });

const renderVisualUnit = (jsonData, schema) => {
    d3.select('body').append('button').html('ADD ANCHORS').on('click', () => {
        let areaLayerDef = {
            id: 'point-322',
            mark: 'bar',
            encoding: {
                y: {
                    field: 'Cylinders',
                    fieldType: 'nominal'
                },
                x: {
                    field: 'Displacement',
                    fieldType: 'quantitative'
                },
                color: {
                    field: 'Origin'
                },
                size: {
                    value: 30
                }
            },
            transform: {
                type: 'group',
                groupBy: 'Origin'
            }
        };
        layers.push(layerFactory.getLayer('line', ['line123123', {
            dataTable,
            config: areaLayerDef,
            axes: {
                x: xAxis,
                y: yAxis,
                color: colorAxis
            }
        }]));
        unit.layers(...layers);
    });

    const VisualUnit = picasso.default.VisualUnit;

    let dataTable = new DataTable(jsonData, schema);
    // dataTable = dataTable.groupBy(['Cylinders', 'Origin'], {
    //     Displacement: 'average',
    //     Horsepower: 'average'
    // });
    dataTable = dataTable.select((fields, i) => new Date(fields[1].data[i]).getFullYear() === 2001);
    let layerDefs = [{
            id: 'bar-1',
            mark: 'bar',
            encoding: {
                x: {
                    field: 'date'
                },
                y: {
                    field: 'calPrice'
                },
                color: {
                    field: 'symbol'
                }
            },
            transform: {
                type: 'group',
                groupBy: 'symbol'
            }
        }],
        xAxis = new SimpleAxis({
            id: 'x-axis',
            type: 'temporal',
            orientation: 'bottom',
            range: [],
            padding: 0.2
        }),
        yAxis = new SimpleAxis({
            id: 'y-axis',
            type: 'linear',
            padding: 0.2,
            orientation: 'left',
            range: []
        }),
        colorAxis = new ColorAxis({
            id: 'color-axis',
            type: 'ordinal'
        }),
        axes = [].concat(xAxis, yAxis, colorAxis),
        layers = layerDefs.map((def) => {
            return layerFactory.getLayer(def.mark, [def.id, {
                dataTable,
                config: def,
                axes: {
                    x: xAxis,
                    y: yAxis,
                    color: colorAxis
                }
            }])
        });

    let unit = new VisualUnit(null, dataTable, layers, {
        width: 800,
        height: 400
    }, axes);
    let axisDomains = unit.getAxesDomain();
    xAxis.updateDomain(axisDomains['x-axis']);
    yAxis.updateDomain(axisDomains['y-axis']);
    var container = d3.select('body').append('div').attr('class', 'chart')
        .style('height', '800px').style('width', '600px');

    unit.render(container.node());
    window.unit = unit;
}
/**
    const jsonData = [{
            product: 'A',
            downloads: 1000,
            minDownloads: 200,
            date: '2015-1',
            Region: 'South'
        }, {
            product: 'A',
            downloads: 400,
            minDownloads: 200,
            date: '2015-1',
            Region: 'North'
        },{
            product: 'A',
            downloads: 800,
            minDownloads: 200,
            date: '2015-1',
            Region: 'East'
        }],
        schema = [{
            name: 'product',
            type: 'dimension'
        },
        {
            name: 'downloads',
            type: 'measure'
        },
        {
            name: 'minDownloads',
            type: 'measure'
        },
        {
            name: 'date',
            type: 'datetime',
            format: '$Y-%m'
        },
        {
            name: 'Region',
            type: 'dimension'
        }
        ];
    renderBars(jsonData, schema);
*/
