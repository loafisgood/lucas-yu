import "../components/Home.css";
import Link from "next/link";

export default function About() {
  return (
    <div className="mt-32 mb-20" style={{ color: "#404040" }}>
      <h1 className="text-5xl text-black font-bold">Hi, I&apos;m Lucas</h1>
      <div className="mt-7 text-lg text-left">
        <div>
          <p>
            I&apos;m a grade 11 student from Toronto, Canada.
            I&apos;m interested in software development, machine learning, and game development.
            I participate in hackathons with friends and have won a few awards for my projects listed
            <Link href={"/projects"} className="font-bold cursor-pointer border-b-2"> here</Link>.
            
          </p>
          <p className="mt-4">
            I also love making projects that automate tasks in my life because it gives them purpose outside of just being a token for my portfolio. 
            I&apos;m currently working on a few projects, including a Spotify tool project that uses the Spotify API to do things such as aggregate temporary generated playlists to be saved.
          </p>
          <p className="mt-4">
            Sometimes I write stuff that I find interesting, check out some of the things I write about by clicking <Link href={"/blog"} className="font-bold cursor-pointer border-b-2"> here</Link>.
          </p>
        </div>

        <hr className="mt-10"></hr>
        <h2 className="text-4xl font-bold text-black mt-10">
          Experience
        </h2>
        <ul className="ml-6 mt-6">
          <li className="mt-3">
            <a href="https://www.stemoftomorrow.org/" target="_blank" rel="noreferrer">
              <span className="font-bold cursor-pointer border-b-2 text-underline-animation duration-300">STEM of Tomorrow</span>: September 2022 - December 2022
            </a>
            <ul className="list-disc list-inside">
              <li className="mt-2">Tutored Group of 5 students, helping them hone programming skills in Python</li>
            </ul>
          </li>

          <li className="mt-3">
            <a href="https://sunnysideupcamp.com/" target="_blank" rel="noreferrer">
              <span className="font-bold cursor-pointer border-b-2 text-underline-animation duration-300">Sunny Side Up Camp</span>: July 2022 - August 2022
            </a>
            <ul className="list-disc list-inside">
              <li className="mt-2">Worked as a Camp Counsellor Volunteer</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-4xl font-bold text-black mt-10">
          Education
        </h2>
        <ul className="ml-6 mt-6">
          <li className="mt-3">
            <a href="https://www.earlhaig.ca/" target="_blank" rel="noreferrer">
              <span className="font-bold cursor-pointer border-b-2 text-underline-animation duration-300">Earl Haig Secondary School</span>: 2020 - Present
              <ul className="list-disc list-inside">
                <li className="mt-2">Graduating 2024</li>
            </ul>
            </a>
          </li>
        </ul>

        <hr className="mt-10"></hr>
        <h2 className="text-4xl font-bold text-black mt-10">
          Outside of academics
        </h2>
        <p className="mt-6">
          Outside of my academic life, here's what I'm exploring: 
        </p>
          <div className="ml-6">
            <ul className="list-disc list-inside">
                <li className="mt-2">Skateboarding</li>
                <li className="mt-2">Guitar + Bass</li>
                <li className="mt-2">Writing</li>
              </ul>
            <div className="flex flex-col text-left align-center">
              <p className="mt-4 -ml-6">
                Music I have recently been listening to:
              </p>
              <ul className="list-disc list-inside">
                <li className="mt-2">Polyphia</li>
                <li className="mt-2">Have a Nice life</li>
                <li className="mt-2">Aphex twin</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}