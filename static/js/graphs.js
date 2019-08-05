queue()
  .defer(d3.csv, "/data/battles.csv")
  .await(makeGraphs);

function makeGraphs(error, battles) {
  var ndx = crossfilter(battles);

  show_region_of_battle(ndx);
  show_battles_fought(ndx);

  dc.renderAll();
}
// show region of battle
function show_region_of_battle(ndx) {
  dim = ndx.dimension(dc.pluck("region"));
  group = dim.group();

  dc.selectMenu("#region_of_battle")
    .dimension(dim)
    .group(group);
}

// show gender balance as a bar chart
function show_battles_fought(ndx) {
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
