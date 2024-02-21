import './Homepage.css'
import HeroSection from '../HeroSection/HeroSection'
import Address from '../Address/Address'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'

const HomePage = () => {
  const [loading, isLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
    }, 500)
  })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <HeroSection />
          <Address />
        </>
      )}
    </>
  )
}
export default HomePage
