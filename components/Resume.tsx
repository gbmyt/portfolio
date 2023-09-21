import resumeData from '@/data/resumeData'

export default function About() {
  return (
    <>
      <h2>Resume</h2>

      {/* eslint-disable-next-line */}
      <img src={resumeData.imgSrc} alt="Resume" className="border-solid border-2 border-white" />
    </>
  )
}
