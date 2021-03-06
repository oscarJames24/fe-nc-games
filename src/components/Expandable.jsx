import { useState } from 'react'


function Expandable({ children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <button className='Expandable_button'
          onClick={() => {
            setIsOpen((currOpen) => !currOpen);
          }}
        >
          {isOpen ? 'Hide comments' : 'See comments'}
        </button>
        {isOpen ? children : null}
      </>
    );
  }

  export default Expandable