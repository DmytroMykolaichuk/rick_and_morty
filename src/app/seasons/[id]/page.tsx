export default function Season ({ params }: { params: { id: string } }) {
    return (
      <>
        <h1>Season {params.id}</h1>
      </>
    );
  }