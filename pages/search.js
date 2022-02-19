import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import Response from '../Response'
const Search = ({results}) => {
    const router = useRouter()
    console.log(results)
  return (
    <div>
        <Head>
            <title>{router.query.term}- Google Searchs</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        {/* Header */}
        <Header/>
        {/* Search results */}
        <SearchResults results={results}/>
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
    const API_KEY = process.env.API_KEY
    const CONTEXT_KEY = process.env.CONTEXT_KEY
    const useDummyData=true;
    const startIndex = context.query.start || "0"

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(res=>res.json())

    // After the server side rendering... pass the results to the client

    return{
        props:{
            results:data
        }
    }
}