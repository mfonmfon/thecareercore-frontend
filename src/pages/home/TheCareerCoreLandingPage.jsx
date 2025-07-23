import React from 'react'
import TheCareerCoreHeader from '../../components/thecareercoreheader/TheCareerCoreHeader'
import TheCareerCoreHerosection from '../../components/thecareercoreherosection/TheCareerCoreHerosection'
import TheCareerCoreAbout from '../../components/thecareercoreabout/TheCareerCoreAbout'
import TheCareerCoreSpeakers from '../../components/thecareercorespeakers/TheCareerCoreSpeakers'
import TheCareerCorePastEvent from '../../components/thecareercorepastevent/TheCareerCorePastEvent'
import TheCareerCoreCallToAction from '../../components/thecareercorecolltoaction/TheCareerCoreCallToAction'
import TheCareerCoreFooter from '../../components/thecareercorefooter/TheCareerCoreFooter'
import TheCareerCoreFounder from '../../components/thecareercorefounder/TheCareerCoreFounder'
import CounterDownTimes from '../../components/countdowntimes/CounterDownTimes'

const TheCareerCoreLandingPage = () => {
  // const eventDate = '2025-09-14T16:00:00Z'  // Example event date in ISO format
  return (
    <div>
      <TheCareerCoreHeader/>
      <TheCareerCoreHerosection/>
      {/* <CounterDownTimes event={eventDate}/> */}
      <TheCareerCoreFounder/>
      <TheCareerCoreSpeakers/>
      <TheCareerCoreAbout/>
      <TheCareerCorePastEvent/>
      <TheCareerCoreCallToAction/>
      <TheCareerCoreFooter/>
    </div>
  )
}

export default TheCareerCoreLandingPage
