import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { Weather } from './Weather'

const weather = {
  daily_units: {
    weathercode: 'wmo code',
    temperature_2m_max: '°C',
    temperature_2m_min: '°C',
    precipitation_hours: 'h',
    time: 'iso8601',
  },
  latitude: 35.625,
  generationtime_ms: 0.32401084899902344,
  longitude: 139.625,
  daily: {
    temperature_2m_max: [18.1, 12.3, 12.5, 11, 14.3, 13.6],
    weathercode: [3, 3, 61, 61, 80, 80],
    temperature_2m_min: [3.8, 3.2, 1.7, 4.7, 5.3, 4.4],
    time: [
      '2022-03-05',
      '2022-03-06',
      '2022-03-07',
      '2022-03-08',
      '2022-03-09',
      '2022-03-10',
      '2022-03-11',
    ],
    precipitation_hours: [0, 2, 5, 13, 5, 4],
  },
  elevation: 20.84375,
  utc_offset_seconds: 32400,
}

test('Weather', () => {
  // Snapshot
  const component = renderer.create(<Weather weather={weather} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Dom testing
  render(<Weather weather={weather} />)
  const count = screen.getByText(/3\/5/i)
  expect(count).toBeTruthy()
})
