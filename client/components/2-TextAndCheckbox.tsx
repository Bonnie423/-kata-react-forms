/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

type Person = {
  name: string
  hobby: string
  isStudent: boolean
}

const emptyPerson: Person = {
  name: '',
  hobby: '',
  isStudent: false,
}

export default function TextAndCheckboxForm() {
  const [list, setList] = useState<Person[]>([])
  const [formState, setFormState] = useState<Person>(emptyPerson)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setList((prevList) => [...prevList, formState])
    // set form back to be empty
    setFormState(emptyPerson)
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, isStudent: !formState.isStudent })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={handleTextChange}
        />

        <label htmlFor="hobby">Hobby:</label>
        <input
          type="text"
          name="hobby"
          id="hobby"
          value={formState.hobby}
          onChange={handleTextChange}
        />

        <label htmlFor="isStudent">Is Student:</label>
        <input
          type="checkbox"
          name="isStudent"
          id="isStudent"
          checked={formState.isStudent}
          onChange={handleCheckboxChange}
        />
        <button>Add Person</button>
      </form>

      <h2 id="list">People: </h2>
      <ul aria-labelledby="list">
        {list.map((person, index) => (
          <li key={index}>
            {person.name} - {person.hobby} -{' '}
            {person.isStudent ? 'Student' : 'Not a student'}
          </li>
        ))}
      </ul>
    </>
  )
}
