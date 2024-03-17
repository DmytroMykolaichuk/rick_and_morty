import Layout from "@/components/Layout";
import Link from "next/link";

export default function Posts() {
    return (
      <Layout title='POSTS'>
      <h1>Posts Page</h1>
      <ul >
      {[1,2,3,4,5,6,7].map(season=><li key={season} style={{marginBottom:'10px',fontSize:'20px'}}>
        <Link  href={`posts/${season}`}>{season}</Link>
        </li>)}
      </ul>
      </Layout>
    );
  }