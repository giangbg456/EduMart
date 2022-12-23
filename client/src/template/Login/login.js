import {InputForm, Button} from '../../component'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const { isLoggedIn } = useSelector(state => state.auth)
  const [isRegister, setIsRegister] = useState(false)
  const [invalidFields, setInvalidFields] = useState([])

  const [payload, setPayload] = useState({
    phone: '',
    password: '',
    name: ''
  })

  useEffect(() => {
    isLoggedIn && navigate('/account')
  }, [isLoggedIn])

  const handleSubmit = async () => {
    let finalPayload = isRegister ? payload : {
      phone: payload.phone,
      password: payload.password
    }
    let invalids = validate(finalPayload)
    if( invalids === 0) isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload))
  }

  //validate
  const validate = (payload) => {
    let invalids = 0
    let fields = Object.entries(payload)
    fields.forEach(item => {
        if (item[1] === '') {
            setInvalidFields(prev => [...prev, {
                name: item[0],
                message: 'Field is required!'
            }])
            invalids++
        }
    })
    fields.forEach(item => {
        switch (item[0]) {
            case 'password':
                if (item[1].length < 6) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Password length must be atleast 6 characters!'
                    }])
                    invalids++
                }
                break;
            case 'phone':
                if (!+item[1]) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Phone is number!'
                    }])
                    invalids++
                }
                break

            default:
                break;
        }
    })
    return invalids
}

    return (
      <div className="my-12 border border-default mx-auto w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
        <h3 className="font-semibold text-3xl mb-3 text-center">
          { isRegister ? 'Create Account' : 'Login'}
        </h3>
        <div className="w-full flex flex-col gap-5">
          { isRegister && <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Name'} value={payload.name} setValue={setPayload} type={'name'} /> }
          
          <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Phone Number'} value={payload.phone} setValue={setPayload} type={'phone'} />
          <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Password'} value={payload.password} setValue={setPayload} type={'password'} />
          <Button
            text= {isRegister ? 'Create Account' : 'Login'}
            bgColor='bg-primary'
            textColor='text-white'
            fullWidth
            onClick={ handleSubmit }
          />
        </div>
        <div className='mt-7 flex items-center justify-between'>
          {
            isRegister ? 
            <small>
              <span onClick={() => {
                  setIsRegister(false)
                  setPayload({
                      phone: '',
                      password: '',
                      name: ''
                  })
              }} className="text-blue hover:text-red hover:underline cursor-pointer">I already have an account</span>
            </small>
            : <>
              <small className="text-blue hover:text-red hover:underline cursor-pointer">Fogot Your Password</small>
              <small onClick={() => {
                setIsRegister(true)
                setPayload({
                    phone: '',
                    password: '',
                    name: ''
                })
            }} className="text-blue hover:text-red hover:underline cursor-pointer">Create Account</small>
            </>
          }
        </div>
      </div>
    )
}

export default Login