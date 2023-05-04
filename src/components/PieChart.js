import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CChartPie } from '@coreui/react-chartjs'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJs.register(Tooltip, ArcElement, Legend)

function PieChart() {
  const [chart, setChart] = useState([])

  const baseUrl = 'https://api.coinranking.com/v2/coins'
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const apiKey = 'coinrankingfc7ff3068ee9c0b8c128903d4b9057459982341c03b16c15'

  useEffect(() => {
    const fetchPersentage = async () => {
      try {
        const response = await axios.get(`${proxyUrl}${baseUrl}`, {
          headers: {
            'Accept-Encoding': 'gzip,deflate,compress',
            'Content-Type': 'application/json',
            'x-access-token': `${apiKey}`,
            'Access-Control-Allow-Origin': '*',
          },
        })

        console.log(response.data.data)
        setChart(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPersentage()
  }, [baseUrl, proxyUrl, apiKey])

  const data = {
    labels: chart?.coins?.map((coin) => coin.name),
    datasets: [
      {
        label: `${chart?.coins?.length} Coins Avaible`,
        data: chart?.coins?.map((coin) => coin.price),
        borderWidth: 1,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  }

  return (
    <div>
      <CChartPie data={data} height={400} options={options} />
    </div>
  )
}

export default PieChart
