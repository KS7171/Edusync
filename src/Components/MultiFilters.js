import React, {useEffect, userEffect, useState} from 'react'
import {items} from './items'
import './MultiFilters.css'
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["CS/IT", "LAW", "Mechanical", "Business"];
    
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(selectedFilters.filter((category) => category !== selectedCategory));
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);
  
  const filterItems = () => {
    let tempItems = [...items];
    if (selectedFilters.length > 0) {
      tempItems = tempItems.filter((item) => {
        return selectedFilters.includes(item.category);
      });
    }
    setFilteredItems(tempItems);
  }

  return (
    <div className='Grid-Section'>

        <h3 className='Grid-Header'>We Have All Types Of Specialized Projects</h3>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Pacifico" />
        <br/>
        <br/>
        <div className='buttons-container'>
            {filters.map((category,idx) => (
                <button
                    onClick={() => handleFilterButtonClick(category)}
                    className={`button-round-grid ${selectedFilters.includes(category) ? 'active' : ''}`}
                    key={`filters-${idx}`}
                    >
                        {category}
                    </button>
            ))}
        </div>
        <br/>
        <div layout className='items-container'>
          <AnimatePresence>
            {filteredItems.map((item,idx) => (
                <motion.div className='item' key={Math.floor(1+Math.random() * 10000)}
                layout
                 animate={{opacity: 1}} 
                 inital={{opacity: 0}} 
                 exit={{opacity: 0}} 
                 transition={{duration: 0.2}}  >
                    <img href={item.image}/>
                    <a className='project-link' href='www.google.com'>{item.name}</a>
                    <p className='cat'>{item.category}</p>
                </motion.div>
            ))}
        </AnimatePresence>
        </div>
    </div>
    )
}
