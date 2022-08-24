import React from "react";
import { App } from "../src/index.js";

const HomePage = ( {data}) => {
    console.log({data})
  return <App data={data}/>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  let data1=[{displayText:'Something',value:'Something'}]
  let data2=[{displayText:'Something',value:'Something'}]
  let data3=[{displayText:'Something',value:'Something'}]
  let data=[data1,data2,data3]
  try{
  const res1 = await fetch(
    `https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/education?role=softwaredeveloper`
  );
    data1 = await res1.json();
    const res2 = await fetch(
        `https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/degree?education=ug`
      );
        data2 = await res2.json();
        const res3 = await fetch(
            `https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/branch?degree=be`
          );
            data3 = await res3.json();
            data=[data1,data2,data3]
        }catch(error){}

   //console.log({ data });

  // Pass data to the page via props
  return { props: { data } };
}



export default HomePage;

