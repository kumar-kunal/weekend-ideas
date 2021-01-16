function draw(row_data, algorithm_title) {

    document.getElementById("container").innerHTML = ""
    anychart.theme(anychart.themes.darkEarth);


    

    // set the data
    var data = {
    //   header: ["Name", "Death toll"],
      rows: row_data};
  
    // create the chart
    var chart = anychart.column();
  
    // add data
    chart.data(data);
  
    // set the chart title
    chart.title(algorithm_title);
  
    // draw
    chart.container("container");
    chart.draw();
  };