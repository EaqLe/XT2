Chart.defaults.global.defaultFontColor = 'white'; //zorgt ervoor dat alle tekst in de charts wit is 
Chart.defaults.global.defaultFontFamily = 'font-family: din-condensed, sans-serif'; // zorgt ervoor dat alle tekst in de charts het font din-condensed heeft.

var ctx = document.getElementById('myDistance').getContext('2d'); //hier wordt de chart voor de afgelegde afstand aangemaakt, data ingevuld etc
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [{
            label: 'Distance in kilometers',
            data: [12000, 40000, 60000, 75000, 95000, 125000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: { 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myFuel').getContext('2d'); //hier wordt de chart voor de verbruikte brandstof aangemaakt, data ingevuld etc
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Fuel used', 'Fuel left'],
        datasets: [{
            label: 'Amount of fuel',
            data: [12000, 40000],
            backgroundColor: [
                'rgba(251, 96, 62, 0.2)',
                'rgba(54, 162, 235, 0.2)',
               
            ],
            borderColor: [
                'rgba(251, 96, 62, 1)',
                'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1
        }]
    },
    options: { 
        
    }
});


var ctx = document.getElementById('myGforce').getContext('2d'); //hier wordt de chart voor de geregistreerde gforces  aangemaakt, data ingevuld etc
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Highest Gforce', 'Average Gforce', 'Lowest Gforce'],
        datasets: [{
            label: 'Amount in G',
            data: [48, 30, 12],
            backgroundColor: [
                'rgba(251, 96, 62, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(251, 65, 226, 0.2)'
               
            ],
            borderColor: [
                'rgba(251, 96, 62, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(251, 65, 226, 1)'
              
            ],
            borderWidth: 1
        }]
    },
    options: { 
        
    }
});
