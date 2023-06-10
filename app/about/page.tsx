import "../components/Home.css"
import  Link from "next/link"

export default function About() {
    return(
        <div className="mt-20 mb-20" style={{color: "#404040"}} > 
            <h1 className="text-5xl text-black font-bold">About</h1>
            <div className="mt-10 text-lg text-left">
                <p>
                    Hi, I'm <span className="font-bold cursor-pointer border-b-2">Lucas </span>. I'm a grade 11 student from Toronto, Canada.
                    I'm interested in software development , machine learning, and game development.
                    I participate in hackathons with friends and have won a few awards for my projects listed 
                    <Link href={"/projects"} className="font-bold cursor-pointer border-b-2"> here</Link>
                </p>
                <p className="mt-4">
                    I'm currently working on a few projects, including a spotify tool project that uses the spotify API to do things such as aggregate temporary generated playlists to be saved. 
                </p>
                <p className="mt-4">
                    Sometimes I write stuff that I find interesting, check out some of the things I write about by clicking <Link href={"/blog"} className="font-bold cursor-pointer border-b-2"> here</Link>
                </p>
                    



                <hr className="mt-10"></hr>
                <h2 className="text-4xl font-bold text-black mt-10"> 
                    Experience
                </h2>
                <ul>
                    <li className="mt-3">
                        <a href="https://www.stemoftomorrow.org/" target="_blank" rel="noreferrer">
                            <span className="font-bold cursor-pointer text-underline-animation duration-300">STEM of Tomorrow</span>: September 2022 - December 2022
                        </a>
                        <ul className="list-disc list-inside">
                            <li className="mt-2">Tutored Group of 5 student helping them hone programming skills in python</li>
                        </ul>
                    </li>



                    <li className="mt-3">
                        <a href="https://sunnysideupcamp.com/" target="_blank" rel="noreferrer">
                            <span className="font-bold cursor-pointer text-underline-animation duration-300">Sunny Side Up Camp</span>: July 2022 - August 2022
                        </a>
                        <ul className="list-disc list-inside">
                            <li className="mt-2">Worked as a Camp Counsellor Volunteer</li>
                        </ul>
                    </li>
                    
           
                </ul>
   


                <h2 className="text-4xl font-bold text-black mt-10">
                    Education
                </h2>
                <ul>
                    <a href="https://www.earlhaig.ca/" target="_blank" rel="noreferrer">
                    <li className="mt-3">
                        <span className="font-bold cursor-pointer text-underline-animation duration-300">Earl Haig Secondary School</span>: 2020 - Present
                    </li>
                    </a>
                </ul>

                <hr className="mt-10"></hr>
                <h2 className="text-4xl font-bold text-black mt-10">
                    Outside of academics
                </h2>
                <p className="mt-4">
                    Outside of my academic life, I am largely interested in music, skateboarding, and reading books + articles.
                </p>
                <div className="flex flex-col text-left align-center">
                    <p className="mt-4">
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
    )
} 