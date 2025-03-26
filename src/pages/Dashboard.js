import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/Topbar";
import CreateArticleForm from "../components/dashboard/CreateArticleForm";
import ArticlesTable from "../components/dashboard/ArticlesTable";


export default function AuthorDashboard() {

  return (
    <div className=" font-Montserrat bg-[#EEE9E1] w-full  ">
 

    
     <ArticlesTable/>
   
    </div>
  );
}
