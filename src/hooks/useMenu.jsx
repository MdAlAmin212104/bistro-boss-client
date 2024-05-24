import { useQuery } from "@tanstack/react-query"
//import { useEffect, useState } from "react"
import useAxiosPublic from "./useAxiosPublic"

const useMenu = () => {
      const axiosPublic = useAxiosPublic()
      //const [menu, setMenu] = useState([])
      //const [loading, setLoading] = useState(true)
      const { data: menu =[] } = useQuery({
            queryKey : ['menu'],
            queryFn : async () =>{
                  const res = await axiosPublic.get('/menu')
                  return res.data;
            }
            
      })
      return [menu]
      
      // useEffect(() => {
      //       fetch('http://localhost:5000/menu')
      //             .then(res => res.json())
      //             .then(data => {
      //                   setMenu(data)
      //                   setLoading(false)
      //             })
      // }, [])
      // return [menu, loading];
}

export default useMenu;