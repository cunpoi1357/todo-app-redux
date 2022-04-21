import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import todoListSlice from './todoListSlice'
import { todoListRemaining } from '../../redux/selector'

import Todo from '../Todo'

export default function TodoList() {
	const [todoName, setTodoName] = useState('')
	const [priority, setPriority] = useState('Medium')

	const todoList = useSelector(todoListRemaining)

	const dispatch = useDispatch()

	const handleTodoNameChange = (e) => setTodoName(e.target.value)

	const handleTodoPriorityChange = (value) => setPriority(value)

	const handleAddTodo = () => {
		dispatch(todoListSlice.actions.addTodo({
			id: uuidv4(),
			name: todoName,
			priority: priority,
			completed: false
		}))
		setTodoName('')
		setPriority('Medium')
	}

	return (
		<Row style={{ height: 'calc(100% - 40px)' }}>
			<Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
				{
					todoList.map(todo => <Todo
						key={todo.id}
						name={todo.name}
						priority={todo.priority}
						id={todo.id}
						completed={todo.completed}
					/>)
				}
			</Col>
			<Col span={24}>
				<Input.Group style={{ display: 'flex' }} compact>
					<Input value={todoName} onChange={handleTodoNameChange} />
					<Select defaultValue="Medium" value={priority} onChange={handleTodoPriorityChange}>
						<Select.Option value='High' label='High'>
							<Tag color='red'>High</Tag>
						</Select.Option>
						<Select.Option value='Medium' label='Medium'>
							<Tag color='blue'>Medium</Tag>
						</Select.Option>
						<Select.Option value='Low' label='Low'>
							<Tag color='gray'>Low</Tag>
						</Select.Option>
					</Select>
					<Button type='primary' onClick={handleAddTodo}>
						Add
					</Button>
				</Input.Group>
			</Col>
		</Row>
	);
}
