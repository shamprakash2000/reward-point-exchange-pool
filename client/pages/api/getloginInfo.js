import { data } from "../../data/loginInfo";
import { db } from "../../config/firebase";
import { collection,getDocs, } from "firebase/firestore";

async function  getdata(){
    const chainmasterdata = collection(db,"loginInfo");
    const obj = []
    const response = await getDocs(chainmasterdata);
    response.docs.map((item)=>{
        const c =item.data()
        c["objid"] = item.id
        console.log(c);
        obj.push(c);
     
      });
      console.log(obj)
      return obj;

}
export default function handler(req,res){
   getdata().then((response)=>{
        res.status(200).json(response);

    })
}