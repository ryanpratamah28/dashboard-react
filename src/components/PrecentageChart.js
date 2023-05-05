import React from 'react'
import { CChartBar } from '@coreui/react-chartjs'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'

function PrecentageChart() {
  const data = {
    labels: ['Alip', 'Fkri', 'Syto', 'Sera'],
    datasets: [
      {
        label: 'Hadir',
        data: ['40', '50', '20', '32'],
        backgroundColor: [
          'rgba(225, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
          'rgba(225, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Tidak Hadir',
        data: ['20', '20', '50', '34'],
        borderWidth: 1,
      },
      {
        label: 'Izin',
        data: ['60', '30', '40', '32'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    indexAxis: 'y',

    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },

    legend: {
      display: false,
      labels: {
        fontSize: 26,
      },
    },
  }

  return (
    <div>
      <CChartBar data={data} height={400} options={options} />
    </div>
  )
}

export default PrecentageChart
