require.config({
  paths: {
    d3: "https://d3js.org/d3.v4.min",
    plot: "plot"
  }
});

require(["plot"], function(plot) {
  plot.plot();
});