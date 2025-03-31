const ctx = document.getElementById('barchart').getContext('2d');

const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Black and Yellow Gaming Sports Jersey', 'Black and Red Football Jersey', 'Black, Red, and White Stripe Basketball Jersey',
            'Golden State Warriors Style Jersey'],
        datasets: [{
            label: 'Sales performance over month',
            data: [12, 19, 3, 5],
            borderWidth: 1,
            backgroundColor : [
                'rgba(237, 224, 0, 1)',
                'rgba(255, 106, 13, 1)',
                'rgba(149, 6, 6, 1)',
                'rgba(42, 64, 229, 1)'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});