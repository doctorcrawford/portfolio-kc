import ArchiveCard from "./ArchiveCard"

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard 
          title="KNXN"
          des="Original music by Nick Capuano and myself"
          listItem={["Groovy Beats", "Saxophone", "Good Times"]}
          link="https://linktr.ee/knxnmusic"
        />
      </div>
      {/* Show more button goes here if enough archivecards pile up. see 1:43:00 in https://www.youtube.com/watch?v=fkrDAaAMcpY */}
    </div>
  )
}

export default Archive