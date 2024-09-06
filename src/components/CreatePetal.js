import { useState } from 'react'
import PetalItem from './PetalItem.js'
export default function addPetal({
  addPetal,
  petals
}) {
  
  return (
    <>
      <h2>Create A PetaladdPetal</h2>
      <div className='container'>
        <form style={{ width: '100%', position: 'sticky', float: 'left', fontFamily: 'bradleyHand' }}
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            addPetal()
          }}
        >
          <div >
          <label>Enter Petal 1:
        <input 
          type="number" 
          name="petal1" 
          value={petals.petal1} 
          
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 2:
        <input 
          type="number" 
          name="petal2" 
          value={petals.petal2} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 3:
        <input 
          type="number" 
          name="petal3" 
          value={petals.petal3} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 4:
        <input 
          type="number" 
          name="petal4" 
          value={petals.petal4} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 5:
        <input 
          type="number" 
          name="petal5" 
          value={petals.petal5} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 6:
        <input 
          type="number" 
          name="petal6" 
          value={petals.petal6} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 7:
        <input 
          type="number" 
          name="petal7" 
          value={petals.petal7} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 8:
        <input 
          type="number" 
          name="petal8" 
          value={petals.petal8} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 9:
        <input 
          type="number" 
          name="petal9" 
          value={petals.petal9} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 10:
        <input 
          type="number" 
          name="petal10" 
          value={petals.petal10} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 11:
        <input 
          type="number" 
          name="petal11" 
          value={petals.petal11} 
          onChange={addPetal }
        />
        </label>
        <label>Enter Petal 12:
        <input 
          type="number" 
          name="petal12" 
          value={petals.petal12} 
          onChange={addPetal }
        />
        </label>

          </div>
          <button  className='button' type='submit' value='Create PetaladdPetal'>Create</button>
        </form>
        <>
        <PetalItem addPetal={addPetal}/>
            </>
      </div>
      </>



  )
}