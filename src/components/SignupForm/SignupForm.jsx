import { useState } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

const SignupForm = (props) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState([''])
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf:'',
  })

  const updatedMessage = (msg) => {
    setMessage(msg)
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const isFormInvalid = () => {
    const { username, email, password, passwordConf } = formData
    return !(username && email && password & password === passwordConf)
  }
}