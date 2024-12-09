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
}