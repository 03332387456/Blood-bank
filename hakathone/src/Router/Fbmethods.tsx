import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "firebase/auth";
import { getDatabase,ref,set,onValue,push } from "firebase/database";
import { app } from "./Fbconfig";


let auth = getAuth(app)
let db = getDatabase(app)


export let fbLogin=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            signInWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid
                
                const referece = ref(db,`users/${id}`)
            
                onValue(referece,(data)=>{
                    if(data.exists()){
                        resolve(data.val())
                    }else{
                        reject("No Data Found")
                    }
                } )
            
            }).catch(err=>{
                reject(err)
            })
        }
    })
}

export let fbSignUp=(body:any)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            createUserWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid
                
                body.id = id
                const referece = ref(db,`users/${id}`)
                set(referece,body).then(user=>{
                    resolve("User Created Succefully")
                }).catch(error=>{
                    reject(error)
                })
            
            }).catch(err=>{
                reject(err)
            })
        }
    })


}
export let fbAuth=()=>{
   return new Promise((resolve,reject)=>{
       onAuthStateChanged(auth, (user) => {
           if (user) {
             const uid = user.uid;
             resolve(uid)
           } else {
            reject("No User is Logged in")
           }
         });
   })
}
export let fbAdd=(nodeName:string,body:any,id?:string)=>{
    return new Promise((resolve,reject)=>{
        
        const id = push(ref(db,`${nodeName}/`)).key        

        body.id = id


        const referece = ref(db,`${nodeName}/${body.id}`)
        
        set(referece,body).then(res=>{
            resolve("Data Send Successfully")
        }).catch(err=>{
            reject(err)        
        })
    })
}  
export let fbGet=(nodeName:string,id?:any)=>{
    return new Promise((resolve,reject)=>{
        const referece = ref(db,`${nodeName}/${id?id:""}`)
        onValue(referece,(data)=>{
            if(data.exists()){
                resolve(Object.values(data.val()))
            }else{
                reject("No Data Found :(")
            }
        })
    })
}

export let fbLogout=()=>{
  return signOut(auth)      
}