queue()
  .defer(d3.csv, "./data/battles.csv")
  .await(makeGraphs);

function makeGraphs(error, battles) {
  var ndx = crossfilter(battles);

  show_region_of_battle(ndx);
  show_battles_fought(ndx);
  show_size_of_attacker(ndx);
  show_size_of_defender(ndx);
  show_size_of_attacker_king(ndx);
  show_size_of_defender_king(ndx);
  show_type_battles_fought(ndx);

  dc.renderAll();
}

// reload page when button clicked to reset charts
function reloadCharts() {
  window.location.reload();
}

// show region of battle
function show_region_of_battle(ndx) {
  dim = ndx.dimension(dc.pluck("region"));
  group = dim.group();

  dc.selectMenu("#region_of_battle")
    .dimension(dim)
    .group(group);
}

// show number of battles fought as a bar chart
function show_battles_fought(ndx) {
  var dim = ndx.dimension(dc.pluck("year"));
  var group = dim.group();

  dc.barChart("#battles_fought")
    .width(350)
    .height(400)
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

// show attacker house size as a pie chart
function show_size_of_attacker(ndx) {
  var win_dim = ndx.dimension(dc.pluck("attacker_1"));
  var total_wins = win_dim.group().reduceSum(dc.pluck("attacker_size"));

  dc.pieChart("#attacker_size")
    .height(300)
    .radius(130)
    .dimension(win_dim)
    .group(total_wins)
    .transitionDuration(500);
}

// show defenders house size as a pie chart
function show_size_of_defender(ndx) {
  var win_dim = ndx.dimension(dc.pluck("defender_1"));
  var total_wins = win_dim.group().reduceSum(dc.pluck("defender_size"));

  dc.pieChart("#defender_size")
    .height(300)
    .radius(130)
    .dimension(win_dim)
    .group(total_wins)
    .transitionDuration(500);
}

// show attacker king and size as a pie chart
function show_size_of_attacker_king(ndx) {
  var king_dim = ndx.dimension(dc.pluck("attacker_king"));
  var total_size = king_dim.group().reduceSum(dc.pluck("attacker_size"));

  dc.pieChart("#attacker_king")
    .height(400)
    .radius(600)
    .innerRadius(70)
    .dimension(king_dim)
    .group(total_size)
    .transitionDuration(1500);
}

// show defenders king and size as a pie chart
function show_size_of_defender_king(ndx) {
  var king_dim = ndx.dimension(dc.pluck("defender_king"));
  var total_size = king_dim.group().reduceSum(dc.pluck("defender_size"));

  dc.pieChart("#defender_king")
    .height(400)
    .radius(600)
    .innerRadius(70)
    .dimension(king_dim)
    .group(total_size)
    .transitionDuration(1500);
}

// show type of battles fought as a bar chart
function show_type_battles_fought(ndx) {
  var dim = ndx.dimension(dc.pluck("battle_type"));
  var group = dim.group();

  dc.barChart("#battle-type")
    .width(350)
    .height(400)
    .margins({ top: 10, right: 50, bottom: 30, left: 50 })
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Type of Battle")
    .yAxis()
    .ticks(5);
}
