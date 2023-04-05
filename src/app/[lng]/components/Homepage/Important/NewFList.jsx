"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  },
  hidden: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.5 }
  }
};
export const AnimatedArticlesList = ({items})=>{
  return <motion.ul>
    {items.map((article,index)=>(
        <motion.li
          key={article.id}
          variants={variants}
          animate="visible"
          initial="hidden"
          exit="exit"
        >{article.title}</motion.li>
    ))}
  </motion.ul>
}