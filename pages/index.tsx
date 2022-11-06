import Image from "next/image"

export default function Home({ trades }: { trades: any[] }) {

    return (
      <div className="h-screen w-screen bg-black flex items-center flex-col">
          <div className="py-20">
            <Image src="/logo.png" alt="akira-logo" height={175} width={300} />
          </div>
          {trades.map(trade => (
              <div className="text-white flex">
                  <div className="mr-4">{trade.createdAt}</div>
                  <div>{trade.side}</div>
              </div>
          ))}
      </div>
    )
}

export async function getServerSideProps(context: any) {
    const res = await fetch(`${process.env.BACKEND_ENDPOINT}/api/trades`)
    const data = await res.json()

    return {
        props: { trades: data.data },
    }
}
