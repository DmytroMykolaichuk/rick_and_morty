import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Post() {
const router=useRouter()
function onClick(){
  router.push('/posts')
  // router.back()
}
    return (
      <Layout title={`Post ${router.query.id}`}>
      <h1>Post {router.query.id}</h1>
      <button type='button' onClick={onClick}>Go back</button>
      </Layout>
    );
  }