 // Datos ficticios para los graficos
const chart1Data = {
    labels: ["Primera", "Reserva", "4ta", "5ta", "6ta", "7ma", "8va", "9na",],
    datasets: [
      {
        label: "Imagenes",
        data: [150, 220, 300, 180, 250, 300, 1000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2
       
      }
    ]
  };
  
  const chart2Data = {
    labels: ["Primera", "Reserva", "4ta"],
    datasets: [
      {
        label: "Evaluaciones",
        data: [12, 19, 6],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 2
      }
    ]
  };

  const chart3Data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Datos 1",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Datos 2",
        data: [5, 15, 10, 8, 12, 7],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false
      }
    ]
  };

  const chart4Data = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Valores",
        data: [8, 12, 10, 6, 9],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2
      }
    ]
  };

  const chart5Data = {
    datasets: [
      {
        label: "Tareas completadas",
        data: [
          { x: 4, y: 9 },
          { x: 7, y: 5 },
          { x: 5, y: 12 },
          { x: 8, y: 8 },
          { x: 6, y: 69},
          { x: 6, y: 66},
          { x: 1, y: 10 },
          { x: 2, y: 1 },
          { x: 5, y: 3 },
          { x: 6, y: 3 },
          { x: 8, y: 5 },
          { x: 8, y: 5 },
          { x: 8, y: 5 },
          { x: 5, y: 6 },
          { x: 1, y: 7 },
          { x: 2, y: 8 },
          { x: 3, y: 8 },
          { x: 1, y: 0 },

        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2
      }
    ]
  };

  const chart6Data = {
    labels: ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Morado"],
    datasets: [
      {
        label: "Datos",
        data: [10, 7, 5, 12, 9, 6],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }
    ]
  };

  


  











  // Obtener los elementos canvas de los gráficos
const chart1Canvas = document.getElementById("chart1");
const chart2Canvas = document.getElementById("chart2");
const chart3Canvas = document.getElementById("chart3");
const chart4Canvas = document.getElementById("chart4");
const chart5Canvas = document.getElementById("chart5");
const chart6Canvas = document.getElementById("chart6");


// Crear los objetos Chart y renderizar los gráficos

new Chart(chart1Canvas, {
  type: "bar",
  data: chart1Data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(chart2Canvas, {
  type: "pie",
  data: chart2Data,
  options: {
    responsive: true
  }
});

new Chart(chart3Canvas, {
    type: "line",
    data: chart3Data,
    options: {
      responsive: true
    }
  });

  new Chart(chart4Canvas, {
    type: "bar",
    data: chart4Data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(chart5Canvas, {
    type: "scatter",
    data: chart5Data,
    options: {
      responsive: true
    }
  });

  
  new Chart(chart6Canvas, {
    type: "radar",
    data: chart6Data,
    options: {
      responsive: true
    }
  });



  



  