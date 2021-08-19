// Grafik Penjualan
const ctx = document.getElementById("semut").getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Minggu", "Senin", "Selasa",
          "Rabu", "Kamis", "Jumat", "Sabtu"],
          datasets: [{
            label: 'Minggu Ke -14',
            backgroundColor: 'rgba(161, 198, 247, 1)',
            borderColor: 'rgb(47, 128, 237)',
            data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
          }
        },
      });

// Grafik Pengunjung
const rtx = document.getElementById("rambutan").getContext('2d');
      const myChart1 = new Chart(rtx, {
        type: 'line',
        data: {
          labels: ["Minggu", "Senin", "Selasa",
          "Rabu", "Kamis", "Jumat", "Sabtu"],
          datasets: [{
            label: 'Minggu Ke-14',
            backgroundColor: 'rgba(161, 198, 247, 1)',
            borderColor: 'rgb(47, 128, 237)',
            data: [10000, 9000, 7000, 12000, 14000, 16000, 8000],
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
          }
        },
      });
