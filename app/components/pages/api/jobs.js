import jobsDatabase from "../../data/jobsdata";
export default function handler(req,res){
    console.log("Received request:", req.method, req.url);
    if(req.method==='GET'){
        res.status(200).json(jobsDatabase)
        console.log("res",res)

    } else{
        res.setHeader('Allow',['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}