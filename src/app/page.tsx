/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      
      <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his grandson into hijinks.
          Roiland voiced both Rick and Morty, with Chris Parnell as Jerry (Rick's son-in-law and Morty's father), Spencer Grammer as Summer (Rick's granddaughter and Morty's sister), and Sarah Chalke as Beth (Rick's daughter and Morty's mother). The series originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical acclaim for its screenplay, originality, creativity, and humor. It has been nominated for three Primetime Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. The series has also received two Annie Awards. At times, the series has been the most viewed television comedy for adults between 18 and 24. The popularity of Rick and Morty has made it a hundred-million dollar merchandising and media franchise.
          A seventh season was confirmed as part of a long-term deal with Cartoon Network that ordered 70 new episodes, which renewed the series through to a tenth season. Adult Swim cut ties with Roiland in 2023 amid allegations of domestic abuse and recast his roles with soundalike actors in season 7, which premiered on October 15, 2023.
      </p>
      
      <div className="error_btn flex">
        <Link href='/qwerty' className="link link_error">Get Error ?¿?</Link>
      </div>
    </>
  );
}
