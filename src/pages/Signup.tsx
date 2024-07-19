import React from 'react'

const Signup = () => {
  return (
    <div>
      Signup Page
    </div>
  )
}

export default Signup


// import { Col, DatePicker, Form, Flex, Row, Typography } from 'antd'
// import { Link, useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
// import { AuthPageStyle } from './index.style'
// import Images from '../config/images'
// import { NavDotIcon } from '../components/icons'
// import { Input } from '../components/ant/input'
// import { Button, Select } from '../components/ant'
// import { useAppDispatch, useAppSelector } from '../store'
// import { resetState, signup } from '../store/authSlice'
// import {
//   regexPatterns,
//   validationMessages
// } from '../constants/validationConstants'
// import { notifyError, notifySuccess } from '../utils/notification'

// const { Text, Title } = Typography

// interface SignupFormValues {
//   username: string
//   name: string
//   email: string
//   password: string
//   confirmPassword: string
//   dob: Date
//   gender: string
//   height: string
//   weight: string
// }

// function SignUp() {
//   const navigate = useNavigate()
//   const [form] = Form.useForm()
//   const dispatch = useAppDispatch()
//   const { loading, error, success, message } = useAppSelector(
//     (state) => state.auth
//   )

//   const handleSubmit = (values: SignupFormValues) => {
//     const { confirmPassword, height, weight, ...formData } = values
//     const numericHeight = parseFloat(height)
//     const numericWeight = parseFloat(weight)
//     dispatch(
//       signup({ ...formData, height: numericHeight, weight: numericWeight })
//     )
//   }

//   useEffect(() => {
//     if (error) {
//       notifyError(error)
//     } else if (success) {
//       notifySuccess(message)
//       navigate('/chat')
//     }
//     return () => {
//       dispatch(resetState())
//     }
//   }, [dispatch, navigate, error, success, message])

//   return (
//     <AuthPageStyle>
//       <Row>
//         <Col flex="0 0 41.8%">
//           <div className="leftPanel">
//             <img src={Images.authImg} alt="banner" className="bannerImg" />
//             <Flex className="bannerText" vertical>
//               <Title level={3}>From Small Changes to Big Results</Title>
//               <Text>
//                 At CompassCoach, we focus on transforming habits, not
//                 individuals, through personalized coaching and patented goal
//                 mastery technology, empowering you to achieve lasting wellness
//                 and long-term success.
//               </Text>
//               <NavDotIcon />
//             </Flex>
//           </div>
//         </Col>
//         <Col flex="0 0 58.2%">
//           <Flex className="loginFormContainer" justify="center" align="center">
//             <Flex className="signupForm" vertical gap={30}>
//               <img src={Images.logoIcon} alt="logo" />
//               <Flex vertical>
//                 <Title level={1}>Let’s Get Started</Title>
//                 <Text>For cardio, I would recommend activities like brisk</Text>
//               </Flex>
//               <Form onFinish={handleSubmit} form={form} layout="vertical">
//                 <Form.Item
//                   label="Username"
//                   name="username"
//                   rules={[
//                     {
//                       required: true,
//                       message: ''
//                     },
//                     {
//                       pattern: regexPatterns.USERNAME,
//                       message: validationMessages.USERNAME
//                     }
//                   ]}
//                 >
//                   <Input placeholder="E.g. Johndoe234" />
//                 </Form.Item>
//                 <Row gutter={[20, 0]}>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Name"
//                       name="name"
//                       rules={[
//                         {
//                           required: true,
//                           message: ''
//                         }
//                       ]}
//                     >
//                       <Input placeholder="E.g. John doe" />
//                     </Form.Item>
//                   </Col>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Email"
//                       name="email"
//                       rules={[
//                         {
//                           required: true,
//                           message: ''
//                         }
//                       ]}
//                     >
//                       <Input placeholder="E.g. johndoe@gmail.com" />
//                     </Form.Item>
//                   </Col>
//                 </Row>
//                 <Row gutter={[20, 0]}>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Password"
//                       name="password"
//                       rules={[
//                         {
//                           required: true,
//                           message: ''
//                         },
//                         {
//                           pattern: regexPatterns.PASSWORD,
//                           message: validationMessages.PASSWORD
//                         }
//                       ]}
//                     >
//                       <Input.Password placeholder="Enter Password" />
//                     </Form.Item>
//                   </Col>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Confirm Password"
//                       name="confirmPassword"
//                       dependencies={['password']}
//                       rules={[
//                         {
//                           required: true,
//                           message: ''
//                         },
//                         {
//                           pattern: regexPatterns.PASSWORD,
//                           message: validationMessages.PASSWORD
//                         },
//                         ({ getFieldValue }) => ({
//                           validator(_, value) {
//                             if (!value || getFieldValue('password') === value) {
//                               return Promise.resolve()
//                             }
//                             return Promise.reject(
//                               new Error('The two passwords do not match!')
//                             )
//                           }
//                         })
//                       ]}
//                     >
//                       <Input.Password placeholder="Re-enter password" />
//                     </Form.Item>
//                   </Col>
//                 </Row>
//                 <Row gutter={[20, 0]}>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Date of Birth"
//                       name="dob"
//                       rules={[
//                         {
//                           required: true,
//                           message: ''
//                         }
//                       ]}
//                     >
//                       <DatePicker
//                         className="w-full"
//                         format="MM-DD-YYYY"
//                         placeholder="Select date of birth"
//                       />
//                     </Form.Item>
//                   </Col>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Gender"
//                       name="gender"
//                       rules={[
//                         {
//                           required: true,
//                           message: ''
//                         }
//                       ]}
//                     >
//                       <Select
//                         placeholder="Select gender"
//                         options={[
//                           { value: 'male', label: 'Male' },
//                           { value: 'female', label: 'Female' },
//                           { value: 'others', label: 'Others' }
//                         ]}
//                       />
//                     </Form.Item>
//                   </Col>
//                 </Row>
//                 <Row gutter={[20, 0]}>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Weight (lb)"
//                       name="weight"
//                       rules={[
//                         {
//                           required: true,
//                           message: ''
//                         },
//                         {
//                           pattern: regexPatterns.WEIGHT,
//                           message: validationMessages.WEIGHT
//                         }
//                       ]}
//                     >
//                       <Input placeholder="E.g. 123" type="number" />
//                     </Form.Item>
//                   </Col>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Height (ft)"
//                       name="height"
//                       rules={[
//                         {
//                           required: true,
//                           message: ''
//                         },
//                         {
//                           pattern: regexPatterns.HEIGHT,
//                           message: validationMessages.HEIGHT
//                         }
//                       ]}
//                     >
//                       <Input placeholder="E.g. 6.7" type="number" />
//                     </Form.Item>
//                   </Col>
//                 </Row>

//                 <Form.Item>
//                   <Button
//                     block
//                     type="primary"
//                     htmlType="submit"
//                     disabled={loading}
//                   >
//                     {loading ? 'Signing Up...' : ''}
//                     Sign Up
//                   </Button>
//                 </Form.Item>
//                 {/* {message && <Text type="warning">{message}</Text>} */}
//                 {/* {error && <Text type="danger">Error</Text>} */}
//                 {/* {success && <Text type="success">Sign Up Successful!</Text>} */}
//                 <Flex justify="center">
//                   <Text className="linkText">
//                     Already have an account ? <Link to="/login">Login</Link>
//                   </Text>
//                 </Flex>
//               </Form>
//             </Flex>
//             <Flex justify="center" className="copyrightText">
//               <Text className="linkText">
//                 © 2024 CompassCoachGPT, all right reserved{' '}
//                 <Link to="/signup">Terms & conditions</Link>
//                 <Link to="/signup">Privacy policy</Link>
//               </Text>
//             </Flex>
//           </Flex>
//         </Col>
//       </Row>
//     </AuthPageStyle>
//   )
// }

// export default SignUp
