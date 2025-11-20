const rootStyles = getComputedStyle(document.documentElement);
const caramel = rootStyles.getPropertyValue('--caramel')?.trim() || '#DDA15E';
const orangeDeep = rootStyles.getPropertyValue('--orange-deep')?.trim() || '#BC6C25';
const greenDark = rootStyles.getPropertyValue('--green-dark')?.trim() || '#283618';
const greenOlive = rootStyles.getPropertyValue('--green-olive')?.trim() || '#606C38';

const ctx = document.getElementById('categorySalesChart')?.getContext('2d');
if(ctx && window.Chart){
  window.categorySalesChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Coffee','Non-Coffee','Pastries','Bestsellers'],
      datasets: [{
        data: [0,0,0,0],
        backgroundColor: [greenDark, greenOlive, caramel, orangeDeep],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      plugins: { title: { display:true, text:'Product Category Sales' } }
    }
  });
}
