import "../components/Home.css";
import Link from "next/link";

export default function About() {
  return (
    <div className="xl:w-3/4 mx-auto align-center mt-32 mb-20" style={{ color: "#404040" }}>
      <h1 className="text-5xl text-black font-bold">Hi, I&apos;m Lucas</h1>
      <div className="mt-7 text-lg text-left">
        <div>
          <p>
            I&apos;m a first year engineering student at Western University. 
            I&apos;m interested in software development, machine learning, and game development.
            I participate in hackathons with friends and have won a few awards for my projects listed
            <Link href={"/projects"} className="font-bold cursor-pointer border-b-2"> here</Link>.<br></br><br></br>
            Another interest I&apos;ve recently been passionate about is Cybersecurity/Networking. 
            Testing out tools on VMs with different security linux distributions which has been a lot of fun.
            Although I am an amateur, I&apos;ve been trying to participate in beginner CTFs which are challenging but I have learnt a lot from them.
          </p>
          <p className="mt-4">
            I also love making projects that automate tasks in my life because it gives them purpose for everyday practical use. 
            For example, I&apos;m currently working on a few automative projects, including a Spotify tool project that uses the Spotify API to do things such as aggregate temporary generated playlists to be saved.
            
          </p>
          <p className="mt-4">
            Sometimes I write stuff that I find interesting which you can check out by clicking <Link href={"/blog"} className="font-bold cursor-pointer border-b-2"> here</Link>.
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
              <li className="mt-2 text-slate-600 font-semibold">Tutored Group of 5 students, helping them hone programming skills in Python</li>
            </ul>
          </li>

          <li className="mt-3">
            <a href="https://sunnysideupcamp.com/" target="_blank" rel="noreferrer">
              <span className="font-bold cursor-pointer border-b-2 text-underline-animation duration-300">Sunny Side Up Camp</span>: July 2022 - August 2022
            </a>
            <ul className="list-disc list-inside">
              <li className="mt-2 text-slate-600 font-semibold">Worked as a Camp Counsellor Volunteer</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-4xl font-bold text-black mt-10">
          Education
        </h2>
        <ul className="ml-6 mt-6">
          <li className="mt-3">
            <a href="https://www.earlhaig.ca/" target="_blank" rel="noreferrer">
              <span className="font-bold cursor-pointer border-b-2 text-underline-animation duration-300">Earl Haig Secondary School</span>: 2020 - 2024
              <ul className="list-disc list-inside">
                <li className="mt-2 text-slate-600 font-semibold">Graduated 2024</li>
            </ul>
            </a>
          </li>
          <li className="mt-3">
            <a href="https://www.earlhaig.ca/" target="_blank" rel="noreferrer">
              <span className="font-bold cursor-pointer border-b-2 text-underline-animation duration-300">Western University </span>: 2024 - present
              <ul className="list-disc list-inside">
                <li className="mt-2 text-slate-600 font-semibold">Graduating 2029</li>
            </ul>
            </a>
          </li>
        </ul>

        <hr className="mt-10"></hr>
        <h2 className="text-4xl font-bold text-black mt-10">
          Outside of academics
        </h2>
        <p className="mt-6">
          Outside of my academic life, here&apos;s what I&apos;m exploring: 
        </p>
          <div className="ml-6">
            <ul className="list-disc list-inside text-slate-600 font-semibold">
                <li className="mt-2">Skateboarding </li>
                <li className="mt-2">Guitar + Bass </li>
                <li className="mt-2">Songwriting    </li>
              </ul>
            <div className="flex flex-col text-left align-center">
          </div>
        </div>
      </div>
    </div>
  );
}
