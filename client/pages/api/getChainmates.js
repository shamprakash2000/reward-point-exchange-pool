import { data } from "../../data/chainmaster";
import { db } from "../../config/firebase";
import { collection,getDocs, } from "firebase/firestore";

async function  getdata(){
    const chainmasterdata = collection(db,"chainmaster");
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
export default async function  handler(req,res){
    const response = await getdata();
        res.status(200).json(response);
        // res.status(200).json(data);
}