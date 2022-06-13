import { db } from "../../config/firebase";
import { collection,getDocs,addDoc } from "firebase/firestore";
async function addData(data){
    const logininfo = collection(db,"loginInfo");
    await addDoc(logininfo,data);
}
export default function handler(req,res){
    addData(req.body).then((res)=>{

    });
    res.status(200).json(req.body);
}