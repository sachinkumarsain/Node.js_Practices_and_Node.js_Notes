import dns from "dns"
dns.reverse("142.250.192.100",(err,addresses)=>{
    if(err)console.log(err)
    else{
       addresses.forEach((address)=>{
        console.log(address)
       })
        // console.log("family"+family)
    }
})