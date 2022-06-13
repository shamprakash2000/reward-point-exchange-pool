import { db } from "../../config/firebase";
import { collection,getDocs,addDoc } from "firebase/firestore";
async function addData(data){
    const websiteData = collection(db,"websiteData");
    await addDoc(websiteData,data);
}
export default function handler(req,res){
    console.log(req.body)
    addData(req.body).then((res)=>{

    });
    res.status(200).json(req.body);
}