import React, { useState } from 'react'

const Editable = props => {
  const [value, setValue] = useState(props.value)
  const [editing, setEditing] = useState(false)

  const save = () => {
		props.onChange(value)
		setEditing(false)
	}
  const cancel = () => {
    setValue(props.value)
    setEditing(false)
  }
  const edit = () => setEditing(true)

  if (editing)
    return (
      <div>
        <input
					type="text"
					autoFocus={true}
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button onClick={save}>save</button>
        <button onClick={cancel}>cancel</button>
      </div>
    )
  else
    return (
      <div>
        <span>{value}</span>
        <button onClick={edit}>edit</button>
      </div>
    )
}

export default Editable
