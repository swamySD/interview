import React,{useEffect, useRef, useState} from 'react'
import classes from './MultiSearch.module.css'
import Pill from './Pill'
const MultiSearch = () => {
    const [searchTerm,setSearchTerm]=useState('')
    const [suggestions,setSuggestions]=useState([])
    const [selectedUser,setSelcetedUser]=useState([])
    const [selectedUserSet,setSelectedUserSet]=useState(new Set())
    
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const inputRef=useRef(null)

    useEffect(()=>{
        const fetchUsers=()=>{
            if(searchTerm.trim()===""){
                setSuggestions([])
                return
            }
            fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
            .then((res)=>res.json())
            .then((data)=>setSuggestions(data))
            .catch((error)=>console.log(error))
        }
fetchUsers()
    },[searchTerm])

//newly added code
const handleArrowNavigation = (direction) => {
    const newHighlightedIndex =
      direction === 'up'
        ? Math.max(highlightedIndex - 1, 0)
        : Math.min(highlightedIndex + 1, suggestions?.users?.length - 1);

    setHighlightedIndex(newHighlightedIndex);
  };


const handleSelectUser=(user)=>{
    setSelcetedUser([...selectedUser,user])
    setSelectedUserSet(new Set([...selectedUserSet,user.email]))
    setSearchTerm("")
    setSuggestions([])
    setHighlightedIndex(-1);
    inputRef.current.focus()
}

const handleRemoveUser=(user)=>{
   const updatedUser=selectedUser.filter(selectedUser=>selectedUser.id !== user.id) 
   setSelcetedUser(updatedUser)
   const updatedEmails=new Set(selectedUserSet)
   updatedEmails.delete(user.email)
   setSelectedUserSet(updatedEmails)
}



const handleKeyDown=(e)=>{
if(e.key==="Backspace" && e.target.value===""&& selectedUser.length>0){
    const lastUser=selectedUser[selectedUser.length-1]
    handleRemoveUser(lastUser)
    setSuggestions([])
}
else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault(); // Prevent the cursor from moving in the input field
    handleArrowNavigation(e.key === 'ArrowUp' ? 'up' : 'down');
  }else if (e.key === 'Enter') {
    e.preventDefault(); // Prevent the form from submitting
    if (highlightedIndex !== -1) {
      handleSelectUser(suggestions.users[highlightedIndex]);
    }
}
}

  return (
    <div  className={classes['search-container']}>
      <div className={classes['user-search-input']}>
        {
            selectedUser.map((user)=>{
                return (<Pill key={user.email} image={user.image} text={`${user.firstName} ${user.lastName}`} onClick={()=>handleRemoveUser(user)}/>)
            })
        }
        {/* input filed with search suggestion */}
        <div className={classes['search-input']}>
            <input type='text' value={searchTerm} 
            ref={inputRef} className={classes.input}
            onChange={(e)=>setSearchTerm(e.target.value)} 
            onKeyDown={handleKeyDown}
            placeholder='Search For a user....' />
           
        <ul className={classes['suggestion-list']}>
        {suggestions.users&&suggestions?.users?.map((user,index)=>{
                return !selectedUserSet.has(user.email)&&(
                    <li key={user.email} className={`${classes['suggestion-boxes']} ${
                        highlightedIndex === index ? classes['highlighted'] : ''
                      }` } onClick={()=>handleSelectUser(user)}>
                     <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />   {`${user.firstName} ${user.lastName}`}
                    </li>
                )
            })}
            </ul>
      </div>
        </div>
    </div>
  )
}

export default MultiSearch
