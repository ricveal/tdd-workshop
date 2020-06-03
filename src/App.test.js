import React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const initialElements = ['Milk', 'Chocolate', 'Beer']

test('should be a list of items', () => {
  const {getByText} = render(<App />)
  initialElements.forEach((el) => {
    expect(getByText(el)).toBeInTheDocument()
  })
})

test('each item should have a remove link', () => {
  const {getByText} = render(<App />)
  initialElements.forEach((el) => {
    const liElement = getByText(el)
    const buttonElement = liElement.querySelector('button')
    expect(buttonElement.textContent).toBe('Remove')
  })
})

test('when the user clicks on remove link, should this element be removed', async (resolve) => {
  const {getByText, queryByText} = render(<App />)
  const liElement = getByText('Chocolate')
  const buttonElement = liElement.querySelector('button')
  await userEvent.click(buttonElement)
  expect(queryByText('Chocolate')).not.toBeInTheDocument()
  resolve()
})

test('should be an input box with an "add button"', () => {
  // TODO:
})

test('should button be disabled when text is empty', () => {
  // TODO:
})

test('should button be enabled when input has text', () => {
  // TODO:
})

test('when the user clicks on the button, should the item be added to the list', () => {
  // TODO:
})
