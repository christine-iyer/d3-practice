export default function createPetal({
  createPetal,
  petal,
  handleChange
}) {
  
  return (
    <>
      <h2>Create A PetalcreatePetal</h2>
      <div className='container'>
        <form style={{ width: '100%', position: 'sticky', float: 'left', fontFamily: 'bradleyHand' }}
          className='form'
          onSubmit={(e) => {
            e.preventDefault()
            createPetal()
          }}
        >
          <div >
          <label>Enter Petal 1:
        <input 
          type="number" 
          name="petal1" 
          value={petal.petal1 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 2:
        <input 
          type="number" 
          name="petal2" 
          value={petal.petal2 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 3:
        <input 
          type="number" 
          name="petal3" 
          value={petal.petal3 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 4:
        <input 
          type="number" 
          name="petal4" 
          value={petal.petal4 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 5:
        <input 
          type="number" 
          name="petal5" 
          value={petal.petal5 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 6:
        <input 
          type="number" 
          name="petal6" 
          value={petal.petal6 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 7:
        <input 
          type="number" 
          name="petal7" 
          value={petal.petal7 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 8:
        <input 
          type="number" 
          name="petal8" 
          value={petal.petal8 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 9:
        <input 
          type="number" 
          name="petal9" 
          value={petal.petal9 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 10:
        <input 
          type="number" 
          name="petal10" 
          value={petal.petal10 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 11:
        <input 
          type="number" 
          name="petal11" 
          value={petal.petal11 || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Petal 12:
        <input 
          type="number" 
          name="petal12" 
          value={petal.petal12 || ""} 
          onChange={handleChange}
        />
        </label>

          </div>
          <button  className='button' type='submit' value='Create PetalcreatePetal'>Create</button>
        </form>
      </div>


    </>
  )
}