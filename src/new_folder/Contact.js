import React from "react";


const Contact = ()=>{
    return(
        <div className="mt-20 pt-20 text-center font-semibold">
                 <h1>This is a contact page!!</h1>


                <form action="submit">
                    <div className="flex flex-col   items-center">
                    <input type="text" placeholder="Name" className="w-56 border-slate-500 border-2 px-4 py-2 my-4 text-gray-600" />
                   
                    <textarea   placeholder="Type your message..."  className=" w-56 border-slate-500 border-2 px-4 py-2 my-4 text-gray-600"></textarea>
                    <button className="w-56 my-4 py-2 px-4 font-semibold text-slate-800 rounded-lg bg-white border-2 border-black">Submit</button>
                    </div>
                </form>
        </div>
   
        
    )
}

export default Contact;