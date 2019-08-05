queue()
  .defer(d3.csv, "/data/battles.csv")
  .await(makeGraphs);

function makeGraphs(error, battles) {
  var ndx = crossfilter(battles);

  show_gender_balance(ndx);

  dc.renderAll();
}

// show gender balance as a bar chart
function show_gender_balance(ndx) {
  var dim = ndx.dimension(dc.pluck("year"));
  var group = dim.group();

  dc.barChart("#battles_fought")
    .width(400)
    .height(300)
    .margins({ top: 10, right: 50, bottom: 30, left: 50 })
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Year")
    .yAxisLabel("Battles Fought")
    .yAxis()
    .ticks(5);
}
