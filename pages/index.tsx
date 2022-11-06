export default function Home({ trades }: { trades: any[] }) {
    console.log(trades)

    return (
      <h1>
          {trades.map(trade => (
              <div className="flex">
                  <div className="mr-4">{trade.createdAt}</div>
                  <div>{trade.side}</div>
              </div>
          ))}
      </h1>
    )
}

export async function getServerSideProps(context: any) {
    const res = await fetch(`${process.env.BACKEND_ENDPOINT}/api/trades`)
    const data = await res.json()

    return {
        props: { trades: data.data },
    }
}
