import Link from "next/link";
import Layout from "@/components/Layout";
// import favi from '../../app/ukr.ico';

export default function About() {
    return (
<>
        <Layout  favicon='../../app/ukr.ico' title='ABOUT'>
        <h1>About Page</h1>
        <Link  href='about/company'>Company</Link>
        </Layout>
</>
    );
  }