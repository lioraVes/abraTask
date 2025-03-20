// export{} 

// make post endpoint and save places 
export async function POST(formData:{name:string,type:string,address:string}) {
    const body = formData;
    console.log(body);
    localStorage.setItem("places", JSON.stringify(body));

    return body;
  }